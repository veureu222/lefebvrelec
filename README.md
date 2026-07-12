# Tableau de repérage

Application de génération de tableau de repérage électrique (conforme RGIE), avec calculateur de section de câble, étiquettes disjoncteurs imprimables, et correcteur orthographique français intégré.

À l'origine développée comme artifact Claude.ai. Ce dossier la transforme en projet React autonome (Vite + Tailwind) que tu peux versionner sur GitHub et déployer où tu veux.

**100% gratuit et autonome** : tout tourne dans le navigateur, aucun serveur, aucune clé API, aucun compte à créer, aucune limite d'usage.

## Installation

```bash
npm install
npm run dev
```

Ouvre ensuite l'URL affichée dans le terminal (en général `http://localhost:5173`).

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

Le dossier `dist/` généré peut être déployé sur n'importe quel hébergeur statique et gratuit : GitHub Pages, Netlify, Vercel, Cloudflare Pages... Aucune configuration particulière, aucune variable d'environnement à renseigner.

## Déployer sur GitHub Pages

**Important** : GitHub Pages sert des fichiers tels quels — il ne lance jamais `npm run build` à ta place. Il faut construire le site en local (ou via une Action GitHub) puis pousser le résultat, pas le code source.

Façon la plus simple, avec le script déjà prêt dans `package.json` :

```bash
npm install
npm run deploy
```

Ça construit le site (`npm run build`) et pousse automatiquement le contenu de `dist/` sur une branche `gh-pages`. Ensuite, dans le repo GitHub : Settings → Pages → Source → branche `gh-pages`, dossier `/ (root)`. Le site sera visible à `https://<ton-compte>.github.io/<nom-repo>/` après une minute ou deux.

Deux détails déjà réglés dans ce projet pour que ça marche du premier coup sous un sous-dossier comme `/<nom-repo>/` :
- `vite.config.js` utilise des chemins relatifs (`base: './'`) pour que les fichiers CSS/JS se chargent correctement peu importe le sous-dossier
- Un fichier `.nojekyll` vide est inclus pour empêcher GitHub d'essayer de traiter le site avec Jekyll (qui peut ignorer ou casser certains fichiers générés par Vite)

Si tu préfères éviter cette histoire de sous-dossier : **Vercel** (déjà testé plus tôt dans cette conversation) sert chaque projet sur son propre domaine dès la racine, donc ce genre de souci de chemin ne se pose pas — importe le repo sur vercel.com, aucune config à toucher.

## Sauvegarde des chantiers

Le code détecte l'absence de `window.storage` (spécifique aux artifacts Claude.ai) et bascule automatiquement sur `localStorage` du navigateur. Tes chantiers sont donc sauvegardés localement, dans le navigateur utilisé — pas de compte, pas de synchronisation entre appareils/navigateurs, mais aussi pas de serveur ni de coût.

## Pousser sur GitHub

```bash
cd tableau-reperage
git init
git add .
git commit -m "Première version"
git branch -M main
git remote add origin https://github.com/<ton-compte>/<nom-repo>.git
git push -u origin main
```

## Structure

```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx      # point d'entrée React
    ├── index.css     # directives Tailwind
    └── App.jsx        # toute l'application
```
