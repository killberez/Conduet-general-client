import { createContext } from "react";

const LoginContext = createContext({
  userData: {
    auth: false,
    token: "",
    userId: "",
    firstName: "",
    email: "",
    picture: undefined,
    familyName: "",
  },
  setUserData: (data: any) => {},
});

export default LoginContext;
