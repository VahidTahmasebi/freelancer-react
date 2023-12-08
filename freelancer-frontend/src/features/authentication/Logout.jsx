import { HiArrowCircleRight } from "react-icons/hi";

import useLogout from "./useLogout";

import Loading from "../../ui/Loading";

const Logout = () => {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowCircleRight className="w-5  h-5 text-secondary-500 hover:text-error" />
    </button>
  );
};

export default Logout;
