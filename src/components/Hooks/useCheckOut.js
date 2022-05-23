import { useEffect, useState } from "react";
import useServices from "./useServices";

const useCheckOut = (id) => {
  const { services } = useServices();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const exitItem = services.find((service) => service.id === id);
    if (exitItem) {
      setItem(exitItem);
    } else {
      setItem("no find");
    }
  }, [id, services]);

  return { item, setItem };
};

export default useCheckOut;
