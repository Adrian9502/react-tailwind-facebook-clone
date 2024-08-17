import facebookLogo from "/facebook.png";
import { IoSearch } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdSmartDisplay } from "react-icons/md";
import { FaStore } from "react-icons/fa6";
import { CgGames, CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import PropTypes from "prop-types";
// components for icons
const IconButton = ({ Icon, size, ariaLabel }) => (
  <div className="px-12 cursor-pointer py-2 rounded-lg transition hover:bg-zinc-700">
    <Icon size={size} color="gray" aria-label={ariaLabel} />
  </div>
);

// prop types
IconButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
  ariaLabel: PropTypes.string,
};

IconButton.defaultProps = {
  size: 24,
  ariaLabel: "",
};

export default function Header() {
  return (
    <header className="sticky z-20 left-0 top-0 right-0 flex py-1 bg-zinc-800 border-b border-zinc-700 items-center px-4 justify-between">
      <nav className="flex items-center space-x-2">
        <img className="w-10 h-10" src={facebookLogo} alt="Facebook logo" />
        <div className="relative">
          <input
            type="text"
            className="focus:outline-none text-gray-100 rounded-full bg-zinc-700 pl-10 pr-5 py-2"
            aria-label="Search"
            placeholder="Search Facebook"
          />
          <IoSearch
            className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </nav>
      <nav className="flex gap-3 items-center">
        <IconButton Icon={MdHomeFilled} size={30} ariaLabel="Home" />
        <IconButton Icon={BsPeople} size={24} ariaLabel="People" />
        <IconButton Icon={MdSmartDisplay} size={24} ariaLabel="Watch" />
        <IconButton Icon={FaStore} size={24} ariaLabel="Marketplace" />
        <IconButton Icon={CgGames} size={24} ariaLabel="Gaming" />
      </nav>
      <nav className="flex ml-32 space-x-2 items-center">
        <div className="rounded-full p-2 bg-zinc-700" aria-label="Menu">
          <CgMenuGridR size={25} color="white" />
        </div>
        <div className="rounded-full p-2 bg-zinc-700" aria-label="Messenger">
          <FaFacebookMessenger size={25} color="white" />
        </div>
        <div
          className="rounded-full p-2 bg-zinc-700"
          aria-label="Notifications"
        >
          <RiNotification2Fill size={25} color="white" />
        </div>

        <img
          src="https://randomuser.me/api/portraits/men/43.jpg"
          className="w-10 h-10 rounded-full"
          alt="User profile picture"
        />
      </nav>
    </header>
  );
}
