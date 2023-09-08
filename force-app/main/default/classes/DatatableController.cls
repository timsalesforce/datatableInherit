public with sharing class DatatableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Industry, NumberOfEmployees FROM Account WITH SECURITY_ENFORCED LIMIT 10];
    }
}