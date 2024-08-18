import { useState, useEffect } from "react";
import Feed from "./Feed";
import { TailSpin } from "react-loader-spinner";

export default function GenerateFeed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch 20 posts and 20 users concurrently
        const [postsResponse, usersResponse] = await Promise.all([
          fetch("https://dummyjson.com/posts?limit=30"),
          fetch("https://randomuser.me/api/?results=30"),
        ]);

        if (!postsResponse.ok) {
          throw new Error("Network response was not ok for posts");
        }
        if (!usersResponse.ok) {
          throw new Error("Network response was not ok for users");
        }

        const postsData = await postsResponse.json();
        console.log(postsData);

        const usersData = await usersResponse.json();

        // Transform posts data
        const postsFeedItems = postsData.posts.map((post) => ({
          likes: post.reactions.likes,
          comments: post.reactions.dislikes,
          description: post.body,
          views: post.views,
        }));

        // Transform users data
        const usersFeedItems = usersData.results.map((item, index) => ({
          userName: `${item.name.first} ${item.name.last}`,
          userProfilePic: item.picture.large,
          imageUrl: `https://picsum.photos/600/400?random=${index}`, // Use a unique value from user data
        }));

        // Combine posts and users data into one array
        const combinedData = postsFeedItems.map((post, index) => ({
          ...post,
          ...usersFeedItems[index], // Combine post and user data
        }));

        // Set the combined data
        setData(combinedData);
      } catch (err) {
        console.log("fetchData function error: ", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center p-10">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#1d4ed8"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div>
      {data.map((item, index) => (
        <Feed
          key={index}
          imageUrl={item.imageUrl}
          likes={item.likes}
          comments={item.comments}
          description={item.description}
          views={item.views}
          userName={item.userName}
          userProfilePic={item.userProfilePic}
        />
      ))}
    </div>
  );
}
