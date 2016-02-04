(function(){
    //Module name gemStore
    var app = angular.module('gemStore', []);
    //Controller name StoreController
    app.controller('StoreController', function(){
        this.products = gems;
    });
    //Controller name GalleryController
    app.controller('GalleryController', function(){
        this.current = 0;
        this.setCurrent = function(newGallery)
        {
            this.current = newGallery || 0;
            
        };
    });
    //Controller name TabController
    app.controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(selectedTab)
        {
            this.tab = selectedTab;    
        }
        this.isSet = function(givenTab)
        {
            return this.tab === givenTab;
        }
    });
    //Controller name ReviewController
    app.controller('ReviewController', function(){
       //Empty when first created
       this.review = {};
       this.addReview = function(product)
       {
            //Push review to array
            product.reviews.push(this.review);
            //After product has been added reset to empty
            this.review = {};
       };
    });
    
    
    
    //Gems
    var gems = [
    {
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images:
        [
            "Images/Azurite/azurite_1.jpg",
            "Images/Azurite/azurite_2.jpg",
            "Images/Azurite/azurite_3.jpg"
        ],
        reviews:
        [
            {
                stars: 5,
                body: "I love this gem",
                author: "joe@example.org",
                createdOn: 1397490980837
            },
            {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }
        ],
        canPurchase: false,
        soldOut: true
    },
    {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images:
        [
            "Images/Bloodstone/bloodstone_1.jpg",
            "Images/Bloodstone/bloodstone_2.jpg",
            "Images/Bloodstone/bloodstone_3.jpg"
        ],
        reviews:
        [
            {
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            },
            {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }
        ],
        canPurchase:true,
        soldOut: false
    },
    {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images:
        [
            "Images/Zircon/zircon_1.jpg",
            "Images/Zircon/zircon_2.jpg",
            "Images/Zircon/zircon_3.jpg"
        ],
        reviews:
        [
            {
                stars: 1,
                body: "This gem is WAY too expensive for its rarity value.",
                author: "turtleguyy@example.org",
                createdOn: 1397490980837
            },
            {
                stars: 1,
                body: "BBW: High Shine != High Quality.",
                author: "LouisW407@example.org",
                createdOn: 1397490980837
            },
            {
                stars: 1,
                body: "Don't waste your rubles!",
                author: "nat@example.org",
                createdOn: 1397490980837
            }
        ],
        canPurchase:true,
        soldOut: false
    }];
})();
