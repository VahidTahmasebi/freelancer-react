import useUser from "../features/authentication/useUser";

import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { isLoading, user } = useUser();

  return (
    <div className="py-4 px-8 border-b border-secondary-200 bg-secondary-0">
      <div
        className={`container xl:max-w-screen-lg flex justify-end items-center gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
