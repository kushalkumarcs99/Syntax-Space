import { Menu } from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, setFontSize } from "../store/editorSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { theme, fontSize, fontSizeOptions, themeOptions } = useSelector(
    (state) => state.editor
  );

  const toggleTheme = () => {
    const newTheme = theme === "vs-dark" ? "light" : "vs-dark";
    dispatch(setTheme(newTheme));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <CodeBracketIcon className="h-8 w-8 text-primary-500" />
            <h1 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              SyntaxSpace
            </h1>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Font Size Selector */}
            <Menu as="div" className="relative">
              <Menu.Button className="btn btn-secondary">
                Font: {fontSize}px
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 focus:outline-none">
                <div className="py-1">
                  {fontSizeOptions.map((size) => (
                    <Menu.Item key={size}>
                      {({ active }) => (
                        <button
                          onClick={() => dispatch(setFontSize(size))}
                          className={`${
                            active
                              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                              : "text-gray-700 dark:text-gray-300"
                          } w-full text-left px-4 py-2 text-sm`}
                        >
                          {size}px
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-secondary p-2"
              aria-label="Toggle theme"
            >
              {theme === "vs-dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
