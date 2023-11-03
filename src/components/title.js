import van from "van";
import strings from "localize"
const { h1 } = van.tags;

export default function Title() {
  return h1(strings.title["main-text"])
}