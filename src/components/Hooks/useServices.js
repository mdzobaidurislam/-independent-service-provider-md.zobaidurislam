import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mdzubaidul/api/main/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return { services, setServices };
};

export default useServices;
