import { useContext, useState } from "react";
import { AccountContext } from "./Account";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      user.changePassword(oldPassword, newPassword, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="oldPassword">Current Password</label>
        <br />
        <input
          type="text"
          name="oldPassword"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
        />
        <br />
        <label htmlFor="newPassword">New Password</label>
        <br />
        <input
          type="text"
          name="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <br />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
