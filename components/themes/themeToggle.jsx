import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <>
      <a
        className="nav-link nav-link-icon px-2"
        role="button"
        onClick={() => setActiveTheme(inactiveTheme)}
      >
        {activeTheme === "light" ? <Moon size={30}/> : <Sun size={30}/>}
      </a>
    </>
  );
}
