import { PropsWithChildren } from "react";
import { useAuth } from "../auth/AuthProvider";

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: string[];
};

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();
  if (currentUser === undefined) {
    return <div>Loading...</div>; //add Loading Later
  }
  if (currentUser === null || !allowedRoles?.includes(currentUser.role)) {
    console.log(currentUser?.role);
    return <div>Permission Denied</div>;
  }
  return children;
};

export default ProtectedRoute;
