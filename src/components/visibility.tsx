import { useEffect } from "react";
import { usePageVisibility } from "../hooks/useVisibilityChange";

const BrowserActivity = () => {
  const { isVisible } = usePageVisibility();
  useEffect(() => {
    if (!isVisible) {
      console.log("Not visible!");
    } else {
    }
  }, [isVisible]);

  return <div>BrowserActivity</div>;
};

export default BrowserActivity;
