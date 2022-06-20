import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-southeast-2_xHj0qHOPo",
  ClientId: "718npaio3n0b9cjc0k7o10a0cm",
};

export default new CognitoUserPool(poolData);
