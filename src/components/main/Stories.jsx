import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PropTypes from "prop-types";
function CreateStory() {
  return (
    <div className="flex flex-col w-[140.63px] h-[250px]">
      <img
        src="https://randomuser.me/api/portraits/men/43.jpg"
        alt="user profile picture"
        className="bg-zinc-300 rounded-t-lg cover h-[80%]"
      />
      <div className="bg-zinc-700 relative flex-1 rounded-b-lg flex flex-col justify-end p-1 items-center">
        <div className="w-10 h-10  absolute bottom-8 border-4 border-zinc-700 bg-blue-600 rounded-full flex items-center justify-center">
          <GoPlus color="white" size={25} />
        </div>

        <p className="text-xs mb-1 text-white font-semibold text-center">
          Create Story
        </p>
      </div>
    </div>
  );
}

// component for other people stories
function OtherPeopleStory({ profile, index }) {
  const randomImageUrl = `https://picsum.photos/200/300?random=${index + 1}`;

  return (
    <div className="flex flex-col relative w-[140px] h-[250px] rounded-lg overflow-hidden">
      <motion.div
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="w-full h-full"
      >
        <img
          src={randomImageUrl}
          className="w-full cursor-pointer h-full object-cover"
          alt={`${profile.name.first} ${profile.name.last}`}
        />
      </motion.div>
      <div className="absolute top-2 left-2 p-1 bg-blue-500 flex items-center justify-center rounded-full">
        <img
          src={profile.picture.thumbnail}
          className="w-8 h-8 rounded-full object-cover"
          alt={profile.name.first}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end px-2 pb-2">
        <span className="text-xs text-white font-semibold truncate">
          {profile.name.first} {profile.name.last}
        </span>
      </div>
    </div>
  );
}
// Define PropTypes for the component
OtherPeopleStory.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  scaleOnHover: PropTypes.number,
  transitionDuration: PropTypes.number,
};
export default function Stories() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople();
  }, []);
  return (
    <section className="h-64 items-center">
      <Splide
        options={{
          type: "slide",
          perPage: 5,
          perMove: 4,
          gap: "6rem",
          pagination: false,
          arrows: true,
        }}
      >
        {/* create story */}
        <SplideSlide>
          <CreateStory />
        </SplideSlide>
        {/* other people stories */}
        {people.map((profile, index) => (
          <SplideSlide key={index}>
            <OtherPeopleStory profile={profile} index={index} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
