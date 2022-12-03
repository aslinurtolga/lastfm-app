import React from "react";
import { Link } from "react-router-dom";
import { ImLinkedin, ImGithub } from "react-icons/im";
import Switch from "./Switch";
const Header = () => {
  return (
    <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-slate-200 dark:bg-slate-70 dark:text-gray-900  shadow-lg navbar navbar-expand-lg fixed-top">
      <div className="container-fluid w-full flex items-center justify-between px-6">
        <Link className="text-2xl pr-2 font-semibold text-gray-900" to="/">
          Lastfm App
        </Link>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/aslinurtolga/" target="_blank">
          <ImLinkedin
            size={37}
            className="absolute top-2 right-14 rounded-md"
          />
        </a>
        <a href="https://github.com/aslinurtolga/lastfm-app" target="_blank">
          <ImGithub
            size={37}
            className="absolute top-2 right-24"
          />
        </a>
        <Switch />
      </div>
    </nav>
  );
};

export default Header;
