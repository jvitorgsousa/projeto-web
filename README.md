# projeto-web
Um projeto simples relacionado a desenvolvimento Web. <br>
O projeto consiste num site básico de listagem dos jogos de um usuário.
Cada jogo _pode_ ser registrado na _biblioteca_ de um _jogador_, em seguida, o usuário irá poder decidir o status que o jogo registrado está de acordo com as horas jogadas.

# Tecnologias Usadas
- HTML
- CSS
- JavaScript
- Node.js
- Express

# Modelagem
```
### Jogo
Representa a entidade global do jogo no sistema.
- **Atributos:** `id`, `titulo`, `genero`, `plataforma`, `desenvolvedora`, `capa_url`, `status`.

### Jogador
Representa o utilizador no sistema.
- **Atributos:** `id`, `nome`, `email`, `senha`, `data_cadastro`.

### Biblioteca.
Representa o catálogo de jogos de um jogador, também é a ponte entre as dois classes.
- **Atributos:** `id`, `jogador_id`, `jogo_id`, `horas_jogadas`.
- **Relacionamentos:** `1:1` com Jogador e `1:N` com Jogo.
```
