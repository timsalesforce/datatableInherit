import { LightningElement, wire } from "lwc";
import getAccountList from "@salesforce/apex/DatatableController.getAccountList";
import { handleEvent, cloneObj } from "c/utils";

const COLS = [
  {
    label: "Account Name",
    type: "customName",
    sortable: true,
    typeAttributes: {
      accountName: { fieldName: "Name" },
    },
  },
  {
    label: "Industry",
    fieldName: "Industry",
    cellAttributes: {
      class: { fieldName: "industryColor" },
    },
  },
  {
    label: "Employees",
    type: "customNumber",
    fieldName: "NumberOfEmployees",
    typeAttributes: {
      status: { fieldName: "status" },
    },
    cellAttributes: {
      class: "slds-theme_alert-texture",
    },
  },
];

export default class MyDatatableWrapper extends LightningElement {
  columns = COLS;
  accounts = [];

  @wire(getAccountList)
  wiredAccounts({ error, data }) {
    if (error) {
      // Handle error
    } else if (data) {
      // Process record data
      this.accounts = data.map((record) => {
        let industryColor = record.Industry === "Energy" ? "slds-text-color_success" : "";
        let status = record.NumberOfEmployees > 10000 ? "utility:ribbon" : "";
        return { ...record, industryColor: industryColor, status: status };
      });
    }
  }

  handleSort(e) {
    console.log(`========================== ${e}`);
    handleEvent(e);
    const newEvent = cloneObj(e);
    console.log(`newEvent.detail: ${newEvent.detail}`);
  }
}