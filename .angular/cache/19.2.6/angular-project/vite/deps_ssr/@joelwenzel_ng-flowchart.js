import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-XN6RIQOC.js";
import {
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  require_cjs,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-AYIISLBR.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-YHCV7DAQ.js";

// node_modules/@joelwenzel/ng-flowchart/fesm2022/joelwenzel-ng-flowchart.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var _c0 = ["arrow"];
var _c1 = ["arrowPadding"];
var _c2 = (a0, a1, a2) => ({
  height: a0,
  width: a1,
  opacity: a2
});
var _c3 = (a0) => ({
  "ngflowchart-connector-selected": a0
});
function NgFlowchartConnectorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11)(1, "div", 12);
    ɵɵlistener("click", function NgFlowchartConnectorComponent_div_0_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.deleteConnector($event));
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 13)(3, "defs")(4, "style");
    ɵɵtext(5, " .cls-trashcan-icon { fill-rule: evenodd; } ");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "title");
    ɵɵtext(7, "Delete");
    ɵɵelementEnd();
    ɵɵelement(8, "path", 14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("left", ctx_r1.deleteButtonPosition.x, "px")("top", ctx_r1.deleteButtonPosition.y, "px");
  }
}
var _c4 = (a0, a1, a2, a3, a4) => ({
  height: a0,
  width: a1,
  left: a2,
  top: a3,
  opacity: a4
});
var _c5 = ["connectorPad"];
function NgFlowchartConnectorPadComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2, 0);
    ɵɵelement(2, "circle", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("height", ctx_r0.padRadius * 2 + ctx_r0.strokeWidth)("width", ctx_r0.padRadius * 2 + ctx_r0.strokeWidth);
    ɵɵadvance(2);
    ɵɵattribute("cx", ctx_r0.padRadius + ctx_r0.strokeWidth / 2)("cy", ctx_r0.padRadius + ctx_r0.strokeWidth / 2)("r", ctx_r0.padRadius)("stroke-width", ctx_r0.strokeWidth);
  }
}
var _c6 = ["canvasContent"];
var _c7 = (a0, a1) => ({
  data: a0,
  id: a1
});
var _c8 = (a0) => ({
  $implicit: a0
});
function NgFlowchartStepComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var NgFlowchart;
(function(NgFlowchart2) {
  class Flow {
    constructor(canvas) {
      this.canvas = canvas;
    }
    /**
     * Returns the json representation of this flow
     * @param indent Optional indent to specify for formatting
     */
    toJSON(indent) {
      return JSON.stringify(this.toObject(), null, indent);
    }
    toObject() {
      return {
        root: this.canvas.flow.rootStep?.toJSON(),
        connectors: this.canvas.flow.connectors?.map((c) => c.toJSON())
      };
    }
    /**
     * Create a flow and render it on the canvas from a json string
     * @param json The json string of the flow to render
     */
    upload(json) {
      return __async(this, null, function* () {
        let jsonObj = typeof json === "string" ? JSON.parse(json) : json;
        let root = jsonObj.root;
        let connectors = jsonObj.connectors;
        this.clear();
        yield this.canvas.upload(root, connectors);
      });
    }
    /**
     * Returns the root step of the flow chart
     */
    getRoot() {
      return this.canvas.flow.rootStep;
    }
    /**
     * Finds a step in the flow chart by a given id
     * @param id Id of the step to find. By default, the html id of the step
     */
    getStep(id) {
      return this.canvas.flow.steps.find((child) => child.id == id);
    }
    /**
     * Re-renders the canvas. Generally this should only be used in rare circumstances
     * @param pretty Attempt to recenter the flow in the canvas
     */
    render(pretty) {
      this.canvas.reRender(pretty);
    }
    /**
     * Clears all flow chart, reseting the current canvas
     */
    clear() {
      if (this.canvas.flow?.rootStep) {
        this.canvas.flow.rootStep.destroy(true, false);
        this.canvas.reRender();
      }
    }
  }
  NgFlowchart2.Flow = Flow;
  class Options {
    constructor() {
      this.stepGap = 40;
      this.hoverDeadzoneRadius = 20;
      this.isSequential = false;
      this.rootPosition = "TOP_CENTER";
      this.centerOnResize = true;
      this.zoom = {
        mode: "WHEEL",
        defaultStep: 0.1,
        skipRender: false
      };
      this.dragScroll = ["RIGHT"];
      this.orientation = "VERTICAL";
      this.manualConnectors = false;
    }
  }
  NgFlowchart2.Options = Options;
  let DropType;
  (function(DropType2) {
    DropType2["Step"] = "STEP";
    DropType2["Connector"] = "CONNECTOR";
  })(DropType = NgFlowchart2.DropType || (NgFlowchart2.DropType = {}));
  let DropSource;
  (function(DropSource2) {
    DropSource2["Canvas"] = "FROM_CANVAS";
    DropSource2["Palette"] = "FROM_PALETTE";
  })(DropSource = NgFlowchart2.DropSource || (NgFlowchart2.DropSource = {}));
})(NgFlowchart || (NgFlowchart = {}));
var CONSTANTS = {
  DROP_HOVER_ATTR: "ngflowchart-drop-hover",
  CANVAS_CONTENT_CLASS: "ngflowchart-canvas-content",
  CANVAS_CONTENT_ID: "ngflowchart-canvas-content",
  CANVAS_CLASS: "ngflowchart-canvas",
  CANVAS_STEP_CLASS: "ngflowchart-canvas-step"
};
var NgFlowchartConnectorComponent = class _NgFlowchartConnectorComponent {
  set connector(connector) {
    this._connector = connector;
  }
  get connector() {
    return this._connector;
  }
  set autoPosition(pos) {
    this._position = pos;
    this.setConnectorPosition();
    this.containerWidth = Math.abs(pos.start[0] - pos.end[0]);
    this.containerHeight = Math.abs(pos.start[1] - pos.end[1]);
    this.updatePath();
  }
  onClick(event) {
    const path = this.arrow.nativeElement;
    if (event.target === this.arrowPadding.nativeElement && !this.selected) {
      path.parentElement.setAttribute("marker-end", "url(#connectorArrowheadSelected)");
      let bounds = path.getBoundingClientRect();
      const mouseX = event.clientX - bounds.left;
      const mouseY = event.clientY - bounds.top;
      const coord = this.canvas.scaleCoordinate([mouseX + 15, mouseY - 5]);
      this.deleteButtonPosition = {
        x: coord[0],
        y: coord[1]
      };
      this.selected = true;
    }
  }
  onDocumentClick(event) {
    const path = this.arrow.nativeElement;
    const insideMenuClicked = event.target.matches(".ngflowchart-connector-menu *");
    if (event.target !== this.arrowPadding.nativeElement && !insideMenuClicked) {
      path.parentElement.setAttribute("marker-end", "url(#connectorArrowhead)");
      this.selected = false;
    }
  }
  onMouseOver(target) {
    if (!this.selected && target === this.arrowPadding.nativeElement) {
      const path = this.arrow.nativeElement;
      path.parentElement.setAttribute("marker-end", "url(#connectorArrowheadHover)");
    }
  }
  onMouseOut(target) {
    if (!this.selected && target === this.arrowPadding.nativeElement) {
      const path = this.arrow.nativeElement;
      path.parentElement.setAttribute("marker-end", "url(#connectorArrowhead)");
    }
  }
  get yOffset() {
    return this.canvas.options.options.orientation === "VERTICAL" ? 6 : 0;
  }
  get xOffset() {
    return this.canvas.options.options.orientation === "HORIZONTAL" ? 6 : 0;
  }
  constructor(element) {
    this.element = element;
    this.selected = false;
    this.opacity = 1;
    this.containerWidth = 0;
    this.containerHeight = 0;
  }
  ngAfterViewInit() {
    this.updatePath();
  }
  toJSON() {
    return {
      startStepId: this._connector.startStepId,
      endStepId: this._connector.endStepId
    };
  }
  deleteConnector(event) {
    this.destroy0();
    this.canvas.reRender(true);
    this.canvas.options.callbacks.afterDeleteConnector && this.canvas.options.callbacks.afterDeleteConnector(this);
  }
  destroy0() {
    this.compRef.destroy();
    this.canvas.flow.removeConnector(this);
  }
  setConnectorPosition() {
    const left = Math.min(this._position.start[0], this._position.end[0]);
    const top = Math.min(this._position.start[1], this._position.end[1]);
    this.element.nativeElement.style.left = `${left}px`;
    this.element.nativeElement.style.top = `${top}px`;
  }
  updatePath() {
    if (!this.arrow?.nativeElement) {
      return;
    }
    const pos = this._position;
    let start = new Array(2);
    let end = new Array(2);
    if (pos.start[1] > pos.end[1]) {
      start[1] = this.containerHeight + this.yOffset;
      end[1] = 0;
      if (pos.start[0] > pos.end[0]) {
        start[0] = this.containerWidth + this.xOffset;
        end[0] = 0;
      } else {
        start[0] = this.xOffset;
        end[0] = this.containerWidth;
      }
    } else {
      start[1] = this.yOffset;
      end[1] = this.containerHeight;
      if (pos.start[0] > pos.end[0]) {
        start[0] = this.containerWidth + this.xOffset;
        end[0] = 0;
      } else {
        start[0] = this.xOffset;
        end[0] = this.containerWidth;
      }
    }
    const arrow = `
      M${start[0]} ${start[1]}
      L${end[0]} ${end[1]}
    `;
    this.arrow.nativeElement.setAttribute("d", arrow);
    this.arrowPadding.nativeElement.setAttribute("d", arrow);
  }
  static {
    this.ɵfac = function NgFlowchartConnectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartConnectorComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgFlowchartConnectorComponent,
      selectors: [["ng-flowchart-connector"]],
      viewQuery: function NgFlowchartConnectorComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrow = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrowPadding = _t.first);
        }
      },
      hostBindings: function NgFlowchartConnectorComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgFlowchartConnectorComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("mousedown", function NgFlowchartConnectorComponent_mousedown_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, ɵɵresolveDocument)("mouseover", function NgFlowchartConnectorComponent_mouseover_HostBindingHandler($event) {
            return ctx.onMouseOver($event.target);
          })("mouseout", function NgFlowchartConnectorComponent_mouseout_HostBindingHandler($event) {
            return ctx.onMouseOut($event.target);
          });
        }
      },
      inputs: {
        canvas: "canvas",
        compRef: "compRef",
        connector: "connector",
        autoPosition: "autoPosition"
      },
      standalone: false,
      decls: 14,
      vars: 9,
      consts: [["arrow", ""], ["arrowPadding", ""], ["class", "ngflowchart-connector-menu", 3, "left", "top", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 1, "ngflowchart-connector", 3, "ngStyle", "ngClass"], ["id", "connectorArrowhead", "viewBox", "0 0 10 10", "refX", "8", "refY", "5", "markerWidth", "10", "markerHeight", "10", "orient", "auto", "markerUnits", "userSpaceOnUse", "fill", "grey"], ["d", "M 0 0 L 10 5 L 0 10 z"], ["id", "connectorArrowheadHover", "viewBox", "0 0 10 10", "refX", "8", "refY", "5", "markerWidth", "10", "markerHeight", "10", "orient", "auto", "markerUnits", "userSpaceOnUse", "fill", "black"], ["id", "connectorArrowheadSelected", "viewBox", "0 0 10 10", "refX", "8", "refY", "5", "markerWidth", "10", "markerHeight", "10", "orient", "auto", "markerUnits", "userSpaceOnUse", "fill", "green"], ["id", "arrowpath", "fill", "none", "stroke", "grey", "stroke-width", "2", "marker-end", "url(#connectorArrowhead)"], ["id", "arrow"], ["id", "arrowPadding", "stroke-width", "10", "stroke", "transparent", "stroke-dasharray", "none"], [1, "ngflowchart-connector-menu"], [1, "ngflowchart-delete-connector", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "id", "deleteIcon", "viewBox", "0 0 105.16 122.88"], ["d", "M11.17 37.16H94.65a8.4 8.4 0 0 1 2 .16 5.93 5.93 0 0 1 2.88 1.56 5.43 5.43 0 0 1 1.64 3.34 7.65 7.65 0 0 1-.06 1.44L94 117.31v0l0 .13 0 .28v0a7.06 7.06 0 0 1-.2.9v0l0 .06v0a5.89 5.89 0 0 1-5.47 4.07H17.32a6.17 6.17 0 0 1-1.25-.19 6.17 6.17 0 0 1-1.16-.48h0a6.18 6.18 0 0 1-3.08-4.88l-7-73.49a7.69 7.69 0 0 1-.06-1.66 5.37 5.37 0 0 1 1.63-3.29 6 6 0 0 1 3-1.58 8.94 8.94 0 0 1 1.79-.13ZM5.65 8.8H37.12V6h0a2.44 2.44 0 0 1 0-.27 6 6 0 0 1 1.76-4h0A6 6 0 0 1 43.09 0H62.46l.3 0a6 6 0 0 1 5.7 6V6h0V8.8h32l.39 0a4.7 4.7 0 0 1 4.31 4.43c0 .18 0 .32 0 .5v9.86a2.59 2.59 0 0 1-2.59 2.59H2.59A2.59 2.59 0 0 1 0 23.62V13.53H0a1.56 1.56 0 0 1 0-.31v0A4.72 4.72 0 0 1 3.88 8.88 10.4 10.4 0 0 1 5.65 8.8Zm42.1 52.7a4.77 4.77 0 0 1 9.49 0v37a4.77 4.77 0 0 1-9.49 0v-37Zm23.73-.2a4.58 4.58 0 0 1 5-4.06 4.47 4.47 0 0 1 4.51 4.46l-2 37a4.57 4.57 0 0 1-5 4.06 4.47 4.47 0 0 1-4.51-4.46l2-37ZM25 61.7a4.46 4.46 0 0 1 4.5-4.46 4.58 4.58 0 0 1 5 4.06l2 37a4.47 4.47 0 0 1-4.51 4.46 4.57 4.57 0 0 1-5-4.06l-2-37Z", 1, "cls-trashcan-icon"]],
      template: function NgFlowchartConnectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgFlowchartConnectorComponent_div_0_Template, 9, 4, "div", 2);
          ɵɵnamespaceSVG();
          ɵɵelementStart(1, "svg", 3)(2, "defs")(3, "marker", 4);
          ɵɵelement(4, "path", 5);
          ɵɵelementEnd();
          ɵɵelementStart(5, "marker", 6);
          ɵɵelement(6, "path", 5);
          ɵɵelementEnd();
          ɵɵelementStart(7, "marker", 7);
          ɵɵelement(8, "path", 5);
          ɵɵelementEnd()();
          ɵɵelementStart(9, "g", 8);
          ɵɵelement(10, "path", 9, 0)(12, "path", 10, 1);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.selected && !ctx.canvas.disabled);
          ɵɵadvance();
          ɵɵproperty("ngStyle", ɵɵpureFunction3(3, _c2, ctx.containerHeight + "px", ctx.containerWidth + "px", ctx.opacity))("ngClass", ɵɵpureFunction1(7, _c3, ctx.selected));
        }
      },
      dependencies: [NgClass, NgIf, NgStyle],
      styles: ["[_nghost-%COMP%]{position:relative;transition:all .2s;display:block}[_nghost-%COMP%]   #arrowPadding[_ngcontent-%COMP%]{pointer-events:auto}[_nghost-%COMP%]   #deleteIcon[_ngcontent-%COMP%]{height:12px;width:12px}.ngflowchart-canvas-content.scaling   [_nghost-%COMP%]{transition:none!important}.ngflowchart-connector-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;pointer-events:none}.ngflowchart-connector-menu[_ngcontent-%COMP%]   .ngflowchart-delete-connector[_ngcontent-%COMP%]{display:flex;position:absolute;background-color:#fff;border:1px solid black;border-radius:3px;padding:2px;pointer-events:auto;cursor:pointer}.ngflowchart-connector[_ngcontent-%COMP%]{position:absolute;z-index:1;transition:all .2s;overflow:visible;pointer-events:none;stroke-dasharray:4,3;min-width:1px;cursor:pointer}.ngflowchart-connector[_ngcontent-%COMP%]:hover{z-index:3}.ngflowchart-connector[_ngcontent-%COMP%]:hover   #arrowpath[_ngcontent-%COMP%]{stroke:#000}.ngflowchart-connector.ngflowchart-connector-selected[_ngcontent-%COMP%]{z-index:4}.ngflowchart-connector.ngflowchart-connector-selected[_ngcontent-%COMP%]   #arrowpath[_ngcontent-%COMP%]{stroke:green}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartConnectorComponent, [{
    type: Component,
    args: [{
      selector: "ng-flowchart-connector",
      template: `<div
  *ngIf="selected && !canvas.disabled"
  class="ngflowchart-connector-menu"
  [style.left.px]="deleteButtonPosition.x"
  [style.top.px]="deleteButtonPosition.y">
  <div (click)="deleteConnector($event)" class="ngflowchart-delete-connector">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="deleteIcon"
      viewBox="0 0 105.16 122.88">
      <defs>
        <style>
          .cls-trashcan-icon {
            fill-rule: evenodd;
          }
        </style>
      </defs>
      <title>Delete</title>
      <path
        class="cls-trashcan-icon"
        d="M11.17 37.16H94.65a8.4 8.4 0 0 1 2 .16 5.93 5.93 0 0 1 2.88 1.56 5.43 5.43 0 0 1 1.64 3.34 7.65 7.65 0 0 1-.06 1.44L94 117.31v0l0 .13 0 .28v0a7.06 7.06 0 0 1-.2.9v0l0 .06v0a5.89 5.89 0 0 1-5.47 4.07H17.32a6.17 6.17 0 0 1-1.25-.19 6.17 6.17 0 0 1-1.16-.48h0a6.18 6.18 0 0 1-3.08-4.88l-7-73.49a7.69 7.69 0 0 1-.06-1.66 5.37 5.37 0 0 1 1.63-3.29 6 6 0 0 1 3-1.58 8.94 8.94 0 0 1 1.79-.13ZM5.65 8.8H37.12V6h0a2.44 2.44 0 0 1 0-.27 6 6 0 0 1 1.76-4h0A6 6 0 0 1 43.09 0H62.46l.3 0a6 6 0 0 1 5.7 6V6h0V8.8h32l.39 0a4.7 4.7 0 0 1 4.31 4.43c0 .18 0 .32 0 .5v9.86a2.59 2.59 0 0 1-2.59 2.59H2.59A2.59 2.59 0 0 1 0 23.62V13.53H0a1.56 1.56 0 0 1 0-.31v0A4.72 4.72 0 0 1 3.88 8.88 10.4 10.4 0 0 1 5.65 8.8Zm42.1 52.7a4.77 4.77 0 0 1 9.49 0v37a4.77 4.77 0 0 1-9.49 0v-37Zm23.73-.2a4.58 4.58 0 0 1 5-4.06 4.47 4.47 0 0 1 4.51 4.46l-2 37a4.57 4.57 0 0 1-5 4.06 4.47 4.47 0 0 1-4.51-4.46l2-37ZM25 61.7a4.46 4.46 0 0 1 4.5-4.46 4.58 4.58 0 0 1 5 4.06l2 37a4.47 4.47 0 0 1-4.51 4.46 4.57 4.57 0 0 1-5-4.06l-2-37Z" />
    </svg>
  </div>
</div>
<svg
  xmlns="http://www.w3.org/2000/svg"
  [ngStyle]="{
    height: containerHeight + 'px',
    width: containerWidth + 'px',
    opacity: opacity
  }"
  class="ngflowchart-connector"
  [ngClass]="{ 'ngflowchart-connector-selected': selected }">
  <defs>
    <marker
      id="connectorArrowhead"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="10"
      markerHeight="10"
      orient="auto"
      markerUnits="userSpaceOnUse"
      fill="grey">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
    <marker
      id="connectorArrowheadHover"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="10"
      markerHeight="10"
      orient="auto"
      markerUnits="userSpaceOnUse"
      fill="black">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
    <marker
      id="connectorArrowheadSelected"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="10"
      markerHeight="10"
      orient="auto"
      markerUnits="userSpaceOnUse"
      fill="green">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <g
    id="arrowpath"
    fill="none"
    stroke="grey"
    stroke-width="2"
    marker-end="url(#connectorArrowhead)">
    <path id="arrow" #arrow />
    <path
      id="arrowPadding"
      #arrowPadding
      stroke-width="10"
      stroke="transparent"
      stroke-dasharray="none" />
  </g>
</svg>
`,
      styles: [":host{position:relative;transition:all .2s;display:block}:host #arrowPadding{pointer-events:auto}:host #deleteIcon{height:12px;width:12px}.ngflowchart-canvas-content.scaling :host{transition:none!important}.ngflowchart-connector-menu{position:absolute;z-index:5;pointer-events:none}.ngflowchart-connector-menu .ngflowchart-delete-connector{display:flex;position:absolute;background-color:#fff;border:1px solid black;border-radius:3px;padding:2px;pointer-events:auto;cursor:pointer}.ngflowchart-connector{position:absolute;z-index:1;transition:all .2s;overflow:visible;pointer-events:none;stroke-dasharray:4,3;min-width:1px;cursor:pointer}.ngflowchart-connector:hover{z-index:3}.ngflowchart-connector:hover #arrowpath{stroke:#000}.ngflowchart-connector.ngflowchart-connector-selected{z-index:4}.ngflowchart-connector.ngflowchart-connector-selected #arrowpath{stroke:green}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    canvas: [{
      type: Input
    }],
    compRef: [{
      type: Input
    }],
    connector: [{
      type: Input
    }],
    arrow: [{
      type: ViewChild,
      args: ["arrow"]
    }],
    arrowPadding: [{
      type: ViewChild,
      args: ["arrowPadding"]
    }],
    autoPosition: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:mousedown", ["$event"]]
    }],
    onMouseOver: [{
      type: HostListener,
      args: ["mouseover", ["$event.target"]]
    }],
    onMouseOut: [{
      type: HostListener,
      args: ["mouseout", ["$event.target"]]
    }]
  });
})();
var OptionsService = class _OptionsService {
  constructor() {
    this._callbacks = {};
    this._options = new NgFlowchart.Options();
  }
  setOptions(options) {
    this._options = this.sanitizeOptions(options);
  }
  setCallbacks(callbacks) {
    this._callbacks = callbacks;
  }
  get options() {
    return this._options;
  }
  get callbacks() {
    return this._callbacks;
  }
  sanitizeOptions(options) {
    const defaultOpts = new NgFlowchart.Options();
    options = __spreadValues(__spreadValues({}, defaultOpts), options);
    options.stepGap = Math.max(options.stepGap, 20) || 40;
    options.hoverDeadzoneRadius = Math.max(options.hoverDeadzoneRadius, 0) || 20;
    if (options.zoom && options.zoom.mode !== "DISABLED") {
      options.zoom.defaultStep = options.zoom.defaultStep || 0.1;
    }
    return options;
  }
  static {
    this.ɵfac = function OptionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OptionsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OptionsService,
      factory: _OptionsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsService, [{
    type: Injectable
  }], () => [], null);
})();
var NgFlowchartArrowComponent = class _NgFlowchartArrowComponent {
  set position(pos) {
    this._position = pos;
    if (this.options.options.orientation === "VERTICAL") {
      this.isLeftFlowing = pos.start[0] > pos.end[0];
      this.containerWidth = Math.abs(pos.start[0] - pos.end[0]) + this.padding * 2;
      this.containerLeft = Math.min(pos.start[0], pos.end[0]) - this.padding;
      this.containerHeight = Math.abs(pos.start[1] - pos.end[1]);
      this.containerTop = pos.start[1];
    } else if (this.options.options.orientation === "HORIZONTAL") {
      this.isLeftFlowing = pos.start[1] < pos.end[1];
      this.containerWidth = Math.abs(pos.start[0] - pos.end[0]);
      this.containerLeft = pos.start[0];
      this.containerHeight = Math.abs(pos.start[1] - pos.end[1]) + this.padding * 2;
      this.containerTop = Math.min(pos.start[1], pos.end[1]) - this.padding;
    }
    this.updatePath();
  }
  constructor(options) {
    this.options = options;
    this.opacity = 1;
    this.containerWidth = 0;
    this.containerHeight = 0;
    this.containerLeft = 0;
    this.containerTop = 0;
    this.padding = 10;
    this.isLeftFlowing = false;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.updatePath();
  }
  hideArrow() {
    this.opacity = 0.2;
  }
  showArrow() {
    this.opacity = 1;
  }
  updatePath() {
    if (!this.arrow?.nativeElement) {
      return;
    }
    if (this.options.options.orientation === "VERTICAL") {
      if (this.isLeftFlowing) {
        this.arrow.nativeElement.setAttribute("d", `
        M${this.containerWidth - this.padding} 0 
        L${this.containerWidth - this.padding} ${this.containerHeight / 2}
        L${this.padding} ${this.containerHeight / 2}
        L${this.padding} ${this.containerHeight - 4}
      `);
      } else {
        this.arrow.nativeElement.setAttribute("d", `
        M${this.padding} 0 
        L${this.padding} ${this.containerHeight / 2}
        L${this.containerWidth - this.padding} ${this.containerHeight / 2}
        L${this.containerWidth - this.padding} ${this.containerHeight - 4}
      `);
      }
    } else if (this.options.options.orientation === "HORIZONTAL") {
      if (this.isLeftFlowing) {
        this.arrow.nativeElement.setAttribute("d", `
        M0 ${this.padding}
        L${this.containerWidth / 2} ${this.padding}
        L${this.containerWidth / 2} ${this.containerHeight - this.padding}
        L${this.containerWidth - 4} ${this.containerHeight - this.padding}
      `);
      } else {
        this.arrow.nativeElement.setAttribute("d", `
        M0 ${this.containerHeight - this.padding}
        L${this.containerWidth / 2} ${this.containerHeight - this.padding}
        L${this.containerWidth / 2} ${this.padding}
        L${this.containerWidth - 4} ${this.padding}
      `);
      }
    }
  }
  static {
    this.ɵfac = function NgFlowchartArrowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartArrowComponent)(ɵɵdirectiveInject("OptionsService"));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgFlowchartArrowComponent,
      selectors: [["ng-flowchart-arrow"]],
      viewQuery: function NgFlowchartArrowComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrow = _t.first);
        }
      },
      inputs: {
        position: "position"
      },
      standalone: false,
      decls: 7,
      vars: 7,
      consts: [["arrow", ""], ["xmlns", "http://www.w3.org/2000/svg", 1, "ngflowchart-arrow", 3, "ngStyle"], ["id", "arrowhead", "viewBox", "0 0 10 10", "refX", "3", "refY", "5", "markerWidth", "5", "markerHeight", "5", "orient", "auto", "fill", "grey"], ["d", "M 0 0 L 10 5 L 0 10 z"], ["id", "arrowpath", "fill", "none", "stroke", "grey", "stroke-width", "2", "marker-end", "url(#arrowhead)"], ["id", "arrow"]],
      template: function NgFlowchartArrowComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵnamespaceSVG();
          ɵɵelementStart(0, "svg", 1)(1, "defs")(2, "marker", 2);
          ɵɵelement(3, "path", 3);
          ɵɵelementEnd()();
          ɵɵelementStart(4, "g", 4);
          ɵɵelement(5, "path", 5, 0);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ɵɵpureFunction5(1, _c4, ctx.containerHeight + "px", ctx.containerWidth + "px", ctx.containerLeft + "px", ctx.containerTop + "px", ctx.opacity));
        }
      },
      dependencies: [NgStyle],
      styles: ["svg[_ngcontent-%COMP%]{position:absolute;z-index:0;transition:all .2s;pointer-events:none}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartArrowComponent, [{
    type: Component,
    args: [{
      selector: "ng-flowchart-arrow",
      template: `<svg
  xmlns="http://www.w3.org/2000/svg"
  [ngStyle]="{
    height: containerHeight + 'px',
    width: containerWidth + 'px',
    left: containerLeft + 'px',
    top: containerTop + 'px',
    opacity: opacity
  }"
  class="ngflowchart-arrow">
  <defs>
    <marker
      id="arrowhead"
      viewBox="0 0 10 10"
      refX="3"
      refY="5"
      markerWidth="5"
      markerHeight="5"
      orient="auto"
      fill="grey">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <g
    id="arrowpath"
    fill="none"
    stroke="grey"
    stroke-width="2"
    marker-end="url(#arrowhead)">
    <path id="arrow" #arrow />
  </g>
</svg>
`,
      styles: ["svg{position:absolute;z-index:0;transition:all .2s;pointer-events:none}\n"]
    }]
  }], () => [{
    type: OptionsService,
    decorators: [{
      type: Inject,
      args: ["OptionsService"]
    }]
  }], {
    arrow: [{
      type: ViewChild,
      args: ["arrow"]
    }],
    position: [{
      type: Input
    }]
  });
})();
var NgFlowchartPadArrowComponent = class _NgFlowchartPadArrowComponent {
  set position(pos) {
    this._position = pos;
    this.containerWidth = Math.abs(pos.start[0] - pos.end[0]);
    this.containerLeft = pos.start[0] > pos.end[0] ? -this.containerWidth + pos.root[0] : pos.root[0];
    this.containerHeight = Math.abs(pos.start[1] - pos.end[1]);
    this.containerTop = pos.start[1] > pos.end[1] ? -this.containerHeight + pos.root[1] : pos.root[1];
    this.updatePath();
  }
  constructor(options) {
    this.options = options;
    this.opacity = 1;
    this.containerWidth = 0;
    this.containerHeight = 0;
    this.containerLeft = 0;
    this.containerTop = 0;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.updatePath();
  }
  hideArrow() {
    this.opacity = 0.2;
  }
  showArrow() {
    this.opacity = 1;
  }
  updatePath() {
    if (!this.arrow?.nativeElement) {
      return;
    }
    const pos = this._position;
    let start;
    let end;
    if (pos.start[1] > pos.end[1]) {
      if (pos.start[0] > pos.end[0]) {
        start = [this.containerWidth, this.containerHeight];
        end = [0, 0];
      } else {
        start = [0, this.containerHeight];
        end = [this.containerWidth, 0];
      }
    } else {
      if (pos.start[0] > pos.end[0]) {
        start = [this.containerWidth, 0];
        end = [0, this.containerHeight];
      } else {
        start = [0, 0];
        end = [this.containerWidth, this.containerHeight];
      }
    }
    this.arrow.nativeElement.setAttribute("d", `
        M${start[0]} ${start[1]}
        L${end[0]} ${end[1]}
      `);
  }
  static {
    this.ɵfac = function NgFlowchartPadArrowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartPadArrowComponent)(ɵɵdirectiveInject("OptionsService"));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgFlowchartPadArrowComponent,
      selectors: [["ng-flowchart-pad-arrow"]],
      viewQuery: function NgFlowchartPadArrowComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrow = _t.first);
        }
      },
      inputs: {
        position: "position"
      },
      standalone: false,
      decls: 7,
      vars: 7,
      consts: [["arrow", ""], ["xmlns", "http://www.w3.org/2000/svg", 1, "ngflowchart-pad-arrow", 3, "ngStyle"], ["id", "padarrowhead", "viewBox", "0 0 10 10", "refX", "8", "refY", "5", "markerWidth", "5", "markerHeight", "5", "orient", "auto", "fill", "black"], ["d", "M 0 0 L 10 5 L 0 10 z"], ["id", "arrowpath", "fill", "none", "stroke", "black", "stroke-width", "2", "marker-end", "url(#padarrowhead)"], ["id", "arrow"]],
      template: function NgFlowchartPadArrowComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵnamespaceSVG();
          ɵɵelementStart(0, "svg", 1)(1, "defs")(2, "marker", 2);
          ɵɵelement(3, "path", 3);
          ɵɵelementEnd()();
          ɵɵelementStart(4, "g", 4);
          ɵɵelement(5, "path", 5, 0);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ɵɵpureFunction5(1, _c4, ctx.containerHeight + "px", ctx.containerWidth + "px", ctx.containerLeft + "px", ctx.containerTop + "px", ctx.opacity));
        }
      },
      dependencies: [NgStyle],
      styles: ["svg[_ngcontent-%COMP%]{position:absolute;z-index:11;overflow:visible;pointer-events:none;min-width:5px;min-height:5px;stroke-dasharray:4,3}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartPadArrowComponent, [{
    type: Component,
    args: [{
      selector: "ng-flowchart-pad-arrow",
      template: `<svg
  xmlns="http://www.w3.org/2000/svg"
  [ngStyle]="{
    height: containerHeight + 'px',
    width: containerWidth + 'px',
    left: containerLeft + 'px',
    top: containerTop + 'px',
    opacity: opacity
  }"
  class="ngflowchart-pad-arrow">
  <defs>
    <marker
      id="padarrowhead"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="5"
      markerHeight="5"
      orient="auto"
      fill="black">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <g
    id="arrowpath"
    fill="none"
    stroke="black"
    stroke-width="2"
    marker-end="url(#padarrowhead)">
    <path id="arrow" #arrow />
  </g>
</svg>
`,
      styles: ["svg{position:absolute;z-index:11;overflow:visible;pointer-events:none;min-width:5px;min-height:5px;stroke-dasharray:4,3}\n"]
    }]
  }], () => [{
    type: OptionsService,
    decorators: [{
      type: Inject,
      args: ["OptionsService"]
    }]
  }], {
    arrow: [{
      type: ViewChild,
      args: ["arrow"]
    }],
    position: [{
      type: Input
    }]
  });
})();
var DropDataService = class _DropDataService {
  constructor() {
  }
  setDragStep(ref) {
    this.dragStep = ref;
  }
  getDragStep() {
    return this.dragStep;
  }
  setDragConnector(ref) {
    this.dragConnector = ref;
  }
  getDragConnector() {
    return this.dragConnector;
  }
  static {
    this.ɵfac = function DropDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DropDataService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DropDataService,
      factory: _DropDataService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgFlowchartConnectorPadComponent = class _NgFlowchartConnectorPadComponent {
  set position(pos) {
    if (this.canvas.options.options.orientation === "VERTICAL") {
      this._position = [pos[0] - this.padRadius - this.strokeWidth / 2, pos[1]];
    } else if (this.canvas.options.options.orientation === "HORIZONTAL") {
      this._position = [pos[0], pos[1] - this.padRadius - this.strokeWidth / 2];
    }
    this.setPosition();
  }
  onDragStart(e) {
    if (e.button !== 0) return;
    e.preventDefault();
    this.data.setDragConnector(this.flowConnector);
    this.element.nativeElement.classList.add("dragging");
    this.movingPad = this.element.nativeElement.cloneNode(true);
    this.movingPad.style.pointerEvents = "none";
    this.element.nativeElement.parentElement.append(this.movingPad);
    document.addEventListener("mousemove", this.dragMove);
    document.addEventListener("mouseup", this.dragEnd);
  }
  constructor(element, viewContainer, data) {
    this.element = element;
    this.viewContainer = viewContainer;
    this.data = data;
    this.padRadius = 5;
    this.strokeWidth = 2;
    this.hidden = false;
    this.panEdgeSize = 50;
    this.panTimer = null;
    this.dragMove = this.dragMove.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }
  ngAfterViewInit() {
    this.setPosition();
  }
  setPosition() {
    this.element.nativeElement.style.left = `${this._position[0]}px`;
    this.element.nativeElement.style.top = `${this._position[1]}px`;
  }
  drawArrow(start, end, root) {
    if (!this.arrow) {
      this.createArrow();
    }
    this.arrow.instance.position = {
      start,
      end,
      root
    };
    this.arrow.changeDetectorRef.markForCheck();
  }
  createArrow() {
    const injector = Injector.create({
      providers: [{
        provide: "OptionsService",
        useValue: this.canvas.options
      }]
    });
    this.arrow = this.viewContainer.createComponent(NgFlowchartPadArrowComponent, {
      injector
    });
    this.element.nativeElement.appendChild(this.arrow.location.nativeElement);
  }
  dragMove(e, skipPan) {
    e.preventDefault();
    const canvasEle = this.canvas.viewContainer.element.nativeElement;
    const canvasBounds = canvasEle.getBoundingClientRect();
    const padBounds = this.connectorPad.nativeElement.getBoundingClientRect();
    var startPos = this.canvas.scaleCoordinate([padBounds.left - canvasBounds.left, padBounds.top - canvasBounds.top]);
    const padOffset = this.padRadius + this.strokeWidth / 2;
    const left = e.clientX - canvasBounds.left;
    const top = e.clientY - canvasBounds.top;
    var endPos = this.canvas.scaleCoordinate([left, top]);
    endPos[0] -= padOffset;
    endPos[1] -= padOffset;
    const scrollOffset = this.canvas.scaleCoordinate([canvasEle.scrollLeft, canvasEle.scrollTop]);
    this.movingPad.style.left = endPos[0] + scrollOffset[0] + "px";
    this.movingPad.style.top = endPos[1] + scrollOffset[1] + "px";
    this.drawArrow(startPos, endPos, [padOffset, padOffset]);
    if (!skipPan) {
      this.edgePan(e, canvasBounds);
    }
  }
  dragEnd(e) {
    e.preventDefault();
    if (e.button === 0) {
      document.removeEventListener("mousemove", this.dragMove);
      document.removeEventListener("mouseup", this.dragEnd);
      this.element.nativeElement.classList.remove("dragging");
      this.data.setDragConnector(null);
      clearTimeout(this.panTimer);
      if (this.arrow) {
        this.arrow.destroy();
        this.arrow = null;
      }
      if (this.movingPad) {
        this.movingPad.remove();
        this.movingPad = null;
      }
    }
  }
  edgePan(event, canvasBounds) {
    var viewportX = event.clientX;
    var viewportY = event.clientY;
    var viewportWidth = canvasBounds.width;
    var viewportHeight = canvasBounds.height;
    var edgeTop = canvasBounds.top + this.panEdgeSize;
    var edgeLeft = canvasBounds.left + this.panEdgeSize;
    var edgeBottom = canvasBounds.height - this.panEdgeSize;
    var edgeRight = canvasBounds.right - this.panEdgeSize;
    var isInLeftEdge = viewportX < edgeLeft;
    var isInRightEdge = viewportX > edgeRight;
    var isInTopEdge = viewportY < edgeTop;
    var isInBottomEdge = viewportY > edgeBottom;
    if (!(isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge)) {
      clearTimeout(this.panTimer);
      return;
    }
    var canvasEle = this.canvas.viewContainer.element.nativeElement;
    var canvasWidth = Math.max(canvasEle.scrollWidth, canvasEle.offsetWidth, canvasEle.clientWidth);
    var canvasHeight = Math.max(canvasEle.scrollHeight, canvasEle.offsetHeight, canvasEle.clientHeight);
    var maxScrollX = canvasWidth - viewportWidth;
    var maxScrollY = canvasHeight - viewportHeight;
    const scope = this;
    (function checkForCanvasScroll() {
      clearTimeout(scope.panTimer);
      if (adjustCanvasScroll()) {
        scope.panTimer = setTimeout(checkForCanvasScroll, 30);
        scope.dragMove(event, true);
      }
    })();
    function adjustCanvasScroll() {
      var currentScrollX = canvasEle.scrollLeft;
      var currentScrollY = canvasEle.scrollTop;
      var canScrollUp = currentScrollY > 0;
      var canScrollDown = currentScrollY < maxScrollY;
      var canScrollLeft = currentScrollX > 0;
      var canScrollRight = currentScrollX < maxScrollX;
      var nextScrollX = currentScrollX;
      var nextScrollY = currentScrollY;
      var maxStep = 30;
      if (isInLeftEdge && canScrollLeft) {
        var intensity = (edgeLeft - viewportX) / scope.panEdgeSize;
        nextScrollX = nextScrollX - maxStep * intensity;
      } else if (isInRightEdge && canScrollRight) {
        var intensity = (viewportX - edgeRight) / scope.panEdgeSize;
        nextScrollX = nextScrollX + maxStep * intensity;
      }
      if (isInTopEdge && canScrollUp) {
        var intensity = (edgeTop - viewportY) / scope.panEdgeSize;
        nextScrollY = nextScrollY - maxStep * intensity;
      } else if (isInBottomEdge && canScrollDown) {
        var intensity = (viewportY - edgeBottom) / scope.panEdgeSize;
        nextScrollY = nextScrollY + maxStep * intensity;
      }
      nextScrollX = Math.max(0, Math.min(maxScrollX, nextScrollX));
      nextScrollY = Math.max(0, Math.min(maxScrollY, nextScrollY));
      if (nextScrollX !== currentScrollX || nextScrollY !== currentScrollY) {
        canvasEle.scrollTo(nextScrollX, nextScrollY);
        return true;
      } else {
        return false;
      }
    }
  }
  static {
    this.ɵfac = function NgFlowchartConnectorPadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartConnectorPadComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DropDataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgFlowchartConnectorPadComponent,
      selectors: [["ng-flowchart-connector-pad"]],
      viewQuery: function NgFlowchartConnectorPadComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c5, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.connectorPad = _t.first);
        }
      },
      hostBindings: function NgFlowchartConnectorPadComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown", function NgFlowchartConnectorPadComponent_mousedown_HostBindingHandler($event) {
            return ctx.onDragStart($event);
          });
        }
      },
      inputs: {
        canvas: "canvas",
        flowConnector: "flowConnector",
        position: "position",
        hidden: "hidden"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["connectorPad", ""], ["xmlns", "http://www.w3.org/2000/svg", "class", "ngflowchart-connector-pad", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 1, "ngflowchart-connector-pad"], ["stroke", "grey", "fill", "none"]],
      template: function NgFlowchartConnectorPadComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgFlowchartConnectorPadComponent__svg_svg_0_Template, 3, 6, "svg", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.hidden && !ctx.canvas.disabled);
        }
      },
      dependencies: [NgIf],
      styles: ["[_nghost-%COMP%]{position:relative;z-index:10;display:block}[_nghost-%COMP%]:not(.dragging){transition:all .2s}.ngflowchart-connector-pad[_ngcontent-%COMP%]{position:absolute;cursor:crosshair}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartConnectorPadComponent, [{
    type: Component,
    args: [{
      selector: "ng-flowchart-connector-pad",
      template: '<svg\n  #connectorPad\n  *ngIf="!hidden && !canvas.disabled"\n  [attr.height]="padRadius * 2 + strokeWidth"\n  [attr.width]="padRadius * 2 + strokeWidth"\n  xmlns="http://www.w3.org/2000/svg"\n  class="ngflowchart-connector-pad">\n  <circle\n    [attr.cx]="padRadius + strokeWidth / 2"\n    [attr.cy]="padRadius + strokeWidth / 2"\n    [attr.r]="padRadius"\n    stroke="grey"\n    [attr.stroke-width]="strokeWidth"\n    fill="none" />\n</svg>\n',
      styles: [":host{position:relative;z-index:10;display:block}:host:not(.dragging){transition:all .2s}.ngflowchart-connector-pad{position:absolute;cursor:crosshair}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: DropDataService
  }], {
    canvas: [{
      type: Input
    }],
    flowConnector: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    connectorPad: [{
      type: ViewChild,
      args: ["connectorPad"]
    }],
    hidden: [{
      type: Input
    }],
    onDragStart: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }]
  });
})();
var NgFlowchartStepComponent = class _NgFlowchartStepComponent {
  onMoveStart(event) {
    if (this.canvas.disabled) {
      return;
    }
    event.stopPropagation();
    this.hideTree();
    event.dataTransfer.setData("type", NgFlowchart.DropType.Step);
    event.dataTransfer.setData("source", NgFlowchart.DropSource.Canvas);
    event.dataTransfer.setData("id", this.nativeElement.id);
    this.drop.dragStep = {
      type: this.type,
      data: this.data,
      instance: this
    };
  }
  onMoveEnd(event) {
    this.showTree();
  }
  onMouseEnter(event) {
    if (!this.canvas.options.options.manualConnectors) {
      return;
    }
    if (this.drop.dragConnector && this.internalIsValidConnectorDropTarget()) {
      this.nativeElement.classList.add("connector-target");
    }
  }
  onMouseLeave(event) {
    if (!this.canvas.options.options.manualConnectors) {
      return;
    }
    this.nativeElement.classList.remove("connector-target");
  }
  onMouseUp(event) {
    if (event.button !== 0 || !this.canvas.options.options.manualConnectors) {
      return;
    }
    this.nativeElement.classList.remove("connector-target");
    if (this.drop.dragConnector && this.internalIsValidConnectorDropTarget()) {
      this.canvas.linkConnector(this.drop.dragConnector.startStepId, this.id);
    }
  }
  constructor() {
    this.viewInit = new EventEmitter();
    this._currentPosition = [0, 0];
    this._isHidden = false;
    this._children = [];
  }
  init(drop, viewContainer) {
    this.drop = drop;
    this.viewContainer = viewContainer;
  }
  canDeleteStep() {
    return true;
  }
  canDrop(dropEvent, error) {
    return true;
  }
  shouldEvalDropHover(coords, stepToDrop) {
    return true;
  }
  onUpload(data) {
    return __async(this, null, function* () {
    });
  }
  getDropPositionsForStep(step) {
    return ["BELOW", "LEFT", "RIGHT", "ABOVE"];
  }
  isConnectorPadEnabled() {
    return !(this.canvas.options.options.isSequential && (this.hasChildren() || this.canvas.flow.connectors.filter((c) => c.connector.startStepId === this.id).length > 0));
  }
  isValidConnectorDropTarget() {
    var canDropAbove = this.getDropPositionsForStep(this.drop.dragConnector).includes("ABOVE");
    return canDropAbove;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (!this.nativeElement) {
      throw "Missing canvasContent ViewChild. Be sure to add #canvasContent to your root html element.";
    }
    this.nativeElement.classList.add("ngflowchart-step-wrapper");
    if (this.canvas.options.options.orientation === "HORIZONTAL") {
      this.nativeElement.classList.add("horizontal");
    }
    this.nativeElement.setAttribute("draggable", "true");
    if (this._initPosition) {
      this.zsetPosition(this._initPosition);
    }
    this.nativeElement.id = this.id;
    this.viewInit.emit();
  }
  get id() {
    if (this._id == null) {
      this._id = "s" + Date.now();
    }
    return this._id;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  /**
   * Creates and adds a child to this step
   * @param template The template or component type to create
   * @param options Add options
   */
  addChild(pending, options) {
    return __async(this, null, function* () {
      let componentRef = yield this.canvas.createStep(pending);
      this.canvas.addToCanvas(componentRef);
      if (options?.sibling) {
        this.zaddChildSibling0(componentRef.instance, options?.index);
      } else {
        this.zaddChild0(componentRef.instance);
      }
      this.canvas.flow.addStep(componentRef.instance);
      this.canvas.reRender();
      return componentRef.instance;
    });
  }
  /**
   * Destroys this step component and updates all necessary child and parent relationships
   * @param recursive
   * @param checkCallbacks
   */
  destroy(recursive = true, checkCallbacks = true) {
    if (!checkCallbacks || this.canDeleteStep()) {
      this.canvas.options.callbacks.beforeDeleteStep && this.canvas.options.callbacks.beforeDeleteStep(this);
      let parentIndex;
      if (this._parent) {
        parentIndex = this._parent.removeChild(this);
      }
      this.destroy0(parentIndex, recursive);
      this.canvas.reRender();
      this.canvas.options.callbacks.afterDeleteStep && this.canvas.options.callbacks.afterDeleteStep(this);
      return true;
    }
    return false;
  }
  /**
   * Destroys connector(s) starting at this step
   * @param endStepId optionally destroy only connector with specified endStepId
   */
  destroyConnectors(endStepId) {
    const connectors = this.canvas.flow.connectors.filter((c) => c.connector.startStepId === this.id && (!endStepId || c.connector.endStepId === endStepId));
    for (const conn of connectors) {
      conn.destroy0();
    }
  }
  /**
   * Remove a child from this step. Returns the index at which the child was found or -1 if not found.
   * @param childToRemove Step component to remove
   */
  removeChild(childToRemove) {
    if (!this.children) {
      return -1;
    }
    const i = this.children.findIndex((child) => child.id == childToRemove.id);
    if (i > -1) {
      this.children.splice(i, 1);
    }
    return i;
  }
  /**
   * Re-parent this step
   * @param newParent The new parent for this step
   * @param force Force the re-parent if a parent already exists
   */
  setParent(newParent, force = false) {
    if (this.parent && !force) {
      console.warn("This child already has a parent, use force if you know what you are doing");
      return;
    }
    this._parent = newParent;
    if (!this._parent && this.arrow) {
      this.arrow.destroy();
      this.arrow = null;
    }
  }
  /**
   * Called when no longer trying to drop or move a step adjacent to this one
   * @param position Position to render the icon
   */
  clearHoverIcons() {
    this.nativeElement.removeAttribute(CONSTANTS.DROP_HOVER_ATTR);
  }
  /**
   * Called when a step is trying to be dropped or moved adjacent to this step.
   * @param position Position to render the icon
   */
  showHoverIcon(position) {
    this.nativeElement.setAttribute(CONSTANTS.DROP_HOVER_ATTR, position.toLowerCase());
  }
  /**
   * Is this the root element of the tree
   */
  isRootElement() {
    return !this.parent;
  }
  /**
   * Does this step have any children?
   * @param count Optional count of children to check. Defaults to 1. I.E has at least 1 child.
   */
  hasChildren(count = 1) {
    return this.children && this.children.length >= count;
  }
  /** Array of children steps for this step */
  get children() {
    return this._children;
  }
  /** The parent step of this step */
  get parent() {
    return this._parent;
  }
  /**
   * Returns the total width extent (in pixels) of this node tree
   * @param stepGap The current step gap for the flow canvas
   */
  getNodeTreeWidth(stepGap) {
    const currentNodeWidth = this.nativeElement.getBoundingClientRect().width;
    if (!this.hasChildren()) {
      return this.nativeElement.getBoundingClientRect().width;
    }
    let childWidth = this._children.reduce((childTreeWidth, child) => {
      return childTreeWidth += child.getNodeTreeWidth(stepGap);
    }, 0);
    childWidth += stepGap * (this._children.length - 1);
    return Math.max(currentNodeWidth, childWidth);
  }
  /**
   * Returns the total height extent (in pixels) of this node tree
   * @param stepGap The current step gap for the flow canvas
   */
  getNodeTreeHeight(stepGap) {
    const currentNodeHeight = this.nativeElement.getBoundingClientRect().height;
    if (!this.hasChildren()) {
      return this.nativeElement.getBoundingClientRect().height;
    }
    let childHeight = this._children.reduce((childTreeHeight, child) => {
      return childTreeHeight += child.getNodeTreeHeight(stepGap);
    }, 0);
    childHeight += stepGap * (this._children.length - 1);
    return Math.max(currentNodeHeight, childHeight);
  }
  /**
   * Is this step currently hidden and unavailable as a drop location
   */
  isHidden() {
    return this._isHidden;
  }
  /**
   * Return current rect of this step. The position can be animated so getBoundingClientRect cannot
   * be reliable for positions
   * @param canvasRect Optional canvasRect to provide to offset the values
   */
  getCurrentRect(canvasRect) {
    let clientRect = this.nativeElement.getBoundingClientRect();
    return {
      bottom: this._currentPosition[1] + clientRect.height + (canvasRect?.top || 0),
      left: this._currentPosition[0] + (canvasRect?.left || 0),
      height: clientRect.height,
      width: clientRect.width,
      right: this._currentPosition[0] + clientRect.width + (canvasRect?.left || 0),
      top: this._currentPosition[1] + (canvasRect?.top || 0)
    };
  }
  /**
   * Returns the JSON representation of this flow step
   */
  toJSON() {
    return {
      id: this.id,
      type: this.type,
      data: this.data,
      children: this.hasChildren() ? this._children.map((child) => {
        return child.toJSON();
      }) : []
    };
  }
  /** The native HTMLElement of this step */
  get nativeElement() {
    return this.view?.nativeElement;
  }
  setId(id) {
    this._id = id;
  }
  zsetPosition(pos, offsetCenter = false) {
    if (!this.view) {
      console.warn("Trying to set position before view init");
      this._initPosition = [...pos];
      return;
    }
    let adjustedX = Math.max(pos[0] - (offsetCenter ? this.nativeElement.offsetWidth / 2 : 0), 0);
    let adjustedY = Math.max(pos[1] - (offsetCenter ? this.nativeElement.offsetHeight / 2 : 0), 0);
    this.nativeElement.style.left = `${adjustedX}px`;
    this.nativeElement.style.top = `${adjustedY}px`;
    this._currentPosition = [adjustedX, adjustedY];
  }
  zaddChild0(newChild) {
    let oldChildIndex = null;
    if (newChild._parent) {
      oldChildIndex = newChild._parent.removeChild(newChild);
    }
    if (this.hasChildren()) {
      if (newChild.hasChildren()) {
        let newChildLastChild = newChild.findLastSingleChild();
        if (!newChildLastChild) {
          if (newChild._parent) {
            newChild._parent.zaddChildSibling0(newChild, oldChildIndex);
          }
          console.error("Invalid move. A node cannot have multiple parents");
          return false;
        }
        newChildLastChild.setChildren(this._children.slice());
      } else {
        newChild.setChildren(this._children.slice());
      }
    }
    this.setChildren([newChild]);
    return true;
  }
  zaddChildFromAbove0(newChild, newParent) {
    let oldChildIndex = null;
    if (newChild._parent) {
      oldChildIndex = newChild._parent.removeChild(newChild);
    }
    let finalChild = this;
    if (this.hasChildren()) {
      const newChildLastChild = this.findLastSingleChild();
      if (!newChildLastChild) {
        if (newChild._parent) {
          newChild._parent.zaddChildSibling0(newChild, oldChildIndex);
        }
        console.error("Invalid move. A node cannot have multiple parents");
        return false;
      } else {
        finalChild = newChildLastChild;
      }
    }
    finalChild.setChildren([newChild]);
    if (newParent) {
      newParent.zaddChildSibling0(this, oldChildIndex);
    }
    return true;
  }
  zaddChildSibling0(child, index) {
    if (child._parent) {
      child._parent.removeChild(child);
    }
    if (!this.children) {
      this._children = [];
    }
    if (index == null) {
      this.children.push(child);
    } else {
      this.children.splice(index, 0, child);
    }
    child.setParent(this, true);
  }
  zdrawArrow(start, end) {
    if (!this.arrow) {
      this.createArrow();
    }
    this.arrow.instance.position = {
      start,
      end
    };
  }
  ////////////////////////
  // PRIVATE IMPL
  destroy0(parentIndex, recursive = true) {
    this.compRef.destroy();
    this.canvas.flow.removeStep(this);
    const connectors = this.canvas.flow.connectors.filter((c) => c.connector.startStepId === this.id || c.connector.endStepId === this.id);
    for (const conn of connectors) {
      conn.destroy0();
    }
    if (this.isRootElement()) {
      this.canvas.flow.rootStep = null;
    }
    if (this.hasChildren()) {
      if (this.isRootElement()) {
        if (!recursive) {
          let newRoot = this._children[0];
          this.canvas.flow.rootStep = newRoot;
          newRoot.setParent(null, true);
          if (this.hasChildren(2)) {
            for (let i = 1; i < this._children.length; i++) {
              let child = this._children[i];
              child.setParent(newRoot, true);
              newRoot._children.push(child);
            }
          }
        }
      }
      let length = this._children.length;
      for (let i = 0; i < length; i++) {
        let child = this._children[i];
        if (recursive) {
          child.destroy0(null, true);
        } else if (!!this._parent) {
          this._parent._children.splice(i + parentIndex, 0, child);
          child.setParent(this._parent, true);
        }
      }
      this.setChildren([]);
    }
    this._parent = null;
  }
  createArrow() {
    const injector = Injector.create({
      providers: [{
        provide: "OptionsService",
        useValue: this.canvas.options
      }]
    });
    this.arrow = this.viewContainer.createComponent(NgFlowchartArrowComponent, {
      injector
    });
    this.nativeElement.parentElement.appendChild(this.arrow.location.nativeElement);
  }
  hideTree() {
    this._isHidden = true;
    this.nativeElement.style.opacity = ".4";
    if (this.arrow) {
      this.arrow.instance.hideArrow();
    }
    if (this.hasChildren()) {
      this._children.forEach((child) => {
        child.hideTree();
      });
    }
  }
  showTree() {
    this._isHidden = false;
    if (this.arrow) {
      this.arrow.instance.showArrow();
    }
    this.nativeElement.style.opacity = "1";
    if (this.hasChildren()) {
      this._children.forEach((child) => {
        child.showTree();
      });
    }
  }
  findLastSingleChild() {
    if (this.hasChildren(2)) {
      return null;
    } else if (this.hasChildren()) {
      return this._children[0].findLastSingleChild();
    } else return this;
  }
  setChildren(children) {
    this._children = children;
    this.children.forEach((child) => {
      child.setParent(this, true);
    });
  }
  createConnectorPad() {
    this.connectorPad = this.viewContainer.createComponent(NgFlowchartConnectorPadComponent);
    this.connectorPad.instance.flowConnector = {
      startStepId: this.id,
      endStepId: null
    };
    this.connectorPad.instance.canvas = this.canvas;
    this.nativeElement.parentElement.appendChild(this.connectorPad.location.nativeElement);
  }
  drawConnectorPad(position) {
    if (!this.connectorPad) {
      this.createConnectorPad();
    }
    this.connectorPad.instance.position = position;
    const hidePad = this.canvas.disabled || !this.isConnectorPadEnabled() || this.isRootElement();
    this.connectorPad.instance.hidden = hidePad;
  }
  internalIsValidConnectorDropTarget() {
    var isSameStep = this.drop.dragConnector.startStepId === this.id;
    var connectorAlreadyExists = this.canvas.flow.connectors.some((c) => c.connector.startStepId === this.drop.dragConnector.startStepId && c.connector.endStepId === this.id);
    const stepAlreadyChild = this.canvas.flow.steps.find((s) => s.id === this.drop.dragConnector.startStepId)?.children.find((c) => c.id === this.id);
    const stepsInSameCanvas = this.canvas.flow.steps.some((s) => s.id === this.drop.dragConnector.startStepId) && this.canvas.flow.steps.some((s) => s.id === this.id);
    return !isSameStep && !connectorAlreadyExists && !stepAlreadyChild && stepsInSameCanvas && this.isValidConnectorDropTarget();
  }
  static {
    this.ɵfac = function NgFlowchartStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartStepComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgFlowchartStepComponent,
      selectors: [["ng-flowchart-step"]],
      viewQuery: function NgFlowchartStepComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.view = _t.first);
        }
      },
      hostBindings: function NgFlowchartStepComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("dragstart", function NgFlowchartStepComponent_dragstart_HostBindingHandler($event) {
            return ctx.onMoveStart($event);
          })("dragend", function NgFlowchartStepComponent_dragend_HostBindingHandler($event) {
            return ctx.onMoveEnd($event);
          })("mouseenter", function NgFlowchartStepComponent_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter($event);
          })("mouseleave", function NgFlowchartStepComponent_mouseleave_HostBindingHandler($event) {
            return ctx.onMouseLeave($event);
          })("mouseup", function NgFlowchartStepComponent_mouseup_HostBindingHandler($event) {
            return ctx.onMouseUp($event);
          });
        }
      },
      inputs: {
        data: "data",
        type: "type",
        canvas: "canvas",
        compRef: "compRef",
        contentTemplate: "contentTemplate"
      },
      outputs: {
        viewInit: "viewInit"
      },
      standalone: false,
      decls: 3,
      vars: 8,
      consts: [["canvasContent", ""], [3, "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgFlowchartStepComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵtemplate(2, NgFlowchartStepComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("id", ctx.id);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c8, ɵɵpureFunction2(3, _c7, ctx.data, ctx.id)));
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ['.ngflowchart-canvas{overflow:auto;display:flex}.ngflowchart-canvas .ngflowchart-canvas-content.scaling .ngflowchart-step-wrapper,.ngflowchart-canvas .ngflowchart-canvas-content.scaling svg,.ngflowchart-canvas .ngflowchart-canvas-content.scaling ng-flowchart-connector-pad{transition:none!important}.ngflowchart-canvas .ngflowchart-canvas-content{position:relative;min-height:100%;min-width:100%;flex:1 1 100%}.ngflowchart-canvas .ngflowchart-step-wrapper{height:auto;width:auto;position:absolute;box-sizing:border-box;transition:all .2s;cursor:grab}.ngflowchart-canvas .ngflowchart-step-wrapper[ngflowchart-drop-hover]:before{content:"";width:12px;height:12px;border-radius:100%;position:absolute;z-index:1;background:#8b0000}.ngflowchart-canvas .ngflowchart-step-wrapper[ngflowchart-drop-hover]:after{content:"";width:20px;height:20px;border-radius:100%;position:absolute;z-index:0;background:#c07b7b;animation:backgroundOpacity 2s linear infinite}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=above]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=above]:after{top:0;right:50%;transform:translate(50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=below]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=below]:after{bottom:0;right:50%;transform:translate(50%,50%)}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=right]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=right]:after{right:0;top:50%;transform:translate(50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=left]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=left]:after{left:0;top:50%;transform:translate(-50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=above]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=above]:after{left:0;top:50%;transform:translate(-50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=below]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=below]:after{right:0;top:50%;transform:translate(50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=right]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=right]:after{bottom:0;right:50%;transform:translate(50%,50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=left]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=left]:after{top:0;right:50%;transform:translate(50%,-50%)}@keyframes backgroundOpacity{0%{opacity:.8}50%{opacity:.3}to{opacity:.8}}.ngflowchart-canvas .ngflowchart-step-wrapper.connector-target{box-shadow:0 0 4px 1px green}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartStepComponent, [{
    type: Component,
    args: [{
      selector: "ng-flowchart-step",
      encapsulation: ViewEncapsulation.None,
      template: '<div #canvasContent [id]="id">\n  <ng-container\n    *ngTemplateOutlet="\n      contentTemplate;\n      context: {\n        $implicit: {\n          data: data,\n          id: id\n        }\n      }\n    ">\n  </ng-container>\n</div>\n',
      styles: ['.ngflowchart-canvas{overflow:auto;display:flex}.ngflowchart-canvas .ngflowchart-canvas-content.scaling .ngflowchart-step-wrapper,.ngflowchart-canvas .ngflowchart-canvas-content.scaling svg,.ngflowchart-canvas .ngflowchart-canvas-content.scaling ng-flowchart-connector-pad{transition:none!important}.ngflowchart-canvas .ngflowchart-canvas-content{position:relative;min-height:100%;min-width:100%;flex:1 1 100%}.ngflowchart-canvas .ngflowchart-step-wrapper{height:auto;width:auto;position:absolute;box-sizing:border-box;transition:all .2s;cursor:grab}.ngflowchart-canvas .ngflowchart-step-wrapper[ngflowchart-drop-hover]:before{content:"";width:12px;height:12px;border-radius:100%;position:absolute;z-index:1;background:#8b0000}.ngflowchart-canvas .ngflowchart-step-wrapper[ngflowchart-drop-hover]:after{content:"";width:20px;height:20px;border-radius:100%;position:absolute;z-index:0;background:#c07b7b;animation:backgroundOpacity 2s linear infinite}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=above]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=above]:after{top:0;right:50%;transform:translate(50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=below]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=below]:after{bottom:0;right:50%;transform:translate(50%,50%)}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=right]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=right]:after{right:0;top:50%;transform:translate(50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=left]:before,.ngflowchart-canvas .ngflowchart-step-wrapper:not(.horizontal)[ngflowchart-drop-hover=left]:after{left:0;top:50%;transform:translate(-50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=above]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=above]:after{left:0;top:50%;transform:translate(-50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=below]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=below]:after{right:0;top:50%;transform:translate(50%,-50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=right]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=right]:after{bottom:0;right:50%;transform:translate(50%,50%)}.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=left]:before,.ngflowchart-canvas .ngflowchart-step-wrapper.horizontal[ngflowchart-drop-hover=left]:after{top:0;right:50%;transform:translate(50%,-50%)}@keyframes backgroundOpacity{0%{opacity:.8}50%{opacity:.3}to{opacity:.8}}.ngflowchart-canvas .ngflowchart-step-wrapper.connector-target{box-shadow:0 0 4px 1px green}\n']
    }]
  }], () => [], {
    onMoveStart: [{
      type: HostListener,
      args: ["dragstart", ["$event"]]
    }],
    onMoveEnd: [{
      type: HostListener,
      args: ["dragend", ["$event"]]
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter", ["$event"]]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }],
    onMouseUp: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }],
    view: [{
      type: ViewChild,
      args: ["canvasContent"]
    }],
    data: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    canvas: [{
      type: Input
    }],
    compRef: [{
      type: Input
    }],
    viewInit: [{
      type: Output
    }],
    contentTemplate: [{
      type: Input
    }]
  });
})();
var CanvasRendererService = class _CanvasRendererService {
  constructor(options, cdr) {
    this.options = options;
    this.cdr = cdr;
    this.scale = 1;
    this.scaleDebounceTimer = null;
  }
  init(viewContainer) {
    this.viewContainer = viewContainer;
  }
  renderRoot(step, dragEvent) {
    this.getCanvasContentElement().appendChild(step.location.nativeElement);
    this.setRootPosition(step.instance, dragEvent);
    this.cdr.markForCheck();
  }
  renderNonRoot(step, dragEvent) {
    this.getCanvasContentElement().appendChild(step.location.nativeElement);
    this.cdr.markForCheck();
  }
  renderConnector(connector) {
    this.getCanvasContentElement().appendChild(connector.location.nativeElement);
    this.cdr.markForCheck();
  }
  updatePosition(step, dragEvent) {
    let relativeXY = this.getRelativeXY(dragEvent);
    relativeXY = relativeXY.map((coord) => coord / this.scale);
    step.zsetPosition(relativeXY, true);
  }
  getStepGap() {
    return this.options.options.stepGap;
  }
  renderVerticalChildTree(rootNode, rootRect, canvasRect) {
    if (!rootNode.hasChildren()) {
      return;
    }
    const rootBottom = rootRect.top - canvasRect.top + rootRect.height / this.scale;
    const childYTop = rootBottom + this.getStepGap();
    const rootWidth = rootRect.width / this.scale;
    const rootXCenter = rootRect.left - canvasRect.left + rootWidth / 2;
    let childTreeWidths = {};
    let totalTreeWidth = 0;
    rootNode.children.forEach((child) => {
      let totalChildWidth = child.getNodeTreeWidth(this.getStepGap() * this.scale);
      totalChildWidth = totalChildWidth / this.scale;
      childTreeWidths[child.nativeElement.id] = totalChildWidth;
      totalTreeWidth += totalChildWidth;
    });
    totalTreeWidth += (rootNode.children.length - 1) * this.getStepGap();
    let leftXTree = rootXCenter - totalTreeWidth / 2;
    leftXTree = Math.max(0, leftXTree);
    rootNode.children.forEach((child) => {
      let childExtent = childTreeWidths[child.nativeElement.id];
      let childLeft = leftXTree + childExtent / 2 - child.nativeElement.offsetWidth / 2;
      child.zsetPosition([childLeft, childYTop]);
      const currentChildRect = child.getCurrentRect(canvasRect);
      const childWidth = currentChildRect.width / this.scale;
      child.zdrawArrow([rootXCenter, rootBottom], [currentChildRect.left + childWidth / 2 - canvasRect.left, currentChildRect.top - canvasRect.top]);
      this.renderVerticalChildTree(child, currentChildRect, canvasRect);
      leftXTree += childExtent + this.getStepGap();
    });
  }
  renderHorizontalChildTree(rootNode, rootRect, canvasRect) {
    if (!rootNode.hasChildren()) {
      return;
    }
    const rootRight = rootRect.left - canvasRect.left + rootRect.width / this.scale;
    const childXLeft = rootRight + this.getStepGap();
    const rootHeight = rootRect.height / this.scale;
    const rootYCenter = rootRect.top - canvasRect.top + rootHeight / 2;
    let childTreeHeights = {};
    let totalTreeHeight = 0;
    rootNode.children.forEach((child) => {
      let totalChildHeight = child.getNodeTreeHeight(this.getStepGap() * this.scale);
      totalChildHeight = totalChildHeight / this.scale;
      childTreeHeights[child.nativeElement.id] = totalChildHeight;
      totalTreeHeight += totalChildHeight;
    });
    totalTreeHeight += (rootNode.children.length - 1) * this.getStepGap();
    let topYTree = rootYCenter - totalTreeHeight / 2;
    topYTree = Math.max(0, topYTree);
    rootNode.children.forEach((child) => {
      let childExtent = childTreeHeights[child.nativeElement.id];
      let childTop = topYTree + childExtent / 2 - child.nativeElement.offsetHeight / 2;
      child.zsetPosition([childXLeft, childTop]);
      const currentChildRect = child.getCurrentRect(canvasRect);
      const childHeight = currentChildRect.height / this.scale;
      child.zdrawArrow([rootRight, rootYCenter], [currentChildRect.left - canvasRect.left, currentChildRect.top + childHeight / 2 - canvasRect.top]);
      this.renderHorizontalChildTree(child, currentChildRect, canvasRect);
      topYTree += childExtent + this.getStepGap();
    });
  }
  render(flow, pretty, skipAdjustDimensions) {
    if (!flow.hasRoot()) {
      if (this.options.options.zoom.mode === "DISABLED") {
        this.resetAdjustDimensions();
        if (this.options.callbacks?.afterRender) {
          this.options.callbacks.afterRender();
        }
      }
      return;
    }
    if (this.options.callbacks?.beforeRender) {
      this.options.callbacks.beforeRender();
    }
    const canvasRect = this.getCanvasContentElement().getBoundingClientRect();
    if (pretty) {
      this.setRootPosition(flow.rootStep, null);
    }
    if (this.options.options.orientation === "VERTICAL") {
      this.renderVerticalChildTree(flow.rootStep, flow.rootStep.getCurrentRect(canvasRect), canvasRect);
    } else if (this.options.options.orientation === "HORIZONTAL") {
      this.renderHorizontalChildTree(flow.rootStep, flow.rootStep.getCurrentRect(canvasRect), canvasRect);
    }
    if (this.options.options.manualConnectors) {
      this.drawConnectorPads(flow, canvasRect);
      this.drawConnectors(flow, canvasRect);
    }
    if (!skipAdjustDimensions && this.options.options.zoom.mode === "DISABLED") {
      this.adjustDimensions(flow, canvasRect);
    }
    this.cdr.markForCheck();
    if (this.options.callbacks?.afterRender) {
      this.options.callbacks.afterRender();
    }
  }
  resetAdjustDimensions() {
    if (this.viewContainer) {
      const canvasWrapper = this.getCanvasContentElement();
      canvasWrapper.style.minWidth = null;
      canvasWrapper.style.minHeight = null;
    }
  }
  findDropLocationForHover(absMouseXY, targetStep, stepToDrop) {
    if (!targetStep.shouldEvalDropHover(absMouseXY, stepToDrop)) {
      return "deadzone";
    }
    const stepRect = targetStep.nativeElement.getBoundingClientRect();
    const yStepCenter = stepRect.bottom - stepRect.height / 2;
    const xStepCenter = stepRect.left + stepRect.width / 2;
    const yDiff = absMouseXY[1] - yStepCenter;
    const xDiff = absMouseXY[0] - xStepCenter;
    const absYDistance = Math.abs(yDiff);
    const absXDistance = Math.abs(xDiff);
    const distance = Math.sqrt(absYDistance * absYDistance + absXDistance * absXDistance);
    const accuracyRadius = (stepRect.height + stepRect.width) / 2;
    let result = null;
    if (distance < accuracyRadius) {
      if (distance < this.options.options.hoverDeadzoneRadius) {
        result = "deadzone";
      }
      if (this.options.options.orientation === "VERTICAL") {
        if (absYDistance > absXDistance) {
          result = {
            step: targetStep,
            position: yDiff > 0 ? "BELOW" : "ABOVE",
            proximity: absYDistance
          };
        } else if (!this.options.options.isSequential && !targetStep.isRootElement()) {
          result = {
            step: targetStep,
            position: xDiff > 0 ? "RIGHT" : "LEFT",
            proximity: absXDistance
          };
        }
      } else if (this.options.options.orientation === "HORIZONTAL") {
        if (absXDistance > absYDistance) {
          result = {
            step: targetStep,
            position: xDiff > 0 ? "BELOW" : "ABOVE",
            proximity: absXDistance
          };
        } else if (!this.options.options.isSequential && !targetStep.isRootElement()) {
          result = {
            step: targetStep,
            position: yDiff > 0 ? "RIGHT" : "LEFT",
            proximity: absYDistance
          };
        }
      }
    }
    if (result && result !== "deadzone") {
      if (!targetStep.getDropPositionsForStep(stepToDrop).includes(result.position)) {
        result = null;
      }
    }
    return result;
  }
  adjustDimensions(flow, canvasRect) {
    let maxRight = 0;
    let maxBottom = 0;
    flow.steps.forEach((ele) => {
      let rect = ele.getCurrentRect(canvasRect);
      maxRight = Math.max(rect.right, maxRight);
      maxBottom = Math.max(rect.bottom, maxBottom);
    });
    const widthBorderGap = this.getStepGap() / this.scale;
    const widthDiff = canvasRect.width / this.scale - (maxRight - canvasRect.left + widthBorderGap);
    if (widthDiff < -this.getStepGap()) {
      let growWidth = Math.abs(widthDiff);
      if (growWidth > this.getStepGap()) {
        this.getCanvasContentElement().style.minWidth = `${canvasRect.width / this.scale + growWidth + this.getStepGap()}px`;
        if (this.options.options.orientation === "VERTICAL" && this.options.options.centerOnResize) {
          this.render(flow, true, true);
        }
      }
    } else if (widthDiff > this.getStepGap()) {
      if (this.isNestedCanvas()) {
        const shrinkWidth = this.options.options.orientation === "VERTICAL" ? widthDiff * 2 : widthDiff;
        this.getCanvasContentElement().style.minWidth = `${canvasRect.width / this.scale - shrinkWidth}px`;
        if (this.options.options.orientation === "VERTICAL" && this.options.options.centerOnResize) {
          this.render(flow, true, true);
        }
      } else if (this.getCanvasContentElement().style.minWidth) {
        this.getCanvasContentElement().style.minWidth = null;
        if (this.options.options.orientation === "VERTICAL" && this.options.options.centerOnResize) {
          this.render(flow, true, true);
        }
      }
    }
    let heightBorderGap = this.getStepGap() / this.scale;
    const heightDiff = canvasRect.height / this.scale - (maxBottom - canvasRect.top + heightBorderGap);
    if (heightDiff < -this.getStepGap()) {
      let growHeight = Math.abs(heightDiff);
      if (growHeight > this.getStepGap()) {
        this.getCanvasContentElement().style.minHeight = `${canvasRect.height / this.scale + growHeight}px`;
        if (this.options.options.orientation === "HORIZONTAL" && this.options.options.centerOnResize) {
          this.render(flow, true, true);
        }
      }
    } else if (heightDiff > this.getStepGap()) {
      if (this.isNestedCanvas()) {
        const shrinkHeight = this.options.options.orientation === "HORIZONTAL" ? heightDiff * 2 : heightDiff;
        this.getCanvasContentElement().style.minHeight = `${canvasRect.height / this.scale - shrinkHeight}px`;
        if (this.options.options.orientation === "HORIZONTAL" && this.options.options.centerOnResize) {
          this.render(flow, true, true);
        }
      } else if (this.getCanvasContentElement().style.minHeight) {
        this.getCanvasContentElement().style.minHeight = null;
        if (this.options.options.orientation === "HORIZONTAL" && this.options.options.centerOnResize) {
          this.render(flow, true, true);
        }
      }
    }
  }
  findBestMatchForSteps(dragStep, event, steps) {
    const absXY = [event.clientX, event.clientY];
    let bestMatch = null;
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      if (step.isHidden()) {
        continue;
      }
      const position = this.findDropLocationForHover(absXY, step, dragStep);
      if (position) {
        if (position == "deadzone") {
          bestMatch = null;
          break;
        } else if (bestMatch == null || bestMatch.proximity > position.proximity) {
          bestMatch = position;
        }
      }
    }
    return bestMatch;
  }
  findAndShowClosestDrop(dragStep, event, steps) {
    if (!steps || steps.length == 0) {
      return;
    }
    let bestMatch = this.findBestMatchForSteps(dragStep, event, steps);
    steps.forEach((step) => {
      if (bestMatch == null || step.nativeElement.id !== bestMatch.step.nativeElement.id) {
        step.clearHoverIcons();
      }
    });
    if (!bestMatch) {
      return;
    }
    bestMatch.step.showHoverIcon(bestMatch.position);
    return {
      step: bestMatch.step,
      position: bestMatch.position
    };
  }
  showSnaps(dragStep) {
  }
  clearAllSnapIndicators(steps) {
    steps.forEach((step) => step.clearHoverIcons());
  }
  setRootPosition(step, dragEvent) {
    if (!dragEvent) {
      const canvasTop = this.getCanvasTopCenterPosition(step.nativeElement);
      step.zsetPosition(canvasTop, true);
      return;
    }
    switch (this.options.options.rootPosition) {
      case "CENTER":
        const canvasCenter = this.getCanvasCenterPosition();
        step.zsetPosition(canvasCenter, true);
        return;
      case "TOP_CENTER":
        const canvasTop = this.getCanvasTopCenterPosition(step.nativeElement);
        step.zsetPosition(canvasTop, true);
        return;
      default:
        const relativeXY = this.getRelativeXY(dragEvent);
        step.zsetPosition(relativeXY, true);
        return;
    }
  }
  getRelativeXY(dragEvent) {
    const canvasRect = this.getCanvasContentElement().getBoundingClientRect();
    return [dragEvent.clientX - canvasRect.left, dragEvent.clientY - canvasRect.top];
  }
  getCanvasTopCenterPosition(htmlRootElement) {
    const canvasRect = this.getCanvasContentElement().getBoundingClientRect();
    const edgeMargin = this.getStepGap() * this.scale;
    if (this.options.options.orientation === "VERTICAL") {
      const rootElementTop = htmlRootElement.getBoundingClientRect().height;
      const topCoord = rootElementTop / 2 + edgeMargin;
      const scaleTopOffset = (1 - this.scale) * 100;
      return [canvasRect.width / (this.scale * 2), topCoord + scaleTopOffset];
    } else if (this.options.options.orientation === "HORIZONTAL") {
      const rootElementRight = htmlRootElement.getBoundingClientRect().width;
      const rightCoord = rootElementRight / 2 + edgeMargin;
      const scaleRightOffset = (1 - this.scale) * 100;
      return [rightCoord + scaleRightOffset, canvasRect.height / (this.scale * 2)];
    }
  }
  getCanvasCenterPosition() {
    const canvasRect = this.getCanvasContentElement().getBoundingClientRect();
    return [canvasRect.width / 2, canvasRect.height / 2];
  }
  getCanvasContentElement() {
    const canvas = this.viewContainer.element.nativeElement;
    let canvasContent = canvas.getElementsByClassName(CONSTANTS.CANVAS_CONTENT_CLASS).item(0);
    return canvasContent;
  }
  isNestedCanvas() {
    if (this.viewContainer) {
      const canvasWrapper = this.viewContainer.element.nativeElement.parentElement;
      if (canvasWrapper) {
        return canvasWrapper.classList.contains("ngflowchart-step-wrapper");
      }
    }
    return false;
  }
  resetScale(flow) {
    this.setScale(flow, 1);
  }
  scaleUp(flow, step) {
    const newScale = this.scale + this.scale * (step || this.options.options.zoom.defaultStep);
    this.setScale(flow, newScale);
  }
  scaleDown(flow, step) {
    const newScale = this.scale - this.scale * (step || this.options.options.zoom.defaultStep);
    this.setScale(flow, newScale);
  }
  setScale(flow, scaleValue) {
    const minDimAdjust = `${1 / scaleValue * 100}%`;
    const canvasContent = this.getCanvasContentElement();
    canvasContent.style.transform = `scale(${scaleValue})`;
    canvasContent.style.minHeight = minDimAdjust;
    canvasContent.style.minWidth = minDimAdjust;
    canvasContent.style.transformOrigin = "top left";
    canvasContent.classList.add("scaling");
    this.scale = scaleValue;
    if (!this.options.options.zoom.skipRender) {
      this.render(flow, true);
    }
    if (this.options.callbacks?.afterScale) {
      this.options.callbacks.afterScale(this.scale);
    }
    this.scaleDebounceTimer && clearTimeout(this.scaleDebounceTimer);
    this.scaleDebounceTimer = setTimeout(() => {
      canvasContent.classList.remove("scaling");
    }, 300);
  }
  setNestedScale(scaleValue) {
    this.scale = scaleValue;
  }
  drawConnectors(flow, canvasRect) {
    for (const conn of flow.connectors) {
      const startStep = flow.steps.find((s) => s.id === conn.connector.startStepId);
      const startStepRect = startStep.getCurrentRect(canvasRect);
      let startStepPos;
      if (this.options.options.orientation === "VERTICAL") {
        startStepPos = [startStepRect.left - canvasRect.left + startStepRect.width / this.scale * (2 / 3), startStepRect.top - canvasRect.top + startStepRect.height / this.scale];
      } else if (this.options.options.orientation === "HORIZONTAL") {
        startStepPos = [startStepRect.left - canvasRect.left + startStepRect.width / this.scale, startStepRect.top - canvasRect.top + startStepRect.height / this.scale * (1 / 5)];
      }
      const endStep = flow.steps.find((s) => s.id === conn.connector.endStepId);
      const endStepRect = endStep.getCurrentRect();
      const closestEndEdge = this.findClosestEndEdge(startStepPos, endStepRect);
      conn.autoPosition = {
        start: startStepPos,
        end: closestEndEdge
      };
    }
  }
  drawConnectorPads(flow, canvasRect) {
    for (const step of flow.steps) {
      const stepRect = step.getCurrentRect(canvasRect);
      let padX;
      let padY;
      if (this.options.options.orientation === "VERTICAL") {
        padX = stepRect.left - canvasRect.left + stepRect.width / this.scale * (2 / 3);
        padY = stepRect.top - canvasRect.top + stepRect.height / this.scale;
      } else if (this.options.options.orientation === "HORIZONTAL") {
        padX = stepRect.left - canvasRect.left + stepRect.width / this.scale;
        padY = stepRect.top - canvasRect.top + stepRect.height / this.scale * (1 / 5);
      }
      step.drawConnectorPad([padX, padY]);
    }
  }
  findClosestEndEdge(startPos, stepRect) {
    let sides;
    let scaledHeight = stepRect.height / this.scale;
    let scaledWidth = stepRect.width / this.scale;
    if (this.options.options.orientation === "VERTICAL") {
      sides = [
        [stepRect.left, stepRect.top + scaledHeight / 2],
        //left
        [stepRect.left + scaledWidth * (1 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (2 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (3 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (4 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth, stepRect.top + scaledHeight / 2]
        //right
      ];
    } else if (this.options.options.orientation === "HORIZONTAL") {
      sides = [
        [stepRect.left, stepRect.top + scaledHeight * (1 / 4)],
        //left
        [stepRect.left, stepRect.top + scaledHeight * (3 / 4)],
        //left
        [stepRect.left + scaledWidth * (1 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (2 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (3 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (4 / 5), stepRect.top],
        //top
        [stepRect.left + scaledWidth * (1 / 5), stepRect.top + scaledHeight],
        //bottom
        [stepRect.left + scaledWidth * (2 / 5), stepRect.top + scaledHeight],
        //bottom
        [stepRect.left + scaledWidth * (3 / 5), stepRect.top + scaledHeight],
        //bottom
        [stepRect.left + scaledWidth * (4 / 5), stepRect.top + scaledHeight]
        //bottom
      ];
    }
    const closest = sides.reduce((closest2, current) => {
      const absXDistance = Math.abs(startPos[0] - current[0]);
      const absYDistance = Math.abs(startPos[1] - current[1]);
      const distance = Math.sqrt(absXDistance * absXDistance + absYDistance * absYDistance);
      if (!closest2.pos || distance < closest2.distance) {
        return {
          pos: current,
          distance
        };
      }
      return closest2;
    }, {
      pos: null,
      distance: null
    });
    return closest.pos;
  }
  scaleCoordinate(pos) {
    return [pos[0] / this.scale, pos[1] / this.scale];
  }
  static {
    this.ɵfac = function CanvasRendererService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CanvasRendererService)(ɵɵinject(OptionsService), ɵɵinject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CanvasRendererService,
      factory: _CanvasRendererService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasRendererService, [{
    type: Injectable
  }], () => [{
    type: OptionsService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var NgFlowchartStepRegistry = class _NgFlowchartStepRegistry {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  /**
   * Register a step implementation. Only needed if you are uploading a flow from json
   * @param type The unique type of the step
   * @param step The step templateRef or component type to create for this key
   */
  registerStep(type, step) {
    this.registry.set(type, step);
  }
  getStepImpl(type) {
    return this.registry.get(type);
  }
  static {
    this.ɵfac = function NgFlowchartStepRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartStepRegistry)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgFlowchartStepRegistry,
      factory: _NgFlowchartStepRegistry.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartStepRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var StepManagerService = class _StepManagerService {
  constructor(registry) {
    this.registry = registry;
  }
  init(viewContainer) {
    this.viewContainer = viewContainer;
  }
  createFromRegistry(id, type, data, canvas) {
    let templateComp = this.registry.getStepImpl(type);
    let compRef;
    if (templateComp instanceof TemplateRef || templateComp instanceof Type) {
      compRef = this.create({
        template: templateComp,
        type,
        data
      }, canvas);
    } else {
      throw "Invalid registry implementation found for type " + type;
    }
    compRef.instance.setId(id);
    return compRef;
  }
  create(pendingStep, canvas) {
    let componentRef;
    if (pendingStep.template instanceof TemplateRef) {
      componentRef = this.viewContainer.createComponent(NgFlowchartStepComponent);
      componentRef.instance.contentTemplate = pendingStep.template;
    } else {
      componentRef = this.viewContainer.createComponent(pendingStep.template);
    }
    componentRef.instance.data = JSON.parse(JSON.stringify(pendingStep.data));
    componentRef.instance.type = pendingStep.type;
    componentRef.instance.canvas = canvas;
    componentRef.instance.compRef = componentRef;
    componentRef.instance.init(componentRef.injector.get(DropDataService), componentRef.injector.get(ViewContainerRef));
    return componentRef;
  }
  static {
    this.ɵfac = function StepManagerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StepManagerService)(ɵɵinject(NgFlowchartStepRegistry));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StepManagerService,
      factory: _StepManagerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepManagerService, [{
    type: Injectable
  }], () => [{
    type: NgFlowchartStepRegistry
  }], null);
})();
var CanvasFlow = class {
  hasRoot() {
    return !!this.rootStep;
  }
  addStep(step) {
    this._steps.push(step);
  }
  removeStep(step) {
    let index = this._steps.findIndex((ele) => ele.id == step.id);
    if (index >= 0) {
      this._steps.splice(index, 1);
    }
  }
  addConnector(comp) {
    this._connectors.push(comp);
  }
  removeConnector(comp) {
    let index = this._connectors.findIndex((ele) => ele.connector.startStepId === comp.connector.startStepId && ele.connector.endStepId === comp.connector.endStepId);
    if (index >= 0) {
      this._connectors.splice(index, 1);
    }
  }
  get steps() {
    return this._steps;
  }
  get connectors() {
    return this._connectors;
  }
  constructor() {
    this._steps = [];
    this._connectors = [];
  }
};
var NgFlowchartCanvasService = class _NgFlowchartCanvasService {
  get disabled() {
    return this._disabled;
  }
  constructor(drag, options, renderer, stepmanager, cdr) {
    this.drag = drag;
    this.options = options;
    this.renderer = renderer;
    this.stepmanager = stepmanager;
    this.cdr = cdr;
    this.isDragging = false;
    this.flow = new CanvasFlow();
    this._disabled = false;
    this.noParentError = {
      code: "NO_PARENT",
      message: "Step was not dropped under a parent and is not the root node"
    };
  }
  init(view) {
    this.viewContainer = view;
    this.renderer.init(view);
    this.stepmanager.init(view);
    let ref = this.stepmanager.create({
      template: NgFlowchartStepComponent,
      type: "",
      data: null
    }, this);
    const i = this.viewContainer.indexOf(ref.hostView);
    this.viewContainer.remove(i);
  }
  moveStep(drag, id) {
    this.renderer.clearAllSnapIndicators(this.flow.steps);
    let step = this.flow.steps.find((step2) => step2.nativeElement.id === id);
    let error = {};
    if (!step) {
      return;
    }
    if (step.canDrop(this.currentDropTarget, error)) {
      if (step.isRootElement()) {
        this.renderer.updatePosition(step, drag);
        this.renderer.render(this.flow);
      } else if (this.currentDropTarget) {
        const response = this.addStepToFlow(step, this.currentDropTarget, true);
        this.renderer.render(this.flow, response.prettyRender);
      } else {
        this.moveError(step, this.noParentError);
      }
      if (this.options.callbacks?.onDropStep && (this.currentDropTarget || step.isRootElement())) {
        this.options.callbacks.onDropStep({
          isMove: true,
          step,
          parent: step.parent
        });
      }
    } else {
      this.moveError(step, error);
    }
  }
  onDrop(drag) {
    return __async(this, null, function* () {
      this.renderer.clearAllSnapIndicators(this.flow.steps);
      if (this.flow.hasRoot() && !this.currentDropTarget) {
        this.dropError(this.noParentError);
        return;
      }
      let componentRef = yield this.createStep(this.drag.dragStep);
      const dropTarget = this.currentDropTarget || null;
      let error = {};
      if (componentRef.instance.canDrop(dropTarget, error)) {
        if (!this.flow.hasRoot()) {
          this.renderer.renderRoot(componentRef, drag);
          this.setRoot(componentRef.instance);
        } else {
          if (dropTarget.step.isRootElement() && dropTarget.position === "ABOVE") {
            this.renderer.renderRoot(componentRef, drag);
          }
          this.addChildStep(componentRef, dropTarget);
        }
        if (this.options.callbacks?.onDropStep) {
          this.options.callbacks.onDropStep({
            step: componentRef.instance,
            isMove: false,
            parent: componentRef.instance.parent
          });
        }
      } else {
        const i = this.viewContainer.indexOf(componentRef.hostView);
        this.viewContainer.remove(i);
        this.dropError(error);
      }
    });
  }
  onDragStart(drag) {
    this.isDragging = true;
    this.currentDropTarget = this.renderer.findAndShowClosestDrop(this.drag.dragStep, drag, this.flow.steps);
  }
  createStepFromType(id, type, data) {
    let compRef = this.stepmanager.createFromRegistry(id, type, data, this);
    return new Promise((resolve) => {
      let sub = compRef.instance.viewInit.subscribe(() => __async(this, null, function* () {
        sub.unsubscribe();
        setTimeout(() => {
          compRef.instance.onUpload(data);
        });
        resolve(compRef);
      }));
    });
  }
  createStep(pending) {
    let componentRef;
    componentRef = this.stepmanager.create(pending, this);
    return new Promise((resolve) => {
      let sub = componentRef.instance.viewInit.subscribe(() => {
        sub.unsubscribe();
        resolve(componentRef);
      }, (error) => console.error(error));
    });
  }
  resetScale() {
    if (this.options.options.zoom.mode === "DISABLED") {
      return;
    }
    this.renderer.resetScale(this.flow);
  }
  scaleUp(step) {
    if (this.options.options.zoom.mode === "DISABLED") {
      return;
    }
    this.renderer.scaleUp(this.flow, step);
  }
  scaleDown(step) {
    if (this.options.options.zoom.mode === "DISABLED") {
      return;
    }
    this.renderer.scaleDown(this.flow, step);
  }
  setScale(scaleValue) {
    if (this.options.options.zoom.mode === "DISABLED") {
      return;
    }
    this.renderer.setScale(this.flow, scaleValue);
  }
  setNestedScale(scaleValue) {
    this.renderer.setNestedScale(scaleValue);
  }
  addChildStep(componentRef, dropTarget) {
    this.addToCanvas(componentRef);
    const response = this.addStepToFlow(componentRef.instance, dropTarget);
    this.renderer.render(this.flow, response.prettyRender);
  }
  addToCanvas(componentRef) {
    this.renderer.renderNonRoot(componentRef);
  }
  reRender(pretty) {
    this.renderer.render(this.flow, pretty);
  }
  upload(root, connectors) {
    return __async(this, null, function* () {
      yield new Promise((res) => setTimeout(res));
      this.cdr.markForCheck();
      yield this.uploadNode(root);
      this.uploadConnectors(connectors);
      this.reRender(true);
    });
  }
  uploadConnectors(connector) {
    if (!connector || !this.options.options.manualConnectors) {
      return;
    }
    for (const conn of connector) {
      var connComponent = this.createConnector(conn);
      this.renderer.renderConnector(connComponent);
      this.flow.addConnector(connComponent.instance);
    }
  }
  uploadNode(node, parentNode) {
    return __async(this, null, function* () {
      if (!node) {
        return;
      }
      let comp = yield this.createStepFromType(node.id, node.type, node.data);
      if (!parentNode) {
        this.setRoot(comp.instance);
        this.renderer.renderRoot(comp, null);
      } else {
        this.renderer.renderNonRoot(comp);
        this.flow.addStep(comp.instance);
      }
      for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        let childComp = yield this.uploadNode(child, comp.instance);
        comp.instance.children.push(childComp);
        childComp.setParent(comp.instance, true);
      }
      return comp.instance;
    });
  }
  setRoot(step, force = true) {
    if (this.flow.hasRoot()) {
      if (!force) {
        console.warn("Already have a root and force is false");
        return false;
      }
      let oldRoot = this.flow.rootStep;
      const success = step.zaddChildFromAbove0(oldRoot, null);
      if (!success) return false;
      this.flow.rootStep = step;
    } else {
      this.flow.rootStep = step;
    }
    this.flow.addStep(step);
    return true;
  }
  addStepToFlow(step, dropTarget, isMove = false) {
    let response = {
      added: false,
      prettyRender: false
    };
    switch (dropTarget.position) {
      case "ABOVE":
        response = this.placeStepAbove(step, dropTarget.step);
        break;
      case "BELOW":
        response = this.placeStepBelow(step, dropTarget.step);
        break;
      case "LEFT":
        response = this.placeStepAdjacent(step, dropTarget.step, true);
        break;
      case "RIGHT":
        response = this.placeStepAdjacent(step, dropTarget.step, false);
        break;
      default:
        break;
    }
    if (!isMove && response.added) {
      this.flow.addStep(step);
    }
    return response;
  }
  placeStepBelow(newStep, parentStep) {
    return {
      added: parentStep.zaddChild0(newStep),
      prettyRender: false
    };
  }
  placeStepAdjacent(newStep, siblingStep, isLeft = true) {
    if (siblingStep.parent) {
      const adjacentIndex = siblingStep.parent.children.findIndex((child) => child.nativeElement.id == siblingStep.nativeElement.id);
      siblingStep.parent.zaddChildSibling0(newStep, adjacentIndex + (isLeft ? 0 : 1));
    } else {
      console.warn("Parallel actions must have a common parent");
      return {
        added: false,
        prettyRender: false
      };
    }
    return {
      added: true,
      prettyRender: false
    };
  }
  placeStepAbove(newStep, childStep) {
    let success = true;
    let prettyRender = false;
    let newParent = childStep.parent;
    if (newParent) {
      success = newStep.zaddChildFromAbove0(childStep, newParent);
    } else {
      const oldStepParent = newStep.parent;
      const oldChildIndex = newStep.parent?.removeChild(newStep);
      newStep.setParent(null, true);
      childStep.removeChild(newStep);
      success = this.setRoot(newStep);
      if (success) {
        prettyRender = true;
      } else {
        oldStepParent.zaddChildSibling0(newStep, oldChildIndex);
      }
    }
    return {
      added: success,
      prettyRender
    };
  }
  dropError(error) {
    if (this.options.callbacks?.onDropError) {
      let parent = this.currentDropTarget?.position !== "BELOW" ? this.currentDropTarget?.step.parent : this.currentDropTarget?.step;
      this.options.callbacks.onDropError({
        step: this.drag.dragStep,
        parent: parent || null,
        error
      });
    }
  }
  moveError(step, error) {
    if (this.options.callbacks?.onMoveError) {
      let parent = this.currentDropTarget?.position !== "BELOW" ? this.currentDropTarget?.step.parent : this.currentDropTarget?.step;
      this.options.callbacks.onMoveError({
        step: {
          instance: step,
          type: step.type,
          data: step.data
        },
        parent,
        error
      });
    }
  }
  linkConnector(startStepId, endStepId) {
    if (!this.options.options.manualConnectors) {
      return;
    }
    var isSameStep = startStepId === endStepId;
    const isExistingConn = this.flow.connectors.some((c) => c.connector.startStepId === startStepId && c.connector.endStepId === endStepId);
    const stepsInSameCanvas = this.flow.steps.some((s) => s.id === startStepId) && this.flow.steps.some((s) => s.id === endStepId);
    const stepAlreadyChild = this.flow.steps.find((s) => s.id === startStepId)?.children.find((c) => c.id === endStepId);
    if (!isSameStep && !isExistingConn && stepsInSameCanvas && !stepAlreadyChild) {
      var connector = {
        startStepId,
        endStepId
      };
      var connComponent = this.createConnector(connector);
      this.renderer.renderConnector(connComponent);
      this.flow.addConnector(connComponent.instance);
      this.renderer.render(this.flow);
      this.options.callbacks.onLinkConnector && this.options.callbacks.onLinkConnector(connector);
    }
  }
  createConnector(connector) {
    var component = this.viewContainer.createComponent(NgFlowchartConnectorComponent);
    component.instance.connector = connector;
    component.instance.canvas = this;
    component.instance.compRef = component;
    return component;
  }
  scaleCoordinate(pos) {
    return this.renderer.scaleCoordinate(pos);
  }
  static {
    this.ɵfac = function NgFlowchartCanvasService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartCanvasService)(ɵɵinject(DropDataService), ɵɵinject(OptionsService), ɵɵinject(CanvasRendererService), ɵɵinject(StepManagerService), ɵɵinject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgFlowchartCanvasService,
      factory: _NgFlowchartCanvasService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartCanvasService, [{
    type: Injectable
  }], () => [{
    type: DropDataService
  }, {
    type: OptionsService
  }, {
    type: CanvasRendererService
  }, {
    type: StepManagerService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var NgFlowchartCanvasDirective = class _NgFlowchartCanvasDirective {
  onDrop(event) {
    if (this._disabled) {
      return;
    }
    const closestCanvasToTarget = event.target.closest(`.${CONSTANTS.CANVAS_CLASS}`);
    if (closestCanvasToTarget !== this.canvasEle.nativeElement) {
      return;
    }
    const type = event.dataTransfer.getData("type");
    if (type === NgFlowchart.DropType.Step) {
      const source = event.dataTransfer.getData("source");
      if (NgFlowchart.DropSource.Canvas == source) {
        this.canvas.moveStep(event, event.dataTransfer.getData("id"));
      } else if (NgFlowchart.DropSource.Palette == source) {
        this.canvas.onDrop(event);
      }
    }
  }
  onDragOver(event) {
    event.preventDefault();
    if (this._disabled) {
      return;
    }
    this.canvas.onDragStart(event);
  }
  onZoom(event) {
    if (this._options.zoom.mode === "WHEEL") {
      this.adjustWheelScale(event);
    }
  }
  canvasDragScroll(e) {
    var validDragAnchor = e.target === this.canvasContent || e.target === this.canvasEle.nativeElement;
    const validLeftClick = this.options.dragScroll.includes("LEFT") && validDragAnchor && e.button === 0;
    const validOther = this.options.dragScroll.includes("MIDDLE") && e.button === 1 || this.options.dragScroll.includes("RIGHT") && e.button === 2;
    const scrollable = this.canvasEle.nativeElement.scrollWidth > this.canvasEle.nativeElement.clientWidth || this.canvasEle.nativeElement.scrollHeight > this.canvasEle.nativeElement.clientHeight;
    if (scrollable && (validLeftClick || validOther)) {
      e.preventDefault();
      e.stopPropagation();
      this.pos = {
        // The current scroll
        left: this.canvasEle.nativeElement.scrollLeft,
        top: this.canvasEle.nativeElement.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY
      };
      document.addEventListener("mousemove", this.mouseMoveHandler);
      document.addEventListener("mouseup", this.mouseUpHandler);
    }
  }
  onContextMenu(e) {
    if (this.options.dragScroll.includes("RIGHT")) {
      e.preventDefault();
    }
  }
  set ngFlowchartCallbacks(callbacks) {
    this.optionService.setCallbacks(callbacks);
  }
  set ngFlowchartOptions(options) {
    this.optionService.setOptions(options);
    this._options = this.optionService.options;
    this.canvas.reRender();
  }
  get options() {
    return this._options;
  }
  set disabled(val) {
    this._disabled = val !== false;
    if (this.canvas) {
      this.canvas._disabled = this._disabled;
    }
  }
  get disabled() {
    return this._disabled;
  }
  constructor(canvasEle, viewContainer, canvas, optionService) {
    this.canvasEle = canvasEle;
    this.viewContainer = viewContainer;
    this.canvas = canvas;
    this.optionService = optionService;
    this.pos = {
      top: 0,
      left: 0,
      x: 0,
      y: 0
    };
    this._disabled = false;
    this._id = null;
    this.canvasEle.nativeElement.classList.add(CONSTANTS.CANVAS_CLASS);
    this.canvasContent = this.createCanvasContent(this.viewContainer);
    this._id = this.canvasContent.id;
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
  }
  ngOnInit() {
    this.canvas.init(this.viewContainer);
    if (!this._options) {
      this.ngFlowchartOptions = new NgFlowchart.Options();
    }
    this.canvas._disabled = this._disabled;
    this.handleWindowResize();
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    for (let i = 0; i < this.viewContainer.length; i++) {
      this.viewContainer.remove(i);
    }
    this.canvasEle.nativeElement.remove();
    this.viewContainer.element.nativeElement.remove();
    this.viewContainer = void 0;
    this.windowResizeSubscription.unsubscribe();
  }
  handleWindowResize() {
    this.windowResizeSubscription = (0, import_rxjs.fromEvent)(window, "resize").pipe((0, import_rxjs.debounceTime)(100)).subscribe(() => {
      if (this._options.centerOnResize) {
        this.canvas.reRender(true);
      }
    });
  }
  createCanvasContent(viewContainer) {
    const canvasId = "c" + Date.now();
    let canvasEle = viewContainer.element.nativeElement;
    let canvasContent = document.createElement("div");
    canvasContent.id = canvasId;
    canvasContent.classList.add(CONSTANTS.CANVAS_CONTENT_CLASS);
    canvasEle.appendChild(canvasContent);
    return canvasContent;
  }
  /**
   * Returns the Flow object representing this flow chart.
   */
  getFlow() {
    return new NgFlowchart.Flow(this.canvas);
  }
  scaleDown() {
    this.canvas.scaleDown();
  }
  scaleUp() {
    this.canvas.scaleUp();
  }
  setScale(scaleValue) {
    const scaleVal = Math.max(0, scaleValue);
    this.canvas.setScale(scaleVal);
  }
  setNestedScale(scaleValue) {
    const scaleVal = Math.max(0, scaleValue);
    this.canvas.setNestedScale(scaleVal);
  }
  adjustWheelScale(event) {
    if (this.canvas.flow.hasRoot()) {
      event.preventDefault();
      if (event.deltaY > 0) {
        this.scaleDown();
      } else if (event.deltaY < 0) {
        this.scaleUp();
      }
    }
  }
  mouseMoveHandler(e) {
    const dx = e.clientX - this.pos.x;
    const dy = e.clientY - this.pos.y;
    this.canvasEle.nativeElement.scrollTop = this.pos.top - dy;
    this.canvasEle.nativeElement.scrollLeft = this.pos.left - dx;
  }
  mouseUpHandler(e) {
    if (this.options.dragScroll.includes("LEFT") && e.button === 0 || this.options.dragScroll.includes("MIDDLE") && e.button === 1 || this.options.dragScroll.includes("RIGHT") && e.button === 2) {
      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.mouseUpHandler);
    }
  }
  setOrientation(orientation) {
    var options = __spreadProps(__spreadValues({}, this.options), {
      orientation
    });
    this.optionService.setOptions(options);
    this._options = this.optionService.options;
    this.canvas.flow.steps.forEach((step) => {
      if (this.options.orientation === "HORIZONTAL") {
        step.nativeElement.classList.add("horizontal");
      } else {
        step.nativeElement.classList.remove("horizontal");
      }
    });
    this.canvas.reRender(true);
  }
  static {
    this.ɵfac = function NgFlowchartCanvasDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartCanvasDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgFlowchartCanvasService), ɵɵdirectiveInject(OptionsService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgFlowchartCanvasDirective,
      selectors: [["", "ngFlowchartCanvas", ""]],
      hostVars: 1,
      hostBindings: function NgFlowchartCanvasDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("drop", function NgFlowchartCanvasDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          })("dragover", function NgFlowchartCanvasDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("wheel", function NgFlowchartCanvasDirective_wheel_HostBindingHandler($event) {
            return ctx.onZoom($event);
          })("mousedown", function NgFlowchartCanvasDirective_mousedown_HostBindingHandler($event) {
            return ctx.canvasDragScroll($event);
          })("contextmenu", function NgFlowchartCanvasDirective_contextmenu_HostBindingHandler($event) {
            return ctx.onContextMenu($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled);
        }
      },
      inputs: {
        ngFlowchartCallbacks: "ngFlowchartCallbacks",
        ngFlowchartOptions: "ngFlowchartOptions",
        disabled: "disabled"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([NgFlowchartCanvasService, StepManagerService, OptionsService, CanvasRendererService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartCanvasDirective, [{
    type: Directive,
    args: [{
      selector: "[ngFlowchartCanvas]",
      providers: [NgFlowchartCanvasService, StepManagerService, OptionsService, CanvasRendererService]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: NgFlowchartCanvasService
  }, {
    type: OptionsService
  }], {
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }],
    onDragOver: [{
      type: HostListener,
      args: ["dragover", ["$event"]]
    }],
    onZoom: [{
      type: HostListener,
      args: ["wheel", ["$event"]]
    }],
    canvasDragScroll: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }],
    ngFlowchartCallbacks: [{
      type: Input
    }],
    ngFlowchartOptions: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.disabled"]
    }]
  });
})();
var NgFlowchartStepDirective = class _NgFlowchartStepDirective {
  onDragStart(event) {
    this.data.setDragStep(this.flowStep);
    event.dataTransfer.setData("type", NgFlowchart.DropType.Step);
    event.dataTransfer.setData("source", NgFlowchart.DropSource.Palette);
  }
  onDragEnd(event) {
    this.data.setDragStep(null);
  }
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.element.nativeElement.setAttribute("draggable", "true");
  }
  ngAfterViewInit() {
  }
  static {
    this.ɵfac = function NgFlowchartStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartStepDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DropDataService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgFlowchartStepDirective,
      selectors: [["", "ngFlowchartStep", ""]],
      hostBindings: function NgFlowchartStepDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("dragstart", function NgFlowchartStepDirective_dragstart_HostBindingHandler($event) {
            return ctx.onDragStart($event);
          })("dragend", function NgFlowchartStepDirective_dragend_HostBindingHandler($event) {
            return ctx.onDragEnd($event);
          });
        }
      },
      inputs: {
        flowStep: [0, "ngFlowchartStep", "flowStep"]
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartStepDirective, [{
    type: Directive,
    args: [{
      selector: "[ngFlowchartStep]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DropDataService
  }], {
    onDragStart: [{
      type: HostListener,
      args: ["dragstart", ["$event"]]
    }],
    onDragEnd: [{
      type: HostListener,
      args: ["dragend", ["$event"]]
    }],
    flowStep: [{
      type: Input,
      args: ["ngFlowchartStep"]
    }]
  });
})();
var NgFlowchartModule = class _NgFlowchartModule {
  static {
    this.ɵfac = function NgFlowchartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFlowchartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgFlowchartModule,
      declarations: [NgFlowchartCanvasDirective, NgFlowchartStepDirective, NgFlowchartStepComponent, NgFlowchartArrowComponent, NgFlowchartConnectorComponent, NgFlowchartConnectorPadComponent, NgFlowchartPadArrowComponent],
      imports: [CommonModule],
      exports: [NgFlowchartCanvasDirective, NgFlowchartStepDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFlowchartModule, [{
    type: NgModule,
    args: [{
      declarations: [NgFlowchartCanvasDirective, NgFlowchartStepDirective, NgFlowchartStepComponent, NgFlowchartArrowComponent, NgFlowchartConnectorComponent, NgFlowchartConnectorPadComponent, NgFlowchartPadArrowComponent],
      imports: [CommonModule],
      exports: [NgFlowchartCanvasDirective, NgFlowchartStepDirective]
    }]
  }], null, null);
})();
export {
  NgFlowchart,
  NgFlowchartArrowComponent,
  NgFlowchartCanvasDirective,
  NgFlowchartModule,
  NgFlowchartStepComponent,
  NgFlowchartStepDirective,
  NgFlowchartStepRegistry,
  OptionsService
};
//# sourceMappingURL=@joelwenzel_ng-flowchart.js.map
