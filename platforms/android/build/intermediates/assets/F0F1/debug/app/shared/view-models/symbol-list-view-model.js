var config = require("../../shared/config");
var fetchModule = require("fetch");
var ObservableArray = require("data/observable-array").ObservableArray;

function SymbolListViewModel(items) {
    var viewModel = new ObservableArray(items);
    viewModel.load = function() {
        return fetchModule.fetch(config.apiUrl + "symbols?" + "exchangeId=" + "4", {
                headers: {
                    'Authorization': 'jwt ' + config.token
                }
        })
            .then(handleErrors)
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                data.forEach(function (item) {
                    viewModel.push({
                        symbolCode: item.symbolCode
                    });
                });
            });
    };
    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };
    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = SymbolListViewModel;
