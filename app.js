(function(){
    //Variable for Azurite Gem Variable
    var gem = {name: 'Azurite', price: 2.95};
    //Module name gemStore
    var app = angular.module('gemStore', []);
    //Controller name StoreController
    app.controller('StoreController', function(){
        this.product = gem;
    });
})();
