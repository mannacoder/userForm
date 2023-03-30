import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.users.currentUser);
  //   console.log(currentUser);
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
