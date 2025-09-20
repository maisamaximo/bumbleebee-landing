import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Carrega JSONs
import pt from "./locales/pt/common.json";
import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";
import de from "./locales/de/common.json";

const resources = {
  pt: { common: pt },
  en: { common: en },
  fr: { common: fr },
  de: { common: de },
};

const saved = localStorage.getItem("lang") || "pt";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: saved,                // idioma inicial
    fallbackLng: "en",
    ns: ["common"],            // namespace
    defaultNS: "common",
    interpolation: { escapeValue: false }
  });

// Atualiza o atributo lang do <html> sempre que trocar
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
  localStorage.setItem("lang", lng);
});

export default i18n;
