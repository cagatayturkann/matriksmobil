var frameModule = require("ui/frame");
var UserViewModel = require("../../shared/view-models/user-view-model");
var Observable = require("data/observable").Observable;
var dialogsModule = require("ui/dialogs");

var page;
var user = new UserViewModel({
    username: "24798",
    password: "s6KU36bt"
});
exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function() {
            frameModule.topmost().navigate("views/wealth/wealth");
        });

};
exports.onLoaded = function(args) {
    page = args.object;
    page.bindingContext = user;

};
