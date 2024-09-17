import { useState } from "react";

export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  function toggle() {
    setValue(!value);
  }

  return [value, toggle];
}
