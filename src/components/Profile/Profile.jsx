import loginGuard from "../loginGuard";

const Profile = (props) => {
  const user = props.user;
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default loginGuard(Profile);
