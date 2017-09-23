var config = require("../../shared/config");
var fetchModule = require("fetch");
var ObservableArray = require("data/observable-array").ObservableArray;

function WealthViewModel(items) {
    var viewModel = new ObservableArray(items);
    viewModel.calculate = function () {
        return fetchModule.fetch(config.wealthUrl + "?" + "symbol=" + viewModel.get("symbolName") + "&amount=" +
            viewModel.get("amount") + "&period=" + viewModel.get("period"), {
                method: 'GET',
                headers: {
                    'Authorization' : 'jwt ' + config.token,
                    'Content-Type' : 'application/json',
                    'cache-control' : 'no-cache'
            }
        })
            .then(handleErrors)
            .then(function (response) {
                return response.json();
            }).then(function(data) {
                data.forEach(function (item) {
                    viewModel.push({
                        symbolName: item.symbol,
                        wealthName: item.wealth
                    });
                });
            });
    };
    viewModel.empty = function () {
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

module.exports = WealthViewModel;

//config.wealthUrl + "?" + "symbol=" + viewModel.get("symbol") + "&amount=" + viewModel.get("amount") + "&period=" + viewModel.get("period")