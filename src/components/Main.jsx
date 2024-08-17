// component for create story

import CreatePost from "./main/CreatePost";
import Stories from "./main/Stories";

export default function Main() {
  return (
    <main className="w-[36%] h-screen mx-auto p-2 pt-6">
      {/* story section */}
      <Stories />
      <CreatePost />
    </main>
  );
}
