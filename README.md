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

✅ Testando o Angular App
------------------------------------------------------------------------
Devemos conseguir ver os emails enviados e filtrá-los por uma data específica.
![image](https://user-images.githubusercontent.com/52979585/195611502-0a1cbd65-7010-40d5-b146-5cedb6f100e3.png)

Aplicando um filtro que não contempla nenhum registro no banco de dados:
![image](https://user-images.githubusercontent.com/52979585/195613532-83105497-1d60-41d8-87f0-240aec1ea107.png)

🆕 Cadastrando um produto
------------------------------------------------------------------------
No formulário de cadastro, podemos inserir todas as informações da entidade Produto. Na service criada no Angular, por debaixo dos panos, fazemos uma consulta na API das categorias previamente inseridas no banco e renderizamos em um dropdown, já que essa também é uma entidade.
![image](https://user-images.githubusercontent.com/52979585/195612718-6c42cbe3-e7aa-4630-9375-8532bcab4032.png)

Vemos o dado devidamente renderizado após a inserção.
![image](https://user-images.githubusercontent.com/52979585/195612953-971f3858-48f1-4e72-85c5-fda953403937.png)

## Feedback

*Obrigada por chegar até aqui, professor! Se você tiver algum feedback, por favor nos deixe saber pelo Teams*
