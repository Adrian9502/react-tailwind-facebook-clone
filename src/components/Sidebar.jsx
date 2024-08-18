import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
  const icons = [
    { bgPos: "-259px", label: "Friends" },
    { bgPos: "-407px", label: "Memories" },
    { bgPos: "-148px", label: "Saved" },
    { bgPos: "-37px", label: "Groups" },
    { bgPos: "-481px", label: "Video" },
    { bgPos: "-370px", label: "Marketplace" },
    {
      bgPos: "-37px",
      label: "Events",
      iconImg:
        "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png?_nc_eui2=AeEE6f0BnoaAa5iDyk1t5KTNtB6cyH067p60HpzIfTrunqe1AgrcPJKjGNARj7dJa9caP8xJjVA4NcuBRIqsIxHb",
    },
  ];

  const iconBaseURL =
    "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png?_nc_eui2=AeGTrdGC2n4ASDI4GzH-Xppiaz4ElA9fvIxrPgSUD1-8jFy0n7cYUOTFFx6YHfd4S0g2d2x88iW4VXC5g5daULak";

  return (
    <aside className="fixed bg-zinc-900 w-[360px] h-[95vh] flex flex-col py-4 pt-5 px-2">
      <div className="flex-grow">
        <ul className="flex mb-1 cursor-pointer hover:bg-zinc-800  transition rounded-lg items-center space-x-3 px-2 py-1">
          <li className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="user name"
              className="w-9 h-9 rounded-full"
            />
            <span className="font-semibold text-sm text-white">John Doe</span>
          </li>
        </ul>
        {icons.map(({ bgPos, label, iconImg }, index) => (
          <ul
            key={index}
            className="flex px-2 my-1 cursor-pointer hover:bg-zinc-800 transition font-semibold text-white rounded-lg py-1 items-center space-x-3"
          >
            <li
              className="w-9 h-9 bg-no-repeat inline-block"
              style={{
                backgroundImage: `url(${iconImg || iconBaseURL})`,
                backgroundPosition: `0 ${bgPos}`,
              }}
            >
              {!iconImg && <span className="sr-only">{label}</span>}
            </li>
            <span className="text-sm">{label}</span>
          </ul>
        ))}
        <ul className="flex py-1 rounded-lg items-center cursor-pointer hover:bg-zinc-800 transition space-x-3 px-2">
          <li>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeFGedgODOgq86Tda0vDB6m5i9AM8exRZGeL0Azx7FFkZ3ijDD2_X2AUL8r_vHre_Af-hJ5fZixu8D1nRssF5xVI"
              alt="Feeds"
              className="w-9 h-9"
            />
          </li>
          <span className="text-white text-sm font-semibold">Feeds</span>
        </ul>
        <ul className="cursor-pointer hover:bg-zinc-800 transition py-1 rounded-lg flex items-center space-x-3 px-2">
          <li>
            <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center">
              <IoIosArrowDown color="white" size={23} />
            </div>
          </li>
          <span className="text-white text-sm font-semibold">See more</span>
        </ul>
        <hr className="mt-3 h-0.5 bg-gray-600" />
      </div>
      <div className="text-white font-thin text-xs px-2 py-2">
        <div>
          <span className="hover:underline cursor-pointer">Privacy</span>{" "}
          &middot; <span className="hover:underline cursor-pointer">Terms</span>{" "}
          &middot;{" "}
          <span className="hover:underline cursor-pointer">Advertising</span>{" "}
          &middot;{" "}
          <span className="hover:underline cursor-pointer">Ad choices</span>
          &middot;{" "}
          <span className="hover:underline cursor-pointer">Cookies</span>{" "}
          &middot; <span className="hover:underline cursor-pointer">More</span>{" "}
          &middot;
        </div>
        <span>Meta &copy; 2024</span>
      </div>
    </aside>
  );
}
