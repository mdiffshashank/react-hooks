import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Search = () => {
  const [value, setValue] = useState<string>();

  const debouncedValue = useDebounce(value, 2000); //used in input
  useEffect(() => {
    console.log(debouncedValue); //api call will replace this log
  }, [debouncedValue]);

  return (
    <div>
      <section>
        <h3>Use Case : useDebounce</h3>
        <input
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(() => e.target.value)
          }
        />
      </section>
    </div>
  );
};

export default Search;
