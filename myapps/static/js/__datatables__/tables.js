// import initTable from "./initTable.js";
import DataTable from "datatables.net-bs5"; "datatables.net-bs5";

export function initTable() {
    let table = new DataTable('#example');
    return table;
    
}

document.addEventListener('DOMContentLoaded', function () {
    let table = initTable();
});
