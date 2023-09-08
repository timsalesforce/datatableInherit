import LightningDatatable from "lightning/datatable";
import customNameTemplate from "./customName.html";
import customNumberTemplate from "./customNumber.html";

export default class MyDataTable extends LightningDatatable {
    static customTypes = {
        customName: {
          template: customNameTemplate,
          standardCellLayout: true,
          typeAttributes: ["accountName"],
        },
        customNumber: {
          template: customNumberTemplate,
          standardCellLayout: false,
          typeAttributes: ["status"],
        }
    }
}