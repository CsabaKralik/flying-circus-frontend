import loginGuard from "./Auth/loginGuard";

const Private = (props) => {
  return <h1>This is a private component ... hihi! {props.message}</h1>;
};

const Guarded = loginGuard(Private);

export default Guarded;
