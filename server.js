const express = require('express');

const app = express();
const PORT = 3000;

const quotes = [
    { author: "Albert Einstein", text: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre." },
    { author: "Oscar Wilde", text: "Soyez vous-même, les autres sont déjà pris." },
    { author: "Confucius", text: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute." },
    { author: "Mark Twain", text: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait." },
    { author: "Victor Hugo", text: "L'avenir a plusieurs noms. Pour les faibles, il est l'inaccessible. Pour les craintifs, il est l'inconnu. Pour les courageux, il est l'opportunité." }
];

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API de citations ! Essayez /random-quote');
});

// Route qui renvoie une citation aléatoire
app.get('/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
