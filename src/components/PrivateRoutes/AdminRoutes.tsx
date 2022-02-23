import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes: React.FC = () => {
  // TODO auth logic
  let isAdmin: boolean = true;
  return (
      <>
          {isAdmin ? <Outlet  /> : <Navigate to="/" />}
      </>
  )
}

export default AdminRoutes;