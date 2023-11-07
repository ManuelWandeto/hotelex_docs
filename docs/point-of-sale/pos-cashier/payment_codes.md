---
sidebar_position: 2
sidebar_label: Payment Codes
---

# PDQ Codes

For PDQ payments, the system can be configured to either require that the pdq codes be first registered into the system before it can be used to forward bills, or to allow forwarding bills with any code that will be validated later before clearing the bill.

If the former is true, then waiters can forward bills with any code they input, but they should present the physical pdq receipt to you for validation before you clear their bill.

Incase it is configured to only accept registered codes, the role of adding these codes to the system before they can be used is yours.

![Unregistered code payment rejection](/img/pdq_code_rejection.PNG)

*The system rejecting an unregistered code*

## How to add codes

Click on the 'Add codes' button on the top left side to bring up the 'add codes' window.

![Add codes window](/img/add_codes_window.PNG)

Enter the code and amount and save, now the code can be used by waiters to forward bills.

## How to view codes

Go to 'My view' and click on 'View mpesa codes'

![Cashier's view](/img/cashier_view.PNG)

Which will bring up the added codes report

![Cashier's view](/img/added_codes_report.PNG)

Codes that are fully claimed (i.e. used in forwarding bills) will appear in <span style={{backgroundColor: "yellow", color: 'black', padding: '2px 8px'}}>yellow</span>, 

Unclaimed codes will appear in <span style={{backgroundColor: "green", color: 'white', padding: '2px 8px'}}>green</span>,  

Partially claimed codes will appear in <span style={{backgroundColor: "pink", color: 'black', padding: '2px 8px'}}>pink</span>. 

*If mpesa is integrated in the system, transaction codes from customers are automatically added into the system and they show up here.*

## Who used my codes?

You can view a report of the codes used by each waiter in forwarding their bills in the 'waiter cleared bills' report.  
Go to 'My view', click on 'Waiter cleared bills' and select a waiter from the dropdown list.

![Waiter cleared bills](/img/waiter_cleared_bills.PNG)