# Fáza 3 – lokálny košík a odoslanie objednávky

Rozšír existujúce tri produktové karty o lokálny košík podľa [`design/product-grid-cart-sketch.png`](design/product-grid-cart-sketch.png).

Tlačidlo „Pridať do košíka“ nemá volať API. Musí zmeniť obsah lokálneho košíka.

Košík:

- zobraz iba vtedy, keď nie je prázdny,
- zobraz nad produktovými kartami,
- zobraz produkty, množstvá a celkovú cenu,
- obsahuje jedno tlačidlo „Odoslať objednávku“.

Tlačidlo „Odoslať objednávku“ odošle `POST` request na `/api/cart` s JSON payloadom:

```json
{
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 1 }
  ]
}
```

Počas requestu:

- zobraz loading stav,
- zabráň opakovanému odoslaniu,
- po odpovedi `500` zobraz používateľovi zrozumiteľnú chybu,
- nenechaj vzniknúť neošetrený error v konzole,
- pri chybe zachovaj obsah lokálneho košíka.

Lokálny endpoint odpovie po približne 2 sekundách. Po dokončení si priprav vysvetlenie, ako by si riešenie upravil, keby endpoint začal vracať aj úspešnú odpoveď.

Po odovzdaní si priprav krátke vysvetlenie, kde sa nachádza obsah košíka, ako sa doň pridávajú položky a ako by si oddelil API logiku od UI.
