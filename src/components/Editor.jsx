import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Editor from "@monaco-editor/react";
import { setCode } from "../store/editorSlice";
import { editorThemes } from "../utils/editorThemes";

export default function CodeEditor() {
  const dispatch = useDispatch();
  const { code, language, editorTheme, fontSize, defaultCode } = useSelector(
    (state) => state.editor
  );

  useEffect(() => {
    // Set default code when language changes
    dispatch(setCode(defaultCode[language] || ""));
  }, [language, defaultCode, dispatch]);

  useEffect(() => {
    // Define custom themes
    if (window.monaco) {
      Object.entries(editorThemes).forEach(([themeId, themeData]) => {
        window.monaco.editor.defineTheme(themeId, themeData);
      });
    }
  }, [editorTheme]);

  const handleEditorChange = (value) => {
    dispatch(setCode(value));
  };

  const editorOptions = {
    fontSize: fontSize,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    lineNumbers: "on",
    roundedSelection: false,
    automaticLayout: true,
    tabSize: 2,
    wordWrap: "on",
    renderWhitespace: "selection",
    scrollbar: {
      vertical: "visible",
      horizontal: "visible",
      useShadows: false,
      verticalScrollbarSize: 8,
      horizontalScrollbarSize: 8,
    },
  };

  return (
    <div className="h-[70vh] w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        language={language}
        theme={editorTheme}
        value={code}
        onChange={handleEditorChange}
        options={editorOptions}
        className="px-0"
        beforeMount={(monaco) => {
          // Define themes before the editor is mounted
          Object.entries(editorThemes).forEach(([themeId, themeData]) => {
            monaco.editor.defineTheme(themeId, themeData);
          });
        }}
      />
    </div>
  );
}
