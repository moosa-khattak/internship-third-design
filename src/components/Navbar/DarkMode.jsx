import React, { useEffect, useState } from "react";
import darkMode from "../../assets/Wesite/dark-mode-button.png";
import lightMode from "../../assets/Wesite/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("dark") ? localStorage.getItem("dark") : "light");

  const element = document.documentElement;
  // console.log(element);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        src={lightMode}
        alt="darkMode"
        className={`w-15  cursor-pointer absolute top-0 right-0 transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }  `}
      />
      <img
        onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
        src={darkMode}
        alt="darkMode"
        className={`w-15  cursor-pointer  transition-all duration-300 }
         
         `}
      />
    </div>
  );
};

export default DarkMode;
