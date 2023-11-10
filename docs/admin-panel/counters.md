---
sidebar_label: Counters
sidebar_position: 2
---

# Counters

Counters in the hotelex refer to the billing and order placement points at different outlets like restaurants, bars, cafes etc.

Key functions handled by counters include:

- Order Taking - Waiters can select different counters to place customer orders which get routed to the associated counter.

- Billing - The orders get billed based on the counter selected while order taking.

- Payment Processing - Payments made by customers are also recorded against the respective counter.

- Reporting - Sales reports can be generated counter-wise providing outlet-level performance tracking.

- Access Control - User access to counters can be controlled through rights management.

- Inventory Assignment - Stock items can be issued and tracked at counter level enabling focused inventory management.

- Cost Centres - Counters can be designated as cost centres for tracking revenues and expenses.

- Common counters defined in the system include:

  - Kitchen Counter
  - Bar Counter (can also be divided into downstairs and upstairs if applies)
  - Room Service Counter
  - Cocktails Counter
  - Shisha Counter

Defining counters enables hotels and restaurants to manage operations in a decentralized manner. All transactions can be traced to a specific counter for analyzing operational data at an outlet level.

It allows large facilities to segregate operations across outlets while smaller establishments can operate through a single combined counter. The counters list is configurable to suit business needs.

In hotelex, each counter belongs to a [department.](./departments.md)

## How to add a counter

Login to your back office, under admin-cpanel, click on 'department counters'.

![Department counters](/img/counters_register.PNG)

Select the department that the counter belongs to e.g main counter belongs to the bar department for clubs.

Fill in the name of the counter and give it an arbitrary counter code (so long as it is unique).

If the counter deals with sales, be sure to check it as a 'sales counter', then save and you're done!

## Virtual counters

Virtual counters refer to simulated billing points created in the system for specific users e.g cowgirls.

Cowgirls are staff who serve customers scattered across the premises and not at a fixed physical counter. However, their sales still need to be tracked individually.

Virtual counters allow creating a logical counter mapped to each cowgirl. For example:

A virtual counter named "CWG-Jane" can be created in the system. This virtual counter is assigned to the user profile for cowgirl Jane.
When Jane logs in, only her virtual counter is available for selection.  

All Jane's customer orders get billed and tracked against this counter. The backend links Jane's user profile to her virtual counter for access control and sales reporting.

Inventory issuing can also be done at the virtual counter level for focused stock management. It appears as a counter in reports allowing cowgirl-wise sales performance tracking.

In summary, virtual counters enable individual order tracking and sales analysis for mobile serving staff like cowgirls by creating a logical billing point assigned to the respective user. It provides department-level oversight of dispersed operations.

If your counter is for such staff, be sure to check it as a 'virtual counter'.