---
sidebar_label: Stocks Delivery & Issuing
sidebar_position: 2
---
# Stocks Delivery & Issuing Process

The B.O > Store Processes module facilitates the process of stocks delivery and issuing from suppliers to counters all in one neat interface that you can access by clicking the 'Stocks (delivery & issuing) process' button.

![The stocks delivery & issuing window](/img/stock_process.PNG)

## Adding Suppliers

This is where the process begins, click on 'RECEIVE' at the top left which activates the received stock section.

![Received stocks section](/img/received_stock.PNG)

Next to the supplier dropdown, you should see a add button [+], clicking on that brings up the supplier register window.

![Supplier register window](/img/supplier_register.PNG)

Fill in the appropriate fields and save.

## Receiving Stock

Still in the received stock section, select the stock supplier from the supplier dropdown.

Click on 'New batch no', this will generate a new batch number, then select it from the dropdown.

Choose the item being received from the left hand side (you can search for the item).

Enter the quantity being received, this will be in units of the store item's *'purchase/big unit'*. If you used [auto integration](./items-categorization.md#auto-integration), this will be in 'pieces'.  
The *'item-in'* cost should appear below the purchase quantity and the total amount for the quantity you've set right next to it.

Click on 'deliver' for the stock to be added to the store and appear on the 'supplier deliveries section'.

![Supplier deliveries section](/img/supplier_deliveries.PNG)  
*You can choose to see all suppliers deliveries or only those from the selected supplier even down to just the selected batch number.* 

### Points to note

- Be sure to print the batch using the 'print preview' button. The system won't generate a new batch number if there's any unprinted batch from any supplier. The printed document is a *Goods Received Note*.  

  ![Unprinted batch prompt](/img/print_grn_prompt.PNG)  
   *If you forgot to print the GRN for any reason, simply select the supplier(s) and batch(es) in question and print.*

- If the [configuration](../point-of-sale/configuration.md) option *'auto_issue_delivered_stock'* is true, then any stock items once delivered will be automatically issued.

## Issuing Stock

Click on 'Issue' at the top left to activate the 'ISSUED STOCK' section.

![Issue stocks section](/img/issue_section.PNG)

Select the department to issue the stock items to.

Select the specific counter (within the department) to issue the items to.

Create a new batch number with 'new batch'

Select the user (staff person) who will receive the stock you are issuing in the 'taken by' dropdown.

Select the item to issue on the left hand side (*tip: You can search the item*).

Set the quantity of stock item to issue, this is a unit of the stock item's 'small unit' and the cost is calculated by 
Item small unit qty * items' small unit cost. Then click 'issue'

Items you issue appear on the left hand side.

![Items issued](/img/goods_issued.PNG)

### Points to note

- Be sure to print the goods issued note for every batch number you create:

  ![Goods issued note](/img/gin.PNG)