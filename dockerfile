# Basis-Image definieren
FROM node:14

# Arbeitsverzeichnis definieren
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Kopieren der Projektdateien
COPY . .

# Frontend bauen
RUN npm run build

# Port für Frontend definieren
EXPOSE 3000

# Starten der Anwendung
CMD ["npm", "start"]
