import React from 'react';
import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  dividerContainer: {
    perspective: 200,
    height: 100,
    marginBottom: -100
  },
  divider: {
    height: '.25em',
    marginTop: '10em',
    position: 'relative',
    boxShadow: '0 5px 0 2px rgba(193, 254, 230, 0.75), 0 19px 0 2px rgba(0, 216, 255, 0.05)',
    borderBottom: '3px solid white'
  },
  normal: {
    marginLeft: '-50%',
    background: 'linear-gradient(90deg, white, #4FD1D4)',
    transform: 'rotateY(-15deg)'
  },
  reverse: {
    marginRight: '-50%',
    background: 'linear-gradient(90deg, #4FD1D4, white)',
    transform: 'rotateY(15deg)'
  }
});

class Divider extends React.Component {
  static propTypes = {
    reverse: React.PropTypes.bool
  }

  render() {
    const classes = [
      styles.divider,
      this.props.reverse ? styles.reverse : styles.normal
    ].join(' ');

    return (
      <div className={ styles.dividerContainer }>
        <div className={ classes } />
      </div>
    );
  }
}

export default Divider;
