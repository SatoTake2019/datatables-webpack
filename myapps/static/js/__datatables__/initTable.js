import DataTable from "datatables.net-bs5";

export default function initTable() {
    // let table = new DataTable('#example', { paging: false });
    //let table = new DataTable('#example').Api( { paging: false } );
    let DataTableFunc = new DataTable(null, null);
    let table = DataTableFunc.Api('#example', { paging: false });
    return table;
}
