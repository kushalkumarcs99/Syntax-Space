import { Menu } from "@headlessui/react";
import { PlayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  setLanguage,
  setLoading,
  setOutput,
  setError,
  setEditorTheme,
} from "../store/editorSlice";
import { executeCode } from "../services/codeExecutionService";

export default function Controls() {
  const dispatch = useDispatch();
  const {
    code,
    language,
    languageOptions,
    isLoading,
    input,
    editorTheme,
    themeOptions,
  } = useSelector((state) => state.editor);

  const currentLanguage = languageOptions.find((lang) => lang.id === language);
  const currentTheme = themeOptions.find((t) => t.id === editorTheme);

  const handleRunCode = async () => {
    dispatch(setLoading(true));
    dispatch(setOutput(""));
    dispatch(setError(null));

    try {
      const result = await executeCode(code, language, input);
      if (result.error) {
        dispatch(setError(result.error));
      } else {
        dispatch(setOutput(result.output));
      }
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      {/* Language Selector */}
      <Menu as="div" className="relative">
        <Menu.Button className="btn btn-secondary flex items-center">
          <span>{currentLanguage?.name || "Select Language"}</span>
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Menu.Button>
        <Menu.Items
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg border focus:outline-none z-50 
                       bg-white border-gray-200 text-gray-700 
                       dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
        >
          <div className="py-1">
            {languageOptions.map((lang) => (
              <Menu.Item key={lang.id}>
                {({ active }) => (
                  <button
                    onClick={() => dispatch(setLanguage(lang.id))}
                    className={`w-full text-left px-4 py-2 text-sm
                        ${
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                            : ""
                        }`}
                  >
                    {lang.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>

      {/* Run Button */}
      <button
        className="btn btn-primary flex items-center"
        onClick={handleRunCode}
        disabled={isLoading}
      >
        <PlayIcon className="w-4 h-4 mr-2" />
        {isLoading ? "Running..." : "Run Code"}
      </button>

      {/* Theme Selector */}
      <Menu as="div" className="relative">
        <Menu.Button className="btn btn-secondary flex items-center">
          <span>{currentTheme?.name || "Select Theme"}</span>
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 focus:outline-none z-50">
          <div className="py-1">
            {themeOptions.map((themeOption) => (
              <Menu.Item key={themeOption.id}>
                {({ active }) => (
                  <button
                    onClick={() => dispatch(setEditorTheme(themeOption.id))}
                    className={`${
                      active
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    } w-full text-left px-4 py-2 text-sm`}
                  >
                    {themeOption.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
