## Desafio 20200630 - Back-End: Node ou PHP, MySQL & Angular 2+
 
 
### Obrigatório
 
- Trabalhar em um FORK deste repositório em seu usuário;
- O projeto Web deve utilizar Angular superior a versão 2;
- O projeto back-end deverá ser desenvolvido em Node(JS / TS) ou em PHP;
- O Front-End deve utilizar Material UI: https://material-ui.com ou https://bulma.io;
- Os produtos disponíveis no projeto Front-End Angular devem ser recuperados através da API Rest Back-End Node ou PHP;
 
## API / Back-End Node.js
 
- Criar um banco de dados MySQL no Heroku: https://elements.heroku.com/addons/jawsdb
- Criar uma API REST usando Node ou PHP com os seguintes endpoints:
 - `GET /`: Detalhes da API
 - `POST /products`: O endpoint irá processar o [products.json](products.json) que será enviado pelo Projeto Web
 - `PUT /products/:productId`: Será responsável por receber atualizações realizadas no Projeto Web
 - `DELETE /products/:productId`: Remover o produto da base
 - `GET /products/:productId`: Obter a informação somente de um produto da base de dados
 - `GET /products`: Listar todos os produtos da base de dados
- Integrar a API com o banco de dados MySQL criado no Heroku para persistir os dados
- [Diferencial] Usar o MySQL / MariaDB no Docker

 
## Front-End Angular
 
![Home](assets/images/home.png)

### Upload de produtos
 
Seu objetivo é montar uma tela para a equipe de produtos importar os arquivos JSON gerados pelo sistema de manufatura da empresa ao novo Dashboard. 
Nesta tela devemos adicionar um campo do tipo File que somente permite arquivos .json e tem faça a validação dos arquivos anexados antes de serem enviados a REST API. 
Somente arquivos válidos podem ser enviados ao Dashboard. [Recomendado adicionar alertas de validações]. O PO do projeto deixou uma sugestão de mockup acima.


 
#### Listar produtos
 
Criar uma sessão na tela com uma tabela para listar os produtos processados pela API. É importante ter os seguintes campos:
 
        - Title
        - Type
        - Rating
        - Price
        - Created (Data do upload do produto a nova base de datos)
        - Actions (Botões Editar e Excluir)
 
#### Editar produto
 
Na tabela com os produtos precisamos disponibilizar os formulários com todos os campos dos produtos para que a equipe possa editá-los. 
Fazer validação de alguns campos obrigatórios:

        - Title
        - Type
        - Price
 
#### Remover produto
 
Antes de completar a ação de remover produto, devemos perguntar ao usuário se ele realmente 
quer realizar a ação. Para evitar a remoção de produtos de maneira indesejada. 
Após remover com êxito, notificar o usuário com um alerta de sucesso.
 

## Readme do Repositório
 
- Deve conter o título de cada projeto
- Uma descrição de uma frase
- Como instalar e usar o projeto (instruções)
 
