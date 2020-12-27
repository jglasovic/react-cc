import React from 'react';
import EventEmmiter from './EventEmmiter';
import ColorContainer from './ColorContainer';

class ColorConsumer extends React.Component {
  eventEmmiter = EventEmmiter;
  colorsContainer = ColorContainer;

  componentDidMount() {
    this.eventEmmiter.addListener('GET:COLORS:REQUEST', this.updateData);
    this.eventEmmiter.addListener('GET:COLORS:SUCCESS', this.updateData);
    this.eventEmmiter.addListener('GET:COLORS:FAIL', this.updateData);
  }

  componentWillUnmount() {
    this.eventEmmiter.removeListener('GET:COLORS:REQUEST');
    this.eventEmmiter.removeListener('GET:COLORS:SUCCESS');
    this.eventEmmiter.removeListener('GET:COLORS:FAIL');
  }
  updateData = () => this.forceUpdate();
  render() {
    const colors = this.colorsContainer.colors;
    const loading = this.colorsContainer.loading;
    const error = this.colorsContainer.error;
    return this.props.children({
      colors,
      loading,
      error
    });
  }
}
export default ColorConsumer;
