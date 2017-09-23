var core_1 = require('@angular/core');
var elementRegistry = require('nativescript-angular/element-registry');
var _1 = require('./../');
var RadDataFormComponent = (function () {
    function RadDataFormComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._dataForm = _elementRef.nativeElement;
    }
    Object.defineProperty(RadDataFormComponent.prototype, "dataForm", {
        get: function () {
            return this._dataForm;
        },
        enumerable: true,
        configurable: true
    });
    RadDataFormComponent = __decorate([
        core_1.Component({
            selector: "RadDataForm",
            template: ""
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], RadDataFormComponent);
    return RadDataFormComponent;
})();
exports.RadDataFormComponent = RadDataFormComponent;
var TKEntityPropertyDirective = (function () {
    function TKEntityPropertyDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._entityProperty = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKEntityPropertyDirective.prototype, "entityProperty", {
        get: function () {
            return this._entityProperty;
        },
        enumerable: true,
        configurable: true
    });
    TKEntityPropertyDirective = __decorate([
        core_1.Directive({
            selector: "TKEntityProperty"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], TKEntityPropertyDirective);
    return TKEntityPropertyDirective;
})();
exports.TKEntityPropertyDirective = TKEntityPropertyDirective;
var TKDataFormGridLayoutDirective = (function () {
    function TKDataFormGridLayoutDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._dataFormGridLayout = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKDataFormGridLayoutDirective.prototype, "dataFormGridLayout", {
        get: function () {
            return this._dataFormGridLayout;
        },
        enumerable: true,
        configurable: true
    });
    TKDataFormGridLayoutDirective = __decorate([
        core_1.Directive({
            selector: "TKDataFormGridLayout"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], TKDataFormGridLayoutDirective);
    return TKDataFormGridLayoutDirective;
})();
exports.TKDataFormGridLayoutDirective = TKDataFormGridLayoutDirective;
var TKDataFormStackLayoutDirective = (function () {
    function TKDataFormStackLayoutDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._dataFormStackLayout = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKDataFormStackLayoutDirective.prototype, "dataFormStackLayout", {
        get: function () {
            return this._dataFormStackLayout;
        },
        enumerable: true,
        configurable: true
    });
    TKDataFormStackLayoutDirective = __decorate([
        core_1.Directive({
            selector: "TKDataFormStackLayout"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], TKDataFormStackLayoutDirective);
    return TKDataFormStackLayoutDirective;
})();
exports.TKDataFormStackLayoutDirective = TKDataFormStackLayoutDirective;
var TKPropertyGroupDirective = (function () {
    function TKPropertyGroupDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._propertyGroup = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKPropertyGroupDirective.prototype, "propertyGroup", {
        get: function () {
            return this._propertyGroup;
        },
        enumerable: true,
        configurable: true
    });
    TKPropertyGroupDirective = __decorate([
        core_1.Directive({
            selector: "TKPropertyGroup"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], TKPropertyGroupDirective);
    return TKPropertyGroupDirective;
})();
exports.TKPropertyGroupDirective = TKPropertyGroupDirective;
var TKPropertyEditorirective = (function () {
    function TKPropertyEditorirective(_elementRef) {
        this._elementRef = _elementRef;
        this._propertyEditor = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKPropertyEditorirective.prototype, "propertyEditor", {
        get: function () {
            return this._propertyEditor;
        },
        enumerable: true,
        configurable: true
    });
    TKPropertyEditorirective = __decorate([
        core_1.Directive({
            selector: "TKPropertyEditor"
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], TKPropertyEditorirective);
    return TKPropertyEditorirective;
})();
exports.TKPropertyEditorirective = TKPropertyEditorirective;
var TKDataFormPropertyDirective = (function () {
    function TKDataFormPropertyDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKDataFormPropertyDirective.prototype.ngOnInit = function () {
        var property = this._elementRef.nativeElement;
        if (this.owner.dataForm.properties) {
            this.owner.dataForm.properties.push(property);
        }
        else {
            this.owner.dataForm.properties = new Array(property);
        }
    };
    TKDataFormPropertyDirective = __decorate([
        core_1.Directive({
            selector: "[tkDataFormProperty]"
        }),
        __param(0, core_1.Inject(RadDataFormComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKDataFormPropertyDirective);
    return TKDataFormPropertyDirective;
})();
exports.TKDataFormPropertyDirective = TKDataFormPropertyDirective;
var TKPropertyGroupLayoutDirective = (function () {
    function TKPropertyGroupLayoutDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyGroupLayoutDirective.prototype.ngOnInit = function () {
        var layout = this._elementRef.nativeElement;
        this.owner.propertyGroup.layout = layout;
    };
    TKPropertyGroupLayoutDirective = __decorate([
        core_1.Directive({
            selector: "[tkPropertyGroupLayout]"
        }),
        __param(0, core_1.Inject(TKPropertyGroupDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPropertyGroupLayoutDirective);
    return TKPropertyGroupLayoutDirective;
})();
exports.TKPropertyGroupLayoutDirective = TKPropertyGroupLayoutDirective;
var TKDataFormGroupsDirective = (function () {
    function TKDataFormGroupsDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKDataFormGroupsDirective.prototype.ngOnInit = function () {
        var property = this._elementRef.nativeElement;
        if (this.owner.dataForm.groups) {
            this.owner.dataForm.groups.push(property);
        }
        else {
            this.owner.dataForm.groups = new Array(property);
        }
    };
    TKDataFormGroupsDirective = __decorate([
        core_1.Directive({
            selector: "[tkDataFormGroups]"
        }),
        __param(0, core_1.Inject(RadDataFormComponent)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKDataFormGroupsDirective);
    return TKDataFormGroupsDirective;
})();
exports.TKDataFormGroupsDirective = TKDataFormGroupsDirective;
var TKPropertyGroupTitleStyle = (function () {
    function TKPropertyGroupTitleStyle(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyGroupTitleStyle.prototype.ngOnInit = function () {
        var titleStyle = this._elementRef.nativeElement;
        this.owner.propertyGroup.titleStyle = titleStyle;
    };
    TKPropertyGroupTitleStyle = __decorate([
        core_1.Directive({
            selector: "[tkPropertyGroupTitleStyle]"
        }),
        __param(0, core_1.Inject(TKPropertyGroupDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPropertyGroupTitleStyle);
    return TKPropertyGroupTitleStyle;
})();
exports.TKPropertyGroupTitleStyle = TKPropertyGroupTitleStyle;
var TKPropertyEditorStyle = (function () {
    function TKPropertyEditorStyle(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyEditorStyle.prototype.ngOnInit = function () {
        var style = this._elementRef.nativeElement;
        this.owner.propertyEditor.style = style;
    };
    TKPropertyEditorStyle = __decorate([
        core_1.Directive({
            selector: "[tkPropertyEditorStyle]"
        }),
        __param(0, core_1.Inject(TKPropertyEditorirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPropertyEditorStyle);
    return TKPropertyEditorStyle;
})();
exports.TKPropertyEditorStyle = TKPropertyEditorStyle;
var TKPropertyGroupPropertiesDirective = (function () {
    function TKPropertyGroupPropertiesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyGroupPropertiesDirective.prototype.ngOnInit = function () {
        var property = this._elementRef.nativeElement;
        if (this.owner.propertyGroup.properties) {
            this.owner.propertyGroup.properties.push(property);
        }
        else {
            this.owner.propertyGroup.properties = new Array(property);
        }
    };
    TKPropertyGroupPropertiesDirective = __decorate([
        core_1.Directive({
            selector: "[tkPropertyGroupProperties]"
        }),
        __param(0, core_1.Inject(TKPropertyGroupDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKPropertyGroupPropertiesDirective);
    return TKPropertyGroupPropertiesDirective;
})();
exports.TKPropertyGroupPropertiesDirective = TKPropertyGroupPropertiesDirective;
var TKEntityPropertyEditorDirective = (function () {
    function TKEntityPropertyEditorDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKEntityPropertyEditorDirective.prototype.ngOnInit = function () {
        var editor = this._elementRef.nativeElement;
        this.owner.entityProperty.editor = editor;
    };
    TKEntityPropertyEditorDirective = __decorate([
        core_1.Directive({
            selector: "[tkEntityPropertyEditor]"
        }),
        __param(0, core_1.Inject(TKEntityPropertyDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKEntityPropertyEditorDirective);
    return TKEntityPropertyEditorDirective;
})();
exports.TKEntityPropertyEditorDirective = TKEntityPropertyEditorDirective;
var TKEntityPropertyValidators = (function () {
    function TKEntityPropertyValidators(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKEntityPropertyValidators.prototype.ngOnInit = function () {
        var validator = this._elementRef.nativeElement;
        if (this.owner.entityProperty.validators) {
            this.owner.entityProperty.validators.push(validator);
        }
        else {
            this.owner.entityProperty.validators = new Array(validator);
        }
    };
    TKEntityPropertyValidators = __decorate([
        core_1.Directive({
            selector: "[tkEntityPropertyValidators]"
        }),
        __param(0, core_1.Inject(TKEntityPropertyDirective)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], TKEntityPropertyValidators);
    return TKEntityPropertyValidators;
})();
exports.TKEntityPropertyValidators = TKEntityPropertyValidators;
exports.DATAFORM_DIRECTIVES = [RadDataFormComponent, TKDataFormPropertyDirective, TKEntityPropertyEditorDirective, TKEntityPropertyDirective, TKDataFormGroupsDirective, TKPropertyGroupPropertiesDirective, TKPropertyGroupDirective, TKPropertyGroupTitleStyle, TKPropertyEditorirective, TKPropertyEditorStyle, TKEntityPropertyValidators, TKDataFormGridLayoutDirective, TKDataFormStackLayoutDirective, TKPropertyGroupLayoutDirective];
elementRegistry.registerElement("RadDataForm", function () { return _1.RadDataForm; });
elementRegistry.registerElement("TKEntityProperty", function () { return _1.EntityProperty; });
elementRegistry.registerElement("TKPropertyEditor", function () { return _1.PropertyEditor; });
elementRegistry.registerElement("TKPropertyGroup", function () { return _1.PropertyGroup; });
elementRegistry.registerElement("TKGroupTitleStyle", function () { return _1.GroupTitleStyle; });
elementRegistry.registerElement("TKPropertyEditorStyle", function () { return _1.PropertyEditorStyle; });
elementRegistry.registerElement("TKPropertyValidator", function () { return _1.PropertyValidator; });
elementRegistry.registerElement("TKNonEmptyValidator", function () { return _1.NonEmptyValidator; });
elementRegistry.registerElement("TKMaximumLengthValidator", function () { return _1.MaximumLengthValidator; });
elementRegistry.registerElement("TKMinimumLengthValidator", function () { return _1.MinimumLengthValidator; });
elementRegistry.registerElement("TKEmailValidator", function () { return _1.EmailValidator; });
elementRegistry.registerElement("TKRangeValidator", function () { return _1.RangeValidator; });
elementRegistry.registerElement("TKPhoneValidator", function () { return _1.PhoneValidator; });
elementRegistry.registerElement("TKDataFormGridLayout", function () { return _1.DataFormGridLayout; });
elementRegistry.registerElement("TKDataFormStackLayout", function () { return _1.DataFormStackLayout; });
