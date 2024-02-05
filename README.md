<p align="center" backgroud="#000">
    <a href=" target="_blank"><img src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/869055/large_bf54d5f5c6b18a79823de602a5528298.png" width="200" alt="Laravel Logo"></a>
    <h3 align="center">Velocidade e precisão em
produtos e serviços digitais</h3>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
<img src="https://img.shields.io/badge/mysql-4479A1?style=flat&logo=mysql&logoColor=white" alt="Mysql">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">
</p>

# Cadastro de perfil 📈

# Backend - Wefit

## 🚀 API Rest desenvolvida em:<br/>
✔️**NODEJs 20+**<br/>
✔️**Express**<br/>
✔️**Prisma**<br/>
✔️**Mysql**<br/>
✔️**SOLID**<br/>
✔️**Documentação com Postman**<br/>

## 🚀 Deploy
-> Projeto foi hopedado em uma vps linux e pode ser encontrado no seguinte domínio profile-registration.if-developers.com.br

## 🚀 API
-> Endpoints **Perfil** :
profile(cadastra um novo perfil seja ele PF o PJ)<br/>


# 🚀 Como rodar o projeto:
> Primeiro certifique-se de ter o Nodejs instalado  em sua maquina.<br/><br/>

> crie o arquivo .env na raiz do seu projeto e preencha os seguintes campos:
```
MYSQLDB_PASSWORD=senha_root_123
MYSQLDB_PORT=3306
MYSQLDB_DATABASE=wefit
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```
<br/><br/>
> Para iniciar o banco em container docker:
```
docker-compose up -D
```
<br/><br/>
> Para criar as tabelas e dados de seu banco de dados rode os seguintes comandos:
```
npm install
npx prisma migrate dev --name init
npx prisma db seed
 ```
<br/><br/>
> Agora para executar seu projeto apenas rode:
```
npm run dev
```
<br/><br/>
# 🚀 Acesse...
- [Documentação Postman aqui](https://documenter.getpostman.com/view/12476316/2s9Yywez6k).
- [Hospedado aqui](https://profile-registration.if-developers.com.br)

<p align="center">
    <a href="" target="_blank"><img src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/869055/large_bf54d5f5c6b18a79823de602a5528298.png" width="150" alt="Laravel Logo"></a>
    <h5 align="center">Desenvolvido com ♥ por JF - 2023</h5>
</p>
