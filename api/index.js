import redirections from "../redirects.json";

export const config = {
  runtime: "edge",
};

export default async (req) => {
  const [subdomain] = req.headers.get("x-forwarded-host").split(`.`);
  const redirection =
    redirections[subdomain] || "https://twitter.com/LautaroDelgadOK"; // Reemplazá con tu link por defecto

  return Response.redirect(redirection, 302);
};
