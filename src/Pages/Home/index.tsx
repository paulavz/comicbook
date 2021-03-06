import Comic from "../../Components/Comic";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import "../../Libraries/normalize.css";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Menu title="Latest Issues" showMenu={true} />
      <Comic />
    </div>
  );
};
export default Home;
