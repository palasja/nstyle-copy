import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("*", (req, res) => res.send("Hello World!"));

api.use("*", router);

export const handler = serverless(api);
//---------------------------- work without css
// import express, { Router } from "express";
// import serverless from "serverless-http"; 
// import render from '../dist/server/entry-server.js'
// import fs from 'node:fs';
// const api = express();

// const router = Router();
// const template = `<!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>NstyleCopy</title>
//     <script type="module" crossorigin src="/assets/index-RkKfTVGm.js"></script>
//     <link rel="stylesheet" crossorigin href="/assets/index-x0SM5fYp.css">
//   </head>
//   <body>
//     <div id="root"><!--app-html--></div>

// <!--<script type="module" src="/src/main.tsx"></script>-->    
//   </body>
// </html>`;
// const templatea = fs.readFileSync('./index.html', 'utf-8');
// router.get("*", (req, res) => {

//   const rendered = render();

//   const html = templatea.replace(`<!--app-html-->`, rendered.html ?? '');
//   res.send(html)
// } );

// api.use("*", router);

// export const handler = serverless(api);
/**
 * //---------------------------- Error
 const router = Router();
import fs from 'node:fs';
import express, { Router } from "express";
import serverless from "serverless-http";
import { createServer } from 'vite';
import sirv from 'sirv';
import serverRender from '../dist/server/entry-server.js'

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction ? fs.readFileSync('./dist/client/index.html', 'utf-8') : '';
const ssrManifest = isProduction
  ? fs.readFileSync('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  vite = (async () => {await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })})();
  app.use(vite.middlewares);
} else {
  const compression = ( async () =>{await import('compression')})().default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = fs.readFileSync('./index.html', 'utf-8');
      template = (async () => {await vite.transformIndexHtml(url, template)})();
      render = (async () => {(await vite.ssrLoadModule('/src/entry-server.tsx')).render})();
    } else {
      template = templateHtml;
      render = serverRender;
    }

    const rendered = (async () => {await render(url, ssrManifest)})();

    const html = template.replace(`<!--app-html-->`, rendered.html ?? '');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.use("*", router);

export const handler = serverless(app);
 */



/** ----------------------- prod ok, dev use.app require midlware
 import fs from 'node:fs';
import express, { Router } from "express";
import serverless from "serverless-http";
import sirv from 'sirv';
import serverRender from '../dist/server/entry-server.js'
import com from'compression' ;
const router = Router();
const isProduction = process.env.NODE_ENV === 'production';
const base = process.env.BASE || '/';
// Cached production assets
const templateHtml = isProduction ? fs.readFileSync('./dist/client/index.html', 'utf-8') : '';
const ssrManifest = isProduction
  ? fs.readFileSync('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
// const compression = ( async () =>{await import('compression')})().default;
let vite;
if (!isProduction) {
  vite = (async () => {await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })})();
  app.use(vite.middlewares);
} else {
  app.use(com());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');
    let template;
    let render;

    if (!isProduction) {
      // Always read fresh template in development
      template = fs.readFileSync('./index.html', 'utf-8');
      template = (async () => {await vite.transformIndexHtml(url, template)})();
      render = (async () => {(await vite.ssrLoadModule('/src/entry-server.tsx')).render})();
    } else {
      template = templateHtml;
      render = serverRender;
    }

    const rendered = (async () => {await render(url, ssrManifest)})();

    const html = templateHtml.replace(`<!--app-html-->`, rendered.html ?? '');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

export const handler = serverless(app);
 */



 //----------------------------- work without image, only prod
/**
  import fs from 'node:fs';
import express, { Router } from "express";
import serverless from "serverless-http";
import sirv from 'sirv';
import serverRender from '../dist/server/entry-server.js'
import com from'compression' ;

const router = Router();
const base = process.env.BASE || '/';
// Cached production assets
const templateHtml = fs.readFileSync('./dist/client/index.html', 'utf-8');
const ssrManifest = fs.readFileSync('./dist/client/.vite/ssr-manifest.json', 'utf-8');

// Create http server
const app = express();

// Add Vite or respective production middlewares
// const compression = ( async () =>{await import('compression')})().default;

app.use(com());
app.use(base, sirv('./dist/client', { extensions: [] }));


// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    const rendered = (async () => {await serverRender(url, ssrManifest)})();

    const html = templateHtml.replace(`<!--app-html-->`, rendered.html ?? '');
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.use("*", router);

export const handler = serverless(app);
 */
