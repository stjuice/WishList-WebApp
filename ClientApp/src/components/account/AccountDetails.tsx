type Props = {
  name: string;
  email: string;
  pictureSrc?: string;
  handleSignOut: () => void;
}

const AccountDetails = ({
  name,
  email,
  pictureSrc,
  handleSignOut,
}: Props) => {
  return (
    <div>
      <img src={pictureSrc}></img>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  )
}

export default AccountDetails;