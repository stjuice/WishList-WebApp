type Props = {
  name: string;
  email: string;
  pictureSrc?: string;
}

const AccountDetails = ({
  name,
  email,
  pictureSrc,
}: Props) => {
  return (
    <div>
      <img src={pictureSrc}></img>
      <h3>{name}</h3>
      <h3>{email}</h3>
    </div>
  )
}

export default AccountDetails;