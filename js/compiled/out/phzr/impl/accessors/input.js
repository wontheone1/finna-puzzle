// Compiled by ClojureScript 1.9.229 {}
goog.provide('phzr.impl.accessors.input');
goog.require('cljs.core');
phzr.impl.accessors.input.input_constants = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-pointers","max-pointers",209948852),"MAX_POINTERS",new cljs.core.Keyword(null,"mouse-overrides-touch","mouse-overrides-touch",-383085485),"MOUSE_OVERRIDES_TOUCH",new cljs.core.Keyword(null,"mouse-touch-combine","mouse-touch-combine",-2077693850),"MOUSE_TOUCH_COMBINE",new cljs.core.Keyword(null,"touch-overrides-mouse","touch-overrides-mouse",220791466),"TOUCH_OVERRIDES_MOUSE"], null);
phzr.impl.accessors.input.input_get_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"world-y","world-y",401775680),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"poll-rate","poll-rate",-1885933437),new cljs.core.Keyword(null,"total-inactive-pointers","total-inactive-pointers",-88083869),new cljs.core.Keyword(null,"pointer-4","pointer-4",-1932919707),new cljs.core.Keyword(null,"on-up","on-up",-127496699),new cljs.core.Keyword(null,"pointers","pointers",985377413),new cljs.core.Keyword(null,"record-limit","record-limit",1216047206),new cljs.core.Keyword(null,"record-rate","record-rate",33056903),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"reset-locked","reset-locked",681446633),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"pointer-7","pointer-7",1674232044),new cljs.core.Keyword(null,"pointer-1","pointer-1",1325924940),new cljs.core.Keyword(null,"on-tap","on-tap",-1537061940),new cljs.core.Keyword(null,"on-hold","on-hold",-295274098),new cljs.core.Keyword(null,"tap-rate","tap-rate",2025211694),new cljs.core.Keyword(null,"pointer-3","pointer-3",1145960398),new cljs.core.Keyword(null,"record-pointer-history","record-pointer-history",1907349711),new cljs.core.Keyword(null,"min-priority-id","min-priority-id",284826255),new cljs.core.Keyword(null,"mouse-pointer","mouse-pointer",447582384),new cljs.core.Keyword(null,"just-pressed-rate","just-pressed-rate",-801167568),new cljs.core.Keyword(null,"world-x","world-x",-907540079),new cljs.core.Keyword(null,"interactive-items","interactive-items",-1781519695),new cljs.core.Keyword(null,"pointer-8","pointer-8",-1261507438),new cljs.core.Keyword(null,"active-pointer","active-pointer",-1439231790),new cljs.core.Keyword(null,"multi-input-override","multi-input-override",-681600430),new cljs.core.Keyword(null,"max-pointers","max-pointers",209948852),new cljs.core.Keyword(null,"poll-locked","poll-locked",378490933),new cljs.core.Keyword(null,"touch","touch",1496272469),new cljs.core.Keyword(null,"hit-canvas","hit-canvas",327996213),new cljs.core.Keyword(null,"mspointer","mspointer",-510063370),new cljs.core.Keyword(null,"pointer-10","pointer-10",1916550518),new cljs.core.Keyword(null,"hit-context","hit-context",-2108958058),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"total-active-pointers","total-active-pointers",-872937320),new cljs.core.Keyword(null,"hold-rate","hold-rate",-1067420488),new cljs.core.Keyword(null,"double-tap-rate","double-tap-rate",683455737),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"just-released-rate","just-released-rate",-126410375),new cljs.core.Keyword(null,"pointer-5","pointer-5",-136514276),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"pointer-2","pointer-2",1191955869),new cljs.core.Keyword(null,"pointer-6","pointer-6",-1281388322),new cljs.core.Keyword(null,"gamepad","gamepad",1856451262),new cljs.core.Keyword(null,"pointer-9","pointer-9",269033214)],["worldY","y","keyboard","pollRate","totalInactivePointers","pointer4","onUp","pointers","recordLimit","recordRate","speed","scale","game","resetLocked","circle","onDown","mouse","pointer7","pointer1","onTap","onHold","tapRate","pointer3","recordPointerHistory","minPriorityID","mousePointer","justPressedRate","worldX","interactiveItems","pointer8","activePointer","multiInputOverride","maxPointers","pollLocked","touch","hitCanvas","mspointer","pointer10","hitContext","position","totalActivePointers","holdRate","doubleTapRate","x","justReleasedRate","pointer5","enabled","pointer2","pointer6","gamepad","pointer9"]);
phzr.impl.accessors.input.input_set_properties = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"poll-rate","poll-rate",-1885933437),new cljs.core.Keyword(null,"pointer-4","pointer-4",-1932919707),new cljs.core.Keyword(null,"on-up","on-up",-127496699),new cljs.core.Keyword(null,"record-limit","record-limit",1216047206),new cljs.core.Keyword(null,"record-rate","record-rate",33056903),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"reset-locked","reset-locked",681446633),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"on-down","on-down",2037743467),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"pointer-7","pointer-7",1674232044),new cljs.core.Keyword(null,"pointer-1","pointer-1",1325924940),new cljs.core.Keyword(null,"on-tap","on-tap",-1537061940),new cljs.core.Keyword(null,"on-hold","on-hold",-295274098),new cljs.core.Keyword(null,"tap-rate","tap-rate",2025211694),new cljs.core.Keyword(null,"pointer-3","pointer-3",1145960398),new cljs.core.Keyword(null,"record-pointer-history","record-pointer-history",1907349711),new cljs.core.Keyword(null,"min-priority-id","min-priority-id",284826255),new cljs.core.Keyword(null,"mouse-pointer","mouse-pointer",447582384),new cljs.core.Keyword(null,"just-pressed-rate","just-pressed-rate",-801167568),new cljs.core.Keyword(null,"interactive-items","interactive-items",-1781519695),new cljs.core.Keyword(null,"pointer-8","pointer-8",-1261507438),new cljs.core.Keyword(null,"active-pointer","active-pointer",-1439231790),new cljs.core.Keyword(null,"multi-input-override","multi-input-override",-681600430),new cljs.core.Keyword(null,"max-pointers","max-pointers",209948852),new cljs.core.Keyword(null,"touch","touch",1496272469),new cljs.core.Keyword(null,"hit-canvas","hit-canvas",327996213),new cljs.core.Keyword(null,"mspointer","mspointer",-510063370),new cljs.core.Keyword(null,"pointer-10","pointer-10",1916550518),new cljs.core.Keyword(null,"hit-context","hit-context",-2108958058),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"hold-rate","hold-rate",-1067420488),new cljs.core.Keyword(null,"double-tap-rate","double-tap-rate",683455737),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"just-released-rate","just-released-rate",-126410375),new cljs.core.Keyword(null,"pointer-5","pointer-5",-136514276),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"pointer-2","pointer-2",1191955869),new cljs.core.Keyword(null,"pointer-6","pointer-6",-1281388322),new cljs.core.Keyword(null,"gamepad","gamepad",1856451262),new cljs.core.Keyword(null,"pointer-9","pointer-9",269033214)],["y","keyboard","pollRate","pointer4","onUp","recordLimit","recordRate","speed","scale","game","resetLocked","circle","onDown","mouse","pointer7","pointer1","onTap","onHold","tapRate","pointer3","recordPointerHistory","minPriorityID","mousePointer","justPressedRate","interactiveItems","pointer8","activePointer","multiInputOverride","maxPointers","touch","hitCanvas","mspointer","pointer10","hitContext","position","holdRate","doubleTapRate","x","justReleasedRate","pointer5","enabled","pointer2","pointer6","gamepad","pointer9"]);

//# sourceMappingURL=input.js.map?rel=1485300058473