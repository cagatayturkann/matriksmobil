declare module android {
    module graphics {
        class Color {
            static BLACK;
            static TRANSPARENT;
        }
        class Typeface {
            static create(name, style): Typeface;
            static NORMAL;
            static BOLD;
            static ITALIC;
            static BOLD_ITALIC;
        }
        module drawable {
            class GradientDrawable {
                constructor();
                setStroke(width, color): void;
                setColor(fillColor): void;
            }
        }
    }
    module view {
        export class View {
            static GONE;
            static VISIBLE;
            setVisibility(value: any): void;
            getVisibility(): any;
            setEnabled(value: boolean): void;
            isEnabled(): boolean;
            setTextColor(value: any): void;
            setBackgroundColor(value: any): void;
            setBackgroundDrawable(value: any): void;
            setTypeface(value: android.graphics.Typeface): void;
            setTextSize(value: number): void;
            setTranslationX(value: number): void;
            setTranslationY(value: number): void;
        }
    }
    module widget {
        class LinearLayout {
            static HORIZONTAL;
            static VERTICAL;
        }
    }
    module content {
        class Context {
        }
    }
}
type AndroidContext = android.content.Context;
type AndroidView = android.view.View;

declare module com {
    module telerik {
        module android {
            module common {
                interface Procedure<T> {
                    apply(param: T): void;
                }
                interface Function2<T1, T2, T3> {
                    apply(p1: T1, p2: T2): T3;
                }
                class Procedure<T> {
                    constructor(impl: any);
                }
                class Function2<T1, T2, T3> {
                    constructor(impl: any);
                }
            }
        }
        module widget {
            module dataform {
                module engine {
                    interface PropertyConverter {
                    }
                    class StringToDateConverter implements PropertyConverter {
                    }
                    class StringToTimeConverter implements PropertyConverter {
                    }
                    interface PropertyValidator {
                    }
                    class MinimumLengthValidator implements PropertyValidator {
                        setMinimumLength(value: number): void;
                    }
                    class MaximumLengthValidator implements PropertyValidator {
                        setMaximumLength(value: number): void;
                    }
                    class MailValidator implements PropertyValidator {
                    }
                    class NonEmptyValidator implements PropertyValidator {
                    }
                    class PhoneValidator implements PropertyValidator {
                    }
                    class RangeValidator implements PropertyValidator {
                        setMin(value: number): void;
                        setMax(value: number): void;
                    }
                    class PropertyValidatorSet implements PropertyValidator {
                        constructor();
                        add(value: PropertyValidator): void;
                    }
                    interface Entity {
                        properties(): java.util.Iterator.Iterable<EntityProperty>;
                    }
                    interface EntityProperty {
                        name(): string;
                        setGroupName(groupName: string): void;
                        getGroupName(): string;
                        getValue(): any;
                        setHeader(value: string): void;
                        setHintText(value: string): void;
                        setPosition(value: number): void;
                        setColumnPosition(value: number): void;
                        setSkip(value: boolean): void;
                        setRequired(value: boolean): void;
                        setConverter(value: com.telerik.widget.dataform.engine.PropertyConverter): void;
                        setValidator(value: com.telerik.widget.dataform.engine.PropertyValidator): void;
                        setEditorType(value: java.lang.Class): void;
                        setEditorParams(value: any): void;
                        setImageResource(value: number): void;
                        updateValues(value: any): void;
                    }
                    interface EntityPropertyCommitListener {
                        onBeforeCommit(property: com.telerik.widget.dataform.engine.EntityProperty): boolean;
                        onAfterCommit(property: com.telerik.widget.dataform.engine.EntityProperty): void;
                    }
                    class EntityPropertyCommitListener {
                        constructor(impl: any);
                    }
                    class DataFormMetadata {
                        constructor(value: org.json.JSONObject);
                    }
                }
                module visualization {
                    class RadDataForm {
                        constructor(any);
                        setCommitMode(mode: com.telerik.widget.dataform.visualization.core.CommitMode): void;
                        setValidationMode(mode: core.ValidationMode): void;
                        setIsReadOnly(value: boolean): void;
                        setReloadSuspended(value: boolean): void;
                        isReloadSuspended(): boolean;
                        setEntity(value: org.json.JSONObject): void;
                        getEntity(): com.telerik.widget.dataform.engine.Entity;
                        setLayoutManager(value: DataFormLayoutManager): void;
                        setEditorCustomizations(value: any): void;
                        arrangeEditors(): void;
                        addCommitListener(value: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
                        getEditedObject(): any;
                        reload(): void;
                        commitChanges(): void;
                        getExistingEditorForProperty(propertyName: string): com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
                        setMetadata(value: com.telerik.widget.dataform.engine.DataFormMetadata): void;
                    }
                    class DataFormLayoutManager {
                        setCreateGroup(value: any): void;
                        setEditorGroupCustomizations(value: any): void;
                        applyEditorGroupCustomizations(): void;
                    }
                    class DataFormLinearLayoutManager extends DataFormLayoutManager {
                        constructor(any);
                        setOrientation(value: number): void;
                    }
                    class DataFormTableLayoutManager extends DataFormLayoutManager {
                        constructor(any);
                    }
                    class DataFormGroupLayoutManager extends DataFormLayoutManager {
                        constructor(any);
                    }
                    class EditorGroup {
                        constructor(context: AndroidContext, name: java.lang.String);
                        name(): string;
                        rootLayout(): AndroidView;
                        getHeaderView(): AndroidView;
                        getHeaderContainer(): AndroidView;
                        addIsExpandedChangedListener(value: com.telerik.widget.dataform.visualization.ExpandableEditorGroup.IsExpandedChangedListener): void;
                    }
                    module ExpandableEditorGroup {
                        interface IsExpandedChangedListener {
                            onChanged(value: boolean): void;
                        }
                        class IsExpandedChangedListener {
                            constructor(impl: any);
                        }
                    }
                    class ExpandableEditorGroup extends EditorGroup {
                        constructor(context: AndroidContext, name: java.lang.String);
                    }

                    module core {
                        enum CommitMode { IMMEDIATE, ON_LOST_FOCUS, MANUAL }
                        enum ValidationMode { IMMEDIATE, ON_LOST_FOCUS, MANUAL }
                        class EntityPropertyViewer {
                            property(): com.telerik.widget.dataform.engine.EntityProperty;
                            notifyEntityPropertyChanged(): void;
                            applyParams(value: any): void;
                            getHeaderView(): AndroidView;
                            getEditorView(): AndroidView;
                            rootLayout(): AndroidView;
                            rootLayout: AndroidView;
                        }
                        class EntityPropertyEditor extends EntityPropertyViewer {
                            static class: java.lang.Class;
                        }
                    }
                    module editors {
                        class DataFormTextEditor extends core.EntityPropertyEditor {
                            constructor(dataForm: com.telerik.widget.dataform.visualization.RadDataForm,
                                property: com.telerik.widget.dataform.engine.EntityProperty);
                        }
                        class DataFormMultilineTextEditor extends DataFormTextEditor {
                        }
                        class DataFormEmailEditor extends DataFormTextEditor {
                        }
                        class DataFormPasswordEditor extends DataFormTextEditor {
                        }
                        class DataFormPhoneEditor extends DataFormTextEditor {
                        }
                        class DataFormIntegerEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormDecimalEditor extends DataFormIntegerEditor {
                        }
                        class DataFormSwitchEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormNumberPickerEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormSeekBarEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormSegmentedEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormDateEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormTimeEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormSpinnerEditor extends core.EntityPropertyEditor {
                        }
                        class DataFormListViewEditor extends core.EntityPropertyEditor {
                        }
                    }
                }
            }
        }
    }
}
declare module java {
    module lang {
        class Class {
        }
        class Float {
            constructor(value: number);
        }
        class String {
        }
    }
    module text {
        class SimpleDateFormat {
            constructor(format: string, locale: java.util.Locale);
        }
    }
    module util {
        module Iterator {
            interface Iterable<T> {
                size(): number;
                get(i: number): T;
            }
        }
        class ArrayList {
            constructor();
            add(value: any): void;
            toArray(): any[];
        }
        class HashMap {
        }
        class Locale {
            static US;
        }
    }
}
declare module org {
    module json {
        class JSONObject {
            constructor(value: string);
        }
    }
}
