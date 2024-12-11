import { PropsWithChildren } from "react";
import { useAuth } from "../auth/AuthProvider";

type User = {
  full_name: string;
  username: string;
  role: string;
};

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: User["role"][];
};

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();
  if (currentUser === undefined) {
    return <div>Loading...</div>; //add Loading Later
  }

  if (
    currentUser === null ||
    (allowedRoles && !allowedRoles?.includes(currentUser.role))
  ) {
    console.log(currentUser?.role);
    return <div>Permission Denied</div>;
  }
  return children;
};

export default ProtectedRoute;
