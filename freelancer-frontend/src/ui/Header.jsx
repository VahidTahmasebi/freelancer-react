import useUser from "../features/authentication/useUser";

const Header = () => {
  const { data } = useUser();

  return <div className="py-4 px-8 bg-secondary-0">app header</div>;
};

export default Header;
