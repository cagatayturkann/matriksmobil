var frameModule = require("ui/frame");
var ObservableModule = require("data/observable");
var WealthViewModel = require("../../shared/view-models/wealth-view-model");

var wealthList = new WealthViewModel();
var pageData = new ObservableModule.fromObject({
    wealthList: wealthList
});

var page;
exports.onLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

    wealthList.empty();
    wealthList.calculate();
};

exports.onNavBtnTap = function () {
    var topmost = frameModule.topmost();
    topmost.navigate("views/wealth/wealth");
};