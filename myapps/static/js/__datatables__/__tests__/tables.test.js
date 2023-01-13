import initTable from "../initTable";
import fs from "fs";

describe("test Datatable initialization", () => {
    test("init test", () => {
        // read rendered_table.html
        document.body.innerHTML = fs.readFileSync(
            __dirname + `/rendered_table.html`, { encoding: "utf-8" });

        document.addEventListener('DOMContentLoaded', function () {
            let table = initTable();
        });

        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    });
});