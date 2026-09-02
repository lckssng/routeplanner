# Groep 8 Routeplanner

Deze routeplanner helpt groep-8-leerlingen om op basis van hun antwoorden passende middelbare scholen en mogelijke vervolgopleidingen te bekijken. De applicatie is gebouwd met Alpine.js, Tailwind CSS en Vite.

## Benodigdheden

Installeer voordat je begint:

- [Node.js](https://nodejs.org/) versie 20.19 of nieuwer;
- npm (wordt automatisch samen met Node.js geïnstalleerd).

## Routeplanner starten

Open PowerShell en ga naar de projectmap:

```powershell
cd C:\Users\lucak\Documents\GitHub\routeplanner
```

Installeer de benodigde packages. Dit hoeft normaal gesproken alleen de eerste keer:

```powershell
npm.cmd install
```

Start daarna de ontwikkelserver:

```powershell
npm.cmd run dev
```

In PowerShell verschijnt vervolgens een lokaal adres, meestal:

```text
http://localhost:5173/routeplanner/
```

Open dit adres in je browser. Laat het PowerShell-venster open zolang je de routeplanner gebruikt. Stop de server met `Ctrl+C`.

> Gebruik in PowerShell `npm.cmd` in plaats van `npm` wanneer je de melding krijgt dat het uitvoeren van scripts is uitgeschakeld. Je hoeft hiervoor de execution policy van Windows niet aan te passen.

## Beschikbare pagina's

- Routeplanner: `http://localhost:5173/routeplanner/`
- Technische userflow: `http://localhost:5173/routeplanner/user-flow.html`
- Alternatieve flowchart-link: `http://localhost:5173/routeplanner/flowchart.html`

## Productieversie maken

Maak een geoptimaliseerde versie van de website met:

```powershell
npm.cmd run build
```

De gebouwde bestanden komen in de map `dist` te staan.

Je kunt deze productieversie lokaal controleren met:

```powershell
npm.cmd run preview
```

Open daarna het adres dat in PowerShell verschijnt.

## Publiceren via GitHub Pages

De workflow in `.github/workflows/deploy-pages.yml` bouwt en publiceert de website automatisch wanneer je naar de branch `github-pages` pusht.

Stel GitHub eenmalig als volgt in:

1. Open de repository op GitHub en ga naar **Settings** → **Pages**.
2. Kies bij **Source** voor **GitHub Actions**.
3. Push de projectbestanden naar de branch `github-pages`.
4. Controleer de voortgang via het tabblad **Actions**.

Na een geslaagde deployment staat de routeplanner op:

```text
https://lckssng.github.io/routeplanner/
```

De Vite-instelling `base: '/routeplanner/'` zorgt ervoor dat scripts, CSS, lettertypen en afbeeldingen vanaf het juiste GitHub Pages-subpad worden geladen.

## Antwoorden opslaan

De antwoorden van de leerling worden lokaal in de browser opgeslagen met `localStorage`. Er is geen database of account nodig. Wanneer de browsergegevens worden gewist of de routeplanner in een andere browser wordt geopend, zijn de eerder opgeslagen antwoorden niet beschikbaar.

## Gebruikte technieken

- Alpine.js voor de interactie en gebruikersstatus;
- Tailwind CSS voor de vormgeving;
- Vite voor de ontwikkelserver en productiebuild;
- Nunito als lettertype.
