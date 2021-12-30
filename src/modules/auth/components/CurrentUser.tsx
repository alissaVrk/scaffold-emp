import { Button } from "components";
import { useNavigate } from "react-router-dom";

import { logout } from "../data/authActions";
import { useAuthData } from "../data/authQueries";

export function CurrentUser(){
  const user = useAuthData();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  function logoutUser() {
    void logout();
    navigate("/landing");
  }
  
  return(<>
    Hello {user?.name} <Button title="Sign Out" variant="dark" onClick={logoutUser}/>
  </>)
}