import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Logo } from './icons';
import LoginContext from "./context/LoginContext";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import AppPage from "./AppPage";
import Axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #2c2c2c;
    --dark-gray: #999999;
    --primary-color: #5c38ff;
    --primary-color-hover: #3919C9;
    --very-light-gray: #f5f5f5;
    --light-gray: #e5e5e5;
    --light-gray-hover: #cccccc;
    --gray: #aaaaaa;
    --note: #a9dac7;
    --note-bg: #d4ebe3;
    --error: #fb6e5d;
    --error-bg: #fcd1cb;
    --warning: #fc9a20;
    --warning-bg: #fde9d0;
    --tag-bg: #e6ecf0;
    --tag-color: #1c600b;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--black);
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 12px;
    font-weight: 600;
  }

  h1 {
    font-size: 20px;
    margin: 10px 0;
    font-weight: normal;
  }

  input {
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    border-radius: 5px;
    padding: 5px;
  }
  
  hr {
    margin-top: 15px;
  }

  .GLoginButton{
    font-family: 'IBM Plex Sans', sans-serif !important;
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: var(--very-light-gray) !important;
    box-shadow: 0 !important;
    border-radius: 5px !important;
    font-size: 18px !important;
    color: var(--black) !important;
    margin-top:20px !important;

    div{
      height: 18px !important;
      padding: 0 !important;
      background-color: var(--very-light-gray);
    }
  }
`;

const Header = styled.div`
  background-color: var(--black);
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10000;
`;

const LogoEl = styled.div`
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 10px 20px;
  align-items: center;
  height: 
  width: fit-content;
`;
const LoginBox = styled.div`
  background-color: var(--white);
  color: var(--black);
  padding: 10px 20px 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 420px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--very-light-gray);
  width: calc(100vw - 40px);
  height: calc(100vh - 96px);
  padding: 76px 20px 20px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const UserProfile = styled.div`
  color: var(--white);
  padding: 10px;
  align-items: center;
  width: fit-content;
  display: flex;
  background-color: var(--primary-color);
  cursor: pointer;
`;

const ProfilePic = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 18px;
  background-color: var(--white);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 18px;
`;

const UserDropDown = styled.div`
  position: fixed;
  right: 0px;
  top: 60px;
  color: var(--black);
  min-width: 200px;
  background-color: var(--white);
  border-radius: 2px;
  font-weight: bold;
`

const DropDownOption = styled.div`
  padding: 10px;
  cursor: pointer;
`

function App() {
  const [userData, setUserData] = useState({
    token: "",
    auth: false,
    email: "",
    firstName: "",
    familyName: "",
    userId: "",
    picture: undefined,
  });
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [awaitLogin, setAwaitLogin] = useState(false)
  const handleSucces = async (res: GoogleLoginResponse) => {
    Axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_AUTH_URL}/auth`,
      data: { googleId: res.googleId, token: res.tokenId },
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    .then(async (response) => {
      response.data.token
        ? localStorage.setItem("auth-token", response.data.token)
        : localStorage.setItem("auth-token", "");
      setAwaitLogin(true)
      const user = await Axios.get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: { authorization: response.data.token },
      });
      setAwaitLogin(false)
      setUserData({
        token: response.data.token,
        auth: true,
        email: user.data.email,
        firstName: user.data.firstName,
        familyName: user.data.familyName,
        userId: user.data._id,
        picture: user.data.picture,
      });
    })
    .catch((err) => {
        //handle error
        console.log(err);
    });
  };

  const userSignOut = () => {
    setUserData({
      token: "",
      auth: false,
      email: "",
      firstName: "",
      familyName: "",
      userId: "",
      picture: undefined,
    })
    localStorage.removeItem("auth-token")
  }
  window.addEventListener('storage', e => {
    if(e.key === 'auth-token' && e.oldValue && !e.newValue) {
       userSignOut();
     }
 });
  useEffect(() => {
    const checkLoggedIn = async () => {
      const token: string | null = localStorage.getItem("auth-token");
      if (token !== null) {
        const user = await Axios.get(`${process.env.REACT_APP_API_URL}/user`, {
          headers: { authorization: token },
        });
        setUserData({
          token,
          auth: true,
          email: user.data.email,
          firstName: user.data.firstName,
          familyName: user.data.familyName,
          userId: user.data._id,
          picture: user.data.picture,
        });
      }
    };

    // tslint:disable-next-line: no-floating-promises
    checkLoggedIn();
  }, []);
  return (
    <>
      <GlobalStyle />
      <LoginContext.Provider value={{ userData, setUserData }}>
        <>
          <Header>
            <LogoEl>
              <Logo width={155} height={30} color={'#ffffff'} />
            </LogoEl>
            {userData.firstName !== "" ? (
              <UserProfile onClick= {() => {setShowUserMenu(!showUserMenu)}}>
                <ProfilePic>
                  {userData.picture ? (
                    <Img src={userData.picture} alt={"Profile Pic"} />
                  ) : (
                    <>
                      {userData.firstName[0]}
                      {userData.familyName[0]}
                    </>
                  )}
                </ProfilePic>
                {userData.firstName} {userData.familyName}
              </UserProfile>
            ) : null}            
            {showUserMenu && 
            (
              <UserDropDown> 
                <DropDownOption onClick={() => {
                    setShowUserMenu(false)
                    userSignOut();
                    }
                  }
                > 
                  Sign Out
                </DropDownOption>
              </UserDropDown>
            )}
          </Header>
          {!userData.auth ? 
            awaitLogin ? <>Logging In</>  : 
              <Body onClick={() => {setShowUserMenu(false)}} >
                <LoginBox>
                  <H1>Login Using Google Account</H1>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GAUTH_CLIENT_ID as string}
                    buttonText="Login with Google"
                    // GoogleAuth package has incorrect types
                    // @ts-ignore
                    onSuccess={handleSucces}
                    onFailure={(res) => {console.log(res)}}
                    cookiePolicy={"single_host_origin"}
                    className="GLoginButton"
                  />
                </LoginBox>
              </Body>
             : (
              <div onClick={() => {setShowUserMenu(false)}} >
                <AppPage />
              </div>
          )}
        </>
      </LoginContext.Provider>
    </>
  );
}

export default App;
