# User Management Application

A simple full-stack User Management application built using:

- Backend: Spring Boot
- Frontend: Angular
- Database: MySQL
- ORM: JPA / Hibernate

---

## 🚀 Features

- Create User
- View All Users
- Update User
- Delete User
- REST API Integration
- MySQL Database Persistence

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL

### Frontend
- Angular
- TypeScript
- Reactive Forms
- HttpClient

---

## 📂 Project Structure

### Backend
```
com.user
 ├── controller
 ├── entity
 ├── repository
 ├── service
```

### Frontend
```
src/app
 ├── components
 ├── services
 ├── models
```

---

## ⚙️ Backend Setup

1. Clone the repository  
2. Configure `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

3. Run Spring Boot application

```
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## ⚙️ Frontend Setup

1. Navigate to Angular project

```
cd user-frontend
```

2. Install dependencies

```
npm install
```

3. Run Angular app

```
ng serve
```

Frontend runs at:

```
http://localhost:4200
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| GET    | /users         | Get all users      |
| GET    | /users/{id}    | Get user by id     |
| POST   | /users         | Create new user    |
| PUT    | /users/{id}    | Update user        |
| DELETE | /users/{id}    | Delete user        |

---

## 🗄️ Database Table

```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    phonenumber VARCHAR(255)
);
```

---

## 🧪 How to Test

- Start MySQL  
- Run Spring Boot  
- Run Angular  
- Use the UI to create, edit, and delete users  

---

## 📌 Conclusion

This project is a simple demo application created to demonstrate full-stack development using Angular and Spring Boot. It showcases basic CRUD operations, REST API integration, and database connectivity with MySQL.

The application serves as a foundational example for understanding how frontend and backend systems communicate in a modern web application architecture.
