import Button from "../Components/Button";
import Layout from "../Components/Layout";
import logo from "../logo.svg";

const Home = () => {
  return (
    <Layout title="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button text="I do nothing" />
      </header>
    </Layout>
  );
};
export default Home;
