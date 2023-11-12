import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const RouteManaging = ({ children }) => {
  const route = useRoute();
  useEffect(() => {}, [route]);

  return <>{children}</>;
};

export default RouteManaging;
