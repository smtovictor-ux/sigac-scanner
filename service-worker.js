self.addEventListener("install", event => {
  console.log("SIGAC Scanner instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("SIGAC Scanner ativo.");
});

self.addEventListener("fetch", event => {
  // Por enquanto, apenas deixa as requisições seguirem normalmente.
});