public with sharing class InfoAboutOrderController {

    @AuraEnabled(cacheable=true)
    public static List<InfoAboutOrder__c> getInfoAboutOrderList() {
        List<InfoAboutOrder__c> infoAboutOrderList = [
            SELECT Id, Name, Price__c, 
                Shop__r.Id, Shop__r.Name, 
                CustomerInfo__r.Id ,CustomerInfo__r.Name, CustomerInfo__r.Surname__c
            FROM InfoAboutOrder__c
        ];
        return infoAboutOrderList;
    }
}
