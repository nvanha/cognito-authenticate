import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useContext, useState } from "react";
import { AccountContext } from "./Account";

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
          }
        });
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="newEmail">New Email</label>
        <br />
        <input
          type="text"
          name="newEmail"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Change Email</button>
      </form>
    </div>
  );
};

export default ChangeEmail;
