export const editorThemes = {
  'oceanic-next': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '65737e' },
      { token: 'keyword', foreground: 'c594c5' },
      { token: 'string', foreground: '99c794' },
      { token: 'number', foreground: 'f99157' },
      { token: 'operator', foreground: '5fb3b3' }
    ],
    colors: {
      'editor.background': '#1B2B34',
      'editor.foreground': '#CDD3DE',
      'editor.lineHighlightBackground': '#65737E15',
      'editor.selectionBackground': '#4F5B66',
      'editorCursor.foreground': '#C594C5'
    }
  },
  'active4d': {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '999999' },
      { token: 'keyword', foreground: '0000ff', fontStyle: 'bold' },
      { token: 'string', foreground: '666666' },
      { token: 'number', foreground: '000000' }
    ],
    colors: {
      'editor.background': '#FFFFFF',
      'editor.foreground': '#000000',
      'editor.lineHighlightBackground': '#00000012'
    }
  },
  'amy': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '7C7C7C' },
      { token: 'keyword', foreground: 'FFB454' },
      { token: 'string', foreground: '95E454' },
      { token: 'number', foreground: '87CFD7' }
    ],
    colors: {
      'editor.background': '#200020',
      'editor.foreground': '#D0D0D0',
      'editor.lineHighlightBackground': '#80000040',
      'editor.selectionBackground': '#80000080'
    }
  },
  'clouds-midnight': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '969896' },
      { token: 'keyword', foreground: 'CC7833' },
      { token: 'string', foreground: '8F9D6A' },
      { token: 'number', foreground: 'CF6A4C' }
    ],
    colors: {
      'editor.background': '#191919',
      'editor.foreground': '#929292',
      'editor.lineHighlightBackground': '#00000059',
      'editor.selectionBackground': '#000000'
    }
  },
  'dracula': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6272A4' },
      { token: 'keyword', foreground: 'FF79C6' },
      { token: 'string', foreground: 'F1FA8C' },
      { token: 'number', foreground: 'BD93F9' }
    ],
    colors: {
      'editor.background': '#282A36',
      'editor.foreground': '#F8F8F2',
      'editor.lineHighlightBackground': '#44475A',
      'editor.selectionBackground': '#44475A'
    }
  },
  'monokai': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '75715E' },
      { token: 'keyword', foreground: 'F92672' },
      { token: 'string', foreground: 'E6DB74' },
      { token: 'number', foreground: 'AE81FF' }
    ],
    colors: {
      'editor.background': '#272822',
      'editor.foreground': '#F8F8F2',
      'editor.lineHighlightBackground': '#3E3D32',
      'editor.selectionBackground': '#49483E'
    }
  },
  'github': {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '999988' },
      { token: 'keyword', foreground: '000000', fontStyle: 'bold' },
      { token: 'string', foreground: 'DD1144' },
      { token: 'number', foreground: '009999' }
    ],
    colors: {
      'editor.background': '#FFFFFF',
      'editor.foreground': '#000000',
      'editor.lineHighlightBackground': '#F5F5F5',
      'editor.selectionBackground': '#B4D5FE'
    }
  },
  'solarized-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '657B83' },
      { token: 'keyword', foreground: '859900' },
      { token: 'string', foreground: '2AA198' },
      { token: 'number', foreground: 'D33682' }
    ],
    colors: {
      'editor.background': '#002B36',
      'editor.foreground': '#839496',
      'editor.lineHighlightBackground': '#073642',
      'editor.selectionBackground': '#073642'
    }
  },
  'solarized-light': {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '93A1A1' },
      { token: 'keyword', foreground: '859900' },
      { token: 'string', foreground: '2AA198' },
      { token: 'number', foreground: 'D33682' }
    ],
    colors: {
      'editor.background': '#FDF6E3',
      'editor.foreground': '#657B83',
      'editor.lineHighlightBackground': '#EEE8D5',
      'editor.selectionBackground': '#EEE8D5'
    }
  }
}; 