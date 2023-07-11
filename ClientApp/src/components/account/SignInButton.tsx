import { useDispatch, useSelector } from "react-redux";
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { addNewUser } from "src/behavior/user/actions";
import { useEffect } from "react";
import { setAuthToken } from "./helper";

type CustomPayload = JwtPayload & {
  name: string;
  email: string;
  credential: string;
}

const SignInButton = () => {
  const { ssoSettings } = useSelector((state) => state);
  const dispatch = useDispatch();

  const ssoSettingsData = ssoSettings?.data;

  const handleCallbackResponse = (response: any) => {
    var userObject = jwt_decode<CustomPayload>(response.credential);

    if (!userObject)
      return;

    var newUser = {
      name: userObject.name,
      email: userObject.email,
    }

    dispatch(addNewUser(newUser));

    console.log(response);
    console.log(userObject);
    // Store the authentication token in local storage
    setAuthToken(response.credential);
  };

  useEffect(() => {
    // Check if there is an authentication token in local storage
    const authToken = localStorage.getItem('authToken');

    if (!ssoSettings?.data?.clientId || authToken)
      return;

    /* global google */
    // @ts-ignore: Ignoring error because 'google' is a global variable created by an external script. 
    google.accounts.id.initialize({
      client_id: ssoSettingsData?.clientId,
      callback: handleCallbackResponse,
    });

    // google.accounts.id.prompt(); // TODO: not forget to implement

    /* global google */
    // @ts-ignore: Ignoring error because 'google' is a global variable created by an external script. 
    google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      { theme: "outline", size: "large" }
    )
  }, []);

  return (
    <>
      <div id="google-signin-button" />
    </>
  );
};

export default SignInButton;