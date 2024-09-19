import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
  const [btnValue, toggle] = useToggle(true);

  return (
    <div>
      <section>
        <h3>Use Case : useToggle</h3>
        <button onClick={() => toggle()}>{btnValue ? "ON" : "Off"}</button>
      </section>
    </div>
  );
};

export default Toggle;
