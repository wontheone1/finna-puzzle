// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.accessors.particles.arcade.emitter');
goog.require('cljs.core');
phzr.impl.accessors.particles.arcade.emitter.emitter_get_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"exists","exists",1312597120),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"physics-body-type","physics-body-type",513830689),new cljs.core.Keyword(null,"emit-y","emit-y",-117311134),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"cache-as-bitmap","cache-as-bitmap",-1879981086),new cljs.core.Keyword(null,"fixed-to-camera","fixed-to-camera",1103832931),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"max-particles","max-particles",1506491845),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"max-rotation","max-rotation",1599513573),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transform-callback","transform-callback",545975398),new cljs.core.Keyword(null,"max-particle-alpha","max-particle-alpha",-522839738),new cljs.core.Keyword(null,"enable-body-debug","enable-body-debug",1655380486),new cljs.core.Keyword(null,"world-visible","world-visible",-348640666),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"camera-offset","camera-offset",798264711),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.Keyword(null,"ignore-destroy","ignore-destroy",962263656),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-area","filter-area",975211753),new cljs.core.Keyword(null,"max-particle-speed","max-particle-speed",-295976950),new cljs.core.Keyword(null,"alive","alive",1424929930),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword(null,"frequency","frequency",-1408891382),new cljs.core.Keyword(null,"scale-data","scale-data",2043716234),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"on-destroy","on-destroy",-248732403),new cljs.core.Keyword(null,"class-type","class-type",-940431027),new cljs.core.Keyword(null,"emit-x","emit-x",-1339054195),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"auto-scale","auto-scale",832560718),new cljs.core.Keyword(null,"world-rotation","world-rotation",221536495),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.Keyword(null,"particle-class","particle-class",-430207089),new cljs.core.Keyword(null,"physics-type","physics-type",147949808),new cljs.core.Keyword(null,"hit-area","hit-area",-649452784),new cljs.core.Keyword(null,"min-particle-alpha","min-particle-alpha",-1571071184),new cljs.core.Keyword(null,"bounce","bounce",1491727280),new cljs.core.Keyword(null,"transform-callback-context","transform-callback-context",-958287920),new cljs.core.Keyword(null,"physics-sort-direction","physics-sort-direction",986446929),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"particle-send-to-back","particle-send-to-back",1134320306),new cljs.core.Keyword(null,"world-scale","world-scale",-2049681454),new cljs.core.Keyword(null,"world-position","world-position",-486434797),new cljs.core.Keyword(null,"max-particle-scale","max-particle-scale",1951961875),new cljs.core.Keyword(null,"pending-destroy","pending-destroy",-64451979),new cljs.core.Keyword(null,"world-alpha","world-alpha",476718805),new cljs.core.Keyword(null,"particle-bring-to-top","particle-bring-to-top",1411664629),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"particle-anchor","particle-anchor",62066551),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"pivot","pivot",-1489083239),new cljs.core.Keyword(null,"angular-drag","angular-drag",-292737863),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"lifespan","lifespan",-1506671879),new cljs.core.Keyword(null,"min-rotation","min-rotation",1533109177),new cljs.core.Keyword(null,"alpha-data","alpha-data",-1230097222),new cljs.core.Keyword(null,"auto-alpha","auto-alpha",1344299354),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"min-particle-speed","min-particle-speed",1921209277),new cljs.core.Keyword(null,"min-particle-scale","min-particle-scale",1722347166),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"cursor-index","cursor-index",891643967),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"particle-drag","particle-drag",1650330111),new cljs.core.Keyword(null,"enable-body","enable-body",1407455199)],["y","exists","mask","physicsBodyType","emitY","children","cacheAsBitmap","fixedToCamera","hash","rotation","stage","maxParticles","parent","maxRotation","bottom","transformCallback","maxParticleAlpha","enableBodyDebug","worldVisible","scale","cameraOffset","top","filters","blendMode","ignoreDestroy","name","filterArea","maxParticleSpeed","alive","renderable","frequency","scaleData","width","cursor","onDestroy","classType","emitX","angle","autoScale","worldRotation","gravity","particleClass","physicsType","hitArea","minParticleAlpha","bounce","transformCallbackContext","physicsSortDirection","z","total","particleSendToBack","worldScale","worldPosition","maxParticleScale","pendingDestroy","worldAlpha","particleBringToTop","length","alpha","right","particleAnchor","position","area","on","pivot","angularDrag","x","lifespan","minRotation","alphaData","autoAlpha","visible","minParticleSpeed","minParticleScale","height","cursorIndex","left","particleDrag","enableBody"]);
phzr.impl.accessors.particles.arcade.emitter.emitter_set_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"exists","exists",1312597120),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"physics-body-type","physics-body-type",513830689),new cljs.core.Keyword(null,"emit-y","emit-y",-117311134),new cljs.core.Keyword(null,"cache-as-bitmap","cache-as-bitmap",-1879981086),new cljs.core.Keyword(null,"fixed-to-camera","fixed-to-camera",1103832931),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-particles","max-particles",1506491845),new cljs.core.Keyword(null,"max-rotation","max-rotation",1599513573),new cljs.core.Keyword(null,"transform-callback","transform-callback",545975398),new cljs.core.Keyword(null,"max-particle-alpha","max-particle-alpha",-522839738),new cljs.core.Keyword(null,"enable-body-debug","enable-body-debug",1655380486),new cljs.core.Keyword(null,"world-visible","world-visible",-348640666),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"camera-offset","camera-offset",798264711),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.Keyword(null,"ignore-destroy","ignore-destroy",962263656),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-area","filter-area",975211753),new cljs.core.Keyword(null,"max-particle-speed","max-particle-speed",-295976950),new cljs.core.Keyword(null,"alive","alive",1424929930),new cljs.core.Keyword(null,"renderable","renderable",-1247325782),new cljs.core.Keyword(null,"frequency","frequency",-1408891382),new cljs.core.Keyword(null,"scale-data","scale-data",2043716234),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"on-destroy","on-destroy",-248732403),new cljs.core.Keyword(null,"class-type","class-type",-940431027),new cljs.core.Keyword(null,"emit-x","emit-x",-1339054195),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"auto-scale","auto-scale",832560718),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.Keyword(null,"particle-class","particle-class",-430207089),new cljs.core.Keyword(null,"hit-area","hit-area",-649452784),new cljs.core.Keyword(null,"min-particle-alpha","min-particle-alpha",-1571071184),new cljs.core.Keyword(null,"bounce","bounce",1491727280),new cljs.core.Keyword(null,"transform-callback-context","transform-callback-context",-958287920),new cljs.core.Keyword(null,"physics-sort-direction","physics-sort-direction",986446929),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"particle-send-to-back","particle-send-to-back",1134320306),new cljs.core.Keyword(null,"max-particle-scale","max-particle-scale",1951961875),new cljs.core.Keyword(null,"pending-destroy","pending-destroy",-64451979),new cljs.core.Keyword(null,"particle-bring-to-top","particle-bring-to-top",1411664629),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"particle-anchor","particle-anchor",62066551),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"pivot","pivot",-1489083239),new cljs.core.Keyword(null,"angular-drag","angular-drag",-292737863),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"lifespan","lifespan",-1506671879),new cljs.core.Keyword(null,"min-rotation","min-rotation",1533109177),new cljs.core.Keyword(null,"alpha-data","alpha-data",-1230097222),new cljs.core.Keyword(null,"auto-alpha","auto-alpha",1344299354),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"min-particle-speed","min-particle-speed",1921209277),new cljs.core.Keyword(null,"min-particle-scale","min-particle-scale",1722347166),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"particle-drag","particle-drag",1650330111),new cljs.core.Keyword(null,"enable-body","enable-body",1407455199)],["y","exists","mask","physicsBodyType","emitY","cacheAsBitmap","fixedToCamera","hash","rotation","maxParticles","maxRotation","transformCallback","maxParticleAlpha","enableBodyDebug","worldVisible","scale","cameraOffset","filters","blendMode","ignoreDestroy","name","filterArea","maxParticleSpeed","alive","renderable","frequency","scaleData","width","cursor","onDestroy","classType","emitX","angle","autoScale","gravity","particleClass","hitArea","minParticleAlpha","bounce","transformCallbackContext","physicsSortDirection","z","particleSendToBack","maxParticleScale","pendingDestroy","particleBringToTop","alpha","particleAnchor","position","area","on","pivot","angularDrag","x","lifespan","minRotation","alphaData","autoAlpha","visible","minParticleSpeed","minParticleScale","height","particleDrag","enableBody"]);

//# sourceMappingURL=emitter.js.map?rel=1485300064628