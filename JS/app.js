(function(){
    //Module name gemStore
    var app = angular.module('gemStore', []);
    //Controller name StoreController
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    //Gems
    var gems = [
    { name: 'Azurite', price: 2.95, canPurchase: false, soldOut: true},
    { name: 'Bloodstone', price: 5.95, canPurchase:true, soldOut: false},
    { name: 'Zircon', price: 3.95, canPurchase: true, soldOut: false}
    ];
    
})();
