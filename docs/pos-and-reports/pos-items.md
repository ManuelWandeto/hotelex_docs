# P.O.S Items

P.O.S management & reports section provides the following interface for adding P.O.S items:

![POS Items B.O window](/img/bo_pos_items.PNG)

First select a [P.O.S category](./pos-categories.md) that the item belongs to, then enter the name of the item, its selling price and cost (purchase cost).

## Points to note

- Only set the purchase cost for whole items e.g a bottle. For fractional items such as tots or glasses of wine, use [secondary costing](#secondary-2ndry-costing).

- For an item such as a whisky bottle from which tots can be produced, check it as 'an ingredient for secondary costing' and set the amount/count of tots that can be produced from the bottle under 'small units in fraction of __' (e.g 1 litre of whisky can produce 33 tots/fractions).

- Only check 'auto intergrate' for source items e.g the bottle or a stock ingredient.

- When adding an item that is derived from another ingredient item e.g a tot or a glass, check on 'apply secondary costing' and check on 'portions to be auto-increased on' then set the minimum count of tots/glasses that can be produced from its ingredient in the 'min auto increase qty' field.

- For stock ingredients that aren't sold on the P.O.S side (e.g kitchen ingredients), be sure to check the 'don't sell item' option.

## Secondary (2ndry) costing

Secondary costing is used to track stock for items that are derived from other ingredients e.g tots from bottles.

When adding items that require secondary costing, you have to first add it to the system first before setting up secondary costing for it.

Once the item is added, double click on it in the items list to go into its edit mode. Then click on the '2ndry costing' button to open up the item costing window.

![Item costing window](/img/item_costing.PNG)

In the 'menu section' dropdown list, select the P.O.S category the item belong to. This will list all items in that category marked with the *'apply secondary costing'* option. This is why you had to add the item first.

Select the item to apply secondary costing to and then select its ingredient item(s) from the right (Ingredients to the right are ones marked with the *'an ingredient for 2ndry costing'* option).  

Set the quantity of the ingredient item and the portions/fractions that can be produced from that quantity e.g (1-1litre whisky bottle can produce 33 portions/tots). Finally click on 'add ingredient'.

![Gentleman jack costing example](/img/gentleman_jack_costing.PNG)

Now when you exit the item costing window and refresh the menu items list, you should see that the cost of the item was automatically calculated from the cost of its ingredient item(s).

### Points to note

 - An item can have more than 1 ingredient item e.g cocktails and meals.

 - You can always update these costings.

 - You can access the items costing window also in the food and beverage controls section.