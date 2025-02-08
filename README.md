
# Projeto Site Simples

Este é um projeto simples com backend em **Spring Boot** e frontend em **HTML, CSS e JavaScript**.

## 📌 Requisitos
Antes de iniciar, certifique-se de ter instalado:
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/)
- [Docker](https://www.docker.com/)

## 🚀 Como Rodar o Projeto

### **Passo 1: Gerar o Build do Projeto**

Abra o terminal na raiz do projeto e execute:
```sh
mvn clean package -DskipTests
```
Isso irá gerar o arquivo **.jar** necessário para rodar o backend.

### **Passo 2: Subir os Contêineres Docker**

Agora, suba o ambiente Docker com:
```sh
docker compose up -d --force-recreate
```
Isso iniciará os serviços definidos no `docker-compose.yml`.

### **Passo 3: Acessar o Sistema**

Após iniciar os contêineres, acesse o sistema no navegador:
```
http://localhost:8080/
```

## 📜 Endpoints da API
Caso queira testar e ver a documenação da API via swagger, utilize o endpoints abaixo:
  ```sh
  http://localhost:8080/swagger-ui/index.html
  ```

## 🛠 Tecnologias Utilizadas
- **Backend:** Java 17, Spring Boot 3.3.2
- **Banco de Dados:** PostgreSQL
- **Frontend:** HTML, CSS e JavaScript
- **Containerização:** Docker e Docker Compose



