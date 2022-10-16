import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "80px"
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </header>
    </div>
  );
};

export default Home;
