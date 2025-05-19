import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../store/editorSlice";

export default function Input() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.editor);

  return (
    <div className="h-[50%] w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="p-4 h-full">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Custom Input
        </h2>

        <textarea
          value={input}
          onChange={(e) => dispatch(setInput(e.target.value))}
          placeholder="Enter your test cases here..."
          className="w-full h-[calc(100%-2rem)] p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-mono text-sm text-gray-800 dark:text-gray-200"
        />
      </div>
    </div>
  );
}
