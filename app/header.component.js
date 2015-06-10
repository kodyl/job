import React from 'react';
import { Grid, Cell, palm } from 'react-flexr';
import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  container: {
    opacity: 0,
    transition: 'opacity 1s',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #EBB4BF, #D9E1FB)',
    paddingTop: '10em',
    paddingBottom: '10em',
    color: 'white',
    position: 'relative',
    fontSize: '1em',
    ':after': {
      content: '""',
      backgroundImage: 'url(images/skyline.jpg)',
      backgroundSize: 'cover',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      opacity: .05
    },
    [palm]: {
      fontSize: '.75em'
    }
  },
  mounted: {
    opacity: 1
  },
  header: {
    fontWeight: 100,
    zIndex: 10,
    margin: 0
  },
  tagline: {
    fontSize: '2em'
  }
});

class Header extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    tagline: React.PropTypes.string
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      mounted: true
    }), 10);
  }

  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };
  }

  render() {
    const classes = [
      styles.container,
      this.state.mounted
        ? styles.mounted
        : null
    ].filter(Boolean).join(' ');

    return (
      <Grid className={ classes } align='center' hAlign='center'>
        <Cell style={{ zIndex: 1 }}>
          <h1 className={ styles.header }>{ this.props.children }</h1>
          <h2 className={ styles.tagline }>{ this.props.tagline }</h2>
        </Cell>
      </Grid>
    );
  }
}

export default Header;
