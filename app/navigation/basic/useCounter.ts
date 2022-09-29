import { useState, useEffect } from "react";
import { showLog } from "../../util/ComUtils";

export function useCounter() {
  const [value, setValue] = useState(0);
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    showLog(`useCounter value:${value}`)
    if (value % 2 === 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
  }, [value]);

  const handleIncrement = () => {
    showLog(`handleIncrement--->`)

    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };

  return [value, isEven, handleIncrement, handleDecrement];
}
