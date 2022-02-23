import { Navigate, Outlet } from "react-router-dom";

const UserRoutes: React.FC = () => {
  // TODO auth logic
  let isAdmin: boolean = true;
  return (
      <>
          {isAdmin ? <Outlet  /> : <Navigate to="/" />}
      </>
  )
}

export default UserRoutes;