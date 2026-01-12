# Configuration de l'envoi d'emails

Ce projet utilise **Web3Forms** pour gérer les soumissions de formulaires de contact.

## Étapes de configuration

### 1. Créer un compte Web3Forms (gratuit)

1. Allez sur [https://web3forms.com/](https://web3forms.com/)
2. Cliquez sur "Get Started for Free"
3. Créez un compte avec votre email: **estherbergman16@gmail.com**
4. Vérifiez votre email

### 2. Obtenir votre Access Key

1. Une fois connecté, créez un nouveau formulaire
2. Copiez votre **Access Key** (quelque chose comme: `abc123def-4567-8901-2345-67890abcdef1`)

### 3. Configurer l'environnement local

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez `your_access_key_here` par votre Access Key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=abc123def-4567-8901-2345-67890abcdef1
   ```
3. Sauvegardez le fichier

### 4. Configurer Vercel

1. Allez dans votre projet sur Vercel
2. Settings → Environment Variables
3. Ajoutez une nouvelle variable:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** Votre Access Key de Web3Forms
4. Sauvegardez et redéployez

### 5. Tester

1. En local: `npm run dev`
2. Allez sur la section Contact
3. Entrez votre email et cliquez sur "Démarrer maintenant"
4. Vous devriez recevoir un email de notification à **estherbergman16@gmail.com**

## Fonctionnalités

- ✅ Envoi d'emails gratuit (jusqu'à 250/mois sur le plan gratuit)
- ✅ Notification instantanée sur votre email
- ✅ Protection anti-spam intégrée
- ✅ Compatible avec Vercel
- ✅ Aucun backend nécessaire

## Support

Pour toute question sur Web3Forms: [https://web3forms.com/docs](https://web3forms.com/docs)
