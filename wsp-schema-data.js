window.WSP_RUNTIME_SCHEMA = {
  "version": {
    "number": "4.8.0",
    "major": "4",
    "minor": "8",
    "patch": "0",
    "build": "1084",
    "release": "2020Q3"
  },
  "prefs": {
    "units": {
      "length": "cm",
      "angle": "deg"
    },
    "precision": {
      "length": 2,
      "angle": 2,
      "scalar": 2
    },
    "fadeTraces": false,
    "fadeHalfLife": 5,
    "fadeSaturationFloor": 0.0625,
    "colorableComponents": {
      "Points": {
        "color": "red"
      },
      "Straights": {
        "color": "navy"
      },
      "Curves": {
        "color": "green"
      },
      "Interior": {
        "color": "rgb(138,102,217)"
      },
      "Plot": {
        "color": "purple"
      },
      "PointLocus": {
        "color": "maroon"
      },
      "Selection": {
        "color": "rgb(195,0,195)"
      },
      "Background": {
        "color": "white"
      },
      "CoordSys": {
        "color": "silver"
      },
      "TextGObject_BackgroundContrast": {
        "color": "black"
      },
      "ActionButton": {
        "color": "rgb(255,165,0)"
      },
      "LabelText_BackgroundContrast": {
        "color": "black"
      },
      "Axis": {
        "color": "rgb(96,96,96)"
      },
      "AngleMarker": {
        "color": "rgb(64,64,64)"
      },
      "Picture": {
        "color": "red"
      }
    },
    "text": {
      "mathItalicization": true,
      "textTypes": {
        "Label": {
          "font-family": "Times",
          "font-size": 24,
          "font-weight": "bold",
          "font-style": "normal",
          "text-decoration": "none",
          "letter-spacing": "none",
          "color": "black"
        },
        "Caption": {
          "font-family": "Times",
          "font-size": 16,
          "font-weight": "normal",
          "font-style": "normal",
          "text-decoration": "none",
          "letter-spacing": "none",
          "color": "black",
          "padding": "2px 4px"
        },
        "Measurement": {
          "font-family": "Times",
          "font-size": 18,
          "font-weight": "normal",
          "font-style": "normal",
          "text-decoration": "none",
          "letter-spacing": "none",
          "color": "black"
        },
        "Action": {
          "label": {
            "font-family": "Arial",
            "font-size": 16,
            "font-weight": "normal",
            "font-style": "normal",
            "text-decoration": "none",
            "letter-spacing": "none",
            "color": "black"
          }
        },
        "Table": {
          "font-family": "Arial",
          "font-size": 14,
          "font-weight": "normal",
          "font-style": "normal",
          "text-decoration": "none",
          "letter-spacing": "none",
          "color": "black"
        },
        "AxisTicksAndOptionalLabel": {
          "font-family": "Geneva",
          "font-size": 14,
          "font-weight": "normal",
          "font-style": "normal",
          "text-decoration": "none",
          "letter-spacing": "none",
          "color": "black",
          "label": {
            "font-family": "Geneva",
            "font-size": 14,
            "font-weight": "normal",
            "font-style": "normal",
            "text-decoration": "none",
            "letter-spacing": "none",
            "color": "black"
          }
        }
      }
    }
  },
  "kinds": {
    "Kind": {
      "name": "Kind",
      "description": "All Kinds have the following properties.",
      "inherits": null,
      "gspKindRef": null,
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Unknown": {
      "name": "Unknown",
      "description": "An unknown object generated as a result of some translation process. Will not be displayed.",
      "inherits": "Kind",
      "gspKindRef": null,
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Sampler": {
      "name": "Sampler",
      "description": "A collection made by sampling some geometric or numeric function",
      "inherits": "Kind",
      "gspKindRef": "SamplerKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "numSamples",
        "driverDomain",
        "isDiscrete",
        "showEndpoints"
      ]
    },
    "Map": {
      "name": "Map",
      "description": "A Map.",
      "inherits": "Kind",
      "gspKindRef": "MapKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "rerandomizePointsOnPaths",
        "finalIterationOnly"
      ]
    },
    "IterateImage": {
      "name": "IterateImage",
      "description": "",
      "inherits": null,
      "gspKindRef": "IterateImageKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Button": {
      "name": "Button",
      "description": "A control that initiates some action.",
      "inherits": "Kind",
      "gspKindRef": "ActionKind",
      "hasLabel": false,
      "defaultConstraint": "ActionButton",
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "geom",
        "state"
      ]
    },
    "Circle": {
      "name": "Circle",
      "description": "The curve describing the limits of a circle.",
      "inherits": "Kind",
      "gspKindRef": "CircleKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Picture": {
      "name": "Picture",
      "description": "An Image.",
      "inherits": "Kind",
      "gspKindRef": "PictureKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "image"
      ]
    },
    "Point": {
      "name": "Point",
      "description": "A location in the Euclidean plane.",
      "inherits": "Kind",
      "gspKindRef": "PointKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Polygon": {
      "name": "Polygon",
      "description": "The planar area bound by connecting a series of points by straight line segments.",
      "inherits": "Kind",
      "gspKindRef": "PolygonKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Straight": {
      "name": "Straight",
      "description": "Any of the family of straight geometric figures: rays, segments, or lines.",
      "inherits": "Kind",
      "gspKindRef": "StraightKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "debug"
      ]
    },
    "DOMKind": {
      "name": "DOMKind",
      "description": "Common base class for kinds, such as Text and Table, that are represented as rectangular DOM elements containing text.",
      "inherits": "Kind",
      "gspKindRef": null,
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "geom"
      ]
    },
    "Text": {
      "name": "Text",
      "description": "A displayable message.",
      "inherits": "DOMKind",
      "gspKindRef": "TextKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "geom",
        "text",
        "textMFS"
      ]
    },
    "Table": {
      "name": "Table",
      "description": "A table of rows and columns",
      "inherits": "DOMKind",
      "gspKindRef": "TableKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "geom",
        "rows",
        "hasLivePreview"
      ]
    },
    "Arc": {
      "name": "Arc",
      "description": "",
      "inherits": "Kind",
      "gspKindRef": "ArcKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "Axis": {
      "name": "Axis",
      "description": "A one dimensional coordinate line.",
      "inherits": "Straight",
      "gspKindRef": "AxisKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "debug",
        "orientation"
      ]
    },
    "CircleInterior": {
      "name": "CircleInterior",
      "description": "The region comprising the interior of a circle.",
      "inherits": "Circle",
      "gspKindRef": "CircleInteriorKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "ArcInterior": {
      "name": "ArcInterior",
      "description": "The region comprising the interior of an arc.",
      "inherits": "Arc",
      "gspKindRef": "ArcKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "CoordSys": {
      "name": "CoordSys",
      "description": "A Coordinate System.",
      "inherits": "Kind",
      "gspKindRef": "CoordSysKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "shape"
      ]
    },
    "Measure": {
      "name": "Measure",
      "description": "A message rendered in to a sketch canvas.",
      "inherits": "Text",
      "gspKindRef": "TextKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "geom",
        "text",
        "textMFS",
        "blank",
        "debug"
      ]
    },
    "Expression": {
      "name": "Expression",
      "description": "A numeric expression.",
      "inherits": "Measure",
      "gspKindRef": "TextKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description",
        "geom",
        "text",
        "textMFS",
        "blank",
        "debug",
        "expression",
        "expressionType",
        "functionExpr"
      ]
    },
    "AngleMarker": {
      "name": "AngleMarker",
      "description": "Marks the span of an angle. In geometry, angle markers are used to assert congruency relationships.",
      "inherits": "Arc",
      "gspKindRef": "AngleMarkerKind",
      "hasLabel": true,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    },
    "PathMarker": {
      "name": "PathMarker",
      "description": "A location in the Euclidean plane.",
      "inherits": "Kind",
      "gspKindRef": "PathMarkerKind",
      "hasLabel": false,
      "defaultConstraint": null,
      "properties": [
        "kind",
        "constraint",
        "genus",
        "toolRole",
        "label",
        "shouldAutogenerateLabel",
        "latentVisibility",
        "style",
        "description"
      ]
    }
  },
  "constraints": {
    "Constraint": {
      "name": "Constraint",
      "description": "The parent class for all constraints.",
      "inherits": null,
      "gspRef": null,
      "abstract": true,
      "kinds": [],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "Unknown": {
      "name": "Unknown",
      "description": "Placeholder for an unrecognized constraint.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "Free": {
      "name": "Free",
      "description": "An object with a free constraint can be dragged anywhere in the sketch space and is not bound by any dependencies that affect its geometry.",
      "inherits": "Constraint",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Point",
        "Expression",
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the coordinates of its location exist.",
      "bapEdges": {
        "Default": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PictureFree": {
      "name": "PictureFree",
      "description": "A free picture can be dragged anywhere in the sketch space and is not bound by any dependencies that affect its geometry.",
      "inherits": "Constraint",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "Exists iff its image exists.",
      "bapEdges": {
        "Default": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PictureNonFree": {
      "name": "PictureNonFree",
      "description": "Abstract base class for picture constraints.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "DriveChain": {
      "name": "DriveChain",
      "description": "A virtual base class for constraints that have drive-chains",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {
        "driverObject": {
          "description": "The object which originates the drive-chain",
          "kind": "Point|Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "drivenObject": {
          "description": "The object being driven whose location use used in the constraint",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Locus": {
      "name": "Locus",
      "description": "A virtual base class for locus subclasses",
      "inherits": "DriveChain",
      "gspRef": null,
      "abstract": true,
      "kinds": [],
      "genus": [],
      "existenceRule": "Exists if any samples exist",
      "bapEdges": null,
      "parentsSpec": {
        "driverObject": {
          "description": "The object which originates the drive-chain",
          "kind": "Point|Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "drivenObject": {
          "description": "The object being driven whose location use used in the constraint",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "GeomLocus": {
      "name": "GeomLocus",
      "description": "A Geometric Locus of an object as a parent driver moves along a path.",
      "inherits": "Locus",
      "gspRef": "GeomLocus_C",
      "abstract": false,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists if any samples exist",
      "bapEdges": {
        "drivenObject": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "domainObject": {
          "edgeType": "iEdge",
          "sortIndex": 1
        },
        "driverObject": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "Default": {
          "edgeType": "iEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "driverObject": {
          "description": "The object which originates the drive-chain",
          "kind": "Point|Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "drivenObject": {
          "description": "The object being driven whose location use used in the constraint",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "domainObject": {
          "description": "The drive path the driver travels along",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "CustomTransformedPoint": {
      "name": "CustomTransformedPoint",
      "description": "The image of a point by a custom trasform.",
      "inherits": "DriveChain",
      "gspRef": "CustomTransformedPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": {
        "drivenObject": {
          "edgeType": "iEdge",
          "sortIndex": 0
        },
        "domainObject": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "driverObject": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "Default": {
          "edgeType": "iEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "driverObject": {
          "description": "The object which originates the drive-chain",
          "kind": "Point|Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "drivenObject": {
          "description": "The object being driven whose location use used in the constraint",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "domainObject": {
          "description": "The point pre-image",
          "kind": "",
          "genus": "Point",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "CustomTransformedPath": {
      "name": "CustomTransformedPath",
      "description": "A Geometric Locus of an object as a parent driver of the custom trasform moves along a path.",
      "inherits": "GeomLocus",
      "gspRef": "CustomTransformedPath_C",
      "abstract": false,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists if any samples exist",
      "bapEdges": {
        "drivenObject": {
          "edgeType": "iEdge",
          "sortIndex": 0
        },
        "domainObject": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "driverObject": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "Default": {
          "edgeType": "iEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "driverObject": {
          "description": "The object which originates the drive-chain",
          "kind": "Point|Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "drivenObject": {
          "description": "The object being driven whose location use used in the constraint",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "domainObject": {
          "description": "The drive path the driver travels along",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ParametricLocus": {
      "name": "ParametricLocus",
      "description": "A Parametric Locus of an object as a driver parameter moves through a range of values.",
      "inherits": "Locus",
      "gspRef": "ParametricLocus_C",
      "abstract": false,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists if any samples exist",
      "bapEdges": {
        "drivenObject": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "driverObject": {
          "edgeType": "iEdge",
          "sortIndex": 1
        },
        "Default": {
          "edgeType": "iEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "driverObject": {
          "description": "The point to drive along the path",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "drivenObject": {
          "description": "The object whose position changes as the driver moves along the path",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "IterateMap": {
      "name": "IterateMap",
      "description": "Iteration Map.",
      "inherits": "Free",
      "gspRef": "IterateMap_C",
      "abstract": false,
      "kinds": [
        "Map"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": {
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first object in the drive chain.  There may be many objects in the drivechain, numbered from 0 to N",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "preimage0": {
          "description": "The first preimage.  There can be an arbitrary number of preimages, with the form 'preimageX'",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "map0image0": {
          "description": "The first postimage.  There can be an arbitrary number of post-images, with the form 'mapXimageY",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "currentDepth": {
          "description": "The depth of the iteration",
          "type": "Number",
          "required": true,
          "suppressed": false
        }
      }
    },
    "IterateMapByParametricDepth": {
      "name": "IterateMapByParametricDepth",
      "description": "Itereation Map by parametric depth.",
      "inherits": "IterateMap",
      "gspRef": "IterateMapByParametricDepth_C",
      "abstract": false,
      "kinds": [
        "Map"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": {
        "parameter": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first object in the drive chain.  There may be many objects in the drivechain, numbered from 0 to N",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "preimage0": {
          "description": "The first preimage.  There can be an arbitrary number of preimages, with the form 'preimageX'",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "map0image0": {
          "description": "The first postimage.  There can be an arbitrary number of post-images, with the form 'mapXimageY",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "depth": {
          "description": "the depth to which the construction is iterated",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "currentDepth": {
          "description": "The depth of the iteration",
          "type": "Number",
          "required": true,
          "suppressed": true
        }
      }
    },
    "IterateImage": {
      "name": "IterateImage",
      "description": "",
      "inherits": "Constraint",
      "gspRef": "IterateImage_C",
      "abstract": false,
      "kinds": [
        "IterateImage"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": {
        "source": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "map": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The preimage that is to be iterated",
          "kind": "Point|Expression|Text|Arc|Circle|Picture|Polygon|Straight|ArcInterior|CircleInterior",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "map": {
          "description": "The iteration map defining the iteration",
          "kind": "Map",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PointTerminalIteration": {
      "name": "PointTerminalIteration",
      "description": "The terminal point of an iterated image of points",
      "inherits": "Constraint",
      "gspRef": "TerminalIterationPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists if the parental image exists.",
      "bapEdges": {
        "image": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "image": {
          "description": "",
          "kind": "IterateImage",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "CompositeText": {
      "name": "CompositeText",
      "description": "Defines a caption that has references to dynamically generated text from other objects.",
      "inherits": "Constraint",
      "gspRef": "CompositeText_C",
      "abstract": false,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist.",
      "bapEdges": {
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "Objects labeled \"0\", ..., \"n\"",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PictureAcrossThreePoints": {
      "name": "PictureAcrossThreePoints",
      "description": "Defines a picture with upper left defined by a <span class=\"kind\">Param</span>.",
      "inherits": "PictureNonFree",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point exists.",
      "bapEdges": {
        "p2": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The location of the original bottom left of the picture",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The location of the original bottom right of the picture",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "The location of the original top left of the picture",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PictureBetweenTwoPoints": {
      "name": "PictureBetweenTwoPoints",
      "description": "Defines a picture with upper left defined by a <span class=\"kind\">Param</span>.",
      "inherits": "PictureNonFree",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist, and their rounded-to-integer coordinates differ in both x and y values.",
      "bapEdges": {
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "One corner of the rectangle in which the picture is presented",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The other corner of the rectangle in which the picture is presented",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PictureCenteredOnOnePoint": {
      "name": "PictureCenteredOnOnePoint",
      "description": "Defines a picture centered on a <span class=\"kind\">Point</span>.",
      "inherits": "PictureNonFree",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point exists.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "scaleX": {
          "description": "Horizontal scaling factor about center.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "scaleY": {
          "description": "Vertical scaling factor about center.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "angle": {
          "description": "Angle of rotation about center.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PictureCroppedByInterior": {
      "name": "PictureCroppedByInterior",
      "description": "Defines a picture cropped by an <span class=\"genus\">Interior</span>.",
      "inherits": "PictureNonFree",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point exists.",
      "bapEdges": {
        "source": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "cropInterior": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "Picture to be cropped",
          "kind": "Picture",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "cropInterior": {
          "description": "Polygon to which picture will be cropped",
          "kind": "Polygon",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PictureHungOnOnePoint": {
      "name": "PictureHungOnOnePoint",
      "description": "Defines a picture with upper left at a <span class=\"kind\">Point</span>.",
      "inherits": "PictureNonFree",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Picture"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point exists.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PointOnPathBase": {
      "name": "PointOnPathBase",
      "description": "The parent class for all constraints.",
      "inherits": null,
      "gspRef": null,
      "abstract": true,
      "kinds": [],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "Straight": {
      "name": "Straight",
      "description": "The base class for all straight constraints.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "Transform": {
      "name": "Transform",
      "description": "The parent class for all transformations.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Ray": {
      "name": "Ray",
      "description": "Defines a ray from two points. The first point, p0, is the base of the ray.",
      "inherits": "Straight",
      "gspRef": "Ray_C",
      "abstract": false,
      "kinds": [
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist and are not coincident.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The foot of the ray.",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "A point on the ray not incident with the foot.",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "AngleBisector": {
      "name": "AngleBisector",
      "description": "Constrains a ray to bisect an angle. The ray's foot is the angle vertex.",
      "inherits": "Ray",
      "gspRef": "Bisector_C",
      "abstract": false,
      "kinds": [
        "Straight"
      ],
      "genus": [
        "Ray"
      ],
      "existenceRule": "Exists iff the parent points exist and are not coincident.",
      "bapEdges": {
        "A": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "B": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "C": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The foot of the ray.",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "p1": {
          "description": "A point on the ray not incident with the foot.",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "A": {
          "description": "A point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "B": {
          "description": "A point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "C": {
          "description": "A point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ArcAroundPoint": {
      "name": "ArcAroundPoint",
      "description": "Defines an arc centered about a point, counter-clockwise from the first selected bounding point to the second.",
      "inherits": "Constraint",
      "gspRef": "ArcAroundPoint_C",
      "abstract": false,
      "kinds": [
        "Arc"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist, and parental points are not coincident.",
      "bapEdges": {
        "center": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "center": {
          "description": "Center of circle on which the arc is situated",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "First bounding point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Second bounding point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Arc3Points": {
      "name": "Arc3Points",
      "description": "Defines an arc from three points.",
      "inherits": "Constraint",
      "gspRef": "Arc3Points_C",
      "abstract": false,
      "kinds": [
        "Arc"
      ],
      "genus": [],
      "existenceRule": "Exists iff parent points exist and are not pairwise coincident.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p2": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "Initial point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Middle point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "Final point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ArcInterior": {
      "name": "ArcInterior",
      "description": "Base class for arc interiors: ArcSegment, ArcSector.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "ArcInterior"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist.",
      "bapEdges": null,
      "parentsSpec": {
        "arc": {
          "description": "Defining arc",
          "kind": "Arc",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ArcOnCircle": {
      "name": "ArcOnCircle",
      "description": "Defines an arc on circle, counter-clockwise from the first selected bounding point to the second.",
      "inherits": "Constraint",
      "gspRef": "ArcOnCircle_C",
      "abstract": false,
      "kinds": [
        "Arc"
      ],
      "genus": [],
      "existenceRule": "Exists iff parent points exist and are not coincident.",
      "bapEdges": {
        "circle": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "circle": {
          "description": "Circle on which the arc is situated",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "First bounding point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Second bounding point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ActionButton": {
      "name": "ActionButton",
      "description": "The parent class of all action button constraints.",
      "inherits": "Free",
      "gspRef": "Free_C",
      "abstract": true,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        }
      }
    },
    "Calculation": {
      "name": "Calculation",
      "description": "A calculated expression",
      "inherits": "Constraint",
      "gspRef": "CalculationM_C",
      "abstract": false,
      "kinds": [
        "Expression"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist.",
      "bapEdges": {
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {}
    },
    "CircleByRadius": {
      "name": "CircleByRadius",
      "description": "Defines a circle from a center point and the length of a <span class=\"genus\">Path</span>.",
      "inherits": "Constraint",
      "gspRef": "CircleRadius_C",
      "abstract": false,
      "kinds": [
        "Circle"
      ],
      "genus": [],
      "existenceRule": "Exists iff parent center point and path or measure exist and the length or the value is finite and positive.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "radius": {
          "edgeType": "iEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The center point.",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "radius": {
          "description": "A parent whose length or value provides the radius.",
          "kind": "Measure",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "CircleFromTwoPoints": {
      "name": "CircleFromTwoPoints",
      "description": "Defines a circle from a center point and a point on the circumference.",
      "inherits": "Constraint",
      "gspRef": "Circle_C",
      "abstract": false,
      "kinds": [
        "Circle"
      ],
      "genus": [],
      "existenceRule": "Exists iff parent points exist and are not coincident.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The center of the circle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "A point on the circle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "CircleInterior": {
      "name": "CircleInterior",
      "description": "Defines a circle interior from a circle.",
      "inherits": "Constraint",
      "gspRef": "CircleInterior_C",
      "abstract": false,
      "kinds": [
        "CircleInterior"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist.",
      "bapEdges": {
        "circle": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "circle": {
          "description": "The defining circle",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Colorize": {
      "name": "Colorize",
      "description": "Defines a new GObject that is coincident to another GObject, but colored differently.",
      "inherits": "Transform",
      "gspRef": "Colorization_C",
      "abstract": true,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent measures exist and are finite.",
      "bapEdges": null,
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "colorRange": {
          "description": "Color Range: 'LimitToRange', 'WrapToRange', 'ReflectToRange'",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "colorModel": {
          "description": "Color model of parameters: 'UnivariateHue', 'UnivariateIntensity', 'TrivariateRGB', 'TrivariateHSV'",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "parameterDomainFrom": {
          "description": "Lower bound of parameter domain.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "parameterDomainTo": {
          "description": "Upper bound of parameter domain.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "style": {
          "description": "",
          "type": "Object",
          "required": false,
          "suppressed": false
        }
      }
    },
    "Function": {
      "name": "Function",
      "description": "A calculated expression",
      "inherits": "Constraint",
      "gspRef": "FunctionM_C",
      "abstract": false,
      "kinds": [
        "Expression"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent objects exist.",
      "bapEdges": {
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {}
    },
    "FunctionPlot": {
      "name": "FunctionPlot",
      "description": "A simple function plot",
      "inherits": "Constraint",
      "gspRef": "FunctionPlot_C",
      "abstract": false,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent function and coordinate system exist and at least one sample of the plot exists",
      "bapEdges": {
        "function": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "function": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordSys": {
          "description": "The coordinate system in which the function is evaluated.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ParametricCurvePlot": {
      "name": "ParametricCurvePlot",
      "description": "A parametric plot graphs two functions on a coordinate system. Each plotted point (x, y) or (r, theta) corresponds to a particular value of an independent variable. This independent variable is used to evaluate each of the two functions.",
      "inherits": "FunctionPlot",
      "gspRef": "FunctionPlot_C",
      "abstract": true,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists iff both parent functions and the coordinate system exist and at least one sample of the plot exists",
      "bapEdges": null,
      "parentsSpec": {
        "function": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordSys": {
          "description": "The coordinate system in which the function is evaluated.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "xFunction": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ParametricCartesianCurvePlot": {
      "name": "ParametricCartesianCurvePlot",
      "description": "A parametric curve plotted using Cartesian coordinates",
      "inherits": "ParametricCurvePlot",
      "gspRef": "ParametricCartesianCurvePlot_C",
      "abstract": false,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists iff both parent functions and the coordinate system exist and at least one sample of the plot exists",
      "bapEdges": {
        "xFunction": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "function": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "function": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordSys": {
          "description": "The coordinate system in which the function is evaluated.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "xFunction": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ParametricPolarCurvePlot": {
      "name": "ParametricPolarCurvePlot",
      "description": "A parametric curve plotted using Polar coordinates",
      "inherits": "ParametricCurvePlot",
      "gspRef": "ParametricCartesianCurvePlot_C",
      "abstract": false,
      "kinds": [
        "Sampler"
      ],
      "genus": [],
      "existenceRule": "Exists iff both parent functions and the coordinate system exist and at least one sample of the plot exists",
      "bapEdges": {
        "function": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "xFunction": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "function": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordSys": {
          "description": "The coordinate system in which the function is evaluated.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "xFunction": {
          "description": "The function evaluated for x",
          "kind": "Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Intersection": {
      "name": "Intersection",
      "description": "A point defined by the intersection of two <span class=\"kind\">Straight</span> objects.",
      "inherits": "Constraint",
      "gspRef": "InterLL_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist and are not parallel and the intersection point is within the extent of both parents. E.g., the lines containing two segments might intersect outside the extent of the segments. In this case the intersection point for the segments would not exist.",
      "bapEdges": {
        "line0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "line1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "line0": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "line1": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "style": {
          "description": "Appearance of GObject",
          "type": "",
          "required": false,
          "suppressed": false
        }
      }
    },
    "Line": {
      "name": "Line",
      "description": "A straight line that extends to infinity.",
      "inherits": "Straight",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist and are not coincident.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "First reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementAngle": {
      "name": "MeasurementAngle",
      "description": "The measurement of an angle defined by three points.",
      "inherits": "Constraint",
      "gspRef": "Angle3PointsMeasure_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "zEdge",
          "sortIndex": 1
        },
        "p2": {
          "edgeType": "zEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementAngleMarker": {
      "name": "MeasurementAngleMarker",
      "description": "The value of an angle marker",
      "inherits": "Constraint",
      "gspRef": "AngleMarkerMeasure_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [
        "AngleMeasure"
      ],
      "existenceRule": "Exists iff the parent marker exists.",
      "bapEdges": {
        "marker": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "marker": {
          "description": "The AngleMarker to be measured",
          "kind": "AngleMarker",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementArea": {
      "name": "MeasurementArea",
      "description": "The measurement of the area of a <span class=\"kind\">Polygon</span>, <span class=\"kind\">Circle</span>, or <span class=\"kind\">CircleInterior</span>.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist and are not all coincident.",
      "bapEdges": {
        "shape": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "shape": {
          "description": "",
          "kind": "Arc|Circle|Polygon",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementCircumference": {
      "name": "MeasurementCircumference",
      "description": "The measurement of the circumference of a <span class=\"kind\">Circle</span>.",
      "inherits": "Constraint",
      "gspRef": "CircumferenceM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent circle exists.",
      "bapEdges": {
        "shape": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "shape": {
          "description": "The circle whose circumference is to be measured",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementCoordinateBased": {
      "name": "MeasurementCoordinateBased",
      "description": "The parent class for all coordinate-system based constraints.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system used for the measurements",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementDistance": {
      "name": "MeasurementDistance",
      "description": "The measurement of the distance between two <span class=\"kind\">Point</span>s.",
      "inherits": "Constraint",
      "gspRef": "DistanceM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "obj0": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The point from which distance is to be measured",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "obj0": {
          "description": "The point or line to which distance is to be measured",
          "kind": "Point|Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementLength": {
      "name": "MeasurementLength",
      "description": "The measurement of the length of a <span class=\"constraint\">Segment</span>s.",
      "inherits": "Constraint",
      "gspRef": "LengthM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists if the parent segment exists. Also exists if the parent segment is an original segment and end-points are coincident. Then, the length is zero.",
      "bapEdges": {
        "path": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "path": {
          "description": "",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementPerimeter": {
      "name": "MeasurementPerimeter",
      "description": "The measurement of the perimeter of a <span class=\"kind\">Polygon</span>s.",
      "inherits": "Constraint",
      "gspRef": "PerimeterM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points all exist and are not coincident.",
      "bapEdges": {
        "shape": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "shape": {
          "description": "",
          "kind": "Arc|Polygon",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementRadius": {
      "name": "MeasurementRadius",
      "description": "The measurement of the radius of a <span class=\"kind\">Circle</span>.",
      "inherits": "Constraint",
      "gspRef": "RadiusM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent circle exist.",
      "bapEdges": {
        "shape": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "shape": {
          "description": "",
          "kind": "Arc|Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementRatio": {
      "name": "MeasurementRatio",
      "description": "The measurement of the ratio of two segments or three points.",
      "inherits": "Constraint",
      "gspRef": "RatioM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points all exist and are not coincident.",
      "bapEdges": {
        "obj0": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "obj1": {
          "edgeType": "zEdge",
          "sortIndex": 1
        },
        "obj2": {
          "edgeType": "zEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "obj0": {
          "description": "First segment or point",
          "kind": "Straight|Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "obj1": {
          "description": "Second segment or point",
          "kind": "Straight|Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "obj2": {
          "description": "Third point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": false
        }
      },
      "otherProps": {}
    },
    "MeasurementValueOfPointOnPath": {
      "name": "MeasurementValueOfPointOnPath",
      "description": "The measurement of the value of a point on path",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist and are not all coincident.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "path": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "point": {
          "description": "The point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "path": {
          "description": "The path that the point lives on.",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MultimeasureBase": {
      "name": "MultimeasureBase",
      "description": "Abstract class for multimeasure constraints .",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "MeasurementRectCoordinates": {
      "name": "MeasurementRectCoordinates",
      "description": "The (x, y) coordinates of a point relative to a coordinate system.",
      "inherits": "MultiMeasureBase",
      "gspRef": "RectCoordinateM_C",
      "abstract": false,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "point": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementPolarCoordinates": {
      "name": "MeasurementPolarCoordinates",
      "description": "The (r, theta) coordinates of a point relative to a coordinate system.",
      "inherits": "MultiMeasureBase",
      "gspRef": "PolarCoordinateM_C",
      "abstract": false,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "point": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "LinearEquation": {
      "name": "LinearEquation",
      "description": "Constraint for linear equation measurements",
      "inherits": "MultimeasureBase",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "straight": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system used for the measurements",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "straight": {
          "description": "The straight we are measuring.",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "QuadraticEquation": {
      "name": "QuadraticEquation",
      "description": "Constraint for quadratic equation multimeasures.",
      "inherits": "MultimeasureBase",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "circle": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system used for the measurements",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "circle": {
          "description": "The circle we are measuring",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Midpoint": {
      "name": "Midpoint",
      "description": "The midpoint of a <span class=\"constraint\">Segment</span>.",
      "inherits": "Constraint",
      "gspRef": "Midpoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent segment exists.",
      "bapEdges": {
        "path": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "path": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Pegged": {
      "name": "Pegged",
      "description": "A translation of a <span class=\"kind\">Text</span> message to a <span class=\"kind\">Point</span>.",
      "inherits": "Constraint",
      "gspRef": "PeggedText_C",
      "abstract": false,
      "kinds": [
        "Text"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent text and point exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "text": {
          "edgeType": "iEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "The point to which the pegged text is bound.",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "text": {
          "description": "The original text replicated by this object.",
          "kind": "Text",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "",
          "type": "",
          "required": false,
          "suppressed": true
        }
      }
    },
    "PointOnPath": {
      "name": "PointOnPath",
      "description": "A point on a <span class=\"genus\">Path</span>.",
      "inherits": "Constraint",
      "gspRef": "OnPath_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent path exists.",
      "bapEdges": {
        "path": {
          "edgeType": "iEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "path": {
          "description": "",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "value": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotFixedValueOnPath": {
      "name": "PlotFixedValueOnPath",
      "description": "Defines a point on a <span class=\"genus\">Path</span> that has a fixed value.",
      "inherits": "Constraint",
      "gspRef": "PlotFixedValueOnPath_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent path exists.",
      "bapEdges": {
        "path": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "path": {
          "description": "Identifies the path on which the point is plotted",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "value": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotValueOnPath": {
      "name": "PlotValueOnPath",
      "description": "Defines a point on a <span class=\"genus\">Path</span> that has a value defined by a <span class=\"kind\">Param</span>.",
      "inherits": "Constraint",
      "gspRef": "PlotMarkedValueOnPath_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent param and path exist.",
      "bapEdges": {
        "param": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "path": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "param": {
          "description": "Identifies a measure whose value determines the position on the path as a normalized path coordinate",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "path": {
          "description": "Identifies the path on which the point is plotted",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Reflect": {
      "name": "Reflect",
      "description": "Defines a <span class=\"kind\">GObject</span> that is the reflection of another GObject with respect to a <span class=\"kind\">Straight</span> object.",
      "inherits": "Transform",
      "gspRef": "Reflect_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object and mirror exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "mirror": {
          "edgeType": "tEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "mirror": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "GlideReflect": {
      "name": "GlideReflect",
      "description": "Defines a <span class=\"kind\">GObject</span> that is the glide reflection of another GObject with respect to a <span class=\"kind\">Straight</span> object that defines the vector/mirror.",
      "inherits": "Transform",
      "gspRef": "GlideReflect_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the preimage and segment (vector/mirror) exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "vector": {
          "edgeType": "tEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "vector": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Rotate": {
      "name": "Rotate",
      "description": "Defines a new GObject as a rotation of a GObject by a fixed angle about a pivot point p0.",
      "inherits": "Transform",
      "gspRef": "RotatefA_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object exists.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the rotation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "angle": {
          "description": "",
          "type": "Number",
          "required": true,
          "suppressed": false
        }
      }
    },
    "Segment": {
      "name": "Segment",
      "description": "Defines a line segment from two points.",
      "inherits": "Straight",
      "gspRef": "Segment_C",
      "abstract": false,
      "kinds": [
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "First reference point defining the segment",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the segment",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ColorizeTrivariate": {
      "name": "ColorizeTrivariate",
      "description": "Defines a new GObject that is coincident to another GObject, but colored differently.",
      "inherits": "Colorize",
      "gspRef": "Colorization_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent measures exist and are finite.",
      "bapEdges": {
        "source": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "blue": {
          "edgeType": "oEdge",
          "sortIndex": 1
        },
        "green": {
          "edgeType": "oEdge",
          "sortIndex": 2
        },
        "red": {
          "edgeType": "oEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "red": {
          "description": "For a trivariate parameterization, the red value.",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "green": {
          "description": "For a trivariate parameterization, the green value.",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "blue": {
          "description": "For a trivariate parameterization, the blue value.",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "colorRange": {
          "description": "Color Range: 'LimitToRange', 'WrapToRange', 'ReflectToRange'",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "colorModel": {
          "description": "Color model of parameters: 'UnivariateHue', 'UnivariateIntensity', 'TrivariateRGB', 'TrivariateHSV'",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "parameterDomainFrom": {
          "description": "Lower bound of parameter domain.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "parameterDomainTo": {
          "description": "Upper bound of parameter domain.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "style": {
          "description": "",
          "type": "Object",
          "required": false,
          "suppressed": false
        }
      }
    },
    "UnitPoint": {
      "name": "UnitPoint",
      "description": "Base class for all unit point constraints",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "ColorizeUnivariate": {
      "name": "ColorizeUnivariate",
      "description": "Defines a new GObject that is coincident to another GObject, but colored differently.",
      "inherits": "Colorize",
      "gspRef": "Colorization_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent measures exist and are finite.",
      "bapEdges": {
        "source": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "color": {
          "edgeType": "oEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "color": {
          "description": "For a univariate parameterization, the color value.",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "colorRange": {
          "description": "Color Range: 'LimitToRange', 'WrapToRange', 'ReflectToRange'",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "colorModel": {
          "description": "Color model of parameters: 'UnivariateHue', 'UnivariateIntensity', 'TrivariateRGB', 'TrivariateHSV'",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "parameterDomainFrom": {
          "description": "Lower bound of parameter domain.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "parameterDomainTo": {
          "description": "Upper bound of parameter domain.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "style": {
          "description": "",
          "type": "Object",
          "required": false,
          "suppressed": false
        }
      }
    },
    "AxisDist": {
      "name": "AxisDist",
      "description": "An axis determined by origin and unitPoint.",
      "inherits": "Line",
      "gspRef": "DistAxis_C",
      "abstract": true,
      "kinds": [
        "Axis"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent origin point and unitPoint exists.",
      "bapEdges": null,
      "parentsSpec": {
        "p0": {
          "description": "First reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "origin": {
          "description": "The origin of the axis",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "unitPoint": {
          "description": "The unit point defines one unit along the axis",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ArcSector": {
      "name": "ArcSector",
      "description": "Defines an arc sector, bounded by the arc and by the radii to the two endpoints of the arc",
      "inherits": "ArcInterior",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "ArcInterior"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist.",
      "bapEdges": {
        "arc": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "arc": {
          "description": "Defining arc",
          "kind": "Arc",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ArcSegment": {
      "name": "ArcSegment",
      "description": "Defines a arc segment, bounded by the arc and by the chord connecting the two endpoints of the arc.",
      "inherits": "ArcInterior",
      "gspRef": null,
      "abstract": false,
      "kinds": [
        "ArcInterior"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist.",
      "bapEdges": {
        "arc": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "arc": {
          "description": "Defining arc",
          "kind": "Arc",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "DilateFixFactor": {
      "name": "DilateFixFactor",
      "description": "Defines a new GObject as a dilation about a point of a GObject by a fixed factor.",
      "inherits": "Transform",
      "gspRef": "DilatefR_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the center point exists. For dilations of non-points, existence also requires that the dilation factor be non-zero.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the dilation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "scaleFactor": {
          "description": "A scale factor.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "AxisExternalDist": {
      "name": "AxisExternalDist",
      "description": "An axis determined by origin and parental unit distance.",
      "inherits": "AxisDist",
      "gspRef": "ExternalDistAxis_C",
      "abstract": false,
      "kinds": [
        "Axis"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent origin point exists and distance parent exists and is positive.",
      "bapEdges": {
        "origin": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "unitDistance": {
          "edgeType": "mEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "First reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "origin": {
          "description": "The origin of the axis",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "unitPoint": {
          "description": "The unit point defines one unit along the axis",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "unitDistance": {
          "description": "A measure or segment",
          "kind": "Measure|Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "UnitPointExternalRectangle": {
      "name": "UnitPointExternalRectangle",
      "description": "A unit point displaced perpendicularly from the origin of an axis by a given distance.",
      "inherits": "UnitPoint",
      "gspRef": "ExternalRectangleUnitPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent axis exists.",
      "bapEdges": {
        "axis": {
          "edgeType": "iEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "axis": {
          "description": "The Axis for which this point is the unit point",
          "kind": "Axis",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "unitDistance": {
          "description": "unit distance from grand-parental origin in pixels",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "UnitPointExternalSquare": {
      "name": "UnitPointExternalSquare",
      "description": "A unit point displaced perpendicularly from the origin of an axis by the unit distance of that axis.",
      "inherits": "UnitPoint",
      "gspRef": "ExternalSquareUnitPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent origin point exists and distance parent exists and is positive.",
      "bapEdges": {
        "axis": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "axis": {
          "description": "The Axis for which this point is the unit point",
          "kind": "Axis",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "HorizontalUnitPoint": {
      "name": "HorizontalUnitPoint",
      "description": "A unit point of a horizontal <span class=\"kind\">Axis</span>.",
      "inherits": "UnitPoint",
      "gspRef": "HorizontalUnitPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent origin point exists.",
      "bapEdges": {
        "origin": {
          "edgeType": "iEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "origin": {
          "description": "origin point of related axis.",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "value": {
          "description": "horizontal displacement from parental origin in pixels.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "AxisInternalDist": {
      "name": "AxisInternalDist",
      "description": "An axis determined by origin and unitPoint.",
      "inherits": "AxisDist",
      "gspRef": "InternalDistAxis_C",
      "abstract": false,
      "kinds": [
        "Axis"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent origin point and unitPoint exists.",
      "bapEdges": {
        "origin": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "unitPoint": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "First reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "origin": {
          "description": "",
          "kind": "Point",
          "genus": "Point",
          "suppressed": false,
          "required": true
        },
        "unitPoint": {
          "description": "",
          "kind": "Point",
          "genus": "Point",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "UnitPointInternalRectangle": {
      "name": "UnitPointInternalRectangle",
      "description": "A unit point displaced perpendicularly from the origin of a parental axis of a unit point by a given distance.",
      "inherits": "UnitPoint",
      "gspRef": "InternalRectangleUnitPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent unitPoint exists.",
      "bapEdges": {
        "unitPoint": {
          "edgeType": "iEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "unitPoint": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "unitDistance": {
          "description": "unit distance from grand-parental origin in pixels",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "UnitPointInternalSquare": {
      "name": "UnitPointInternalSquare",
      "description": "A unit point displaced perpendicularly from the origin of a parental axis of a unit point by the unit distance of that axis.",
      "inherits": "UnitPoint",
      "gspRef": "InternalSquareUnitPoint_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent unitPoint exists.",
      "bapEdges": {
        "unitPoint": {
          "edgeType": "rEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "unitPoint": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementAbscissa": {
      "name": "MeasurementAbscissa",
      "description": "The abscissa (x coordinate) of a point relative to a coordinate system.",
      "inherits": "MeasurementCoordinateBased",
      "gspRef": "AbscissaM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "point": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementAnalyticSlope": {
      "name": "MeasurementAnalyticSlope",
      "description": "The slope of a straight relative to a coordinate system.",
      "inherits": "MeasurementCoordinateBased",
      "gspRef": "AnalyticSlopeM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "seg": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "seg": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "GeometricSlope": {
      "name": "GeometricSlope",
      "description": "The slope of a straight.",
      "inherits": "Constraint",
      "gspRef": "GeometricSlopeM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "straight": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "straight": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementArcBase": {
      "name": "MeasurementArcBase",
      "description": "The measurement of the angle of an arc. The arc is either an arc object, or a circle and points on the circle which define an arc.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": null,
      "parentsSpec": {},
      "otherProps": {}
    },
    "MeasurementArc": {
      "name": "MeasurementArc",
      "description": "The measurement of the angle of an arc.",
      "inherits": "MeasurementArcBase",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": null,
      "parentsSpec": {
        "arc": {
          "description": "The arc to be measured",
          "kind": "Arc",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementArcAngle": {
      "name": "MeasurementArcAngle",
      "description": "The measurement of an angle defined by three points.",
      "inherits": "MeasurementArc",
      "gspRef": "ArcAngle3PointsMeasure_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": {
        "arc": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "arc": {
          "description": "The arc to be measured",
          "kind": "Arc",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementArcLength": {
      "name": "MeasurementArcLength",
      "description": "The measurement of the length of a <span class=\"kind\">Arc</span>s.",
      "inherits": "MeasurementArc",
      "gspRef": "ArcLengthM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": {
        "arc": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "arc": {
          "description": "The arc to be measured",
          "kind": "Arc",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementArcOnCircle": {
      "name": "MeasurementArcOnCircle",
      "description": "The measurement of the angle of an arc. The arc is defined by a circle and points on the circle which define an arc.",
      "inherits": "MeasurementArcBase",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": null,
      "parentsSpec": {
        "circle": {
          "description": "Circle containing arc",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "Initial point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Final point (or if p2 is set, middle point)",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "Final point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": false
        }
      },
      "otherProps": {}
    },
    "MeasurementArcOnCircleAngle": {
      "name": "MeasurementArcOnCircleAngle",
      "description": "The measurement of the length of a <span class=\"kind\">Arc</span>s.",
      "inherits": "MeasurementArcOnCircle",
      "gspRef": "ArcAngle3PointsMeasure_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": {
        "circle": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "p0": {
          "edgeType": "zEdge",
          "sortIndex": 1
        },
        "p1": {
          "edgeType": "zEdge",
          "sortIndex": 2
        },
        "p2": {
          "edgeType": "zEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "circle": {
          "description": "Circle containing arc",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "Initial point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Final point (or if p2 is set, middle point)",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "Final point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": false
        }
      },
      "otherProps": {}
    },
    "MeasurementArcOnCircleLength": {
      "name": "MeasurementArcOnCircleLength",
      "description": "The measurement of the length of a <span class=\"kind\">Arc</span>s.",
      "inherits": "MeasurementArcOnCircle",
      "gspRef": "ArcLengthM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents and are non-coincident exist.",
      "bapEdges": {
        "circle": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "p0": {
          "edgeType": "zEdge",
          "sortIndex": 1
        },
        "p1": {
          "edgeType": "zEdge",
          "sortIndex": 2
        },
        "p2": {
          "edgeType": "zEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "circle": {
          "description": "Circle containing arc",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "Initial point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Final point (or if p2 is set, middle point)",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "Final point",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": false
        }
      },
      "otherProps": {}
    },
    "MeasurementCoordinateDistance": {
      "name": "MeasurementCoordinateDistance",
      "description": "The distance between two points relative to a coordinate system.",
      "inherits": "MeasurementCoordinateBased",
      "gspRef": "CoordinateDistanceM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "zEdge",
          "sortIndex": 1
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system used for the measurements",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "The point from which distance is to be measured",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The point to which distance is to be measured",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementOrdinate": {
      "name": "MeasurementOrdinate",
      "description": "The ordinate (y coordinate) of a point relative to a coordinate system.",
      "inherits": "MeasurementCoordinateBased",
      "gspRef": "OrdinateM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "point": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementPolarDirection": {
      "name": "MeasurementPolarDirection",
      "description": "The angle (theta-value of the polar coordinates) of a point relative to the x-axis of a coordinate system.",
      "inherits": "MeasurementCoordinateBased",
      "gspRef": "PolarDirectionM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "point": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "MeasurementPolarDistance": {
      "name": "MeasurementPolarDistance",
      "description": "The distance from the origin (r-value of the polar coordinates) of a point relative to a coordinate system.",
      "inherits": "MeasurementCoordinateBased",
      "gspRef": "PolarDistanceM_C",
      "abstract": false,
      "kinds": [
        "Measure"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parents exist.",
      "bapEdges": {
        "point": {
          "edgeType": "zEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "zEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "point": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PointOnPolygonEdge": {
      "name": "PointOnPolygonEdge",
      "description": "A point on a <span class=\"kind\">Polygon</span>.",
      "inherits": "Constraint",
      "gspRef": "OnPath_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent param and path exist.",
      "bapEdges": {
        "path": {
          "edgeType": "iEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "path": {
          "description": "",
          "kind": "Polygon",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "baseVertex": {
          "description": "index of initial vertex of edge containing point",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "baseValue": {
          "description": "parameterized location on edge starting at baseVertex",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "RotateAngleMarker": {
      "name": "RotateAngleMarker",
      "description": "Defines a new GObject as a rotation of a GObject by the measure of a marked angle about a pivot point.",
      "inherits": "Rotate",
      "gspRef": "RotateByMarkedAngleMarker_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object and the three angle points exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        },
        "angle": {
          "edgeType": "tEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the rotation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "angle": {
          "description": "",
          "kind": "AngleMarker",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "angle": {
          "description": "",
          "type": "Number",
          "required": true,
          "suppressed": true
        }
      }
    },
    "RotateMeasureAngle": {
      "name": "RotateMeasureAngle",
      "description": "Defines a new GObject as a rotation of a GObject by a measure about a pivot point, p0.",
      "inherits": "Rotate",
      "gspRef": "RotateByMarkedAngleMeasure_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object and the three angle points exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        },
        "angle": {
          "edgeType": "mEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the rotation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "angle": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "angle": {
          "description": "",
          "type": "Number",
          "required": true,
          "suppressed": true
        }
      }
    },
    "Rotate3": {
      "name": "Rotate3",
      "description": "Defines a new GObject as a rotation of a GObject about a pivot point, p0, by an angle from three points.",
      "inherits": "Rotate",
      "gspRef": "Rotate3A_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object and the three angle points exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        },
        "A": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "B": {
          "edgeType": "iEdge",
          "sortIndex": 3
        },
        "C": {
          "edgeType": "iEdge",
          "sortIndex": 4
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the rotation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "A": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "B": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "C": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "angle": {
          "description": "",
          "type": "Number",
          "required": true,
          "suppressed": true
        }
      }
    },
    "AxisUnitCircle": {
      "name": "AxisUnitCircle",
      "description": "An axis determined a unit circle.",
      "inherits": "AxisDist",
      "gspRef": "UnitCircleAxis_C",
      "abstract": false,
      "kinds": [
        "Axis"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent circle exists and has positive radius.",
      "bapEdges": {
        "circle": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "First reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "origin": {
          "description": "The origin of the axis",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "unitPoint": {
          "description": "The unit point defines one unit along the axis",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "circle": {
          "description": "",
          "kind": "Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "AngleMarker": {
      "name": "AngleMarker",
      "description": "Marks the angle between two lines.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "AngleMarker"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist, and define a non-zero angle.",
      "bapEdges": null,
      "parentsSpec": {
        "p0": {
          "description": "A point on an angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The focal point of an angle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "A point on the other angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ActionButtonAnimate": {
      "name": "ActionButtonAnimate",
      "description": "A button that moves a point on a path.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "animationStates": {
          "description": "Array of objects containing state information (rate, repeat, motionType, discrete etc.) for each animation controlled by this button.  State information depends on the kind of animation. motionType can be forward, backward, both, or random. repeat is boolean (false means once-only). discrete applies to parameters (true means step by step).",
          "type": "Array",
          "required": false,
          "suppressed": false
        }
      }
    },
    "CoordSys": {
      "name": "CoordSys",
      "description": "An coordinate system determined by two axes.",
      "inherits": "Constraint",
      "gspRef": "CoordSys_C",
      "abstract": false,
      "kinds": [
        "CoordSys"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent axes exists.",
      "bapEdges": {
        "axisX": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "axisY": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "axisX": {
          "description": "The horizontal axis",
          "kind": "Axis",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "axisY": {
          "description": "The vertical axis",
          "kind": "Axis",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Dilate2SegRatio": {
      "name": "Dilate2SegRatio",
      "description": "Defines a new GObject as a dilation about a point of a GObject by the ratio of the lengths of two segments.",
      "inherits": "DilateFixFactor",
      "gspRef": "Dilate2R_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object, the center, and the two segments all exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        },
        "seg0": {
          "edgeType": "mEdge",
          "sortIndex": 2
        },
        "seg1": {
          "edgeType": "mEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the dilation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "seg0": {
          "description": "Segment defining the numerator of the scale ratio",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "seg1": {
          "description": "Segment defining the denominator of the scale ratio",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "scaleFactor": {
          "description": "A scale factor.",
          "type": "Number",
          "required": false,
          "suppressed": true
        }
      }
    },
    "Dilate3PtRatio": {
      "name": "Dilate3PtRatio",
      "description": "Defines a new GObject as a dilation about a point of a GObject by a ratio of three points, A, B, C. The ratio is |AB|/|AC|.",
      "inherits": "DilateFixFactor",
      "gspRef": "Dilate3R_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object, the three angle points exist and the |AB| evaluates to a non-zero length.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        },
        "A": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "B": {
          "edgeType": "iEdge",
          "sortIndex": 3
        },
        "C": {
          "edgeType": "iEdge",
          "sortIndex": 4
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the dilation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "A": {
          "description": "First control point of the line",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "B": {
          "description": "Second control point of the line",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "C": {
          "description": "The point that is mapped to the line",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "scaleFactor": {
          "description": "A scale factor.",
          "type": "Number",
          "required": false,
          "suppressed": true
        }
      }
    },
    "DilateMeasureFactor": {
      "name": "DilateMeasureFactor",
      "description": "Defines a new GObject as a dilation about a point of a GObject by a measurement.",
      "inherits": "DilateFixFactor",
      "gspRef": "DilatemR_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object, the center point and the measurement exist and the measurement evaluates to a finite, non-zero number.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "center": {
          "edgeType": "tEdge",
          "sortIndex": 1
        },
        "measure": {
          "edgeType": "mEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "center": {
          "description": "The center of the dilation",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "measure": {
          "description": "A measurement or calculation",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "scaleFactor": {
          "description": "A scale factor.",
          "type": "Number",
          "required": false,
          "suppressed": true
        }
      }
    },
    "Intersection1": {
      "name": "Intersection1",
      "description": "One of two points of intersection of an <span class=\"kind\">Arc</span> or <span class=\"kind\">Circle</span> with another Arc, Circle, or <span class=\"kind\">Straight</span> object.",
      "inherits": "Intersection",
      "gspRef": "InterLCA",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent objects exist and have at least one point of intersection.",
      "bapEdges": {
        "obj": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "circle": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "line0": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "line1": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "circle": {
          "description": "The first of two GObjects for which intersection(s) are to be determined",
          "kind": "Arc|Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "obj": {
          "description": "The second of two GObjects for which intersection(s) are to be determined",
          "kind": "Arc|Circle|Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "style": {
          "description": "Appearance of GObject",
          "type": "",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonMove": {
      "name": "ActionButtonMove",
      "description": "A button that moves a set of points towards other points.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "Point|Expression",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "rate": {
          "description": "For point animation, the number of pixels to advance per frame cycle.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "towardInitialDestination": {
          "description": "Rather than follow a moving destination, move to the position the destination was when the movement started ",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        }
      }
    },
    "UserTabulation": {
      "name": "UserTabulation",
      "description": "",
      "inherits": "Constraint",
      "gspRef": "UserTabulation_C",
      "abstract": false,
      "kinds": [
        "Table"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": {
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {}
    },
    "IteratedValuesTable": {
      "name": "IteratedValuesTable",
      "description": "",
      "inherits": "Constraint",
      "gspRef": "IteratedValuesTable_C",
      "abstract": false,
      "kinds": [
        "Table"
      ],
      "genus": [],
      "existenceRule": "",
      "bapEdges": {
        "Default": {
          "edgeType": "zEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {}
    },
    "ActionButtonScroll": {
      "name": "ActionButtonScroll",
      "description": "A button that scrolls the sketch to the position of a point.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "scrollDest": {
          "description": "scrolls the page so that the parental point is at specified destination of the window (possible values: center | topLeft).",
          "type": "String",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonLinkPage": {
      "name": "ActionButtonLinkPage",
      "description": "A button that switches to another page in the sketch.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "pageId": {
          "description": "Id of the page being linked to.",
          "type": "String",
          "required": false,
          "suppressed": false
        },
        "buttonId": {
          "description": "(Optional) Id of button to activate on the on the linked page.",
          "type": "String",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonLinkURL": {
      "name": "ActionButtonLinkURL",
      "description": "A button that opens a url.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {},
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "url": {
          "description": "Url to link to.",
          "type": "String",
          "required": false,
          "suppressed": false
        }
      }
    },
    "Parallel": {
      "name": "Parallel",
      "description": "Defines a line through a <span class=\"kind\">Point</span> parallel with another <span class=\"kind\">Straight</span>.",
      "inherits": "Line",
      "gspRef": "Parallel_C",
      "abstract": false,
      "kinds": [
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point and line exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "line": {
          "edgeType": "iEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "line": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "Perpendicular": {
      "name": "Perpendicular",
      "description": "Defines a line through a <span class=\"kind\">Point</span> perpendicular with another <span class=\"kind\">Straight</span>.",
      "inherits": "Line",
      "gspRef": "Perpend_C",
      "abstract": false,
      "kinds": [
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point and line exist.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "line": {
          "edgeType": "iEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "Second reference point defining the line",
          "kind": "Point",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "line": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PolygonFromPoints": {
      "name": "PolygonFromPoints",
      "description": "Defines a polygon from a sequence of <span class=\"kind\">Point</span>s.",
      "inherits": "Free",
      "gspRef": "Polygon_C",
      "abstract": false,
      "kinds": [
        "Polygon"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent points exist and are not all coincident.",
      "bapEdges": {
        "Default": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "Vertices labeled \"0\", ..., \"n\"",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ActionButtonPresent": {
      "name": "ActionButtonPresent",
      "description": "Defines an action that executes a set of actions.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": true,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": null,
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "Button",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "stopAnyMotions": {
          "description": "Stop any previously started animations before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "eraseAnyTraces": {
          "description": "Erase any previously displayed traces before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonPresentSequentially": {
      "name": "ActionButtonPresentSequentially",
      "description": "Defines an action from an ordered sequence of action buttons.",
      "inherits": "ActionButtonPresent",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "Button",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "stopAnyMotions": {
          "description": "Stop any previously started animations before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "eraseAnyTraces": {
          "description": "Erase any previously displayed traces before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "waitTime": {
          "description": "Pause between sequential actions in seconds.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonPresentSimultaneously": {
      "name": "ActionButtonPresentSimultaneously",
      "description": "Defines an action that executes a collection of actions simultaneously.",
      "inherits": "ActionButtonPresent",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "Button",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "stopAnyMotions": {
          "description": "Stop any previously started animations before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "eraseAnyTraces": {
          "description": "Erase any previously displayed traces before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "stopAfter": {
          "description": "Stop the presentation after the last action stops, first action stops, or an elapsed number of seconds",
          "type": "StopCondition",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonPresentCase": {
      "name": "ActionButtonPresentCase",
      "description": "Defines an action to run one button from an ordered list of action buttons. Operates similarly to a Sequence button, but activates only one of its parents.",
      "inherits": "ActionButtonPresent",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "Button",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "First message is default button label",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "stopAnyMotions": {
          "description": "Stop any previously started animations before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "eraseAnyTraces": {
          "description": "Erase any previously displayed traces before commencing the presentation.",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        },
        "target": {
          "description": "The parent button designated by the index (the value of parentsList[0]).",
          "type": "gObject",
          "required": false,
          "suppressed": false
        },
        "activeParent": {
          "description": "The currently-activated parent button (may not be the target if the index has changed).",
          "type": "gObject",
          "required": false,
          "suppressed": false
        }
      }
    },
    "ActionButtonToggleHideShow": {
      "name": "ActionButtonToggleHideShow",
      "description": "Defines a button that hides visible objects or shows hidden objects, depending on their state.",
      "inherits": "ActionButton",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "Hide message, Show message",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "fade": {
          "description": "when true, the objects fade in or out",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateBase": {
      "name": "TranslateBase",
      "description": "Abstract class that defines a new GObject that is identical to another GObject, but translated by some amount.",
      "inherits": "Transform",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point exists.",
      "bapEdges": null,
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "TranslateFixXFixY": {
      "name": "TranslateFixXFixY",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed x,y coordinate.",
      "inherits": "TranslateBase",
      "gspRef": "TranslatefXfY_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent point exists.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "offset": {
          "description": "Offset in pixel coordinates from the source object",
          "type": "GeometricPoint",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateFixDist3PtAngle": {
      "name": "TranslateFixDist3PtAngle",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed distance in the direction of an angle delineated by three points.",
      "inherits": "Translate",
      "gspRef": "TranslatefD3A_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the three points exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "A": {
          "edgeType": "iEdge",
          "sortIndex": 1
        },
        "B": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "C": {
          "edgeType": "iEdge",
          "sortIndex": 3
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "A": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "B": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "C": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "distance": {
          "description": "A distance in pixels.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateFixDistAngleMarker": {
      "name": "TranslateFixDistAngleMarker",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed distance in the direction specified by an angle marker.",
      "inherits": "Translate",
      "gspRef": "TranslateFixedDataMarkedAngleMarker_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the angle marker exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "marker": {
          "edgeType": "mEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "marker": {
          "description": "",
          "kind": "AngleMarker",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "distance": {
          "description": "A distance.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateFixDistFixAngle": {
      "name": "TranslateFixDistFixAngle",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed distance in the direction of a fixed angle.",
      "inherits": "Translate",
      "gspRef": "TranslatefDfA_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object exists.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "distance": {
          "description": "A distance.",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "angle": {
          "description": "An angle, in radians.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateFixDistMeasureAngle": {
      "name": "TranslateFixDistMeasureAngle",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed distance in the direction defined by an angle measurement.",
      "inherits": "Translate",
      "gspRef": "TranslateFixedDistanceMarkedAngleMeasure_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent object exists.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "measure": {
          "edgeType": "mEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "measure": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "distance": {
          "description": "A distance in pixels.",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateFixXMeasureY": {
      "name": "TranslateFixXMeasureY",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed x coordinate and a y coordinate defined by a measure.",
      "inherits": "Translate",
      "gspRef": "TranslatefXmY_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the measurement exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "measure": {
          "edgeType": "mEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "measure": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "offsetX": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateMeasureDist3PtAngle": {
      "name": "TranslateMeasureDist3PtAngle",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a distance from a measurement and an angle from three points.",
      "inherits": "Translate",
      "gspRef": "TranslatemD3A_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object, the measurement and the three points all exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "A": {
          "edgeType": "iEdge",
          "sortIndex": 1
        },
        "B": {
          "edgeType": "iEdge",
          "sortIndex": 2
        },
        "C": {
          "edgeType": "iEdge",
          "sortIndex": 3
        },
        "distance": {
          "edgeType": "mEdge",
          "sortIndex": 4
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "distance": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "A": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "B": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "C": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "TranslateMeasureDistAngleMarker": {
      "name": "TranslateMeasureDistAngleMarker",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a distance measurement in the direction defined by a specified angle marker.",
      "inherits": "Translate",
      "gspRef": "TranslateMarkedDistanceMarkedAngleMarker_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object, distance measure, and angle marker exists.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "marker": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "distance": {
          "edgeType": "mEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "distance": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "marker": {
          "description": "",
          "kind": "AngleMarker",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "TranslateMeasureDistFixAngle": {
      "name": "TranslateMeasureDistFixAngle",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a distance derived from a measurement in the direction defined by a fixed angle in radians.",
      "inherits": "Translate",
      "gspRef": "TranslatemDfA_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and angle measurement exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "distance": {
          "edgeType": "mEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "distance": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "angle": {
          "description": "A angle(radians).",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateMeasureDistMeasureAngle": {
      "name": "TranslateMeasureDistMeasureAngle",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a distance measurement in the direction defined by an angle measurement.",
      "inherits": "Translate",
      "gspRef": "TranslateMarkedDistanceMarkedAngleMeasure_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the distance and angle measurements exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "angle": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "distance": {
          "edgeType": "mEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "distance": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "angle": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "TranslateMeasureXFixY": {
      "name": "TranslateMeasureXFixY",
      "description": "Defines a new GObject that is identical to another GObject, but offset by a fixed y coordinate and an x coordinate defined by a measure.",
      "inherits": "Translate",
      "gspRef": "TranslatemXfY_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the measurement exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "measure": {
          "edgeType": "mEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "measure": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "offsetY": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "TranslateMeasureXMeasureY": {
      "name": "TranslateMeasureXMeasureY",
      "description": "Defines a new GObject that is identical to another GObject, but offset by x and y coordinates defined by measures.",
      "inherits": "Translate",
      "gspRef": "TranslatemXmY_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the source object and the two measurements exists.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "measureX": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "measureY": {
          "edgeType": "mEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "measureX": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "measureY": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "TranslateVector": {
      "name": "TranslateVector",
      "description": "Defines a translation of a GObject by an offset that matches the vector defined by two points.",
      "inherits": "Translate",
      "gspRef": "TranslateVector_C",
      "abstract": false,
      "kinds": [
        "Arc",
        "ArcInterior",
        "Circle",
        "CircleInterior",
        "Picture",
        "Point",
        "Polygon",
        "Straight"
      ],
      "genus": [],
      "existenceRule": "Exists iff the transformed object and both length defining points exist.",
      "bapEdges": {
        "source": {
          "edgeType": "rEdge",
          "sortIndex": 0
        },
        "p0": {
          "edgeType": "iEdge",
          "sortIndex": 1
        },
        "p1": {
          "edgeType": "iEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "source": {
          "description": "The source of the transformation",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p0": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "AngleMarker_CCW": {
      "name": "AngleMarker_CCW",
      "description": "A counter-clockwise angle marker",
      "inherits": "AngleMarker",
      "gspRef": "AngleMarker_CCW_C",
      "abstract": false,
      "kinds": [
        "AngleMarker"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist, and define a non-zero angle.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p2": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "A point on an angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The focal point of an angle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "A point on the other angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "AngleMarker_CW": {
      "name": "AngleMarker_CW",
      "description": "A clockwise angle marker",
      "inherits": "AngleMarker",
      "gspRef": "AngleMarker_CW_C",
      "abstract": false,
      "kinds": [
        "AngleMarker"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist, and define a non-zero angle.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p2": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "A point on an angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The focal point of an angle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "A point on the other angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "AngleMarker_Reflex": {
      "name": "AngleMarker_Reflex",
      "description": "A reflex angle marker",
      "inherits": "AngleMarker",
      "gspRef": "AngleMarker_Reflex_C",
      "abstract": false,
      "kinds": [
        "AngleMarker"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist, and define a non-zero angle.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p2": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "A point on an angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The focal point of an angle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "A point on the other angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "AngleMarker_Simple": {
      "name": "AngleMarker_Simple",
      "description": "A simple angle marker",
      "inherits": "AngleMarker",
      "gspRef": "AngleMarker_Simple_C",
      "abstract": false,
      "kinds": [
        "AngleMarker"
      ],
      "genus": [],
      "existenceRule": "Exists iff parents exist, and define a non-zero angle.",
      "bapEdges": {
        "p0": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "p1": {
          "edgeType": "dEdge",
          "sortIndex": 1
        },
        "p2": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "p0": {
          "description": "A point on an angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p1": {
          "description": "The focal point of an angle",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "p2": {
          "description": "A point on the other angle edge",
          "kind": "Point",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PathMarker": {
      "name": "PathMarker",
      "description": "A path marker on a <span class=\"genus\">Path</span>.",
      "inherits": "Constraint",
      "gspRef": "PathMarker_C",
      "abstract": false,
      "kinds": [
        "PathMarker"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent path exists.",
      "bapEdges": {
        "path": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "path": {
          "description": "",
          "kind": "",
          "genus": "Path",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "value": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotRhoTheta": {
      "name": "PlotRhoTheta",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by two polar coordinates.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent CoordSys exists and the coordinates are numbers.",
      "bapEdges": null,
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PlotXY": {
      "name": "PlotXY",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by two coordinates.",
      "inherits": "Constraint",
      "gspRef": null,
      "abstract": true,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent CoordSys exists and the coordinates are numbers.",
      "bapEdges": null,
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ActionButtonHide": {
      "name": "ActionButtonHide",
      "description": "A button that hides its parents.",
      "inherits": "ActionButtonToggleHideShow",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists regardless of existence of parents.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "Hide message, Show message",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "fade": {
          "description": "when true, the objects fade in or out",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        }
      }
    },
    "Intersection2": {
      "name": "Intersection2",
      "description": "One of two points of intersection of a <span class=\"kind\">Circle</span> with another Circle or a Circle with a <span class=\"kind\">Straight</span> object.",
      "inherits": "Intersection1",
      "gspRef": "InterLCB",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent objects exist and have at least one point of intersection.",
      "bapEdges": {
        "obj": {
          "edgeType": "dEdge",
          "sortIndex": 0
        },
        "circle": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "line0": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "line1": {
          "description": "",
          "kind": "Straight",
          "genus": "",
          "suppressed": true,
          "required": true
        },
        "circle": {
          "description": "The first of two GObjects for which intersection(s) are to be determined",
          "kind": "Arc|Circle",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "obj": {
          "description": "The second of two GObjects for which intersection(s) are to be determined",
          "kind": "Arc|Circle|Straight",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "style": {
          "description": "Appearance of GObject",
          "type": "",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotFixedRhoFixedTheta": {
      "name": "PlotFixedRhoFixedTheta",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by two fixed polar coordinates.",
      "inherits": "PlotRhoTheta",
      "gspRef": "PlotFixedRhoFixedTheta",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Param and CoordSys exist.",
      "bapEdges": {
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "coordRho": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "coordTheta": {
          "description": "",
          "type": "",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotFixedRhoMarkedTheta": {
      "name": "PlotFixedRhoMarkedTheta",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by a fixed and a <span class=\"kind\">Param</span> polar coordinate.",
      "inherits": "PlotRhoTheta",
      "gspRef": "PlotFixedRhoMarkedTheta_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Param and CoordSys exist.",
      "bapEdges": {
        "coordTheta": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordTheta": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "coordRho": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotFixedXFixedY": {
      "name": "PlotFixedXFixedY",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by two fixed coordinates.",
      "inherits": "PlotXY",
      "gspRef": "PlotFixedXFixedY_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent CoordSys exists and the coordinates are numbers.",
      "bapEdges": {
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "coordX": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        },
        "coordY": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotFixedXMarkedY": {
      "name": "PlotFixedXMarkedY",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by a fixed coordinate and a <span class=\"kind\">Param</span> coordinate.",
      "inherits": "PlotXY",
      "gspRef": "PlotFixedXMarkedY_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Param and CoordSys exist.",
      "bapEdges": {
        "coordY": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordY": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "coordX": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotMarkedRhoFixedTheta": {
      "name": "PlotMarkedRhoFixedTheta",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by a <span class=\"kind\">Param</span> and a fixed polar coordinate.",
      "inherits": "PlotRhoTheta",
      "gspRef": "PlotMarkedRhoFixedTheta_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Param and CoordSys exist.",
      "bapEdges": {
        "coordRho": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordRho": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "coordTheta": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotMarkedRhoMarkedTheta": {
      "name": "PlotMarkedRhoMarkedTheta",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by two <span class=\"kind\">Param</span> polar coordinates.",
      "inherits": "PlotRhoTheta",
      "gspRef": "PlotMarkedRhoMarkedTheta_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Param and CoordSys exist.",
      "bapEdges": {
        "coordRho": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordTheta": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordRho": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordTheta": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "PlotMarkedXFixedY": {
      "name": "PlotMarkedXFixedY",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by a <span class=\"kind\">Param</span> coordinate and a fixed coordinate.",
      "inherits": "PlotXY",
      "gspRef": "PlotMarkedXFixedY_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Param and CoordSys exist.",
      "bapEdges": {
        "coordX": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 1
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordX": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "coordY": {
          "description": "",
          "type": "Number",
          "required": false,
          "suppressed": false
        }
      }
    },
    "PlotMarkedXMarkedY": {
      "name": "PlotMarkedXMarkedY",
      "description": "Defines a point on a <span class=\"kind\">CoordSys</span> determined by two <span class=\"kind\">Param</span> coordinates.",
      "inherits": "PlotXY",
      "gspRef": "PlotMarkedXMarkedY_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent Params and CoordSys exist.",
      "bapEdges": {
        "coordX": {
          "edgeType": "mEdge",
          "sortIndex": 0
        },
        "coordY": {
          "edgeType": "mEdge",
          "sortIndex": 1
        },
        "coordSys": {
          "edgeType": "dEdge",
          "sortIndex": 2
        }
      },
      "parentsSpec": {
        "coordSys": {
          "description": "The coordinate system for the coordinates.",
          "kind": "CoordSys",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordX": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        },
        "coordY": {
          "description": "",
          "kind": "Measure",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {}
    },
    "ActionButtonShow": {
      "name": "ActionButtonShow",
      "description": "Defines an action that reveals a hidden GObject.",
      "inherits": "ActionButtonToggleHideShow",
      "gspRef": "Free_C",
      "abstract": false,
      "kinds": [
        "Button"
      ],
      "genus": [],
      "existenceRule": "Exists iff the parent objects exist.",
      "bapEdges": {
        "Default": {
          "edgeType": "nEdge",
          "sortIndex": 0
        }
      },
      "parentsSpec": {
        "0": {
          "description": "The first target to be acted upon.  There can be an arbitrary number of objects numbered from 0 to N",
          "kind": "kind",
          "genus": "",
          "suppressed": false,
          "required": true
        }
      },
      "otherProps": {
        "geom": {
          "description": "The basic geometry of the GObject",
          "type": "",
          "required": false,
          "suppressed": false
        },
        "messages": {
          "description": "Hide message, Show message",
          "type": "Array",
          "required": false,
          "suppressed": false
        },
        "fade": {
          "description": "when true, the objects fade in or out",
          "type": "Boolean",
          "required": false,
          "suppressed": false
        }
      }
    },
    "InterApproxPathStitchedPath_C": {
      "name": "InterApproxPathStitchedPath_C",
      "inherits": "Constraint",
      "supported": true,
      "gspRef": "InterApproxPathStitchedPath_C",
      "abstract": false,
      "kinds": [
        "Point"
      ],
      "description": "A point at an intersection of a stitched path (a function plot or point locus) with a Straight, a Circle, an Arc, or another stitched path, approximated from the stitched paths' samples (Added in Q4 2026 / Nov 2026).",
      "existenceRule": "Exists iff both parents exist, the stitched path(s) have samples, and the parents cross (within the extent of a straight or arc parent).",
      "parentsSpec": {
        "0": {
          "kind": "Straight/Circle/Arc/Sampler/Locus",
          "description": "A Straight, Circle, Arc, or a stitched path (FunctionPlot / GeomLocus)"
        },
        "1": {
          "kind": "Sampler/Locus/Straight/Circle/Arc",
          "description": "A stitched path (FunctionPlot / GeomLocus) or a Straight, Circle, Arc"
        }
      },
      "bapEdges": {
        "0": {
          "edgeType": "GObject"
        },
        "1": {
          "edgeType": "GObject"
        }
      }
    }
  },
  "buildStamp": "MBP-9322/20261118122100 (Q4 2026 Release - November 2026)"
};
