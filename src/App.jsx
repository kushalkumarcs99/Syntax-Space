import Header from "./components/Header";
import CodeEditor from "./components/Editor";
import Controls from "./components/Controls";
import Output from "./components/Output";
import Input from "./components/Input";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Controls />

        <div className="flex h-[100%] gap-6">
          <div className="w-[70%]">
            <CodeEditor />
          </div>

          <div className="w-[30%] space-y-3">
            <Output />
            <Input />
          </div>
        </div>
      </main>
    </div>
  );
}
