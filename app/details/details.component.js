angular.module('swagShop')
.component('detailsComponent', {
    templateUrl: 'app/details/details.template.html',
    controllerAs: 'detailsCtrl',
    controller: function(swagSrvc, cartSrvc, $stateParams){
        this.swag = swagSrvc.swag;
        //$stateParams.id is pulling the id off of the url - similar to req.params
        if($stateParams.id) {
            let itemIndex = this.swag.findIndex(x => x.id === $stateParams.id)
            this.item = this.swag[itemIndex];
        }
        this.addToCart = function(item) {
            cartSrvc.add(item);
            console.log( cartSrvc.currentCart() );
        }
    }
});