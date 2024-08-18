import CreatePost from "./main/CreatePost";
import GenerateFeed from "./main/GenerateFeed";
import Stories from "./main/Stories";

export default function Main() {
  return (
    <main className="w-[680px] mx-auto pt-6">
      {/* story section */}
      <Stories />
      <CreatePost />
      <GenerateFeed />
    </main>
  );
}
