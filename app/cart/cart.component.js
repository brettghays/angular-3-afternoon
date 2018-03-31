angular.module('swagShop')
.component('cart', {
    templateUrl: 'app/cart/cart.template.html',
    controllerAs: 'cartCtrl',
    controller: function(cartSrvc) {
        this.cart = cartSrvc.currentCart();
        this.total = function() {
            return this.cart.reduce((total, current ) => total + current.price, 0);
          };
        this.checkout = () => this.cart = cartSrvc.checkout();
        this.removeItem = function(index){
            cartSrvc.remove(index);
            console.log( cartSrvc.currentCart() );
          };
    }    
})