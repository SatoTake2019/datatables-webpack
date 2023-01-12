# datatables-webpack
This repository was created to investigate an issue where building JavaScript code related to DataTables initialization with webpack causes an error. This code passed the Jest test. But when I run Django's runserver with webpack-built datatable.bundle.js, I get errors in the browser.

## "ok-esm-one-file" branch 
JavaScript source code is in "myapps\static\js_datatables_\tables.js". This code passed jest test and was successfully built by webpack. And the bundled js file run without error on runserver of Django.

## "ok-split-into-two-files" branch
This branch is just splitting the above branch's JavaScript source code from 1 to 2 files. As above, jest test, webpack build, and execution on the browser were successful.

## "jest-err-with-one-option" branch
In this branch, follow the example in [Non-jQuery Options](https://datatables.net/manual/options#Non-jQuery-options) 
and add one option "{ paging: false }" to the code in the successful branch above. 
Just adding this option gave an error in jest's test.

## License

DataTables is under the MIT License. and its official site is https://datatables.net/. This repository claims no license. The work in this repository also draws on many discussions on https://datatables.net/forums/.
