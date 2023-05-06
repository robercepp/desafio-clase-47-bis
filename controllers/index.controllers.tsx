import {
  React,
  ReactDOMServer,
  request,
  response,
} from "../dependencies/dep.tsx";
import { colors } from "../db/color.memory.tsx";

const ReactContent = () => {
  const colors = getColors();
  return (
    <>
      <h1 className="title">Listado de Colores</h1>
      <form action="/colors" method="POST">
        <label htmlFor="color">Ingrese un color (ingles)</label>
        <input
          className="input"
          id="color"
          type="text"
          name="color"
          placeholder="red"
        />
        <button className="btn" type="submit">
          enviar
        </button>
      </form>
      <ul className="ul">
        {colors.map((color, index) => (
          <li style={{ color }} key={index}>
            {color}
          </li>
        ))}
      </ul>
    </>
  );
};

export const main = (req: typeof request, res: typeof response) => {
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css" />
    <title>Servidor Oak en Deno</title>
    </head>
    <body id="root">
  ${ReactDOMServer.renderToString(<ReactContent />)}
      </body>
    </html>
    `
  );
};

export const getColors = () => {
  return colors;
};

export const saveColor = (req: typeof request, res: typeof response) => {
  const { color } = req.body;
  colors.push(color);
  res.redirect("/");
};

export const style = async (req: typeof request, res: typeof response) => {
  const styleFile = await Deno.readTextFile("./static/style.css");
  const contentType = "text/css";
  res.setHeader("Content-Type", contentType);
  res.send(styleFile);
};
