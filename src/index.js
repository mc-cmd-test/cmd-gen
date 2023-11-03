import van from "van";
import Title from "./components/title.js"

function App() {
  return [
    Title(),  
    van.tags.h1("a")
    // Select
  ];
}

van.add(document.getElementById("root"), App());