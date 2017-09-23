var viewModule = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxyModule = require("ui/core/proxy");
//Enums
var DisplayMode;
(function (DisplayMode) {
    DisplayMode.Tokens = "Tokens";
    DisplayMode.Plain = "Plain";
})(DisplayMode = exports.DisplayMode || (exports.DisplayMode = {}));
var SuggestMode;
(function (SuggestMode) {
    SuggestMode.Suggest = "Suggest";
    SuggestMode.Append = "Append";
    SuggestMode.SuggestAppend = "SuggestAppend";
})(SuggestMode = exports.SuggestMode || (exports.SuggestMode = {}));
var LayoutMode;
(function (LayoutMode) {
    LayoutMode.Horizontal = "Horizontal";
    LayoutMode.Wrap = "Wrap";
})(LayoutMode = exports.LayoutMode || (exports.LayoutMode = {}));
var CompletionMode;
(function (CompletionMode) {
    CompletionMode.StartsWith = "StartsWith";
    CompletionMode.Contains = "Contains";
})(CompletionMode = exports.CompletionMode || (exports.CompletionMode = {}));
// AutoComplete object classes
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView() {
        _super.call(this);
    }
    Object.defineProperty(SuggestionView.prototype, "android", {
        //properties
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuggestionView.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuggestionView.prototype, "suggestionViewHeight", {
        get: function () {
            return this._getValue(SuggestionView.suggestionViewHeightProperty);
        },
        set: function (value) {
            this._setValue(SuggestionView.suggestionViewHeightProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    SuggestionView.onSuggestionViewHeightPropertyChanged = function (data) {
    };
    Object.defineProperty(SuggestionView.prototype, "suggestionItemTemplate", {
        get: function () {
            return this._getValue(SuggestionView.suggestionItemTemplateProperty);
        },
        set: function (value) {
            this._setValue(SuggestionView.suggestionItemTemplateProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    SuggestionView.onSuggestionItemTemplatePropertyChanged = function (data) {
    };
    SuggestionView.suggestionViewHeightProperty = new dependencyObservable.Property("suggestionViewHeight", "SuggestionView", new proxyModule.PropertyMetadata(150, dependencyObservable.PropertyMetadataSettings.AffectsLayout, SuggestionView.onSuggestionViewHeightPropertyChanged));
    SuggestionView.suggestionItemTemplateProperty = new dependencyObservable.Property("suggestionItemTemplate", "SuggestionView", new proxyModule.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.AffectsLayout, SuggestionView.onSuggestionItemTemplatePropertyChanged));
    return SuggestionView;
})(viewModule.View);
exports.SuggestionView = SuggestionView;
//TokenModel
var TokenModel = (function () {
    function TokenModel(text, image) {
        this.text = text;
        this.image = image;
    }
    Object.defineProperty(TokenModel.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenModel.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
})();
exports.TokenModel = TokenModel;
// Event object
var AutoCompleteEventData = (function () {
    function AutoCompleteEventData() {
    }
    Object.defineProperty(AutoCompleteEventData.prototype, "eventName", {
        get: function () {
            return this._eventName;
        },
        set: function (value) {
            this._eventName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteEventData.prototype, "object", {
        get: function () {
            return this._object;
        },
        set: function (value) {
            this._object = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteEventData.prototype, "returnValue", {
        get: function () {
            return this._returnValue;
        },
        set: function (value) {
            this._returnValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return AutoCompleteEventData;
})();
exports.AutoCompleteEventData = AutoCompleteEventData;
// RadAutoComplete impl
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        _super.call(this);
    }
    Object.defineProperty(RadAutoCompleteTextView.prototype, "android", {
        //properties
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextView.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onItemsPropertyChanged = function (data) {
        var listView = data.object;
        listView.onItemsChanged(data);
    };
    RadAutoCompleteTextView.prototype.onItemsChanged = function (data) {
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "items", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.itemsProperty);
        },
        set: function (value) {
            console.log(value);
            this._setValue(RadAutoCompleteTextView.itemsProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextView.prototype, "suggestionView", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.suggestionViewProperty);
        },
        set: function (value) {
            this._setValue(RadAutoCompleteTextView.suggestionViewProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onSuggestionViewPropertyChanged = function (data) {
        var autocmp = data.object;
        autocmp.onSuggestionViewChanged(data);
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (data) {
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "displayMode", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.displayModeProperty);
        },
        set: function (value) {
            this._setValue(RadAutoCompleteTextView.displayModeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onDisplayModePropertyChanged = function (data) {
        var autocmp = data.object;
        autocmp.onDisplayModeChanged(data);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (data) {
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "completionMode", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.completionModeProperty);
        },
        set: function (value) {
            this._setValue(RadAutoCompleteTextView.completionModeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onCompletionModePropertyChanged = function (data) {
        var autocmp = data.object;
        autocmp.onCompletionModeChanged(data);
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (data) {
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "layoutMode", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.layoutModeProperty);
        },
        set: function (value) {
            this._setValue(RadAutoCompleteTextView.layoutModeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onLayoutModePropertyChanged = function (data) {
        var autocmp = data.object;
        autocmp.onLayoutModeChanged(data);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (data) {
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "suggestMode", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.suggestModeProperty);
        },
        set: function (value) {
            this._setValue(RadAutoCompleteTextView.suggestModeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onSuggestModePropertyChanged = function (data) {
        var autocmp = data.object;
        autocmp.onSuggestModeChanged(data);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (data) {
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "minimumCharactersToSearch", {
        get: function () {
            return this._getValue(RadAutoCompleteTextView.minimumCharactersToSearchProperty);
        },
        set: function (value) {
            this._setValue(RadAutoCompleteTextView.minimumCharactersToSearchProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.onMinimumCharactersToSearchPropertyChanged = function (data) {
        var autocmp = data.object;
        autocmp.onMinimumCharactersToSearchChanged(data);
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (data) {
    };
    //Methods
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
    };
    RadAutoCompleteTextView.tokenRemovedEvent = "tokenRemoved";
    RadAutoCompleteTextView.tokenAddedEvent = "tokenAdded";
    RadAutoCompleteTextView.tokenSelectedEvent = "tokenSelected";
    RadAutoCompleteTextView.tokenDeselectedEvent = "tokenDeselected";
    RadAutoCompleteTextView.suggestionViewBecameVisibleEvent = "suggetsionViewBecameVisisble";
    RadAutoCompleteTextView.itemsProperty = new dependencyObservable.Property("items", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onItemsPropertyChanged));
    // SuggestionView
    RadAutoCompleteTextView.suggestionViewProperty = new dependencyObservable.Property("suggestionView", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onSuggestionViewPropertyChanged));
    // Display mode
    RadAutoCompleteTextView.displayModeProperty = new dependencyObservable.Property("displayMode", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(DisplayMode.Plain, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onDisplayModePropertyChanged));
    // Completion Mode
    RadAutoCompleteTextView.completionModeProperty = new dependencyObservable.Property("completionMode", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(CompletionMode.StartsWith, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onCompletionModePropertyChanged));
    // Layout mode
    RadAutoCompleteTextView.layoutModeProperty = new dependencyObservable.Property("layoutMode", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(LayoutMode.Wrap, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onLayoutModePropertyChanged));
    //Suggest Mode
    RadAutoCompleteTextView.suggestModeProperty = new dependencyObservable.Property("suggestMode", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(SuggestMode.Suggest, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onSuggestModePropertyChanged));
    // MinimumCharactersToSearch
    RadAutoCompleteTextView.minimumCharactersToSearchProperty = new dependencyObservable.Property("minimumCharactersToSearch", "RadAutoCompleteTextView", new proxyModule.PropertyMetadata(1, dependencyObservable.PropertyMetadataSettings.AffectsLayout, RadAutoCompleteTextView.onMinimumCharactersToSearchPropertyChanged));
    return RadAutoCompleteTextView;
})(viewModule.View);
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
