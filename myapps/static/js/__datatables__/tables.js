
import "datatables.net-bs5";
import $ from "jquery";
import "./base.js";
import bootstrap from 'bootstrap';


export default function initTable() {
    let table = $('#example').DataTable();
    return table;
}
