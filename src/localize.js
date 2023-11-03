import { parse } from "toml";

const languageCode =
  navigator.language ||
  navigator.languages[0] ||
  navigator.userLanguage ||
  navigator.systemLanguage ||
  navigator.browserLanguage ||
  "en-US";
let response = await fetch(`/i18n/${languageCode}.toml`);
if (!response.ok) response = await fetch("/i18n/en-US.toml");
const data = await response.text();
const strings = parse(data);

export default strings;
