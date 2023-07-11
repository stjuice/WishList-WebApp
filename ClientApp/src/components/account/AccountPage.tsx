import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "src/behavior/user/actions";
import AccountDetails from "./AccountDetails";
import SignInButton from "./SignInButton";

const AccountPage = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const userData = user?.data;

  const handleSignOut = () => {
    dispatch(userLogout());
  }

  return (
    <>
      {
        userData
          ? (
            <div>
              <AccountDetails
                name={userData.name}
                email={userData.email}
                // pictureSrc={userData.picture} // TODO: implement user pic
                handleSignOut={handleSignOut} />
            </div>
          )
          : <SignInButton />
      }
    </>
  );
}

export default AccountPage;