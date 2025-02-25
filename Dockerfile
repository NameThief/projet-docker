# 1. Utiliser une image de base légère avec Node.js
FROM node:18-alpine

# 2. Définir le répertoire de travail dans le conteneur
WORKDIR /app

# 3. Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# 4. Installer les dépendances sans installer les devDependencies
RUN npm install --omit=dev

# 5. Copier le reste du code de l’application
COPY . .

# 6. Exposer le port 3000 pour accéder à l’application
EXPOSE 3000

# 7. Définir la commande de démarrage de l’application
CMD ["node", "server.js"]
