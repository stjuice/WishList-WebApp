import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "src/behavior/user/actions";
import AccountDetails from "./AccountDetails";
import SignInButton from "./SignInButton";
import { isUserAuthenticated, resetAuthToken } from "./helper";

const AccountPage = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const userData = user?.data;

  const handleSignOut = () => {
    dispatch(userLogout());
    resetAuthToken();
  }

  return (
    <>
      {isUserAuthenticated && <button onClick={handleSignOut}>SignOut</button>}
      {
        userData
          ? (
            <div>
              <AccountDetails
                name={userData.name}
                email={userData.email}
              // pictureSrc={userData.picture} // TODO: implement user pic
              />
            </div>
          )
          : <SignInButton />
      }
    </>
  );
}

export default AccountPage;