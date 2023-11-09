---
sidebar_position: 3
---

# Returns

A waiter is allowed to request for a return of a specific item in an order.  
This request must however be approved by a user with level 1 approval and another with level 2 approval rights respectively.

A return request has to be accepted by a user with level 1 approval (usually the barman) first before the request can be presented to a user with level 2 approval (usually the manager).

An order that is in the process of a return is locked with lock-status 'return' and is highlighted in pink in the [active orders view](./pos-sales/orders#active-orders-view).

If a return request is approved, the order on the waiter's account is reduced by the price of the returned item, the item is removed from the waiter's order and they are free to forward the other items.

If a return request is disapproved at any stage, the waiter's order is unlocked but the item is not removed from the order. They can however request a return again.

A super-administrator can have both level 1 and level 2 approval rights at which point they can approve or disapprove a return request all by themselves.


![The return process illustration](/img/returns_process.png)

## How to return an item

First select the order and then the item (provided the order is **not** locked), then click on the 'return' button. The following dialog should appear:

![Return dialog](/img/return_dialog.PNG)

Set the quantity of the item to return and select a reason for return, then confirm. The order will then be locked as the return awaits approval.

## Approving returns

Once a return is requested by a waiter it is sent to all users with level 1 approval first.

If you possess level 1 approval rights, you will see a 'level 1 approval' button in your interface. Click on it view a list of all returns requiring your approval.

![Approval list](/img/approval_list.PNG)

When you click on a request, you will be prompted to either approve the return or reject and reverse it. If you approve the request, it gets sent to all users with level 2 approval.

If you possess level 2 approval rights, click on the 'level 2 approval' button to view a list of returns requiring your level of approval.

![Level 2 approval list](/img/approval_2_list.PNG)

If you give the final approval, a receipt is printed with details of the return.

![Return receipt](/img/return_receipt.PNG)
