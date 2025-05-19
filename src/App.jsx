import { useState, useEffect } from "react";
import Header from "./components/Header";
import CodeEditor from "./components/Editor";
import Controls from "./components/Controls";
import Output from "./components/Output";
import Input from "./components/Input";
import MobileRestriction from "./components/MobileRestriction";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileRestriction />;
  }

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
