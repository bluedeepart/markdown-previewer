import Header from "./components/Header";
import Markdown from "./components/Markdown";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <div className="container-lg">
          <Markdown />
        </div>
      </main>
    </>
  );
}

export default App;
