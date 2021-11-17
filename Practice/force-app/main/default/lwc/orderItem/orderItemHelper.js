export { 
    navigateToRecordPage
};
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

const navigateToRecordPage = (recordId, recordName, component) => {
    component[NavigationMixin.GenerateUrl]({
        type: 'standard__recordPage',
        attributes: {
            recordId: recordId,
            objectApiName: recordName,
            actionName: 'view'
        }
    }).then(url => {
        window.open(url, "_blank");
    });
}
