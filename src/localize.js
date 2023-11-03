import { parse } from "toml";

const languageCode =
  navigator.language ||
  navigator.languages[0] ||
  navigator.userLanguage ||
  navigator.systemLanguage ||
  navigator.browserLanguage ||
  "en-US";
const data = await (await fetch(`/i18n/${languageCode}.toml`)).text();
const strings = parse(data);

export default strings;
