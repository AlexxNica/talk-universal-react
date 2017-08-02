import createTheme from 'spectacle/lib/themes/default';

import images from 'images';

const colors = {
  primary: '#3F65A3',
  secondary: '#FFFFFF',
  tertiary: '#4AE0E2',
  quartenary: '#CECECE',
};

const fonts = {
  primary: 'Montserrat',
  secondary: 'Playfair Display',
};

export const backgroundWithImage = {
  backgroundImage: `url(${images.background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const boldedTertiary = {
  color: colors.tertiary,
  fontWeight: 'bold',
};

export const theme = createTheme(colors, fonts);