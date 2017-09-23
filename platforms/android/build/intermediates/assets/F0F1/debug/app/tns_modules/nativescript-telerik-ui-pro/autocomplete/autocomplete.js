var commonModule = require("./autocomplete-common");
var builder = require("ui/builder");
var layoutsModule = require('ui/layouts/stack-layout');
require("utils/module-merge").merge(commonModule, exports);
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var TokenModel = (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, image) {
        _super.call(this, text, image);
        this._android = new com.telerik.widget.autocomplete.TokenModel(text, null);
    }
    Object.defineProperty(TokenModel.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
})(commonModule.TokenModel);
exports.TokenModel = TokenModel;
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView(parent) {
        _super.call(this);
    }
    Object.defineProperty(SuggestionView.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    return SuggestionView;
})(commonModule.SuggestionView);
exports.SuggestionView = SuggestionView;
var AutoCompleteAdapter = (function (_super) {
    __extends(AutoCompleteAdapter, _super);
    function AutoCompleteAdapter(owner, items) {
        _super.call(this, this._context, items, null);
        this.suggestionsMap = {};
        this.owner = owner;
        return global.__native(this);
    }
    AutoCompleteAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
        var view = builder.parse(this.owner.suggestionView.suggestionItemTemplate, this);
        var parentView = new layoutsModule.StackLayout();
        parentView.orientation = "vertical";
        parentView.addChild(view);
        this.owner._addView(parentView);
        var layoutParams = new org.nativescript.widgets.CommonLayoutParams();
        layoutParams.width = org.nativescript.widgets.CommonLayoutParams.MATCH_PARENT;
        layoutParams.height = org.nativescript.widgets.CommonLayoutParams.WRAP_CONTENT;
        var holder = new com.telerik.widget.list.ListViewHolder(parentView.android);
        parentView.android.setLayoutParams(layoutParams);
        holder.nsView = parentView;
        return holder;
    };
    AutoCompleteAdapter.prototype.onBindViewHolder = function (holder, position) {
        var nativeItem = this.getFilteredList().get(position);
        holder.nsView.bindingContext = new TokenModel(nativeItem.getText());
    };
    return AutoCompleteAdapter;
})(com.telerik.widget.autocomplete.AutoCompleteAdapter);
exports.AutoCompleteAdapter = AutoCompleteAdapter;
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        _super.call(this);
        this.filteredItems = new Array();
    }
    RadAutoCompleteTextView.prototype._createUI = function () {
        this._android = new com.telerik.widget.autocomplete.RadAutoCompleteTextView(this._context);
        if (this.displayMode) {
            this.adjustDisplayMode(this.displayMode);
        }
        if (this.suggestMode) {
            this.adjustSuggestMode(this.suggestMode);
        }
        if (this.layoutMode) {
            this.adjustLayoutMode(this.layoutMode);
        }
        if (this.completionMode) {
            this.adjustCompletionMode(this.completionMode);
        }
        if (this.suggestionView) {
            this.adjustSuggestionView(this.suggestionView);
        }
        if (this.minimumCharactersToSearch) {
            this.adjustMinimumCharactersToSearch(this.minimumCharactersToSearch);
        }
        this.loadData();
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
        this._android.resetAutocomplete();
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeView.setModel(nativeObject);
        this._android.addToken(nativeView);
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeView.setModel(nativeObject);
        this._android.insertTokenAt(index, nativeView);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeView.setModel(nativeObject);
        this._android.removeToken(nativeView);
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._android.removeTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._android.removeAllTokens();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._android.getTokens();
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._android.getTokenAtIndex(index);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (data) {
        this.adjustDisplayMode(data.newValue);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (data) {
        this.adjustLayoutMode(data.newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (data) {
        this.adjustSuggestMode(data.newValue);
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (data) {
        this.adjustCompletionMode(data.newValue);
    };
    RadAutoCompleteTextView.prototype.onItemsChanged = function (data) {
        this.loadData();
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (data) {
        this.adjustSuggestionView(data.newValue);
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (data) {
        this.adjustMinimumCharactersToSearch(data.newValue);
    };
    RadAutoCompleteTextView.prototype.adjustMinimumCharactersToSearch = function (value) {
        if (this._android && value) {
            this._android.setMinimumCharactersToSearch(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestionView = function (value) {
        if (this._android && value) {
            var suggestionView = value;
            suggestionView.android = this._android.getSuggestionView();
            this._android.setSuggestionViewHeight(suggestionView.suggestionViewHeight);
        }
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._android && value) {
            if (value == commonModule.CompletionMode.Contains) {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.CONTAINS);
            }
            else {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.STARTS_WITH);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._android && value) {
            this._android.setDisplayMode((value === commonModule.DisplayMode.Plain) ?
                com.telerik.widget.autocomplete.DisplayMode.PLAIN :
                com.telerik.widget.autocomplete.DisplayMode.TOKENS);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._android && value) {
            if (value == commonModule.SuggestMode.Suggest) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST);
            }
            else if (value == commonModule.SuggestMode.Append) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.APPEND);
            }
            else {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST_APPEND);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._android) {
            this._android.setTokensLayoutMode((value === commonModule.LayoutMode.Horizontal) ?
                com.telerik.widget.autocomplete.LayoutMode.HORIZONTAL :
                com.telerik.widget.autocomplete.LayoutMode.WRAP);
        }
    };
    RadAutoCompleteTextView.prototype.loadData = function () {
        if (this.items == undefined) {
            return;
        }
        var nativeSource = new java.util.ArrayList();
        for (var i = 0; i < this.items.length; i++) {
            var a = this.items.getItem(i);
            nativeSource.add(a.android);
        }
        var adapter = new AutoCompleteAdapter(this, nativeSource);
        this._android.setAdapter(adapter);
    };
    return RadAutoCompleteTextView;
})(commonModule.RadAutoCompleteTextView);
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
