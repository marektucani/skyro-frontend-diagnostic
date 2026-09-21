# Vstupné zadanie – Frontend

## Kontext

Toto zadanie slúži na zistenie, ako momentálne pristupuješ k tvorbe frontendu. Nejde najmä o to, aby bolo všetko úplne dokonalé. Dôležité je ukázať, čo vieš samostatne vytvoriť, ako premýšľaš nad požiadavkami a ako píšeš kód.

## Čas

90 minút

## Spustenie projektu

V termináli v priečinku projektu spusti:

```bash
npm install
npm run dev
```

Otvoriť môžeš adresu, ktorú vypíše terminál. Projekt používa Vue 3, Vite, JavaScript, Composition API a `<script setup>`.

## Zadanie

Podľa obrázka [`reference/product-card-reference.png`](reference/product-card-reference.png) vytvor produktovú kartu pre bezdrôtové slúchadlá. Snaž sa rozloženie, medzery, typografiu, farby, okraje a zarovnanie napodobniť čo najrozumnejšie. Nemusí ísť o úplne pixelovo presnú kópiu.

Pripravené súbory:

- `src/data/product.js` obsahuje údaje o produkte,
- `public/product-headphones.png` je obrázok produktu,
- `src/components/ProductCard.vue` je miesto pre tvoju implementáciu,
- `src/App.vue` je minimálny vstupný komponent aplikácie.

## Povinné požiadavky

- [ ] Vzhľad karty sa rozumne podobá na referenčný dizajn.
- [ ] Produktová karta je vytvorená ako znovupoužiteľný Vue komponent.
- [ ] Informácie o produkte komponent prijíma cez props. Hodnoty produktu nesmú byť všetky napísané priamo v template.
- [ ] Quantity je reaktívny stav a na začiatku má hodnotu `1`.
- [ ] Tlačidlo `+` zvýši quantity o 1.
- [ ] Tlačidlo `−` zníži quantity o 1, ale nikdy nie pod hodnotu `1`.
- [ ] Ovládací prvok so srdcom prepína favourite medzi aktívnym a neaktívnym stavom. Zmena musí byť vo vzhľade viditeľná.
- [ ] Rozhranie správne reaguje na všetky zmeny stavu.
- [ ] V konzole prehliadača nie sú žiadne chyby.
- [ ] Hotové riešenie je uložené v Git commite.

## Bonus

Bonusové úlohy rieš až po dokončení povinných požiadaviek. Nie sú potrebné na dobré základné riešenie.

- [ ] Maximálna quantity je `9` a tlačidlo `+` je na maxime deaktivované.
- [ ] Karta sa rozumne prispôsobí menšej obrazovke.
- [ ] Ovládanie je prístupné a použiteľné aj pomocou klávesnice.
- [ ] HTML používa vhodné sémantické prvky.
- [ ] Text tlačidla sa mení podľa quantity, napríklad `Pridať 3 ks do košíka`.
- [ ] Riešenie je rozdelené do zmysluplných menších komponentov.
- [ ] Z poľa produktov sa vykreslí viac produktových kariet.
- [ ] Tam, kde je to vhodné, je použitý odvodený stav pomocou `computed`.

## Odovzdanie

1. Dokonči implementáciu v rozsahu, ktorý stihneš.
2. Skontroluj aplikáciu a konzolu prehliadača.
3. Ulož svoju prácu do Gitu so zmysluplnou správou, napríklad:

```bash
git add .
git commit -m "Complete frontend diagnostic task"
```

Nie je potrebné vytvárať ďalšie branche.

## Pomoc a internet

Dokumentáciu alebo internet používaj tak, ako by si ich bežne použil pri práci. Ak sa na niečom zasekneš, pokračuj inou časťou a urob to, čo dokážeš. Nedokončené riešenie je v poriadku. Funkčný a zrozumiteľný kód je hodnotnejší než snaha dokončiť za každú cenu všetko.

Ak použiješ AI, musíš vedieť vysvetliť každú časť kódu, ktorú odovzdáš.
