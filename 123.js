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
          var RECOMMENDED_CORNER_SIZE = 5;
          var cornerSize = RECOMMENDED_CORNER_SIZE / scale;
          var hasSpaciousVertical = (sides.bottom - sides.top) * scale > RECOMMENDED_CORNER_SIZE * 2;
          var hasSpaciousHorizontal = (sides.right - sides.left) * scale > RECOMMENDED_CORNER_SIZE * 2; // Generate drag handles
  
          var handles = [hasSpaciousVertical && ['e', 'se', 'ew-resize', width, height / 2, 'y']].filter(function (a) {
            return a;
          }).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 6),
                handleName = _ref2[0],
                movementReferenceCorner = _ref2[1],
                cursor = _ref2[2],
                x = _ref2[3],
                y = _ref2[4],
                dragLock = _ref2[5];
  
            return React__default.createElement(ResizeHandleComponent, {
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
          return React__default.createElement("g", _extends({
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
            onClick: () => {
                alert('asdf')
            },
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
          }, wrapperProps), React__default.createElement(WrappedComponent, _extends({
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
    }(React__default.PureComponent);
  
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