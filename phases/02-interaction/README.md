# Fáza 2 – tri karty a interakcie

Podľa [`design/product-cards-active-sketch.png`](design/product-cards-active-sketch.png) zobraz tri produktové karty z `src/data/products.js`.

- každá karta začína s quantity `1`,
- `+` zvýši quantity o `1`,
- `−` ju zníži, ale nikdy nie pod `1`,
- maximálna quantity je `9` a `+` je na maxime deaktivované,
- favourite tlačidlo prepína aktívny/neaktívny stav a zmena je vizuálne viditeľná,
- text tlačidla „Pridať do košíka“ zodpovedá aktuálnej quantity,
- každá karta sa musí správať nezávisle,
- rozhranie sa musí po každej zmene okamžite aktualizovať,
- ovládanie musí byť použiteľné klávesnicou a zrozumiteľné pre asistenčné technológie.

Ak máš čas, použi vhodné sémantické HTML a rozdeľ príliš veľký komponent na zmysluplné menšie časti.
