# Orvane Paris E-commerce Site

Site web e-commerce pour Orvane Paris avec intégration Stripe pour paiements réels.

## Installation

1. Installez les dépendances :
   ```
   npm install
   ```

2. Créez un compte Stripe et obtenez vos clés API :
   - Allez sur [Stripe Dashboard](https://dashboard.stripe.com/)
   - Créez un compte (ou utilisez le mode test)
   - Récupérez votre clé secrète (`sk_test_...`) et clé publique (`pk_test_...`)

3. Remplacez les clés dans `server.js` et `checkout.html` :
   - Dans `server.js` : `'sk_test_YOUR_STRIPE_SECRET_KEY'`
   - Dans `checkout.html` : `'pk_test_YOUR_STRIPE_PUBLISHABLE_KEY'`

## Lancement

```
npm start
```

Le serveur démarrera sur http://localhost:3000

## Utilisation

- Ouvrez http://localhost:3000/orvane_site_unique.html
- Ajoutez des produits au panier
- Allez au panier et procédez au paiement
- Utilisez les cartes de test Stripe pour les paiements (ex: 4242 4242 4242 4242)

## Fonctionnalités

- Panier avec localStorage
- Intégration Stripe Checkout pour paiements sécurisés
- Confirmation de commande avec numéro et délai de livraison
- Design responsive

## Remarques

- En mode test, les paiements sont simulés
- Pour la production, changez les clés et configurez le domaine dans Stripe