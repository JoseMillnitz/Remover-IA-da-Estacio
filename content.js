(function () {
  const seletor = 'div[aria-label="Chat com Assistente de IA"]';
  const tempoMaximo = 30000; // vamos esperar no maximo 30 segundos para net lentas
  const intervalo = 200; // vamos verificar a cada 200ms
  let tempoDecorrido = 0;

  const verificarElemento = setInterval(() => {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      console.log("Chat encontrado e removido.");
      elemento.remove();
      clearInterval(verificarElemento);
    }

    tempoDecorrido += intervalo;

    if (tempoDecorrido >= tempoMaximo) {
      clearInterval(verificarElemento);
      console.log("Chat não encontrado após 30 segundos.");
    }
  }, intervalo);
})();
