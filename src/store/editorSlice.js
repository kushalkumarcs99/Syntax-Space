import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: '',
  language: 'javascript',
  appTheme: 'vs-dark',
  editorTheme: 'vs-dark',
  fontSize: 14,
  input: '',
  output: '',
  isLoading: false,
  error: null,
  languageOptions: [
    { id: 'cpp', name: 'C++', monacoId: 'cpp' },
    { id: 'java', name: 'Java', monacoId: 'java' },
    { id: 'javascript', name: 'JavaScript', monacoId: 'javascript' },
    { id: 'python', name: 'Python', monacoId: 'python' },
    { id: 'csharp', name: 'C#', monacoId: 'csharp' }
  ],
  themeOptions: [
    { id: 'vs-dark', name: 'Visual Studio Dark' },
    { id: 'oceanic-next', name: 'Oceanic Next' },
    { id: 'active4d', name: 'Active 4D' },
    { id: 'amy', name: 'Amy' },
    { id: 'clouds-midnight', name: 'Clouds Midnight' },
    { id: 'dracula', name: 'Dracula' },
    { id: 'monokai', name: 'Monokai' },
    { id: 'github', name: 'GitHub' },
    { id: 'solarized-dark', name: 'Solarized Dark' },
    { id: 'solarized-light', name: 'Solarized Light' }
  ],
  fontSizeOptions: [12, 14, 16, 18, 20, 22, 24],
  defaultCode: {
    javascript: '// Write your JavaScript code here\nconsole.log("Hello, World!");',
    python: '# Write your Python code here\nprint("Hello, World!")',
    cpp: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    csharp: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}'
  }
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.code = state.defaultCode[action.payload] || '';
    },
    setTheme: (state, action) => {
      state.appTheme = action.payload;
    },
    setEditorTheme: (state, action) => {
      state.editorTheme = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setCode,
  setLanguage,
  setTheme,
  setEditorTheme,
  setFontSize,
  setInput,
  setOutput,
  setLoading,
  setError
} = editorSlice.actions;

export default editorSlice.reducer; 