import { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

const Setting = () => {
  const { getSession } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, [getSession]);

  return (
    <div>
      {loggedIn && (
        <>
          <h2>Settings</h2>
          <hr />
          <ChangePassword />
          <hr />
          <ChangeEmail />
        </>
      )}
    </div>
  );
};

export default Setting;
