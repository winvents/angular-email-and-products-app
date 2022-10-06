# 🦅 **Aplicação Angular - Email and Products App**

**Microservice And Web Engineering**

* *Turma:* 3SIT FIAP
* *Graduação:* Sistemas de Informação
* *Ano:* 2022

| Autor               | RM                                                |
| ----------------- | ---------------------------------------------------------------- |
| Isabela Caovila Baldim        | 84141 |
| João Vitor Mendes Maria       | 85041 |
| Jonathan Rodrigues Gonçalves  | 85312 |
| Lucas Remedi Markarian Pavão  | 84451 |
| Matheus Nathan Modanez        | 86065 |

## 👨🏻‍💻 O Projeto

Nossa aplicação se trata de um webapp desenvolvido em Angular com utilização das bibliotecas material para estilização e exibição de tabelas paginadas. Os dados são consumidos de duas APIs.

# Setup

Antes de rodar o comando para subir a aplicação, é preciso ter os serviços do backend de pé (email-api e products-api).
Além disso, para os dados serem renderizados, precisamos através do Postman realizar a criação das entidades.

✅ Envio de e-mail
------------------------------------------------------------------------
Abra o arquivo 
``` 
email-api.postman_collection.json
``` 
que se encontra em
``` 
\email-api\application\src\main\docs\postman 
```
**Rode o script *Send Email*.**

✅ Criação de categoria e produto
------------------------------------------------------------------------
Agora abra o arquivo 
``` 
product-api.postman_collection
``` 
que se encontra em
``` 
\product-api\product\src\main\docs\postman
```
**Rode os scripts *Create new cathegory* e *Create new product*.**

✅ Subindo a aplicação Angular
------------------------------------------------------------------------
Utilize o comando
```
npm start
```
