const theme = {
  pallet: {
    background: '#F8F8FB',
    elementsBg: '#FFF',
    common: {
      white: '#F8F8FB',
      grey: '#F1F1F3',
      black: '#333333',
      black2: '#141625'
    },
    stroke: '#8F95BE',
    darkPurple: '#7D4787',
    blue: '#434371',
    orange: '#FAB252',
    lightOrange: '#FFD9A7',
    lightBlue: '#DFE3FA'
  },
  shadow: 'box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25)'
};

const darkTheme = {
  ...theme,
  pallet: {
    ...theme.pallet,
    background: '#141625',
    elementsBg: '#393E60',
  }
};

export { theme, darkTheme }