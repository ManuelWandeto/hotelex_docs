---
sidebar_label: Configuration
---

# P.O.S Configuration

Commmon configuration for the system is done through a text file named 'local_settings.dat' at the root of the liquid folder in your C:/Program Files/Kingsoft/Liquid. If any changes are made to this file, hotelex should be restarted. The value of any setting, if not strictly 'true', **defaults to false**.

## Waiter_requests_payment

This allows a user to forward their bills to the cashier for payment verification and clearance, It adds the 'Forward bill' button to the user's interface. If this setting is false on the cashier's machine, they too won't be able to forward bills on behalf of waiters.

## Mpesa_code_length

This is the maximum length of an mpesa code expected in the payment details window (usually its value is 4). For any mpesa code used to clear a bill, one must input the last (x) digits of the code (where x is the value of this setting).

## Allow_waiter_to_split_bill

By default, only the cashier can split a bill into multiple orders using the 'move-item' button. When you enable this option, the waiter is allowed to do so too. Make sure to also enable the option 'show_split_button' so that the 'move-item' button appears when you select an item in an order.

## Allow_forward_mpesa_pdq_for_later_validation

If this is true, a waiter or sales person can forward a bill using a pdq/mpesa code that is not yet registered in the system. Later however, the pdq receipt or mpesa message should be presented to the cashier for payment verification before clearing the waiter's bill. 

If it is false, pdq/mpesa codes have to be registered first in the system before they can be used to forward bills. In the case of mpesa, codes are automatically registered in the system as soon as they are received if mpesa intergration is active. For pdq, the cashier has to add the code to the system first.

## Cashier_enters_pdq_codes

This goes hand in hand with [Allow_forward_mpesa_pdq_for_later_validation](#allow_forward_mpesa_pdq_for_later_validation) in that, if later validation is false, this is set to true to ensure only the cashier can register pdq codes into the system.

## allow_cashier_access_mpesa_codes 

If this is false and the cashier doesn't have admin rights, they will not be able to view the [mpesa codes list](./pos-cashier/payment_codes#how-to-view-codes).

## use_system_mpesa_codes_only

This is set when mpesa has been intergrated with the system. It disallows the use of any mpesa code that is not already automatically registered in the system. If true, it **overrides** the [later validation](#allow_forward_mpesa_pdq_for_later_validation) setting for both pdq and mpesa codes. 

## allow_waiter_to_print_bill

This allows the waiter to print a final bill for an order. It adds the 'final bill' button to the waiter's interface.

## Dont_limit_bills_printed

This allows unlimited printing of the final bill for any order. If false, the final bill can only be printed once. Only the admin can reprint bills in their order checks view.

## Forward_should_clear_bill

If true, forwarding a bill will also clear the bill. Anywhere there would be a 'forward' button, there will be a 'clear bill' button instead (like on the payment details window). It is recommended to only use this setting for the cashier's machine if they can forward a bill on behalf of a waiter (so that they won't have to forward then clear the bill).

## Waiter_clear_self_bills

If this is true, there will be a 'clear forwarded' button on the waiter's interface that will bring up all their [forwarded bills](./pos-cashier/live_summary#clear-individual-bills) allowing them to clear each one. Set this to true at your own risk.

