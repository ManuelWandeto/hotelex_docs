---
sidebar_label: Swapping Items
---

# Swapping Items

Say you've had an order that you've already printed out, then the customer decides to order something else instead. If the other item is of the price, you can simply swap the item.

P.O.S items that have the same [swap code](../../pos-and-reports/pos-items.md#points-to-note) applied e.g 'BEER 300' can be swapped.

The SWAP button only appears on P.O.S items that have a swap code applied. When you click on it, a window appears showing you the items of the same price that can be swapped with the one you have selected.

![Swap window](/img/swap_window.PNG)

Unlike [returns](../returns.md), swaps only require level 1 approval, Once a swap is requested, the order is locked with status 'return' and once the swap is approved, the swap is reflected in the order's order items.

## Approving swaps

Once a swap is requested by a waiter it is sent to all users with level 1 approval.

If you possess level 1 approval rights, you will see a 'level 1 approval' button in your interface. Click on it view a list of all returns/swaps requiring your approval.

![Level 1 approval view](/img/requested_swaps.PNG)

When you click on a request you are prompted to either approve it or disapprove it. If you approve it, the order item in the waiter's order will change to the new item and a receipt of the approval is printed.

If you disapprove it, the item will stay unchanged in the waiter's order. Either way, the orders' status will be unlocked.

![Swap receipt](/img/swap_receipt.PNG)

## Points to note

- As of the time of writting this document, the swapping feature does not account for the quantity of the item to be swapped. The swap includes the whole quantity. As a workarround, you can [move the exact quantity you need to swap to a new order](./splitting_bills.md) and swap it there.

- Swaps on the P.O.S are automatically reflected in counter stocks.