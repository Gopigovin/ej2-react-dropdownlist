var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
var DropDownListComponent = (function (_super) {
    __extends(DropDownListComponent, _super);
    function DropDownListComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.state = props;
        return _this;
    }
    DropDownListComponent.prototype.render = function () {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('input', this.getDefaultAttributes(), this.props.children);
        }
    };
    return DropDownListComponent;
}(DropDownList));
export { DropDownListComponent };
applyMixins(DropDownListComponent, [ComponentBase, React.PureComponent]);
