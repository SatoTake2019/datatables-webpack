import DataTable from "datatables.net-bs5";

export default function initTable() {
    let table = new DataTable('#example', { paging: false });
    return table;
}
