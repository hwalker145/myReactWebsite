import Button from "../Components/Button";
import Layout from "../Components/Layout";
import Background from "../Components/Background"
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

// is everything on lines 9-12 being passed into 
// the Layout constructor as children?