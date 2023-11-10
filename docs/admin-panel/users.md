---
sidebar_label: Users
---

# Register Users

The admin-cpanel lets you register users into the system. Here is where any and all users of the system are registered be it the waiters, cashiers, supervisors, managers, store-keepers, accountants etc..


## How to register users

Log in to your back office. In the admin cpanel, select 'Users register'.

![Register users window](/img/users_register.PNG)

First, fill in their personal info such as name, birthdate, contact, email and ID number. The staff number is an incremental value for every record in the table i.e. the first user has staff number 1, the second 2 and so on.

Then select a [department](./departments.md) in which the user is working in e.g bar, kitchen, spa, rooms etc. Type in their work title in the 'position' field and among the available default user groups, assign an appropriate one for them based on their role in the workplace (and the permissions they should wield in the system).

Finally, create them a login password for the interface they will interact with i.e. POS pin or Back office pin or both (usually the pin for waiters is made up of their staff number plus the first 3 digits of their ID).

If the user is a salesperson, be sure to check the 'sales person' box.

### Points to note
- If the user should have the rights to [approve returns](../point-of-sale/returns#approving-returns), give them the appropriate level of approval (by checking the relevant 'approval' box). 

- If they are a sales person, you can set a limit for the total amount of credit bills or unpaid bills per shift that they can accrue before the system will cease to allow them to sell.

- Check on 'access counter summary' to allow the user to view the counter summary.

- You can upload their photo in the 'staff photo' section.

<!-- TODO: Add screenshot of the counter summary -->

- If the user wants a custom pin, check on 'request password change', this will make it so that when they have typed the pin you gave them at login, they will be prompted to enter a new pin of their choosing.

  ![Request password change](/img/request_password_change.PNG)

- You can update any setting for a user by double clicking their record in the staff list, the fields will be filled with their current information (except their pins). Then you can make your edits and save. To exit the edit mode without saving, click on 'refresh'.

  ![User edit mode](/img/user_edit_mode.PNG)

## How to deactivate a user

Edit the user and check on 'deactivate account'. When you save, the record will disappear from the active staff list and the user will not be able to log in anymore.

### View deactivated users

Click on the 'deativated records' button on the top right of the users register window. This will show a list of deactivated users on the staff list.

![Deactivated users list](/img/deactivated_users.PNG)

If you would like to re-activate a particular user, simply double click their record, deselect the 'deactivate account' box and save.

To go back to the active staff list, click on the 'active records' button (which was previously the 'deactivated records' button) on your top right.

If you reactivated a user, you should see them back on the active staff list.