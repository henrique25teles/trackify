import ThemeViewModel from '../../models/Themes/ThemeViewModel';
import ColorScheme from '../../models/Themes/ColorSchemeViewModel';

const LightBlue = new ThemeViewModel({
  Name: String('LightBlue'),
  IsDeletable: false,
  IsSelected: true,
  ColorScheme: new ColorScheme({
    primaryColor: String('#4096db'),
    defaultColor: String('#fafafa'),
    defaultColorSecondary: String('#d4d3cf'),
    warningColor: String('#ede35a'),
    dangerColor: String('#f0170c'),
  }),
});

const DarkRed = new ThemeViewModel({
  Name: String('DarkRed'),
  IsDeletable: false,
  IsSelected: false,
  ColorScheme: new ColorScheme({
    primaryColor: String('#9c243e'),
    defaultColor: String('#d4d3cf'),
    defaultColorSecondary: String('#fafafa'),
    warningColor: String('#ede35a'),
    dangerColor: String('#fafafa'),
  }),
});

export {LightBlue, DarkRed};
