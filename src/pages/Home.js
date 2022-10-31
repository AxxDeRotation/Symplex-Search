import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "../components/Search";


function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">SymMail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://media.discordapp.net/attachments/921050622462165052/1034484263615201301/Sym_Search_Logo.png?width=1440&height=391"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;
