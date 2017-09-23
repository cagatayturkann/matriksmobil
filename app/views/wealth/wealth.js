var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var WealthViewModel = require("../../shared/view-models/wealth-view-model");
var Observable = require("data/observable").Observable;

var page;

var wealth = new WealthViewModel();

exports.calculateWealth = function () {
    wealth.calculate()
        .catch(function(error) {
            console.log(error);
            return Promise.reject();
        })
        .then(function() {
            frameModule.topmost().navigate("views/charts/charts");
        });

    // var topmost = frameModule.topmost();
    // topmost.navigate("views/charts/charts");
};

exports.onLoaded = function(args) {
    page = args.object;
    page.bindingContext = wealth;

};





exports.seeSymbols = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/symbols/symbols");
};

