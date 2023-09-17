import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SwitchTheme() {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
  };

  return (
    <label className="w-5/6 bg-card inline-flex items-center p-1 rounded-full cursor-pointer dark:text-gray-800">
      <input
        id="Toggle3"
        type="checkbox"
        className="hidden peer"
        checked={theme === "dark"}
        onChange={handleChangeTheme}
      />
      <span className="px-4 py-3 w-1/2 flex justify-center items-center text-muted-foreground rounded-full dark:bg-secondary peer-checked:dark:bg-card transition-all">
        <Sun />
      </span>
      <span className="px-4 py-3 w-1/2 flex justify-center items-center text-muted-foreground rounded-full dark:bg-card peer-checked:dark:bg-secondary transition-all">
        <Moon />
      </span>
    </label>
  );
}
