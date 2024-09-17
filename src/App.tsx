import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";
import { useFetch } from "./hooks/useFetch";

type User = {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
function App() {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, 2000); //used in input
  const [btnValue, toggle] = useToggle(true);
  const { data, loading, error } = useFetch<Array<User>>(
    "https://jsonplaceholder.typicode.com/users?id=1"
  );

  useEffect(() => {
    console.log(debouncedValue); //api call
  }, [debouncedValue]);

  return (
    <div className="app">
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

      <section>
        <h3>Use Case : useToggle</h3>
        <button onClick={() => toggle()}>{btnValue ? "ON" : "Off"}</button>
      </section>

      <section>
        <h3>Use Case : useFetch</h3>
        {loading ? "...loading" : ""}
        {error ? "error" : ""}
        {data
          ? data.map((user) => {
              return (
                <Fragment key={user.id}>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.website}</p>
                </Fragment>
              );
            })
          : ""}
      </section>
    </div>
  );
}

export default App;
