import { useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, 2000);

  useEffect(() => {
    console.log(debouncedValue); //api call
  }, [debouncedValue]);

  return (
    <div className="app">
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(() => e.target.value)
        }
      />
    </div>
  );
}

export default App;
