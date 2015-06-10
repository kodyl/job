BIN = ./node_modules/.bin
PATH := $(BIN):$(PATH)

PRODUCTION_ENV = NODE_ENV=production

define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
	git flow release start $$NEXT_VERSION && \
	make build && \
	npm --no-git-tag-version version $(1) && \
	git add . && \
	git commit -m 'make build and release' && \
	git flow release finish -m $$NEXT_VERSION $$NEXT_VERSION
endef

install:
	npm $@

clean:
	@ find ./build/* -not -path '*.git*' | xargs rm -rf

webpack:
	@ ${PRODUCTION_ENV} $(BIN)/webpack --progress --config webpack.config.js

assets:
	@ cp -r ./app/images ./build/images & cp ./app/index.html ./build

extract-styles:
	@${PRODUCTION_ENV} node -p "require('./utils/extract-styles.js')()" >> ./build/bundle.css

render-index:
	@ CONTENT=`${PRODUCTION_ENV} node -p "require('./utils/render-app.js')()"` && \
	APPCONTENT="<main id='root'>$$(echo $$CONTENT | sed -e 's/\\/\\\\/g' -e 's/\//\\\//g' -e 's/&/\\\&/g')<\/main>" && \
	STYLES="$$(cat ./build/bundle.css | sed -e 's/\\/\\\\/g' -e 's/\//\\\//g' -e 's/&/\\\&/g')" && \
	cat app/index.html \
		| sed \
			-e "s/<main id='root'><\/main>/$$APPCONTENT/" \
			-e "s/<link rel='stylesheet' href='bundle.css' \/>/<style type='text\/css' media='screen'>$$STYLES<\/style>/" \
		> build/index.html

build: clean webpack assets extract-styles render-index

start:
	@ node server.js

release-patch:
	$(call release,patch)

release-minor:
	$(call release,minor)

release-major:
	$(call release,major)

publish:
	git push --tags && \
	git push origin production && \
	git push && \
	cd build && \
	git add . && \
	git commit -m 'update gh-pages' && \
	git push origin gh-pages

.PHONY: install build start release-patch release-minor release-major publish
