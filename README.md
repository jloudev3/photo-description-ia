# 📸 Photo Description IA

Une application web qui prend une photo avec ton téléphone et utilise l'IA pour la décrire automatiquement.

## 🚀 Déploiement en 1 clic

### Sur Vercel (recommandé)

1. Va sur https://vercel.com
2. Connecte ton compte GitHub
3. Clique "Import Git Repository"
4. Cherche `photo-description-ia`
5. Clique "Import"
6. Ajoute la variable d'environnement :
   - Nom: `ANTHROPIC_API_KEY`
   - Valeur: Ta clé API Anthropic
7. Clique "Deploy"
8. Attends 2 minutes
9. Tu reçois une URL → **ouvre ça sur ton téléphone** ✅

### Obtenir ta clé API Anthropic

1. Va sur https://console.anthropic.com
2. Crée un compte
3. Va dans "API Keys"
4. Clique "Create Key"
5. Copie-la et colle-la dans Vercel

## 📱 Utilisation

1. Ouvre l'app sur ton téléphone
2. Clique "Démarrer caméra"
3. Prends une photo
4. L'IA te décrit ce qu'elle voit ✨

## 💻 Développement local

```bash
npm install
ANTHROPIC_API_KEY=ta-clé npm start
```

Puis ouvre http://localhost:3000