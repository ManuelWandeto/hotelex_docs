---
sidebar_position: 1
---
# Store Items Categorization

P.O.S Items are categorized into P.O.S categories while store items are categorized into store item categories.

**Integration** in the context of P.O.S items/store items refers to when a P.O.S item is correctly mapped to its sources (i.e stock/ingredients) in the store such that its stock is being accurately tracked.

For an integration to happen, there has to be a store item that matches a particular P.O.S item being sold. This can be setup manually or automatically.

Store items can be ingredients for producing certain P.O.S Items (e.g flour producing chapatis) and hence are not for direct sale.

## Manual integration

First, you create a store item category for the item in back office > Store items categorization.

![Store item categorization window](/img/store_items_categorization.PNG)

- Enter the name of the store category e.g liquer/kitchen ingredients. 
- Depending on how soon the category's items run out, set the 'days to buy after'.
- For categories whose store items goes toward a particular counter (e.g drinks for bar counter or foodstuff for kitchen counters), make sure to check 'must select [counter](../admin-panel/counters.md) when issuing'.
- Set the 'min intergrate POS items' to 1.
- For categories whose items have a direct relation to P.O.S items (e.g whisky bottles), check on 'requires primary integration' to enforce integration for its items before the corresponding P.O.S items can be sold.

Then register a store item under that category in back office > store items register.

![Store items register window](/img/store_items_register.PNG)

- Select the store category the item belongs to.
- Enter the name and the *item-in* cost (this is the cost per *'purchase/big unit'* e.g the cost for a crate of beers).
- Set the *purchase/big unit* depending on how you receive the item's stock e.g crates/boxes/packets.
- The *small units* is a unit of the singular item e.g bottles or pieces.
- The packaging ratio is the ratio of *purchase/big unit* : *small units* (how many *small units* are inside of the *big unit*?). This influences the calculation of small unit cost which is *item-in* cost divided by the packaging ratio e.g, for a crate of 12 bottles of beer bought at 3000/-, the small unit cost would be 250/-.
- We recommend setting both the *purchase/big unit* and the *small units* to *'pieces'* **for simplicity's sake.**

After that, go to B.O > Food and beverage (F&B) Controls > Store-POS (Primary intergation).

![Primary integration window](/img/primary_intergration.PNG)

- Select the store category and the item, then the P.O.S menu item (under a given POS category) that the store item produces.
- Specify the quantity of the P.O.S item that a singular unit of the store item can produce (e.g a crate of tusker produces 12 tusker bottles sold on the P.O.S).

## Auto integration

To enable auto integration for a P.O.S item, simply check on the *'Auto integrate (prim)'* option when adding/editing a [P.O.S Item](../pos-and-reports/pos-items.md).  

The system automatically maps the item to the necessary store item and category by replicating the category/items structure of the P.O.S in the store.

### Points to note

- For auto integration to work properly, make sure that the [configuration](../point-of-sale/configuration.md) option *'auto_add_store_item_from_pos'* is true.

- When using auto-integrate, the corresponding store items created use 'pieces' as the *purchase unit* as well as *small unit* by default.

- Remember that you [only auto intergrate source items](../pos-and-reports/pos-items.md#points-to-note) and not items that are sourced from other ingredient items.