import EventEmmiter from './EventEmmiter';
import ColorContainer from './ColorContainer';

class ColorService {
  emiterService = EventEmmiter;
  colorContainer = ColorContainer;

  getColors = async () => {
    try {
      this.colorContainer.loading = true;
      this.emiterService.emit('GET:COLORS:REQUEST');
      const data = await fetch('http://www.colr.org/json/colors/random/7');
      const result = await data.json();
      this.colorContainer.colors = result.colors;
      this.colorContainer.loading = false;
      this.emiterService.emit('GET:COLORS:SUCCESS');
    } catch (err) {
      this.colorContainer.error = err;
      this.colorContainer.loading = false;
      this.emiterService.emit('GET:COLORS:FAIL');
    }
  };
}

export default ColorService;
