import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID;
    const isProd = import.meta.env.MODE === "production";
    if (!id || !isProd) return;

    if (document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${id}"]`)) return;

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(gaScript);

    const inline = document.createElement("script");
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `;
    document.head.appendChild(inline);
  }, []);

  return null;
}