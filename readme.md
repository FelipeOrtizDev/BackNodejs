<h1> 🚀 Apresentação  </h1> 

Olá, meu nome é Felipe Ortiz e fui o responsável por este projeto. Neste documento, serão apresentadas as ideias por trás do projeto e algumas explicações úteis e dicas para ajudar programadores iniciantes.

<h2>Motivação</h2> 

Esta estrutura básica de CRUD de usuário foi criada com o intuito de ser um modelo para projetos escaláveis no futuro. A partir dela, é um bom começo para qualquer estrutura de backend de usuário.

No futuro, tenho a intenção de atualizar este projeto e torná-lo mais robusto.

<h2>Estrutura</h2> 

A estruturação foi feita utilizando o framework fastify.js e o banco de dados MongoDB.

O projeto foi feito com a Clean Architecture com o intuito de ser escalável e de fácil manutenção.

 <h1> ⚙️ Tecnologias utilizadas </h1>

Node.js
Fastify.js
MongoDB

<h2> Executando o projeto<h2/>

Para iniciar, siga os passos abaixo:

Clone o repositório.

<h3> ✅ Instale as dependências  </h3> 

```
npm install
```

<h3> ✅ Execute o projeto </h3>

```
npm run dev
```

<h3> ✅ Acesse o projeto  </h3> 

```
http://0.0.0.0:3000/user
```

<h1> 📱 Endpoints </h1>

O projeto utiliza a extensão Rest Client do VSCode para realizar as chamadas dos endpoints por meio do arquivo Routes.http, que está na raiz do projeto. No entanto, sinta-se livre para usar o Postman ou qualquer outro cliente de sua preferência, já que o projeto está configurado para receber requisições via HTTP.

As requisições HTTP estão com maturidade 2, onde os métodos GET, POST, PUT e DELETE estão implementados e automaticamente identificam os tipos de métodos pelo chamado que está sendo feito, trazendo mais segurança para o projeto e melhor escalonamento.

Os Endpoints do projeto estão listados abaixo:

GET /user
GET /user/:id (esse endpoint é para a busca de apenas um usuário)
POST /user
PUT /user/:id
DELETE /user/:id

<h1>  📱 Estrutura de padronização </h1> 

O projeto possui uma estrutura que utiliza aspas duplas para strings, ponto e vírgula para finalizar uma linha de código e tab para identação. Embora o JavaScript não possua um padrão de identação, o projeto foi padronizado para facilitar a leitura e manutenção do código e, num futuro, facilitar a migração para TypeScript ou qualquer outra linguagem de escolha.

O projeto foi desenvolvido utilizando Clean Architecture, como mencionado anteriormente, e a estrutura de pastas é a seguinte:

<h3>Controllers</h3> - Responsável pela abstração da lógica de negócios e pelo tratamento das informações que vêm do usuário. São divididos em 4 controladores principais:

UserCreateController.js
UserDeleteController.js
UserGetController.js (sendo essa a única exceção, já que possui dois métodos dentro dele: GetÚnico e GetAll)
UserUpdateController.js
Isso faz com que o código fique mais limpo e fácil de tratar erros, tornando-o mais fácil de ser mantido.

<h3>Service</h3> - Responsável pela abstração que contém a lógica de negócios de alto nível e serve como um intermediário entre os controladores e os repositórios.

<h3>Repositories</h3> - Responsável por abstrair o acesso aos dados e a persistência. Atua como interface entre a lógica de negócios e o banco de dados ou qualquer outro mecanismo de armazenamento de dados.

<h3>Models</h3>- Camada fundamental para a estrutura do projeto, contendo as entidades, objetos de valor, agregados, eventos de domínio e exceções de domínio.

<h3>DB</h3> - Responsável pela conexão com o banco de dados.

<h1> 📱 Dicas  </h1> 

Dica 1: Proteção do acesso ao seu banco - Muitas vezes, programadores inexperientes acabam enviando informações cruciais do seu banco de dados ao versionar um código no GitHub, o que é prejudicial. Para evitar esse problema, utilize um arquivo .env para registrar a chave de acesso do seu banco e passe esse registro como referência para a função que realizará a conexão. Em seguida, adicione o arquivo .env no .gitignore, tornando assim mais seguro o seu banco na hora de versionar o código no GitHub.

Dica 2: Sempre verifique como o seu banco entrega as informações. Por exemplo, o MongoDB envia as informações de ID por meio de uma string, o que pode causar problemas na hora de realizar a troca de informações, haverá a necessidade de realizar um tratamento mais específico da informação. Sempre esteja atento a isso.

<h1> 🚀 Considerações finais </h1> 

Ao longo do tempo, continuarei atualizando o projeto com mais informações e o tornando mais robusto. Informarei por meio deste arquivo, com dicas e guias, afinal, conhecimento é sempre um grande aliado para o sucesso. Obrigado por ler até aqui, e espero que tenha gostado do projeto e que ele possa te ajudar em algum momento.
