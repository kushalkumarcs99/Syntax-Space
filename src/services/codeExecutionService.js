import axios from 'axios';

const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com';
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const languageIds = {
  cpp: 54,      // C++ (GCC 9.2.0)
  java: 62,     // Java (OpenJDK 13.0.1)
  javascript: 63, // JavaScript (Node.js 12.14.0)
  python: 71,   // Python (3.8.1)
  csharp: 51,   // C# (Mono 6.6.0.161)
};

const headers = {
  'content-type': 'application/json',
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
  'X-RapidAPI-Key': RAPIDAPI_KEY,
};

export const executeCode = async (sourceCode, language, stdin = '') => {
  if (!RAPIDAPI_KEY) {
    throw new Error('RapidAPI key is not configured. Please add VITE_RAPIDAPI_KEY to your .env file.');
  }

  try {
    // Submit the code
    const submission = await axios.post(`${JUDGE0_API_URL}/submissions`, {
      source_code: sourceCode,
      language_id: languageIds[language],
      stdin: stdin,
    }, { headers });

    const token = submission.data.token;

    // Poll for results
    let result;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
      const response = await axios.get(
        `${JUDGE0_API_URL}/submissions/${token}`,
        { headers }
      );

      if (response.data.status.id <= 2) {
        // Status 1-2: In Queue/Processing
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts++;
        continue;
      }

      result = response.data;
      break;
    }

    if (!result) {
      throw new Error('Execution timed out');
    }

    // Check for compilation/runtime errors
    if (result.status.id === 6) {
      return {
        error: result.compile_output || 'Compilation error',
      };
    }

    if (result.status.id !== 3) {
      return {
        error: result.status.description || 'Execution failed',
      };
    }

    // Return successful output
    return {
      output: result.stdout || '',
      error: result.stderr || null,
    };

  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error(error.message || 'Failed to execute code');
  }
}; 