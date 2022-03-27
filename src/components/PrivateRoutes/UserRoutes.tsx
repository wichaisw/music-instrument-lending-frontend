import { Navigate, Outlet } from "react-router-dom";

const UserRoutes: React.FC = () => {
  // TODO auth logic
  let isUser: boolean = true;
  return (
      <>
          {isUser ? <Outlet  /> : <Navigate to="/" />}
      </>
  )
}

export default UserRoutes;