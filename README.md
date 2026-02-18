# Remover-IA-da-Estacio
Remove o chat de IA da Estácio que abre automaticamente toda vez que você abre o site de estudante

para importar acesse seunavegador://extensions e clique em "carregar sem compactação"

suporte para navegadores de base chromium


# Contexto
Estava incomodado com o chat abrindo toda vez que eu abria o site, não importa para o que fosse ou até mesmo dar um F5
como cansei de clicar no X várias vezes eu só decidi fazer uma extensão para resolver meu problema inexistente, caso voce tenha o mesmo problema que eu, só importar

# Como funciona

A extensão vai procurar por 30 segundos (considerando internet lenta) para ver se o chat vai aparecer, ele procura pela div do balão flutuante da IA
se encontrar, ele remove do site
se não encontrar em 30 segundos, ele desiste

# Por que funciona?

Em grande resumo, o chat da IA está contido em um unico elemento, que é o balão flutuante, sendo ele tratado com um elemento pai, se voce deleta ele, ele remove o chat inteiro

# Outros casos que podem funcionar:

Se voce tem o mesmo problema que eu na sua faculdade, tente encontrar o elemento base do chat, mais rapido só dar um ctrl+shift+c (comando chrome), e monte um seletor web para ele e substitua 'div[aria-label="Chat com Assistente de IA"]' pelo seletor montado
dica: evite usar seletores com caracteristicas que podem ter certa aleatoriedade ou que podem ser alteradas a depender da tela