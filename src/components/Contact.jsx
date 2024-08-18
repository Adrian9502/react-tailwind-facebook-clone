import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import PropTypes from "prop-types";
const ContactItem = ({ contact }) => (
  <div
    key={contact.login.uuid}
    className="flex font-semibold items-center rounded-lg text-sm space-x-3 p-2.5 cursor-pointer hover:bg-zinc-800 transition"
  >
    <img
      src={contact.picture.thumbnail}
      className="w-8 h-8 rounded-full"
      alt={`${contact.name.first} ${contact.name.last}`}
    />
    <span>{`${contact.name.first} ${contact.name.last}`}</span>
  </div>
);
// prop types
ContactItem.propTypes = {
  contact: PropTypes.shape({
    login: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=30");
        const data = await response.json();
        setContacts(data.results);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError("Failed to load contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <aside className="bg-zinc-900 text-white overflow-auto px-2 py-4 fixed right-0 h-screen w-[360px]">
      <div className="flex justify-between">
        <span className="font-semibold">Contacts</span>
        <div className="flex gap-4 items-center">
          <div
            aria-label="Search"
            className="cursor-pointer rounded-full p-1.5 hover:bg-zinc-700"
          >
            <IoSearch size={20} />
          </div>
          <div
            aria-label="Three-dot"
            className="cursor-pointer rounded-full p-1.5 hover:bg-zinc-700"
          >
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>
      {/* Contacts */}
      <div>
        {error && (
          <div className="rounded-lg p-2 italic font-bold text-red-500 underline">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-sm text-center">Loading...</div>
        ) : (
          contacts.map((contact) => (
            <ContactItem key={contact.login.uuid} contact={contact} />
          ))
        )}
      </div>
    </aside>
  );
}
