import { Fragment } from "react/jsx-runtime";
import { useFetch } from "../hooks/useFetch";

const Users = () => {
  const { data, loading, error } = useFetch<Array<User>>(
    "https://jsonplaceholder.typicode.com/users?id=1"
  );
  return (
    <div>
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
};

export default Users;

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
