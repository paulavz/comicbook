import Comic from "../../Components/Comic";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import "../../Libraries/normalize.css";
import "./index.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Menu />
      <Comic />
    </div>
  );
};

export default Home;
