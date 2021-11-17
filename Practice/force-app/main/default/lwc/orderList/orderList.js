import { LightningElement, wire } from 'lwc';
import getInfoAboutOrderList from '@salesforce/apex/InfoAboutOrderController.getInfoAboutOrderList';

export default class OrderList extends LightningElement {
    orderInfoList = [];

    @wire(getInfoAboutOrderList,)
    wiredContacts(result) {
        this.wiredContacts = result;
        if (this.wiredContacts.data) {
            this.orderInfoList = this.wiredContacts.data;
        } else if (this.wiredContacts.error) {
            this.error = this.wiredContacts.error;
        }
    }

    
}