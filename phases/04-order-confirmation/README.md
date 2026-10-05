# Fáza 4 – správa košíka a potvrdenie objednávky

Podľa [`design/cart-management-confirmation-sketch.png`](design/cart-management-confirmation-sketch.png) rozšír existujúci košík.

Košík musí spĺňať tieto pravidlá:

- opakované pridanie rovnakého produktu upraví jeho existujúcu položku,
- pri každej položke je možné upraviť množstvo alebo ju odstrániť,
- množstvo položky neklesne pod `1`,
- celková cena sa po každej zmene správne prepočíta,
- pri odstránení poslednej položky sa košík skryje.

Tlačidlo „Odoslať objednávku“ teraz volá úspešný endpoint:

```http
POST /api/orders
Content-Type: application/json
```

Odošli aktuálny obsah košíka v tomto formáte:

```json
{
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 1 }
  ]
}
```

Počas odosielania zobraz loading a zabráň opakovanému odoslaniu. Po úspešnej odpovedi zobraz potvrdenie s `orderId` a vyčisti košík. Potvrdenie obsahuje tlačidlo „Pokračovať v nákupe“, ktoré zatvorí potvrdenie a zobrazí produkty.

Po dokončení si priprav vysvetlenie, ako riešenie rozlišuje pridanie rovnakého produktu, úpravu množstva, odstránenie položky a úspešné odoslanie.
