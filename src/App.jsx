import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen ">
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
        <Contact />
      </div>
    </main>
  );
}

export default App;
