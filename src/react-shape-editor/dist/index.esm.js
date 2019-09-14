import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var CallbacksContext = React.createContext({
  getPlaneCoordinatesFromEvent: function getPlaneCoordinatesFromEvent() {},
  onShapeMountedOrUnmounted: function onShapeMountedOrUnmounted() {},
  setMouseHandler: function setMouseHandler() {}
});
var VectorHeightContext = React.createContext(0);
var VectorWidthContext = React.createContext(0);
var ScaleContext = React.createContext(1);

var ShapeEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(ShapeEditor, _Component);

  function ShapeEditor(props) {
    var _this;

    _classCallCheck(this, ShapeEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShapeEditor).call(this, props));
    _this.wrappedShapes = [];
    _this.justAddedShapes = [];
    _this.getPlaneCoordinatesFromEvent = _this.getPlaneCoordinatesFromEvent.bind(_assertThisInitialized(_this));
    _this.onMouseEvent = _this.onMouseEvent.bind(_assertThisInitialized(_this));
    _this.onShapeMountedOrUnmounted = _this.onShapeMountedOrUnmounted.bind(_assertThisInitialized(_this));
    _this.setMouseHandler = _this.setMouseHandler.bind(_assertThisInitialized(_this));
    _this.callbacks = {
      onShapeMountedOrUnmounted: _this.onShapeMountedOrUnmounted,
      getPlaneCoordinatesFromEvent: _this.getPlaneCoordinatesFromEvent,
      setMouseHandler: _this.setMouseHandler
    };
    return _this;
  }

  _createClass(ShapeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.onMouseEvent);
      window.addEventListener('mousemove', this.onMouseEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.justAddedShapes.length > 0 && this.props.focusOnAdd) {
        // Focus on shapes added since the last update
        this.justAddedShapes.slice(-1)[0].forceFocus();
      } else if (this.lastDeletedRect && this.props.focusOnDelete) {
        // If something was deleted since the last update, focus on the
        // next closest shape by center coordinates
        var getShapeCenter = function getShapeCenter(shape) {
          return {
            x: shape.x + shape.width / 2,
            y: shape.y + shape.height / 2
          };
        };

        var deletedShapeCenter = getShapeCenter(this.lastDeletedRect);
        var closestDistance = Math.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
        var closestShape = null;
        this.wrappedShapes.forEach(function (shape) {
          var shapeCenter = getShapeCenter(shape.props);
          var distance = Math.pow(deletedShapeCenter.x - shapeCenter.x, 2) + Math.pow(deletedShapeCenter.y - shapeCenter.y, 2);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestShape = shape;
          }
        });

        if (closestShape) {
          closestShape.forceFocus();
        }
      }

      this.justAddedShapes = [];
      this.lastDeletedRect = null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseEvent);
      window.removeEventListener('mousemove', this.onMouseEvent);
      this.justAddedShapes = [];
      this.wrappedShapes = [];
      this.unmounted = true;
    }
  }, {
    key: "onMouseEvent",
    value: function onMouseEvent(event) {
      if (typeof this.mouseHandler === 'function') {
        this.mouseHandler(event);
      }
    }
  }, {
    key: "onShapeMountedOrUnmounted",
    value: function onShapeMountedOrUnmounted(instance, didMount) {
      if (didMount) {
        this.justAddedShapes = [].concat(_toConsumableArray(this.justAddedShapes), [instance]);
        this.wrappedShapes = [].concat(_toConsumableArray(this.wrappedShapes), [instance]);
      } else {
        this.lastDeletedRect = {
          x: instance.props.x,
          y: instance.props.y,
          width: instance.props.width,
          height: instance.props.height
        };
        this.wrappedShapes = this.wrappedShapes.filter(function (s) {
          return s !== instance;
        });
      }
    }
  }, {
    key: "setMouseHandler",
    value: function setMouseHandler(mouseHandler) {
      this.mouseHandler = mouseHandler;
    }
  }, {
    key: "getPlaneCoordinatesFromEvent",
    value: function getPlaneCoordinatesFromEvent(event) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$x = _ref.x,
          offsetX = _ref$x === void 0 ? 0 : _ref$x,
          _ref$y = _ref.y,
          offsetY = _ref$y === void 0 ? 0 : _ref$y;

      var scale = this.props.scale;

      var _this$svgEl$getBoundi = this.svgEl.getBoundingClientRect(),
          top = _this$svgEl$getBoundi.top,
          left = _this$svgEl$getBoundi.left;

      return {
        x: (event.clientX - left) / scale - offsetX,
        y: (event.clientY - top) / scale - offsetY
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          focusOnAdd = _this$props.focusOnAdd,
          focusOnDelete = _this$props.focusOnDelete,
          scale = _this$props.scale,
          vectorHeight = _this$props.vectorHeight,
          vectorWidth = _this$props.vectorWidth,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["children", "focusOnAdd", "focusOnDelete", "scale", "vectorHeight", "vectorWidth", "style"]);

      return React.createElement("svg", _extends({
        className: "rse-plane-container",
        width: vectorWidth * scale,
        height: vectorHeight * scale,
        viewBox: "0 0 ".concat(vectorWidth, " ").concat(vectorHeight),
        ref: function ref(el) {
          _this2.svgEl = el;
        },
        style: _objectSpread({
          userSelect: 'none'
        }, style) // IE11 - prevent all elements from being focusable by default
        ,
        focusable: false
      }, otherProps), React.createElement(CallbacksContext.Provider, {
        value: this.callbacks
      }, React.createElement(VectorHeightContext.Provider, {
        value: vectorHeight
      }, React.createElement(VectorWidthContext.Provider, {
        value: vectorWidth
      }, React.createElement(ScaleContext.Provider, {
        value: scale
      }, children)))));
    }
  }]);

  return ShapeEditor;
}(Component);

ShapeEditor.propTypes = {
  children: PropTypes.node,
  focusOnAdd: PropTypes.bool,
  focusOnDelete: PropTypes.bool,
  scale: PropTypes.number,
  style: PropTypes.shape({}),
  vectorHeight: PropTypes.number,
  vectorWidth: PropTypes.number
};
ShapeEditor.defaultProps = {
  children: null,
  focusOnAdd: true,
  focusOnDelete: true,
  scale: 1,
  style: {},
  vectorHeight: 0,
  vectorWidth: 0
};

/* eslint-disable react/no-unused-prop-types */

var DefaultResizeHandleComponent = function DefaultResizeHandleComponent(_ref) {
  var active = _ref.active,
      cursor = _ref.cursor,
      isInSelectionGroup = _ref.isInSelectionGroup,
      onMouseDown = _ref.onMouseDown,
      recommendedSize = _ref.recommendedSize,
      scale = _ref.scale,
      x = _ref.x,
      y = _ref.y;
  return React.createElement("rect", {
    fill: active ? 'rgba(229,240,244,1)' : 'rgba(229,240,244,0.3)',
    height: recommendedSize,
    stroke: active ? 'rgba(53,33,140,1)' : 'rgba(53,33,140,0.3)',
    strokeWidth: 1 / scale,
    style: {
      cursor: cursor,
      opacity: isInSelectionGroup ? 0 : 1
    },
    width: recommendedSize,
    x: x - recommendedSize / 2,
    y: y - recommendedSize / 2 // The onMouseDown prop must be passed on or resize will not work
    ,
    onMouseDown: onMouseDown
  });
};

DefaultResizeHandleComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  nativeActive: PropTypes.bool.isRequired,
  cursor: PropTypes.string.isRequired,
  isInSelectionGroup: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  recommendedSize: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

function withContext(Component) {
  function ComponentWithRseContext(props, ref) {
    var callbacks = useContext(CallbacksContext);
    var vectorHeight = useContext(VectorHeightContext);
    var vectorWidth = useContext(VectorWidthContext);
    var scale = useContext(ScaleContext);
    return React.createElement(Component, _extends({}, props, callbacks, {
      callbacks: callbacks,
      vectorHeight: vectorHeight,
      vectorWidth: vectorWidth,
      ref: ref,
      scale: scale
    }));
  }

  ComponentWithRseContext.displayName = Component.displayName || Component.name || 'Component';
  return React.forwardRef(ComponentWithRseContext);
}

function getRectFromCornerCoordinates(corner1, corner2) {
  return {
    x: Math.min(corner1.x, corner2.x),
    y: Math.min(corner1.y, corner2.y),
    width: Math.abs(corner1.x - corner2.x),
    height: Math.abs(corner1.y - corner2.y)
  };
}
var defaultConstrainMove = function defaultConstrainMove(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return {
    x: x,
    y: y
  };
};
var defaultConstrainResize = function defaultConstrainResize(_ref2) {
  var movingCorner = _ref2.movingCorner;
  return movingCorner;
};

var defaultDragState = {
  isMouseDown: false,
  dragStartCoordinates: null,
  dragCurrentCoordinates: null,
  dragInnerOffset: null,
  dragLock: null
};

function wrapShape(WrappedComponent) {
  var WrappedShape =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(WrappedShape, _React$PureComponent);

    function WrappedShape(props) {
      var _this;

      _classCallCheck(this, WrappedShape);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedShape).call(this, props));
      _this.state = _objectSpread({}, defaultDragState, {
        isDragToMove: true,
        nativeActive: false
      });
      _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
      _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
      _this.getParentCoordinatesForMove = _this.getParentCoordinatesForMove.bind(_assertThisInitialized(_this));
      _this.getParentCoordinatesForResize = _this.getParentCoordinatesForResize.bind(_assertThisInitialized(_this));
      _this.forceFocus = _this.forceFocus.bind(_assertThisInitialized(_this));
      _this.keyboardMove = _this.keyboardMove.bind(_assertThisInitialized(_this));
      _this.keyboardResize = _this.keyboardResize.bind(_assertThisInitialized(_this));
      _this.mouseHandler = _this.mouseHandler.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WrappedShape, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.isInternalComponent) {
          this.props.onShapeMountedOrUnmounted(this, true);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.height !== prevProps.height || this.props.width !== prevProps.width || this.props.x !== prevProps.x || this.props.y !== prevProps.y) {
          this.props.onChildRectChanged(this.props.shapeId, this.props.isInternalComponent);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unmounted = true;

        if (!this.props.isInternalComponent) {
          this.props.onShapeMountedOrUnmounted(this, false);
        }
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(event) {
        if (!this.state.isMouseDown || this.unmounted) {
          return;
        }

        if (this.state.isDragToMove) {
          var coords = this.getParentCoordinatesForMove(event);

          if (coords) {
            var _this$props = this.props,
                width = _this$props.width,
                height = _this$props.height;
            var right = coords.x + width;
            var bottom = coords.y + height;
            this.setState({
              dragCurrentCoordinates: coords,
              dragStartCoordinates: {
                x: right,
                y: bottom
              }
            });
            this.props.onIntermediateChange({
              x: coords.x,
              y: coords.y,
              width: width,
              height: height
            });
          }
        } else {
          var _coords = this.getParentCoordinatesForResize(event);

          if (_coords) {
            this.setState({
              dragCurrentCoordinates: _coords
            });
            this.props.onIntermediateChange(getRectFromCornerCoordinates(_coords, this.state.dragStartCoordinates));
          }
        }
      }
    }, {
      key: "onMouseUp",
      value: function onMouseUp() {
        var _this2 = this;

        if (!this.state.isMouseDown || this.unmounted) {
          return;
        }

        var onChange = this.props.onChange;
        var _this$state = this.state,
            dragStartCoordinates = _this$state.dragStartCoordinates,
            dragCurrentCoordinates = _this$state.dragCurrentCoordinates,
            isDragToMove = _this$state.isDragToMove;

        if (isDragToMove) {
          var nextX = dragCurrentCoordinates.x,
              nextY = dragCurrentCoordinates.y;
          this.setState(defaultDragState, function () {
            if (nextX !== _this2.props.x || nextY !== _this2.props.y) {
              onChange({
                x: nextX,
                y: nextY,
                width: _this2.props.width,
                height: _this2.props.height
              }, _this2.props);
            }
          });
        } else {
          this.setState(defaultDragState, function () {
            var nextRect = getRectFromCornerCoordinates(dragStartCoordinates, dragCurrentCoordinates);

            if (nextRect.height !== _this2.props.height || nextRect.width !== _this2.props.width || nextRect.x !== _this2.props.x || nextRect.y !== _this2.props.y) {
              onChange(nextRect, _this2.props);
            }
          });
        }
      }
    }, {
      key: "mouseHandler",
      value: function mouseHandler(event) {
        if (event.type === 'mousemove') {
          this.onMouseMove(event);
        } else if (event.type === 'mouseup') {
          this.onMouseUp(event);
        }
      }
    }, {
      key: "simulateTransform",
      value: function simulateTransform(nextRect) {
        var _this3 = this;

        cancelAnimationFrame(this.simulatedTransform);

        if (!nextRect) {
          this.setState(defaultDragState);
          return;
        }

        this.simulatedTransform = window.requestAnimationFrame(function () {
          _this3.setState(function () {
            return {
              isMouseDown: true,
              dragStartCoordinates: {
                x: nextRect.x,
                y: nextRect.y
              },
              dragCurrentCoordinates: {
                x: nextRect.x + nextRect.width,
                y: nextRect.y + nextRect.height
              }
            };
          });
        });
      }
    }, {
      key: "getParentCoordinatesForMove",
      value: function getParentCoordinatesForMove(event) {
        var _this$props2 = this.props,
            constrainMove = _this$props2.constrainMove,
            width = _this$props2.width,
            height = _this$props2.height,
            getPlaneCoordinatesFromEvent = _this$props2.getPlaneCoordinatesFromEvent;
        var _this$state2 = this.state,
            dragCurrentCoordinates = _this$state2.dragCurrentCoordinates,
            dragInnerOffset = _this$state2.dragInnerOffset;

        var _getPlaneCoordinatesF = getPlaneCoordinatesFromEvent(event, dragInnerOffset),
            rawX = _getPlaneCoordinatesF.x,
            rawY = _getPlaneCoordinatesF.y;

        var _constrainMove = constrainMove({
          originalX: dragCurrentCoordinates ? dragCurrentCoordinates.x : rawX,
          originalY: dragCurrentCoordinates ? dragCurrentCoordinates.y : rawY,
          x: rawX,
          y: rawY,
          width: width,
          height: height
        }),
            x = _constrainMove.x,
            y = _constrainMove.y;

        return {
          x: x,
          y: y
        };
      }
    }, {
      key: "getParentCoordinatesForResize",
      value: function getParentCoordinatesForResize(event) {
        var dragStartCoordinates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.dragStartCoordinates;
        var dragCurrentCoordinates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.dragCurrentCoordinates;
        var dragInnerOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.state.dragInnerOffset;
        var dragLock = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.state.dragLock;
        var _this$props3 = this.props,
            constrainResize = _this$props3.constrainResize,
            getPlaneCoordinatesFromEvent = _this$props3.getPlaneCoordinatesFromEvent;

        var _getPlaneCoordinatesF2 = getPlaneCoordinatesFromEvent(event, dragInnerOffset),
            rawX = _getPlaneCoordinatesF2.x,
            rawY = _getPlaneCoordinatesF2.y;

        var _constrainResize = constrainResize({
          originalMovingCorner: dragCurrentCoordinates,
          startCorner: dragStartCoordinates,
          movingCorner: {
            x: rawX,
            y: rawY
          },
          lockedDimension: dragLock
        }),
            x = _constrainResize.x,
            y = _constrainResize.y;

        return {
          x: dragLock !== 'x' ? x : dragCurrentCoordinates.x,
          y: dragLock !== 'y' ? y : dragCurrentCoordinates.y
        };
      }
    }, {
      key: "keyboardMove",
      value: function keyboardMove(dX, dY) {
        var _this$props4 = this.props,
            x = _this$props4.x,
            y = _this$props4.y,
            width = _this$props4.width,
            height = _this$props4.height,
            keyboardTransformMultiplier = _this$props4.keyboardTransformMultiplier,
            constrainMove = _this$props4.constrainMove,
            onChange = _this$props4.onChange;

        var _constrainMove2 = constrainMove({
          originalX: x,
          originalY: y,
          x: x + dX * keyboardTransformMultiplier,
          y: y + dY * keyboardTransformMultiplier,
          width: width,
          height: height
        }),
            nextX = _constrainMove2.x,
            nextY = _constrainMove2.y;

        onChange({
          x: nextX,
          y: nextY,
          width: this.props.width,
          height: this.props.height
        }, this.props);
      }
    }, {
      key: "keyboardResize",
      value: function keyboardResize(dX, dY) {
        var _this$props5 = this.props,
            x = _this$props5.x,
            y = _this$props5.y,
            width = _this$props5.width,
            height = _this$props5.height,
            keyboardTransformMultiplier = _this$props5.keyboardTransformMultiplier,
            constrainResize = _this$props5.constrainResize,
            onChange = _this$props5.onChange;

        var _constrainResize2 = constrainResize({
          originalMovingCorner: {
            x: x + width,
            y: y + height
          },
          startCorner: {
            x: x,
            y: y
          },
          movingCorner: {
            x: x + width + dX * keyboardTransformMultiplier,
            y: y + height + dY * keyboardTransformMultiplier
          }
        }),
            nextX = _constrainResize2.x,
            nextY = _constrainResize2.y;

        onChange(getRectFromCornerCoordinates({
          x: x,
          y: y
        }, {
          x: nextX,
          y: nextY
        }), this.props);
      }
    }, {
      key: "forceFocus",
      value: function forceFocus() {
        // If it's already focused, return early
        if (this.state.nativeActive) {
          return;
        } // IE11 doesn't have the focus method


        if (this.wrapperEl.focus) {
          this.wrapperEl.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var _this$props6 = this.props,
            constrainMove = _this$props6.constrainMove,
            constrainResize = _this$props6.constrainResize,
            getPlaneCoordinatesFromEvent = _this$props6.getPlaneCoordinatesFromEvent,
            isInternalComponent = _this$props6.isInternalComponent,
            keyboardTransformMultiplier = _this$props6.keyboardTransformMultiplier,
            _onBlur = _this$props6.onBlur,
            onChange = _this$props6.onChange,
            onChildFocus = _this$props6.onChildFocus,
            onChildRectChanged = _this$props6.onChildRectChanged,
            onChildToggleSelection = _this$props6.onChildToggleSelection,
            onDelete = _this$props6.onDelete,
            _onFocus = _this$props6.onFocus,
            onIntermediateChange = _this$props6.onIntermediateChange,
            _onKeyDown = _this$props6.onKeyDown,
            onShapeMountedOrUnmounted = _this$props6.onShapeMountedOrUnmounted,
            ResizeHandleComponent = _this$props6.ResizeHandleComponent,
            setMouseHandler = _this$props6.setMouseHandler,
            wrapperProps = _this$props6.wrapperProps,
            otherProps = _objectWithoutProperties(_this$props6, ["constrainMove", "constrainResize", "getPlaneCoordinatesFromEvent", "isInternalComponent", "keyboardTransformMultiplier", "onBlur", "onChange", "onChildFocus", "onChildRectChanged", "onChildToggleSelection", "onDelete", "onFocus", "onIntermediateChange", "onKeyDown", "onShapeMountedOrUnmounted", "ResizeHandleComponent", "setMouseHandler", "wrapperProps"]);

        var _this$props7 = this.props,
            artificialActive = _this$props7.active,
            disabled = _this$props7.disabled,
            isInSelectionGroup = _this$props7.isInSelectionGroup,
            scale = _this$props7.scale,
            shapeId = _this$props7.shapeId;
        var _this$state3 = this.state,
            nativeActive = _this$state3.nativeActive,
            isMouseDown = _this$state3.isMouseDown,
            dragStartCoordinates = _this$state3.dragStartCoordinates,
            dragCurrentCoordinates = _this$state3.dragCurrentCoordinates;
        var active = artificialActive !== null ? artificialActive : nativeActive;
        var sides = !isMouseDown ? {
          left: this.props.x,
          right: this.props.x + this.props.width,
          top: this.props.y,
          bottom: this.props.y + this.props.height
        } : {
          left: Math.min(dragStartCoordinates.x, dragCurrentCoordinates.x),
          right: Math.max(dragStartCoordinates.x, dragCurrentCoordinates.x),
          top: Math.min(dragStartCoordinates.y, dragCurrentCoordinates.y),
          bottom: Math.max(dragStartCoordinates.y, dragCurrentCoordinates.y)
        };
        var width = sides.right - sides.left;
        var height = sides.bottom - sides.top; // The corner of the resize box that moves

        var movementPoints = {
          nw: {
            x: sides.left,
            y: sides.top
          },
          sw: {
            x: sides.left,
            y: sides.bottom
          },
          ne: {
            x: sides.right,
            y: sides.top
          },
          se: {
            x: sides.right,
            y: sides.bottom
          }
        }; // The corner of the resize box that stays static

        var anchorPoints = {
          nw: movementPoints.se,
          sw: movementPoints.ne,
          ne: movementPoints.sw,
          se: movementPoints.nw
        };
        var RECOMMENDED_CORNER_SIZE = 10;
        var cornerSize = RECOMMENDED_CORNER_SIZE / scale;
        var hasSpaciousVertical = (sides.bottom - sides.top) * scale > RECOMMENDED_CORNER_SIZE * 2;
        var hasSpaciousHorizontal = (sides.right - sides.left) * scale > RECOMMENDED_CORNER_SIZE * 2; // Generate drag handles

        var handles = [hasSpaciousVertical && ['w', 'nw', 'ew-resize', 0, height / 2, 'y'], hasSpaciousHorizontal && ['n', 'ne', 'ns-resize', width / 2, 0, 'x'], hasSpaciousHorizontal && ['s', 'sw', 'ns-resize', width / 2, height, 'x'], hasSpaciousVertical && ['e', 'se', 'ew-resize', width, height / 2, 'y'], ['nw', 'nw', 'nwse-resize', 0, 0, null], ['ne', 'ne', 'nesw-resize', width, 0, null], ['sw', 'sw', 'nesw-resize', 0, height, null], ['se', 'se', 'nwse-resize', width, height, null]].filter(function (a) {
          return a;
        }).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 6),
              handleName = _ref2[0],
              movementReferenceCorner = _ref2[1],
              cursor = _ref2[2],
              x = _ref2[3],
              y = _ref2[4],
              dragLock = _ref2[5];

          return React.createElement(ResizeHandleComponent, {
            key: handleName,
            active: active,
            nativeActive: nativeActive,
            cursor: cursor,
            isInSelectionGroup: isInSelectionGroup,
            name: handleName,
            onMouseDown: function onMouseDown(event) {
              event.stopPropagation();

              var _getPlaneCoordinatesF3 = getPlaneCoordinatesFromEvent(event),
                  planeX = _getPlaneCoordinatesF3.x,
                  planeY = _getPlaneCoordinatesF3.y;

              var movingPoint = movementPoints[movementReferenceCorner];
              var anchorPoint = anchorPoints[movementReferenceCorner];
              var dragInnerOffset = {
                x: planeX - movingPoint.x,
                y: planeY - movingPoint.y
              };
              setMouseHandler(_this4.mouseHandler);

              _this4.setState({
                isMouseDown: true,
                dragStartCoordinates: anchorPoint,
                dragCurrentCoordinates: movingPoint,
                dragInnerOffset: dragInnerOffset,
                isDragToMove: false,
                dragLock: dragLock
              });
            },
            recommendedSize: cornerSize,
            scale: scale,
            x: x,
            y: y
          });
        });
        return React.createElement("g", _extends({
          "data-shape-id": shapeId,
          className: "rse-shape-wrapper",
          transform: "translate(".concat(sides.left, ",").concat(sides.top, ")"),
          style: _objectSpread({
            cursor: 'move',
            outline: 'none'
          }, disabled ? {
            pointerEvents: 'none'
          } : {}),
          ref: function ref(el) {
            _this4.wrapperEl = el;
          },
          focusable: !disabled ? true : undefined // IE11 support
          ,
          tabIndex: !disabled ? 0 : undefined,
          onFocus: function onFocus(event) {
            _this4.gotFocusAfterClick = true;
            onChildFocus(shapeId, isInternalComponent);

            _this4.setState({
              nativeActive: true
            });

            _onFocus(event, _this4.props);
          },
          onBlur: function onBlur(event) {
            _this4.setState({
              nativeActive: false
            });

            _onBlur(event, _this4.props);
          },
          onMouseDown: function onMouseDown(event) {
            event.stopPropagation(); // Focusing support for Safari
            // Safari (12) does not currently allow focusing via mouse events,
            // even on elements with tabIndex="0" (tabbing with the keyboard
            // does work, however). This logic waits to see if focus was called
            // following a click, and forces the focused state if necessary.

            _this4.gotFocusAfterClick = false;
            setTimeout(function () {
              if (!_this4.unmounted && !_this4.gotFocusAfterClick) {
                _this4.forceFocus();
              }
            });

            if (event.shiftKey) {
              onChildToggleSelection(shapeId, isInternalComponent, event); // Prevent default to keep this from triggering blur/focus events
              // on the elements involved, which would otherwise cause a wave
              // of event listener callbacks that are not needed.

              event.preventDefault();
              return;
            }

            var _this4$props = _this4.props,
                x = _this4$props.x,
                y = _this4$props.y;

            var _getPlaneCoordinatesF4 = getPlaneCoordinatesFromEvent(event),
                planeX = _getPlaneCoordinatesF4.x,
                planeY = _getPlaneCoordinatesF4.y;

            var dragInnerOffset = {
              x: planeX - x,
              y: planeY - y
            };
            setMouseHandler(_this4.mouseHandler);

            _this4.setState({
              isMouseDown: true,
              dragCurrentCoordinates: {
                x: x,
                y: y
              },
              dragStartCoordinates: {
                x: x + width,
                y: y + height
              },
              dragInnerOffset: dragInnerOffset,
              isDragToMove: true
            });
          },
          onKeyDown: function onKeyDown(event) {
            _onKeyDown(event, _this4.props); // If the user-defined callback called event.preventDefault(),
            // we consider the event handled


            if (event.defaultPrevented) {
              return;
            }

            var handled = true;

            var handleKeyboardTransform = function handleKeyboardTransform(moveArgs, resizeArgs) {
              return event.shiftKey ? _this4.keyboardResize.apply(_this4, _toConsumableArray(resizeArgs)) : _this4.keyboardMove.apply(_this4, _toConsumableArray(moveArgs));
            };

            switch (event.key) {
              case 'Backspace':
              case 'Delete':
                onDelete(event, _this4.props);
                break;

              case 'ArrowUp':
                handleKeyboardTransform([0, -1], [0, -1]);
                break;

              case 'ArrowRight':
                handleKeyboardTransform([1, 0], [1, 0]);
                break;

              case 'ArrowDown':
                handleKeyboardTransform([0, 1], [0, 1]);
                break;

              case 'ArrowLeft':
                handleKeyboardTransform([-1, 0], [-1, 0]);
                break;

              default:
                handled = false;
            }

            if (handled) {
              event.preventDefault();
            }
          }
        }, wrapperProps), React.createElement(WrappedComponent, _extends({
          isBeingChanged: isMouseDown,
          active: active,
          nativeActive: nativeActive
        }, otherProps, {
          width: width,
          height: height
        })), !disabled && handles);
      }
    }]);

    return WrappedShape;
  }(React.PureComponent);

  WrappedShape.propTypes = {
    active: PropTypes.bool,
    constrainMove: PropTypes.func,
    constrainResize: PropTypes.func,
    disabled: PropTypes.bool,
    getPlaneCoordinatesFromEvent: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    isInSelectionGroup: PropTypes.bool,
    isInternalComponent: PropTypes.bool,
    keyboardTransformMultiplier: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onChildRectChanged: PropTypes.func,
    onChildFocus: PropTypes.func,
    onChildToggleSelection: PropTypes.func,
    onDelete: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onIntermediateChange: PropTypes.func,
    onShapeMountedOrUnmounted: PropTypes.func.isRequired,
    ResizeHandleComponent: PropTypes.func,
    scale: PropTypes.number.isRequired,
    shapeId: PropTypes.string.isRequired,
    setMouseHandler: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    wrapperProps: PropTypes.shape({}),
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  };
  WrappedShape.defaultProps = {
    active: null,
    constrainMove: defaultConstrainMove,
    constrainResize: defaultConstrainResize,
    disabled: false,
    isInSelectionGroup: false,
    isInternalComponent: false,
    keyboardTransformMultiplier: 1,
    onBlur: function onBlur() {},
    onChange: function onChange() {},
    onChildRectChanged: function onChildRectChanged() {},
    onChildFocus: function onChildFocus() {},
    onChildToggleSelection: function onChildToggleSelection() {},
    onDelete: function onDelete() {},
    onFocus: function onFocus() {},
    onIntermediateChange: function onIntermediateChange() {},
    onKeyDown: function onKeyDown() {},
    ResizeHandleComponent: DefaultResizeHandleComponent,
    wrapperProps: {}
  };
  WrappedShape.displayName = "wrapShape(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return withContext(WrappedShape);
}

var ImageLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageLayer, _Component);

  function ImageLayer(props) {
    var _this;

    _classCallCheck(this, ImageLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageLayer).call(this, props));
    _this.state = {
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.getImageDimensionInfo = _this.getImageDimensionInfo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImageLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getImageDimensionInfo();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.src !== this.props.src) {
        this.getImageDimensionInfo();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    } // Load the background image in memory to measure its dimensions

  }, {
    key: "getImageDimensionInfo",
    value: function getImageDimensionInfo() {
      var _this2 = this;

      var initialSrc = this.props.src;
      var memoryImage = new Image();

      memoryImage.onload = function () {
        if (_this2.unmounted || _this2.props.src !== initialSrc) {
          return;
        }

        _this2.setState({
          naturalWidth: memoryImage.naturalWidth,
          naturalHeight: memoryImage.naturalHeight
        });

        _this2.props.onLoad({
          naturalWidth: memoryImage.naturalWidth,
          naturalHeight: memoryImage.naturalHeight
        });
      };

      memoryImage.src = initialSrc;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onLoad = _this$props.onLoad,
          src = _this$props.src,
          otherProps = _objectWithoutProperties(_this$props, ["onLoad", "src"]);

      var _this$state = this.state,
          naturalHeight = _this$state.naturalHeight,
          naturalWidth = _this$state.naturalWidth;
      return React.createElement("image", _extends({
        href: src,
        width: naturalWidth,
        height: naturalHeight
      }, otherProps));
    }
  }]);

  return ImageLayer;
}(Component);

ImageLayer.propTypes = {
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired
};
ImageLayer.defaultProps = {
  onLoad: function onLoad() {}
};

var DefaultDrawPreviewComponent = wrapShape(function (_ref) {
  var height = _ref.height,
      width = _ref.width;
  return React.createElement("rect", {
    fill: "rgba(0,0,255,0.5)",
    height: height,
    width: width
  });
});

var defaultDragState$1 = {
  dragStartCoordinates: null,
  dragCurrentCoordinates: null,
  isMouseDown: false
};

var DrawLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(DrawLayer, _Component);

  function DrawLayer(props) {
    var _this;

    _classCallCheck(this, DrawLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrawLayer).call(this, props));
    _this.state = _objectSpread({}, defaultDragState$1);
    _this.getCoordinatesFromEvent = _this.getCoordinatesFromEvent.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.mouseHandler = _this.mouseHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DrawLayer, [{
    key: "getCoordinatesFromEvent",
    value: function getCoordinatesFromEvent(event) {
      var isStartEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = this.props,
          constrainResize = _this$props.constrainResize,
          constrainMove = _this$props.constrainMove,
          getPlaneCoordinatesFromEvent = _this$props.getPlaneCoordinatesFromEvent,
          vectorWidth = _this$props.vectorWidth,
          vectorHeight = _this$props.vectorHeight;
      var _this$state = this.state,
          dragStartCoordinates = _this$state.dragStartCoordinates,
          dragCurrentCoordinates = _this$state.dragCurrentCoordinates;

      var _getPlaneCoordinatesF = getPlaneCoordinatesFromEvent(event),
          rawX = _getPlaneCoordinatesF.x,
          rawY = _getPlaneCoordinatesF.y;

      if (isStartEvent) {
        var _constrainMove = constrainMove({
          originalX: rawX,
          originalY: rawY,
          x: rawX,
          y: rawY,
          width: 0,
          height: 0,
          vectorWidth: vectorWidth,
          vectorHeight: vectorHeight
        }),
            _x = _constrainMove.x,
            _y = _constrainMove.y;

        return {
          x: _x,
          y: _y
        };
      }

      var _constrainResize = constrainResize({
        originalMovingCorner: dragCurrentCoordinates,
        startCorner: dragStartCoordinates,
        movingCorner: {
          x: rawX,
          y: rawY
        },
        lockedDimension: null,
        vectorWidth: vectorWidth,
        vectorHeight: vectorHeight
      }),
          x = _constrainResize.x,
          y = _constrainResize.y;

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var _this2 = this;

      if (!this.state.isMouseDown) {
        return;
      }

      var _this$state2 = this.state,
          dragStartCoordinates = _this$state2.dragStartCoordinates,
          dragCurrentCoordinates = _this$state2.dragCurrentCoordinates;

      if (dragStartCoordinates.x === dragCurrentCoordinates.x || dragStartCoordinates.y === dragCurrentCoordinates.y) {
        this.setState(defaultDragState$1);
        return;
      }

      var newRect = getRectFromCornerCoordinates(dragStartCoordinates, dragCurrentCoordinates);
      this.setState(defaultDragState$1, function () {
        _this2.props.onAddShape(newRect);
      });
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (!this.state.isMouseDown) {
        return;
      }

      this.setState({
        dragCurrentCoordinates: this.getCoordinatesFromEvent(event)
      });
    }
  }, {
    key: "mouseHandler",
    value: function mouseHandler(event) {
      if (event.type === 'mousemove') {
        this.onMouseMove(event);
      } else if (event.type === 'mouseup') {
        this.onMouseUp(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          DrawPreviewComponent = _this$props2.DrawPreviewComponent,
          scale = _this$props2.scale,
          setMouseHandler = _this$props2.setMouseHandler,
          vectorHeight = _this$props2.vectorHeight,
          vectorWidth = _this$props2.vectorWidth;
      var _this$state3 = this.state,
          dragCurrentCoordinates = _this$state3.dragCurrentCoordinates,
          dragStartCoordinates = _this$state3.dragStartCoordinates,
          isMouseDown = _this$state3.isMouseDown;
      var draggedRect = isMouseDown ? getRectFromCornerCoordinates(dragStartCoordinates, dragCurrentCoordinates) : null;
      return React.createElement(React.Fragment, null, React.createElement("rect", {
        className: "rse-draw-layer",
        width: vectorWidth,
        height: vectorHeight,
        fill: "transparent",
        onMouseDown: function onMouseDown(event) {
          var startCoordinates = _this3.getCoordinatesFromEvent(event, true);

          setMouseHandler(_this3.mouseHandler);

          _this3.setState({
            dragStartCoordinates: startCoordinates,
            dragCurrentCoordinates: startCoordinates,
            isMouseDown: true
          });
        }
      }), isMouseDown && React.createElement(DrawPreviewComponent, {
        height: draggedRect.height,
        disabled: true,
        isInternalComponent: true,
        scale: scale,
        shapeId: "rse-internal-draw-component",
        width: draggedRect.width,
        x: draggedRect.x,
        y: draggedRect.y
      }));
    }
  }]);

  return DrawLayer;
}(Component);

DrawLayer.propTypes = {
  constrainMove: PropTypes.func,
  constrainResize: PropTypes.func,
  DrawPreviewComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]),
  getPlaneCoordinatesFromEvent: PropTypes.func.isRequired,
  onAddShape: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  setMouseHandler: PropTypes.func.isRequired,
  vectorHeight: PropTypes.number.isRequired,
  vectorWidth: PropTypes.number.isRequired
};
DrawLayer.defaultProps = {
  constrainMove: defaultConstrainMove,
  constrainResize: defaultConstrainResize,
  DrawPreviewComponent: DefaultDrawPreviewComponent
};
var DrawLayer$1 = withContext(DrawLayer);

var DefaultSelectionDrawComponent = wrapShape(function (_ref) {
  var height = _ref.height,
      width = _ref.width;
  return React.createElement("rect", {
    fill: "rgba(140,179,255,0.3)",
    height: height,
    width: width
  });
});

var DefaultSelectionComponent = wrapShape(function (_ref) {
  var height = _ref.height,
      scale = _ref.scale,
      width = _ref.width;
  return React.createElement("rect", {
    fill: "transparent",
    stroke: "rgba(140,179,255,1)",
    strokeWidth: 2 / scale,
    height: height,
    width: width
  });
});

var defaultDragState$2 = {
  dragStartCoordinates: null,
  dragCurrentCoordinates: null,
  isMouseDown: false
};
var SelectionContext = React.createContext(null);
var SELECTION_COMPONENT_SHAPE_ID = 'rse-internal-selection-component';

var getNextRectOfSelectionChild = function getNextRectOfSelectionChild(selectionStartRect, selectionEndRect, childRect) {
  var scaleX = selectionStartRect.width !== 0 ? selectionEndRect.width / selectionStartRect.width : 0;
  var scaleY = selectionStartRect.height !== 0 ? selectionEndRect.height / selectionStartRect.height : 0;
  return {
    x: selectionEndRect.x + (childRect.x - selectionStartRect.x) * scaleX,
    y: selectionEndRect.y + (childRect.y - selectionStartRect.y) * scaleY,
    width: scaleX !== 0 ? childRect.width * scaleX : selectionEndRect.width,
    height: scaleY !== 0 ? childRect.height * scaleY : selectionEndRect.height
  };
};

var getNextRectOfSelectionChildConstrained = function getNextRectOfSelectionChildConstrained(selectionStartRect, selectionEndRect, childRect, constrainMove, constrainResize) {
  var _getNextRectOfSelecti = getNextRectOfSelectionChild(selectionStartRect, selectionEndRect, childRect),
      adjustedX = _getNextRectOfSelecti.x,
      adjustedY = _getNextRectOfSelecti.y,
      adjustedWidth = _getNextRectOfSelecti.width,
      adjustedHeight = _getNextRectOfSelecti.height;

  var _constrainMove = constrainMove({
    originalX: childRect.x,
    originalY: childRect.y,
    x: adjustedX,
    y: adjustedY,
    width: adjustedWidth,
    height: adjustedHeight
  }),
      x = _constrainMove.x,
      y = _constrainMove.y;

  var _constrainResize = constrainResize({
    originalMovingCorner: {
      x: x + childRect.width,
      y: y + childRect.height
    },
    startCorner: {
      x: x,
      y: y
    },
    movingCorner: {
      x: x + adjustedWidth,
      y: y + adjustedHeight
    },
    lockedDimension: null
  }),
      right = _constrainResize.x,
      bottom = _constrainResize.y;

  return {
    x: x,
    y: y,
    width: right - x,
    height: bottom - y
  };
};

var getSelectionRect = function getSelectionRect(childRects) {
  var selectionX = Math.min.apply(Math, _toConsumableArray(childRects.map(function (c) {
    return c.x;
  })));
  var selectionY = Math.min.apply(Math, _toConsumableArray(childRects.map(function (c) {
    return c.y;
  })));
  return {
    x: selectionX,
    y: selectionY,
    height: Math.max.apply(Math, _toConsumableArray(childRects.map(function (c) {
      return c.y + c.height;
    }))) - selectionY,
    width: Math.max.apply(Math, _toConsumableArray(childRects.map(function (c) {
      return c.x + c.width;
    }))) - selectionX
  };
};

var SelectionLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectionLayer, _Component);

  function SelectionLayer(props) {
    var _this;

    _classCallCheck(this, SelectionLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectionLayer).call(this, props));
    _this.state = _objectSpread({}, defaultDragState$2);
    _this.wrappedShapes = {};
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.mouseHandler = _this.mouseHandler.bind(_assertThisInitialized(_this));
    _this.onChildRectChanged = _this.onChildRectChanged.bind(_assertThisInitialized(_this));
    _this.onChildFocus = _this.onChildFocus.bind(_assertThisInitialized(_this));
    _this.onChildToggleSelection = _this.onChildToggleSelection.bind(_assertThisInitialized(_this));
    _this.onSelectionShapeMountedOrUnmounted = _this.onSelectionShapeMountedOrUnmounted.bind(_assertThisInitialized(_this));
    _this.callbacks = _objectSpread({}, props.callbacks, {
      onChildRectChanged: _this.onChildRectChanged,
      onChildFocus: _this.onChildFocus,
      onChildToggleSelection: _this.onChildToggleSelection,
      onShapeMountedOrUnmounted: _this.onSelectionShapeMountedOrUnmounted
    });
    return _this;
  }

  _createClass(SelectionLayer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.wrappedShapes = {};
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.selectedChildrenDidChange) {
        this.selectedChildrenDidChange = false; // Only force update if there is a selection visible.
        // Otherwise, no change

        if (this.props.selectedShapeIds.filter(function (shapeId) {
          return _this2.wrappedShapes[shapeId];
        }).length >= 2) {
          this.forceUpdate();
        }
      }
    }
  }, {
    key: "onChildFocus",
    value: function onChildFocus(shapeId, isInternalComponent) {
      if (isInternalComponent) return;
      var _this$props = this.props,
          selectedShapeIds = _this$props.selectedShapeIds,
          onSelectionChange = _this$props.onSelectionChange;

      if ( // We don't want to focus on the shape if it's already
      // the only focused shape
      selectedShapeIds.length !== 1 || selectedShapeIds[0] !== shapeId) {
        onSelectionChange([shapeId]);
      }
    }
  }, {
    key: "onChildRectChanged",
    value: function onChildRectChanged(shapeId, isInternalComponent) {
      if (isInternalComponent) return;
      var selectedShapeIds = this.props.selectedShapeIds;

      if (!this.selectedChildrenDidChange && selectedShapeIds.indexOf(shapeId) >= 0) {
        this.selectedChildrenDidChange = true;
      }
    }
  }, {
    key: "onChildToggleSelection",
    value: function onChildToggleSelection(clickedShapeId, isInternalComponent, event) {
      var _this3 = this;

      var isClickingSelection = clickedShapeId === SELECTION_COMPONENT_SHAPE_ID;
      if (isInternalComponent && !isClickingSelection) return;
      var targetShapeId = clickedShapeId; // When trying to click shapes behind the selection rectangle, the
      // selection rectangle absorbs the mouseDown event, so we have to
      // use the position of the click to retrieve the element under the mouse.

      if (isClickingSelection) {
        var elementsUnderMouse = typeof document.msElementsFromPoint === 'function' ? Array.prototype.slice.call( // msElementsFromPoint returns null when there are no elements
        // found
        document.msElementsFromPoint(event.clientX, event.clientY) || []) : document.elementsFromPoint(event.clientX, event.clientY); // Only the child elements (e.g., <rect>) of the wrapShape <g> tags
        // get picked up by elementsFromPoint, so here we aim to access the
        // <g> tags (which contain the shapeId) by getting the parentNode
        // of each element found

        for (var i = 0; i < elementsUnderMouse.length; i += 1) {
          var parentNode = elementsUnderMouse[i].parentNode;

          if (!parentNode) {
            // eslint-disable-next-line no-continue
            continue;
          } // IE11-compatible way to get dataset info from SVG elements


          var shapeId = null;

          if (parentNode.dataset) {
            shapeId = parentNode.dataset.shapeId;
          } else if (typeof parentNode.getAttribute === 'function') {
            shapeId = parentNode.getAttribute('data-shape-id');
          }

          if (typeof shapeId !== 'string' || shapeId === SELECTION_COMPONENT_SHAPE_ID) {
            // eslint-disable-next-line no-continue
            continue;
          }

          targetShapeId = shapeId;
          break;
        }
      }

      var _this$props2 = this.props,
          selectedShapeIds = _this$props2.selectedShapeIds,
          onSelectionChange = _this$props2.onSelectionChange;
      var isAdd = selectedShapeIds.indexOf(targetShapeId) < 0;

      if (isAdd) {
        var nextSelectedShapeIds = [].concat(_toConsumableArray(selectedShapeIds), [targetShapeId]);
        onSelectionChange(nextSelectedShapeIds);

        if (nextSelectedShapeIds.length >= 2) {
          // Focus on the group selection rect when it is drawn
          if (this.selectionEl) {
            this.selectionEl.forceFocus();
          } else {
            setTimeout(function () {
              if (_this3.selectionEl) {
                _this3.selectionEl.forceFocus();
              }
            });
          }
        }
      } else if (selectedShapeIds.length >= 2) {
        // Only deselect when it is a group selection
        onSelectionChange(selectedShapeIds.filter(function (id) {
          return id !== targetShapeId;
        }));
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var _this4 = this;

      if (!this.state.isMouseDown) {
        return;
      }

      if (!this.selectionIsLargeEnough()) {
        this.setState(defaultDragState$2);
        return;
      }

      var _this$state = this.state,
          dragStartCoordinates = _this$state.dragStartCoordinates,
          dragCurrentCoordinates = _this$state.dragCurrentCoordinates;
      var selectRect = getRectFromCornerCoordinates(dragStartCoordinates, dragCurrentCoordinates);
      var selectedShapeIds = Object.keys(this.wrappedShapes).filter(function (shapeId) {
        var _this4$wrappedShapes$ = _this4.wrappedShapes[shapeId].props,
            x = _this4$wrappedShapes$.x,
            y = _this4$wrappedShapes$.y,
            width = _this4$wrappedShapes$.width,
            height = _this4$wrappedShapes$.height;
        return x + width > selectRect.x && x < selectRect.x + selectRect.width && y + height > selectRect.y && y < selectRect.y + selectRect.height;
      });
      this.setState(defaultDragState$2);
      this.props.onSelectionChange(selectedShapeIds);

      if (selectedShapeIds.length >= 2 && this.selectionEl) {
        // Focus on the group selection rect when it is first drawn
        this.selectionEl.forceFocus();
      } else if (selectedShapeIds.length === 1) {
        // In the event that a single shape is selected, give native focus to it as well
        this.wrappedShapes[selectedShapeIds[0]].forceFocus();
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (!this.state.isMouseDown) {
        return;
      }

      this.setState({
        dragCurrentCoordinates: this.props.getPlaneCoordinatesFromEvent(event)
      });
    }
  }, {
    key: "onSelectionShapeMountedOrUnmounted",
    value: function onSelectionShapeMountedOrUnmounted(instance, didMount) {
      var _this$props3 = this.props,
          onShapeMountedOrUnmounted = _this$props3.onShapeMountedOrUnmounted,
          selectedShapeIds = _this$props3.selectedShapeIds; // Call the original callback

      onShapeMountedOrUnmounted(instance, didMount);

      if (!this.selectedChildrenDidChange && selectedShapeIds.indexOf(instance.props.shapeId) >= 0) {
        this.selectedChildrenDidChange = true;
      }

      if (didMount) {
        this.wrappedShapes[instance.props.shapeId] = instance;
      } else {
        delete this.wrappedShapes[instance.props.shapeId];
      }
    }
  }, {
    key: "mouseHandler",
    value: function mouseHandler(event) {
      if (event.type === 'mousemove') {
        this.onMouseMove(event);
      } else if (event.type === 'mouseup') {
        this.onMouseUp(event);
      }
    }
  }, {
    key: "selectionIsLargeEnough",
    value: function selectionIsLargeEnough() {
      var minimumDistanceForSelection = this.props.minimumDistanceForSelection;
      var _this$state2 = this.state,
          dragStartCoordinates = _this$state2.dragStartCoordinates,
          dragCurrentCoordinates = _this$state2.dragCurrentCoordinates;
      var selectionRect = getRectFromCornerCoordinates(dragStartCoordinates, dragCurrentCoordinates);
      return selectionRect.width >= minimumDistanceForSelection || selectionRect.height >= minimumDistanceForSelection;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          getPlaneCoordinatesFromEvent = _this$props4.getPlaneCoordinatesFromEvent,
          keyboardTransformMultiplier = _this$props4.keyboardTransformMultiplier,
          _onChange = _this$props4.onChange,
          _onDelete = _this$props4.onDelete,
          onSelectionChange = _this$props4.onSelectionChange,
          scale = _this$props4.scale,
          selectedShapeIds = _this$props4.selectedShapeIds,
          SelectionComponent = _this$props4.SelectionComponent,
          selectionComponentProps = _this$props4.selectionComponentProps,
          SelectionDrawComponent = _this$props4.SelectionDrawComponent,
          setMouseHandler = _this$props4.setMouseHandler,
          vectorHeight = _this$props4.vectorHeight,
          vectorWidth = _this$props4.vectorWidth;
      var _this$state3 = this.state,
          dragCurrentCoordinates = _this$state3.dragCurrentCoordinates,
          dragStartCoordinates = _this$state3.dragStartCoordinates,
          isMouseDown = _this$state3.isMouseDown;
      var draggedRect = isMouseDown ? getRectFromCornerCoordinates(dragStartCoordinates, dragCurrentCoordinates) : null;
      var selectedShapes = selectedShapeIds.map(function (shapeId) {
        return _this5.wrappedShapes[shapeId];
      }).filter(Boolean);
      var extra = null;

      if (isMouseDown) {
        if (this.selectionIsLargeEnough()) {
          extra = React.createElement(SelectionDrawComponent, {
            shapeId: "rse-internal-selection-draw-component",
            disabled: true,
            height: draggedRect.height,
            isInternalComponent: true,
            scale: scale,
            width: draggedRect.width,
            x: draggedRect.x,
            y: draggedRect.y
          });
        }
      } else if (selectedShapes.length >= 2) {
        var selectionRect = getSelectionRect(selectedShapes.map(function (s) {
          return s.props;
        }));
        extra = React.createElement(SelectionComponent, _extends({
          keyboardTransformMultiplier: keyboardTransformMultiplier
        }, selectionComponentProps, {
          shapeId: SELECTION_COMPONENT_SHAPE_ID,
          isInternalComponent: true,
          ref: function ref(el) {
            _this5.selectionEl = el;
          },
          onIntermediateChange: function onIntermediateChange(intermediateRect) {
            selectedShapes.forEach(function (shape) {
              var _shape$props = shape.props,
                  constrainMove = _shape$props.constrainMove,
                  constrainResize = _shape$props.constrainResize,
                  x = _shape$props.x,
                  y = _shape$props.y,
                  width = _shape$props.width,
                  height = _shape$props.height;
              var tempRect = getNextRectOfSelectionChildConstrained(selectionRect, intermediateRect, {
                x: x,
                y: y,
                width: width,
                height: height
              }, constrainMove, constrainResize);
              shape.simulateTransform(tempRect);
            });
          },
          onDelete: function onDelete(event) {
            _onDelete(event, selectedShapes.map(function (shape) {
              return shape.props;
            }));
          },
          onChange: function onChange(nextSelectionRect) {
            var nextRects = selectedShapes.map(function (shape) {
              var _shape$props2 = shape.props,
                  constrainMove = _shape$props2.constrainMove,
                  constrainResize = _shape$props2.constrainResize,
                  x = _shape$props2.x,
                  y = _shape$props2.y,
                  width = _shape$props2.width,
                  height = _shape$props2.height;
              return getNextRectOfSelectionChildConstrained(selectionRect, nextSelectionRect, {
                x: x,
                y: y,
                width: width,
                height: height
              }, constrainMove, constrainResize);
            }); // Restore the shapes back to their original positions

            selectedShapes.forEach(function (shape) {
              shape.simulateTransform(null);
            });

            _onChange(nextRects, selectedShapes.map(function (shape) {
              return shape.props;
            }));
          },
          scale: scale,
          height: selectionRect.height,
          width: selectionRect.width,
          x: selectionRect.x,
          y: selectionRect.y
        }));
      }

      return React.createElement(React.Fragment, null, React.createElement("rect", {
        className: "rse-selection-layer",
        width: vectorWidth,
        height: vectorHeight,
        fill: "transparent",
        onMouseDown: function onMouseDown(event) {
          var startCoordinates = getPlaneCoordinatesFromEvent(event);
          setMouseHandler(_this5.mouseHandler);

          _this5.setState({
            dragStartCoordinates: startCoordinates,
            dragCurrentCoordinates: startCoordinates,
            isMouseDown: true
          });

          onSelectionChange([]);
        }
      }), React.createElement(CallbacksContext.Provider, {
        value: this.callbacks
      }, React.createElement(React.Fragment, null, children, extra)));
    }
  }]);

  return SelectionLayer;
}(Component);

SelectionLayer.propTypes = {
  callbacks: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  getPlaneCoordinatesFromEvent: PropTypes.func.isRequired,
  keyboardTransformMultiplier: PropTypes.number,
  minimumDistanceForSelection: PropTypes.number,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  onSelectionChange: PropTypes.func.isRequired,
  onShapeMountedOrUnmounted: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  selectedShapeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  SelectionComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]),
  selectionComponentProps: PropTypes.shape({}),
  SelectionDrawComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]),
  setMouseHandler: PropTypes.func.isRequired,
  vectorHeight: PropTypes.number.isRequired,
  vectorWidth: PropTypes.number.isRequired
};
SelectionLayer.defaultProps = {
  children: null,
  keyboardTransformMultiplier: 1,
  minimumDistanceForSelection: 15,
  onChange: function onChange() {},
  onDelete: function onDelete() {},
  SelectionComponent: DefaultSelectionComponent,
  selectionComponentProps: {},
  SelectionDrawComponent: DefaultSelectionDrawComponent
};
var SelectionLayer$1 = withContext(SelectionLayer);

export { DrawLayer$1 as DrawLayer, ImageLayer, SelectionLayer$1 as SelectionLayer, ShapeEditor, wrapShape };
