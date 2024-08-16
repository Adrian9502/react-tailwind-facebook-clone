import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch random user data
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=30"); // Fetch 5 random users
        const data = await response.json();
        setContacts(data.results);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <aside className="text-white overflow-auto px-2 py-4 fixed right-0 h-screen w-[360px]">
      <div className="flex  justify-between">
        <span className="font-semibold">Contacts</span>
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer rounded-full p-1.5 hover:bg-zinc-700">
            <IoSearch size={20} />
          </div>
          <div className="cursor-pointer rounded-full p-1.5 hover:bg-zinc-700">
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>
      {/* Contacts */}
      <div>
        {contacts.map((contact) => (
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
        ))}
      </div>
    </aside>
  );
}
