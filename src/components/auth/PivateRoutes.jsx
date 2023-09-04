import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PivateRoutes = () => {
  const { name } = useSelector((store) => store.trainer);

  if (name) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
export default PivateRoutes;
