import { useAuthData } from "modules/auth";
import { Link } from "react-router-dom";

export function LoggedInPage() {
  const user = useAuthData();

  if (!user) {
    return null;
  }

  return (
    <>
      <h3>Welcome {user?.name} lets explore..</h3>
      <Link to="/paths">paths</Link>
    </>
  )
}
