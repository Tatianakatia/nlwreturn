import express from 'express';
import { routes } from './routes';

/**
 * SOLID
 * 
 * 1. Single Responsibility Principle
 * 2. Open/Closed Principle
 * 3. Liskov Substitution Principle
 * 4. Interface Segregation Principle
 * 5. Dependency Inversion Principle
 * 
 * 1. Each class has a unique responsibility;
 * 2. The classes of application should be open for extension but close for modification;
 * 3. We should can replace a parent class with an inheritance from it and everything continues to work heritage  
 * 4. ...
 * 5. the way change a class 
 **/


const app= express();

app.use(express.json());
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running!')
})

// Dev: SQLite - only for development
// Prd: PostgreSQL
// ORM: Prisma
