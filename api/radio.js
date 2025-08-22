export default async function handler(req, res) {
const url = "https://onair20.xdevel.com/proxy/vallecamonica?mp=/;stream/;";
try {
const upstream = await fetch(url); // Node 18+ ha fetch globale
if (!upstream.ok) {
res.status(502).send("Errore sorgente stream");
return;
}
res.setHeader("Content-Type", "audio/mpeg");
res.setHeader("Cache-Control", "no-store");
upstream.body.pipe(res);
} catch (e) {
res.status(500).send("Errore proxy");
}
}
