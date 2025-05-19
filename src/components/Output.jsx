import { useSelector } from "react-redux";

export default function Output() {
  const { output, error, isLoading } = useSelector((state) => state.editor);

  return (
    <div className="h-[47%] w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="p-4 h-full">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Output
        </h2>

        <div className="h-[calc(100%-2rem)] overflow-auto font-mono text-sm">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
            </div>
          ) : error ? (
            <pre className="text-red-500 whitespace-pre-wrap">{error}</pre>
          ) : output ? (
            <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {output}
            </pre>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-600">
              Run your code to see the output here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
