---
sidebar-position: 5
sidebar-label: Forwarding bills
---

# Forwarding bills

Inorder to clear a bill from a waiter's account, the bill need to be forwarded to the cashier. Depending on the [configuration](./configuration#waiter_requests_payment), this can be done by the waiter or the cashier or both. In some settings the waiter is able to forward the bill to the cashier while in others the cashier forwards the bill to themselves on behalf of the waiter. The cashier's work is to verify that the payment has been received. Then and only then can they clear the bill from the waiter's account.

In most common configurations however, to forward a bill, select the order from the [active orders view](./pos-sales/orders#active-orders-view) and click the 'forward payment' button, this will pop up the payment details window allowing you to select a [payment method](#payment-methods).

![The payment details window](/img/payment_details.PNG)

## Payment Methods

Most common methods of payment are cash, mpesa and pdq codes (payment with bank cards). You can combine these payment methods in the payment details window.

### M-pesa

Depending on the [configuration](./configuration#mpesa_code_length), there is a set max number of digits that the system expects (usually 4 digits). In that case, only type the last 4 digits of the mpesa code in the payment details window.

The system is either intergrated with mpesa or not. If not, you can forward bills using any code but the cashier will have to verify them inorder to clear your bills. You also **cannot** use the same mpesa code to forward multiple bills except by using either an (*) or a (#) character as the first digit of the code entered.

If it is intergrated (which is recommended for security and convenience purposes), you can use the same mpesa code to forward multiple bills so long as the code contains sufficient funds.

*Note: When keying-in the code, be weary of the likelihood to confuse characters e.g '1' and 'I' or '0' and 'O'*

### PDQ

For bank cards, the system can be configured to either allow forwarding bills with pdq codes to be [validated later](./configuration#allow_forward_mpesa_pdq_for_later_validation) by the cashier, or to require that the code be registered in the system by the cashier before it can be used to forward a bill. 

If it allows non-validated pdq codes, you can forward a bill using a pdq code that is yet be verified. In this case, you should present the physical pdq receipt to the cashier for validation, then and only then will the cashier clear your bill.

Otherwise, the cashier has to first register the pdq code into the system (They will do so **only if** they have received the physical transaction receipt). Then and only then can the code be used to forward a bill.

The former can make payment operations go faster while the latter though safer can slow down the process (especially if the cashier is also the salesman in a high-traffic type of environment).