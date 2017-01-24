// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.accessors.flex_layer');
goog.require('cljs.core');
phzr.impl.accessors.flex_layer.flex_layer_get_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"exists","exists",1312597120),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"physics-body-type","physics-body-type",513830689),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"cache-as-bitmap","cache-as-bitmap",-1879981086),new cljs.core.Keyword(null,"fixed-to-camera","fixed-to-camera",1103832931),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"transform-callback","transform-callback",545975398),new cljs.core.Keyword(null,"enable-body-debug","enable-body-debug",1655380486),new cljs.core.Keyword(null,"world-visible","world-visible",-348640666),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"camera-offset","camera-offset",798264711),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"ignore-destroy","ignore-destroy",962263656),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"bottom-middle","bottom-middle",-1911944280),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-area","filter-area",975211753),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"alive","alive",1424929930),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"persist","persist",815289548),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"on-destroy","on-destroy",-248732403),new cljs.core.Keyword(null,"class-type","class-type",-940431027),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"world-rotation","world-rotation",221536495),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"physics-type","physics-type",147949808),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"hit-area","hit-area",-649452784),new cljs.core.Keyword(null,"transform-callback-context","transform-callback-context",-958287920),new cljs.core.Keyword(null,"physics-sort-direction","physics-sort-direction",986446929),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"manager","manager",-818607470),new cljs.core.Keyword(null,"world-scale","world-scale",-2049681454),new cljs.core.Keyword(null,"world-position","world-position",-486434797),new cljs.core.Keyword(null,"pending-destroy","pending-destroy",-64451979),new cljs.core.Keyword(null,"world-alpha","world-alpha",476718805),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pivot","pivot",-1489083239),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"top-middle","top-middle",-2063332804),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"cursor-index","cursor-index",891643967),new cljs.core.Keyword(null,"enable-body","enable-body",1407455199)],["y","exists","mask","physicsBodyType","children","cacheAsBitmap","fixedToCamera","hash","rotation","stage","parent","transformCallback","enableBodyDebug","worldVisible","scale","cameraOffset","filters","ignoreDestroy","grid","bottomMiddle","name","filterArea","topRight","alive","renderable","width","persist","cursor","topLeft","onDestroy","classType","angle","bottomRight","worldRotation","bounds","physicsType","bottomLeft","hitArea","transformCallbackContext","physicsSortDirection","z","total","manager","worldScale","worldPosition","pendingDestroy","worldAlpha","length","alpha","position","pivot","x","visible","topMiddle","height","cursorIndex","enableBody"]);
phzr.impl.accessors.flex_layer.flex_layer_set_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"exists","exists",1312597120),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"physics-body-type","physics-body-type",513830689),new cljs.core.Keyword(null,"cache-as-bitmap","cache-as-bitmap",-1879981086),new cljs.core.Keyword(null,"fixed-to-camera","fixed-to-camera",1103832931),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"transform-callback","transform-callback",545975398),new cljs.core.Keyword(null,"enable-body-debug","enable-body-debug",1655380486),new cljs.core.Keyword(null,"world-visible","world-visible",-348640666),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"camera-offset","camera-offset",798264711),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"ignore-destroy","ignore-destroy",962263656),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"bottom-middle","bottom-middle",-1911944280),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-area","filter-area",975211753),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"alive","alive",1424929930),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"persist","persist",815289548),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"on-destroy","on-destroy",-248732403),new cljs.core.Keyword(null,"class-type","class-type",-940431027),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"hit-area","hit-area",-649452784),new cljs.core.Keyword(null,"transform-callback-context","transform-callback-context",-958287920),new cljs.core.Keyword(null,"physics-sort-direction","physics-sort-direction",986446929),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"manager","manager",-818607470),new cljs.core.Keyword(null,"pending-destroy","pending-destroy",-64451979),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pivot","pivot",-1489083239),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"top-middle","top-middle",-2063332804),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"enable-body","enable-body",1407455199)],["y","exists","mask","physicsBodyType","cacheAsBitmap","fixedToCamera","hash","rotation","transformCallback","enableBodyDebug","worldVisible","scale","cameraOffset","filters","ignoreDestroy","grid","bottomMiddle","name","filterArea","topRight","alive","renderable","width","persist","cursor","topLeft","onDestroy","classType","angle","bottomRight","bounds","bottomLeft","hitArea","transformCallbackContext","physicsSortDirection","z","manager","pendingDestroy","alpha","position","pivot","x","visible","topMiddle","height","enableBody"]);

//# sourceMappingURL=flex_layer.js.map?rel=1485300063055