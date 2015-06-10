import React from 'react';
import { Grid, Cell, optimizedResize, findBreakpoints, findMatch, portable } from 'react-flexr';
import StyleSheet from 'stilr';
import Header from './header.component';
import Divider from './divider.component';


if (process.env.NODE_ENV !== 'production') {
  var stylesheet = document.createElement('style');
  document.head.appendChild(stylesheet);
  var autoprefixer = require( 'autoprefixer-core' );
  var postcss = require( 'postcss' );
}

const styles = StyleSheet.create({
  row: {
    maxWidth: 1024,
    margin: '0 auto',
    paddingTop: '10em',
    paddingBottom: '10em',
    [portable]: {
      paddingTop: '5em',
      paddingBottom: '5em'
    }
  },
  alignRight: {
    textAlign: 'right'
  },
  alignCenter: {
    textAlign: 'center'
  },
  dividerContainer: {
    perspective: 200,
    height: 100,
    marginBottom: -100
  },
  divider: {
    height: '.25em',
    background: 'linear-gradient(90deg, white, #E7B5C2)',
    transform: 'rotateY(-15deg)',
    marginTop: '10em',
    marginLeft: '-50%',
    position: 'relative'
  },
  screenshot: {
    maxWidth: '100%',
    boxShadow: '0 0.5em 1.5em rgba(65, 65, 65, 0.35)',
    marginTop: '2em',
    marginBottom: '2em'
  },
  aboutImage: {
    paddingTop: '2em',
    display: 'block',
    margin: '0 auto'
  },
  apply: {
    display: 'inline-block',
    marginTop: '3em',
    fontSize: '2em',
    fontWeight: 100,
    textTransform: 'uppercase',
    borderRadius: '20em',
    boxShadow: '0 5px 0px #EBB4BF',
    backgroundColor: '#4FD1D4',
    padding: '1em',
    textDecoration: 'none',
    color: 'white',
    position: 'relative',
    ':hover': {
      bottom: -2,
      boxShadow: '0 3px 0px #EBB4BF'
    },
    ':focus': {
      bottom: -4,
      boxShadow: '0 1px 0px #EBB4BF'
    }
  }
});

class App extends React.Component {

  componentDidMount() {
    optimizedResize.init( () => {
      if ( findBreakpoints() ) {
        this.forceUpdate();
      }
    });
  }

  render() {
    if (process.env.NODE_ENV !== 'production') {
      const prefixedCSS = postcss(autoprefixer()).process( StyleSheet.render() ).css;
      stylesheet.textContent = prefixedCSS;
    }

    const isPortable = findMatch('portable');

    return (
      <div className={ styles.container }>
        <Header tagline='Job Opening'>
          Fullstack JavaScript Developer
        </Header>

        <Grid className={ styles.row } align='center' hAlign='center'>
          <Cell size='1/1'>
            <h2 className={ styles.alignCenter }>About Kodyl</h2>
          </Cell>
          <Cell grow={ false }>
            <p>
              We are a <strong>fast growing startup based in Aarhus</strong>, Denmark, creating services for tenants and landlords.
              The company is two years old, but the team behind has been working in the field for more than four years.
              We are a small but <strong>very dedicated team that takes pride in what we do</strong>, and we expect you to do the same
              - we are, on the other hand, very confident that you will love our team and the way we work.
            </p>
            <p>
              <strong>We love JavaScript</strong> (plain vanilla JavaScript!), microservices, open source and bleeding edge technologies.
              All of our services is built around a bunch of REST APIs, and because <strong>we use JavaScript in all of our stack</strong>,
              we all know what happens in the code and we are all able to work in every corner of the organisation.
            </p>
            <p>
              Among our services, which are used by more than 100.000 users on a monthly basis,
              you'll find <strong><a href='http://www.akutbolig.dk' target='_blank'>AkutBolig.dk</a></strong>,
              a danish portal for rental housing and
              <strong><a href='http://www.boligbesked.dk' target='_blank'>Boligbesked.dk</a></strong>,
              a push communication service for people looking for a rental home.
            </p>
          </Cell>
          <Cell size='1/1'>
            <img src='images/javascript.png' width='160' className={ styles.aboutImage }/>
          </Cell>
        </Grid>

        <Divider reverse={ true }/>

        <Grid className={ styles.row } align='center' hAlign='left'>
          <Cell grow={ false } portable='1/1'>
            <h2 className={ isPortable ? styles.alignCenter : ''}>Qualifications</h2>
            <p>
              The most important qualification is a <strong>deep knowledge of and hopefully a lot of practical experience with JavaScript</strong>
              (or should we say ECMAScript? Yes, we are using - and loving - both ES6 and ES7 in our projects).
            </p>
            <p>
              The second most important qualification is the <strong>ability to learn</strong>.
              We are moving fast together with the community around JavaScript,
              and that stack we used last month might not be the same as the one we are going to use next month.
            </p>
          </Cell>
          <Cell
            className={ isPortable ? styles.alignCenter : ''}
            align='center' portable='1/1'>
            <img src='images/term.png' className={ styles.screenshot } />
          </Cell>
        </Grid>

        <Grid className={ styles.row } align='center' hAlign={ isPortable ? 'center' : 'right'}>
          <Cell
            className={ isPortable ? styles.alignCenter : ''}
            desk='1/4' grow={ isPortable ? true : false }>
            <img src='images/nodejs-light.svg' width='200'/>
          </Cell>
          <Cell
            className={ isPortable ? styles.alignCenter : ''}
            desk='1/4' grow={ isPortable ? true : false }>
            <img src='images/react.svg' width='200'/>
          </Cell>
          <Cell portable='1/1' className={ isPortable ? '' : styles.alignRight }>
            <h2 className={ isPortable ? styles.alignCenter : ''}>
              Node.js + React
            </h2>
            <p>
              Our services and microservices run on Node.js (and io.js) and we power our client-side code with React.
              The <strong>development is test-driven</strong>, and we always use and contribute to the <strong>latest open source modules</strong>
              and <strong>best practices from the community</strong>.
            </p>
            <p>
              From time to time, an <strong>open source module from Kodyl</strong> is released in to the wild.
              Lately we have created <a href='//github.com/kodyl/react-document-meta' target='_blank'>react-document-meta</a> to help handle HTML meta tags,
              <a href='//github.com/kodyl/stilr' target='_blank'>stilr</a> which make it easy and production friendly to work with CSS and styling inside your JS,
              and <a href='//github.com/kodyl/react-flexr' target='_blank'>react-flexr</a> making flexbox grids in React simple - just to mention some.
            </p>
          </Cell>
        </Grid>

        <Divider reverse={ false }/>

        <Grid className={ styles.row } align='center' hAlign='center'>
          <Cell grow={ false }>
            <h2 className={ styles.alignCenter }>About the Job</h2>
            <p>
              Kodyl offers a <strong>challenging job as fullstack JavaScript developer</strong> at our office in Aarhus,
              with lots of space for <strong>personal development</strong>.
              You will get a <strong>competitive salary</strong> based on your qualifications,
              and you will be able to <strong>work on open source projects</strong> in your working hours.
            </p>
            <p>
              We have a lot of great ideas waiting for a dedicated fullstack developer to show them some love - and in return,
              you will get the opportunity to influence the way tenants and landloads find each other in the years to come.
            </p>
            <p>
              If all - or just some - of the above sounds interesting, we would love to get in touch!
            </p>

            <div className={ styles.alignCenter }>
              <a className={ styles.apply } href='mailto:daniel@boligbesked.com'>Get in Touch</a><br />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
