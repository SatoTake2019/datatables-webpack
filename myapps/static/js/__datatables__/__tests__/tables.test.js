import initTable from "../tables";

describe("test Datatable initialization", () => {
    test("init test", () => {
        document.addEventListener('DOMContentLoaded', function () {
            let table = initTable();
        });

        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    });
});