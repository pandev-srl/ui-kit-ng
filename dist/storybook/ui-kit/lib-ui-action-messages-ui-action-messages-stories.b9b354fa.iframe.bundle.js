"use strict";(self.webpackChunkpi_ui_kit_ng=self.webpackChunkpi_ui_kit_ng||[]).push([[194],{"./projects/ui-kit/src/lib/models.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>uiThemes});const uiThemes=["primary","secondary","accent","danger","success","warning","info"]},"./projects/ui-kit/src/lib/ui-alert/ui-alert/ui-alert.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>UiAlertComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _UiAlertComponent,core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UiAlertComponent=((_UiAlertComponent=class UiAlertComponent{constructor(){this.theme="primary",this.title=null,this.description=null,this.icon=null,this.currentIcon=null,this.ref=null,this.alertPrimary=!1,this.alertSecondary=!1,this.alertAccent=!1,this.alertDanger=!1,this.alertSuccess=!1,this.alertWarning=!1,this.alertInfo=!1,this.ICON_MAPS={primary:null,secondary:null,accent:null,danger:"fa-times-circle",success:"fa-check-circle",warning:"fa-exclamation-circle",info:"fa-info-circle"}}ngOnInit(){}ngOnChanges(changes){null==this.icon&&changes.type?this.currentIcon=this.ICON_MAPS[this.theme]:this.currentIcon=this.icon,changes.theme&&this.setTheme()}setTheme(){switch(this.alertPrimary=!1,this.alertSecondary=!1,this.alertAccent=!1,this.alertDanger=!1,this.alertSuccess=!1,this.alertWarning=!1,this.alertInfo=!1,this.theme){case"primary":this.alertPrimary=!0;break;case"secondary":this.alertSecondary=!0;break;case"accent":this.alertAccent=!0;break;case"danger":this.alertDanger=!0;break;case"success":this.alertSuccess=!0;break;case"warning":this.alertWarning=!0;break;case"info":this.alertInfo=!0}}}).ctorParameters=()=>[],_UiAlertComponent.propDecorators={theme:[{type:core.Input}],title:[{type:core.Input}],description:[{type:core.Input}],icon:[{type:core.Input}],ref:[{type:core.ViewChild,args:["ref"]}],alertPrimary:[{type:core.HostBinding,args:["class.alert-primary"]}],alertSecondary:[{type:core.HostBinding,args:["class.alert-secondary"]}],alertAccent:[{type:core.HostBinding,args:["class.alert-accent"]}],alertDanger:[{type:core.HostBinding,args:["class.alert-danger"]}],alertSuccess:[{type:core.HostBinding,args:["class.alert-success"]}],alertWarning:[{type:core.HostBinding,args:["class.alert-warning"]}],alertInfo:[{type:core.HostBinding,args:["class.alert-info"]}]},_UiAlertComponent);UiAlertComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-alert",template:'<div\n  *ngIf="currentIcon"\n  class="alert-icon"\n>\n  <i [uiIcon]="currentIcon"></i>\n</div>\n<div class="alert-content">\n  <h3\n    class="alert-title"\n    *ngIf="title"\n  >\n    {{ title }}\n  </h3>\n  <div\n    class="alert-description"\n    *ngIf="description"\n  >\n    {{ description }}\n  </div>\n  <ng-content></ng-content>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],UiAlertComponent)},"./projects/ui-kit/src/lib/ui-icon/ui-icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>UiIconModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");const UI_DEFAULT_ICON_SET=new core.InjectionToken("UI_DEFAULT_ICON_SET");var _UiIconDirective;let UiIconDirective=((_UiIconDirective=class UiIconDirective{constructor(defaultIconSet){this.defaultIconSet=defaultIconSet,this.uiIcon="",this.iconSet=this.defaultIconSet,this.currentIconSet="",this.classes=""}ngOnChanges(_changes){this.currentIconSet=this.iconSet??this.defaultIconSet,this.classes=`${this.currentIconSet} ${this.uiIcon}`}}).ctorParameters=()=>[{type:String,decorators:[{type:core.Inject,args:[UI_DEFAULT_ICON_SET]}]}],_UiIconDirective.propDecorators={uiIcon:[{type:core.Input}],iconSet:[{type:core.Input}],classes:[{type:core.HostBinding,args:["class"]}]},_UiIconDirective);UiIconDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[uiIcon]"})],UiIconDirective);let UiIconModule=class UiIconModule{};UiIconModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[UiIconDirective],imports:[common.CommonModule],exports:[UiIconDirective],providers:[{provide:UI_DEFAULT_ICON_SET,useValue:"fa-regular"}]})],UiIconModule)},"./projects/ui-kit/src/lib/ui-action-messages/ui-action-messages.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ui_action_messages_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),ui_icon_module=__webpack_require__("./projects/ui-kit/src/lib/ui-icon/ui-icon.module.ts"),ui_alert_component=__webpack_require__("./projects/ui-kit/src/lib/ui-alert/ui-alert/ui-alert.component.ts");var _UiHeadingComponent;let UiHeadingComponent=((_UiHeadingComponent=class UiHeadingComponent{constructor(){this.size="h1",this.h1=!0,this.h2=!1,this.h3=!1,this.h4=!1,this.h5=!1,this.h6=!1}ngOnInit(){}ngOnChanges(changes){changes.size&&this.setSize()}setSize(){switch(this.h1=!1,this.h2=!1,this.h3=!1,this.h4=!1,this.h5=!1,this.h6=!1,this.size){case"h1":this.h1=!0;break;case"h2":this.h2=!0;break;case"h3":this.h3=!0;break;case"h4":this.h4=!0;break;case"h5":this.h5=!0;break;case"h6":this.h6=!0}}}).ctorParameters=()=>[],_UiHeadingComponent.propDecorators={size:[{type:core.Input}],h1:[{type:core.HostBinding,args:["class.h1"]}],h2:[{type:core.HostBinding,args:["class.h2"]}],h3:[{type:core.HostBinding,args:["class.h3"]}],h4:[{type:core.HostBinding,args:["class.h4"]}],h5:[{type:core.HostBinding,args:["class.h5"]}],h6:[{type:core.HostBinding,args:["class.h6"]}]},_UiHeadingComponent);UiHeadingComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-heading",template:"<ng-content></ng-content>\n",changeDetection:core.ChangeDetectionStrategy.OnPush})],UiHeadingComponent);let UiHeadingModule=class UiHeadingModule{};UiHeadingModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[UiHeadingComponent],imports:[common.CommonModule],exports:[UiHeadingComponent]})],UiHeadingModule);let UiAlertModule=class UiAlertModule{};var _UiActionMessagesComponent;UiAlertModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[ui_alert_component.i],imports:[common.CommonModule,ui_icon_module.S,UiHeadingModule],exports:[ui_alert_component.i]})],UiAlertModule);let UiActionMessagesComponent=((_UiActionMessagesComponent=class UiActionMessagesComponent{constructor(){this.theme="danger",this.messages=[]}}).propDecorators={theme:[{type:core.Input}],messages:[{type:core.Input}]},_UiActionMessagesComponent);UiActionMessagesComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-action-messages",template:'<ui-alert [theme]="theme">\n  <ul\n    *ngFor="let message of messages"\n    class="text-sm w-full"\n  >\n    <li>{{ message }}</li>\n  </ul>\n</ui-alert>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[common.CommonModule,UiAlertModule],standalone:!0})],UiActionMessagesComponent);const ui_action_messages_stories={title:"Action messages",component:UiActionMessagesComponent,tags:["autodocs"],args:{theme:"accent",messages:[]},argTypes:{theme:{description:"The color theme you want to apply",options:__webpack_require__("./projects/ui-kit/src/lib/models.ts").T,control:{type:"select"},table:{defaultValue:{summary:"primary"}}},messages:{description:"A list of messages to display",table:{defaultValue:{summary:"[]"}}}},parameters:{docs:{description:{component:"UiActionMessagesComponent. Used to display feedbacks form actions. It's based on UiAlertComponent."}}}},Default={args:{theme:"primary",messages:["Message 1","Message 2"]}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    messages: ['Message 1', 'Message 2']\n  }\n}",...Default.parameters?.docs?.source}}}}}]);