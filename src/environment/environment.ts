// Définir une interface pour typer l'environnement
interface Environment {
    production: boolean;
    apiUrl: string;
    baseUrl: string;
  }
  
  // Utiliser "let" pour permettre la réassignation, avec le type explicite
  let environment: Environment;
  
  if (process.env.NODE_ENV === 'production') {
    environment = require('./environment.prod').environment as Environment;
  } else {
    environment = require('./environment.dev').environment as Environment;
  }
  
  export { environment };
  