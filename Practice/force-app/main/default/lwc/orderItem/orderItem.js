import { LightningElement, api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {
    navigateToRecordPage
} from './orderItemHelper.js';

export default class OrderItem extends NavigationMixin(LightningElement) {
    @api orderInfo = {
        Id: "",
        Name: "",
        Price__c: "",
        Shop__r: {
            Id: "",
            Name: ""
        },
        CustomerInfo__r: {
            Id: "",
            Name: "",
            Surname__c: ""
        }
    };

    handleToOrderInfoRecordPage() {
        navigateToRecordPage(this.orderInfo.Id, 'InfoAboutOrder__c', this);
    }

    handleToCustomerInfoRecordPage() {
        navigateToRecordPage(this.orderInfo.Shop__r.Id, 'Shop__c', this);
    }

    handleToShopInfoRecordPage() {
       navigateToRecordPage(this.orderInfo.CustomerInfo__r.Id, 'CustomerInfo__c', this);
    }
}