# datatables-webpack
This repository was created to investigate an issue where building JavaScript code related to DataTables initialization with webpack causes an error. This code passed the Jest test. But when I run Django's runserver with webpack-built datatable.bundle.js, I get errors in the browser.


# This branch "ok-esm-one-file"
JavaScript source code is in "myapps\static\js\__datatables__\tables.js".
This code passed jest test and was successfully built by webpack. And the bundled js file run without error on runserver of Django.

# License
DataTables is under the [MIT License](https://en.wikipedia.org/wiki/MIT_License). and its official site is https://datatables.net/.
This repository claims no license.
The work in this repository also draws on many discussions on https://datatables.net/forums/.
