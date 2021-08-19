export interface StyleClosetTheme {
  colors: {
    main: string;
    content: string;
    helper: string;
  };
  fontFamily: {
    mainFont: string;
    specialFont: string;
  };
  fontType: {
    serif: string;
    cursive: string;
  };
  fontWeight: {
    XS: number;
    S: number;
    XM: number;
    M: number;
    XL: number;
    L: number;
  };
  fontSize: {
    XXS: string;
    XS: string;
    S: string;
    M: string;
  };
}

export const theme: StyleClosetTheme = {
  colors: {
    main: '#C3C6CD',
    content: '#F8FBFF',
    helper: '#36CBEF',
  },
  fontFamily: {
    mainFont: `Encode Sans SC`,
    specialFont: 'Shadows Into Light',
  },
  fontType: {
    serif: 'sans-serif',
    cursive: 'cursive',
  },
  fontWeight: {
    XS: 300,
    S: 400,
    XM: 500,
    M: 600,
    XL: 700,
    L: 800,
  },
  fontSize: {
    XXS: '0.7em',
    XS: '1em',
    S: '1.6em',
    M: '2em',
  },
};
