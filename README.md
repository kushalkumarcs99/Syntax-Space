# CodeCraft IDE

A modern, feature-rich online code editor built with React and Monaco Editor.

## Features

- 🎨 Beautiful, modern UI with light/dark theme support
- 📝 Monaco Editor integration with syntax highlighting and auto-completion
- 🔄 Support for multiple programming languages (C++, Java, JavaScript, Python, C#)
- 🎯 Code execution using Judge0 API
- ⚡ Custom test case input support
- 🎭 Customizable font size and theme
- 📱 Responsive design

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your RapidAPI key:
   ```
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   ```
   Get your API key from [Judge0 CE on RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce/)

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Select your preferred programming language from the dropdown
2. Write your code in the editor
3. (Optional) Add custom input in the input panel
4. Click "Run Code" to execute
5. View the output or any errors in the output panel

## Technologies Used

- React
- Monaco Editor
- Tailwind CSS
- Zustand (State Management)
- Judge0 API (Code Execution)
- Headless UI (UI Components)
- Hero Icons

## Contributing

Feel free to open issues and pull requests!
