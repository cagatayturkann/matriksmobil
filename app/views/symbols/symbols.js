var frameModule = require("ui/frame");
var ObservableModule = require("data/observable");
var SymbolListViewModel = require("../../shared/view-models/symbol-list-view-model");

var symbolList = new SymbolListViewModel([]);
var pageData = new ObservableModule.fromObject({
    symbolList: symbolList
});

var page;
exports.onLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

    symbolList.empty();
    pageData.set("isLoading", true);
    symbolList.load().then(function() {
        pageData.set("isLoading", false);
    });
};

exports.onNavBtnTap = function () {
    var topmost = frameModule.topmost();
    topmost.navigate("views/wealth/wealth");
};

