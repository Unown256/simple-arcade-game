gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDtitleObjects1= [];
gdjs.Main_32MenuCode.GDtitleObjects2= [];
gdjs.Main_32MenuCode.GDbuttonObjects1= [];
gdjs.Main_32MenuCode.GDbuttonObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Main_32MenuCode.GDbuttonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Main_32MenuCode.GDbuttonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Main_32MenuCode.GDbuttonObjects1});gdjs.Main_32MenuCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbuttonObjects1[i].pauseAnimation();
}
}}

}


{

gdjs.Main_32MenuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbuttonObjects1[i].setAnimation(gdjs.Main_32MenuCode.GDbuttonObjects1[i].getAnimation() + (1));
}
}}

}


{

gdjs.Main_32MenuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbuttonObjects1[i].setAnimation(gdjs.Main_32MenuCode.GDbuttonObjects1[i].getAnimation() - (1));
}
}}

}


{

gdjs.Main_32MenuCode.GDbuttonObjects1.createFrom(runtimeScene.getObjects("button"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DemoZone", true);
}}

}


}; //End of gdjs.Main_32MenuCode.eventsList0xb4be0


gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDtitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDbuttonObjects1.length = 0;
gdjs.Main_32MenuCode.GDbuttonObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
