myApp.controller('UserController', function(UserService) {
    console.log('in UserController');
    
    var vm = this;
    vm.userObj = UserService.userObj;

    vm.logout = function() {
        UserService.logout();
    };
    
    vm.addItem = function(){
        var objectToSend = {
            itemDescription: vm.itemIn
        };
        UserService.postItem(objectToSend);
        console.log('should be item entered', objectToSend);
    };

});