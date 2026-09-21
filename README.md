# Frontend diagnostické zadanie

## Kontext

Toto zadanie slúži na praktické overenie práce s Vue a frontendovým rozhraním. Nehodnotí sa iba výsledný screenshot, ale aj spôsob uvažovania, kvalita implementácie a schopnosť vysvetliť a upraviť vlastný kód.

Všetky tri fázy zadania sú známe od začiatku. Implementuj ich postupne a po každej fáze absolvuj krátke 1:1 review.

## Technológie a spustenie

Projekt používa Vue 3, Vite a JavaScript.

```bash
npm install
npm run dev
```

## Čas

Na celé zadanie máš približne 90 minút. Nemusíš dokončiť všetko. Funkčné a zrozumiteľné riešenie je hodnotnejšie než množstvo nedokončených detailov.

## Fáza 1 – layout a vizuál

Detailné zadanie a low-fi referenčný sketch sú v [`phases/01-layout/README.md`](phases/01-layout/README.md).

Vytvor základnú produktovú kartu pre bezdrôtové slúchadlá:

- použi údaje zo `src/data/product.js`,
- kartu navrhni tak, aby sa dala použiť pre iný produkt bez prepisovania jej obsahu,
- zobraz produktový obrázok, kategóriu, názov, popis, cenu a dostupnosť,
- rozumne interpretuj layout, spacing, typografiu, farby a proporcie sketchu,
- hodnoty produktu nevpisuj priamo do template,
- aplikácia nesmie mať chyby v konzole.

Referenčný obrázok je iba orientačný mockup. Neočakáva sa pixel-perfect kópia.

## Fáza 2 – interakcie

Detailné zadanie a sketch aktívneho stavu sú v [`phases/02-interaction/README.md`](phases/02-interaction/README.md).

Rozšír aplikáciu na tri produktové karty z `src/data/products.js` a doplň:

- quantity so začiatočnou hodnotou `1`,
- tlačidlo `+`, ktoré zvýši quantity o `1`,
- tlačidlo `−`, ktoré quantity nezníži pod `1`,
- maximum quantity `9` a deaktiváciu `+` na maxime,
- favourite toggle s viditeľnou zmenou vzhľadu,
- text tlačidla „Pridať do košíka“, ktorý zodpovedá aktuálnej quantity,
- každá karta sa musí správať nezávisle,
- použiteľnosť pomocou klávesnice a zrozumiteľnosť pre asistenčné technológie.

## Fáza 3 – lokálny košík a API

Detailné zadanie a finálny sketch sú v [`phases/03-cart-api/README.md`](phases/03-cart-api/README.md).

Rozšír existujúce produktové karty tak, aby:

- tlačidlo „Pridať do košíka“ zmenilo lokálny obsah košíka bez volania API,
- košík sa zobrazil nad kartami iba vtedy, keď nie je prázdny,
- košík zobrazoval produkty, množstvá a celkovú cenu,
- košík obsahoval tlačidlo „Odoslať objednávku“.

Pri odoslaní košíka vykonaj:

```http
POST /api/cart
Content-Type: application/json
```

Payload má mať tvar:

```json
{
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 1 }
  ]
}
```

Lokálny endpoint po približne 2 sekundách zámerne vráti `500`. Počas requestu zobraz loading, zabráň opakovanému odoslaniu, zobraz zrozumiteľnú chybu a pri chybe zachovaj obsah košíka. Chyba nesmie zostať ako neošetrený error v konzole.

## 1:1 review po každej fáze

Po dokončení každej fázy si priprav krátke vysvetlenie:

- čo si implementoval a prečo,
- kde aplikácia uchováva údaje, ktoré sa menia, a prečo,
- ako sa informácie prenášajú medzi časťami aplikácie,
- čo by si ďalej refaktoroval alebo zlepšil.

Počas review môžeš dostať doplňujúcu otázku alebo malú live zmenu existujúceho riešenia.

## Git workflow

Pracuj vo vlastnej branchi a fázy odovzdávaj samostatnými commitmi:

```bash
git checkout -b candidate/your-name
git add .
git commit -m "Complete phase 1"
git push -u origin candidate/your-name
```

Po každej fáze udržuj aplikáciu spustiteľnú a commit správu zrozumiteľnú.

## Pomoc a AI

Dokumentáciu, internet alebo AI používaj tak, ako by si ich bežne použil pri práci. Ak použiješ AI, musíš vedieť vysvetliť každú časť kódu, ktorú odovzdáš.
