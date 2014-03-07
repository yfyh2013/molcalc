Jmol.Console={buttons:{},buttonWidth:100,click:function(a){Jmol.Console.buttons[a].console.appletConsole.doAction(Jmol.Console.buttons[a])}};
Jmol.Console.JSConsole=function(a){this.applet=a.viewer.applet;var c=this.id=this.applet._id+"_console",b=this;Jmol.Console.buttons[b.id]=b;b.appletConsole=a;b.input=a.input=new Jmol.Console.Input(b);b.output=a.output=new Jmol.Console.Output(b);var d,e=function(a,b){b.console=a;b.id=c+"_"+b.label.replace(/\s/g,"_");Jmol.Console.buttons[b.id]=b;return b.html()};d='<div id="$ID" class="jmolConsole" style="display:block;background-color:yellow;width:600px;height:362px;position:absolute;z-order:9999"><div id=$ID_title></div><div id=$ID_label1></div><div id=$ID_outputdiv style="position:relative;left:2px"></div><div id=$ID_inputdiv style="position:relative;left:2px"></div><div id=$ID_buttondiv></div></div>'.replace(/\$ID/g,
c);Jmol.$after("body",d);b.setContainer(Jmol.$("#"+c));b.setPosition();b.dragBind(!0);Jmol.$html(c+"_label1","&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:Jmol.Console.buttons['"+c+"'].setVisible(false)\">close</a>");Jmol.$html(c+"_inputdiv",'<textarea id="'+c+'_input" style="width:590px;height:100px"></textarea>');Jmol.$html(c+"_outputdiv",'<textarea id="'+c+'_output" style="width:590px;height:200px"></textarea>');d=e(b,a.runButton)+e(b,a.loadButton)+e(b,a.clearInButton)+e(b,a.clearOutButton)+e(b,
a.historyButton)+e(b,a.stateButton);Jmol.$html(c+"_buttondiv",d);Jmol.$bind("#"+c+"_input","keypress",function(a){b.input.keyPressed(a)});Jmol.$bind("#"+c+"_input","keyup",function(a){b.input.keyReleased(a)});Jmol.$bind("#"+c+"_input","mousedown touchstart",function(){b.ignoreMouse=!0});Jmol.$bind("#"+c+"_output","mousedown touchstart",function(){b.ignoreMouse=!0});b.setButton=function(a){return new Jmol.Console.Button(this,a)};b.setVisible=function(a){a?this.container.show():this.container.hide();
this.dragBind(a)};b.setTitle=function(){}};Jmol._setDraggable(Jmol.Console.JSConsole);
Jmol.Console.Input=function(a){this.console=a;this.getText=function(){return Jmol.$val(this.console.id+"_input")};this.setText=function(a){null==a&&(a="");Jmol.$val(this.console.id+"_input",a)};this.keyPressed=function(a){var b=a.which,d=a.ctrlKey;13==b&&(b=10);var e=this.console.appletConsole.processKey(b,401,d);d&&10==b&&this.setText(this.getText()+"\n");if(9==a.keyCode||9==b){var f=this;setTimeout(function(){f.setText(f.getText()+"\t");Jmol.$focus(f.console.id+"_input")},10)}(1==(e&1)||0==b)&&
a.preventDefault()};this.keyReleased=function(a){var b=a.which,d=a.ctrlKey;13==b&&(b=10);38==b||40==b?(this.keyPressed(a),a.preventDefault()):1==(this.console.appletConsole.processKey(b,402,d)&1)&&a.preventDefault()};this.getCaretPosition=function(){var a=Jmol.$get(this,0);if("selectionStart"in a)return a.selectionStart;if(!("selection"in document))return 0;a.focus();var b=document.selection.createRange(),d=document.selection.createRange().text.length;b.moveStart("character",-a.value.length);return b.text.length-
d}};Jmol.Console.Output=function(a){this.console=a;this.getText=function(){return Jmol.$val(this.console.id+"_output")};this.setText=function(a){null==a&&(a="");Jmol.$val(this.console.id+"_output",a)};this.append=function(a){this.setText(this.getText()+a)}};Jmol.Console.Button=function(a){this.label=a};Jmol.Console.Button.prototype.addConsoleListener=function(a){this.appletConsole=a;Jmol.Console.buttons[this.id]=this};
Jmol.Console.Button.prototype.html=function(){return'<input type="button" id="'+this.id+'" style="width:'+Jmol.Console.buttonWidth+'px" value="'+this.label+'" onClick="Jmol.Console.click(\''+this.id+"')\"/>"};Clazz.declarePackage("J.api");Clazz.declareInterface(J.api,"JmolAppConsoleInterface");Clazz.declarePackage("J.console");Clazz.declareInterface(J.console,"GenericTextArea");Clazz.declarePackage("J.console");
Clazz.load(["J.api.JmolAppConsoleInterface","$.JmolCallbackListener","java.util.Hashtable"],"J.console.GenericConsole","java.lang.Boolean J.constant.EnumCallback J.i18n.GT J.script.T J.util.TextFormat J.viewer.Viewer".split(" "),function(){c$=Clazz.decorateAsClass(function(){this.label1=this.defaultMessage=this.loadButton=this.clearInButton=this.clearOutButton=this.stateButton=this.historyButton=this.runButton=this.editButton=this.menuMap=this.labels=this.viewer=this.output=this.input=null;this.nTab=
0;this.incompleteCmd=null;Clazz.instantialize(this,arguments)},J.console,"GenericConsole",null,[J.api.JmolAppConsoleInterface,J.api.JmolCallbackListener]);Clazz.prepareFields(c$,function(){this.menuMap=new java.util.Hashtable});$_M(c$,"setViewer",function(a){this.viewer=a},"J.api.JmolViewer");$_M(c$,"addButton",function(a,c){a.addConsoleListener(this);this.menuMap.put(c,a);return a},"J.api.JmolAbstractButton,~S");$_M(c$,"getLabel1",function(){return null});$_M(c$,"setupLabels",function(){this.labels.put("help",
J.i18n.GT._("&Help"));this.labels.put("search",J.i18n.GT._("&Search..."));this.labels.put("commands",J.i18n.GT._("&Commands"));this.labels.put("functions",J.i18n.GT._("Math &Functions"));this.labels.put("parameters",J.i18n.GT._("Set &Parameters"));this.labels.put("more",J.i18n.GT._("&More"));this.labels.put("Editor",J.i18n.GT._("Editor"));this.labels.put("State",J.i18n.GT._("State"));this.labels.put("Run",J.i18n.GT._("Run"));this.labels.put("Clear Output",J.i18n.GT._("Clear Output"));this.labels.put("Clear Input",
J.i18n.GT._("Clear Input"));this.labels.put("History",J.i18n.GT._("History"));this.labels.put("Load",J.i18n.GT._("Load"));this.labels.put("label1",J.i18n.GT._("press CTRL-ENTER for new line or paste model data and press Load"));this.labels.put("default",J.i18n.GT._("Messages will appear here. Enter commands in the box below. Click the console Help menu item for on-line help, which will appear in a new browser window."))});$_M(c$,"setLabels",function(){var a=J.i18n.GT.setDoTranslate(!0);this.editButton=
this.setButton("Editor");this.stateButton=this.setButton("State");this.runButton=this.setButton("Run");this.clearOutButton=this.setButton("Clear Output");this.clearInButton=this.setButton("Clear Input");this.historyButton=this.setButton("History");this.loadButton=this.setButton("Load");this.defaultMessage=this.getLabel("default");this.setTitle();J.i18n.GT.setDoTranslate(!1);this.defaultMessage=this.getLabel("default").split("Click")[0];J.i18n.GT.setDoTranslate(a);this.defaultMessage=this.getLabel("default")});
$_M(c$,"getLabel",function(a){null==this.labels&&(this.labels=new java.util.Hashtable,this.labels.put("title",J.i18n.GT._("Jmol Script Console")+" "+J.viewer.Viewer.getJmolVersion()),this.setupLabels());return this.labels.get(a)},"~S");$_M(c$,"displayConsole",function(){this.layoutWindow(null);this.outputMsg(this.defaultMessage)});$_M(c$,"updateLabels",function(){});$_M(c$,"completeCommand",function(a){if(0==a.length)return null;var c=0>=this.nTab||null==this.incompleteCmd?a:this.incompleteCmd;this.incompleteCmd=
c;a=J.console.GenericConsole.splitCommandLine(a);if(null==a)return null;var b=null==a[2],d=null!=a[3],e=a[b?1:2],f=a[1];if(0==e.length)return null;a=J.script.T.getTokenFromName(f.trim());var j=null==a?0:a.tok,h=J.script.T.tokAttr(j,12288);a=J.console.GenericConsole.splitCommandLine(c);var g=null;if(!b&&('"'==e.charAt(0)||"'"==e.charAt(0)))b=e.charAt(0),J.util.TextFormat.trim(e,"\"'"),e=J.util.TextFormat.trim(a[2],"\"'"),g=this.nextFileName(e,this.nTab),null!=g&&(g=a[0]+a[1]+b+g+b);else{g=null;if(!b&&
(e=f,d||a[2].startsWith("$")||J.script.T.isIDcmd(j)||h))g=new java.util.Hashtable,this.viewer.getObjectMap(g,d||h?"{":a[2].startsWith("$")?"$":"0");g=J.script.T.completeCommand(g,f.equalsIgnoreCase("set "),b,b?a[1]:a[2],this.nTab);g=a[0]+(null==g?e:b?g:a[1]+g)}return null==g||g.equals(c)?null:g},"~S");$_M(c$,"doAction",function(a){if(a===this.runButton)this.execute(null);else if(a===this.editButton)this.viewer.getProperty("DATA_API","scriptEditor",null);else if(a===this.historyButton)this.clearContent(this.viewer.getSetHistory(2147483647));
else if(a===this.stateButton)this.clearContent(this.viewer.getStateInfo());else if(a===this.clearInButton){this.input.setText("");return}a===this.clearOutButton?this.output.setText(""):a===this.loadButton?this.viewer.loadInline(this.input.getText(),!1):this.isMenuItem(a)&&this.execute(a.getName())},"~O");$_M(c$,"execute",function(a){var c=null==a?this.input.getText():a;null==a&&this.input.setText(null);a=this.viewer.script(c+"\u0001## EDITOR_IGNORE ##");null!=a&&!a.equals("pending")&&this.outputMsg(a)},
"~S");$_M(c$,"destroyConsole",function(){this.viewer.isApplet()&&this.viewer.getProperty("DATA_API","getAppConsole",Boolean.FALSE)});c$.setAbstractButtonLabels=$_M(c$,"setAbstractButtonLabels",function(a,c){for(var b=a.keySet().iterator();b.hasNext();){var d=b.next(),e=a.get(d),f=c.get(d);d.indexOf("Tip")==d.length-3?e.setToolTipText(c.get(d)):(d=J.console.GenericConsole.getMnemonic(f)," "!=d&&e.setMnemonic(d),f=J.console.GenericConsole.getLabelWithoutMnemonic(f),e.setText(f))}},"java.util.Map,java.util.Map");
c$.getLabelWithoutMnemonic=$_M(c$,"getLabelWithoutMnemonic",function(a){if(null==a)return null;var c=a.indexOf("&");return-1==c?a:a.substring(0,c)+(c<a.length-1?a.substring(c+1):"")},"~S");c$.getMnemonic=$_M(c$,"getMnemonic",function(a){if(null==a)return" ";var c=a.indexOf("&");return-1==c||c==a.length-1?" ":a.charAt(c+1)},"~S");c$.map=$_M(c$,"map",function(a,c,b,d){b=J.console.GenericConsole.getMnemonic(b);" "!=b&&a.setMnemonic(b);d.put(c,a)},"~O,~S,~S,java.util.Map");Clazz.overrideMethod(c$,"notifyEnabled",
function(a){switch(a){case J.constant.EnumCallback.ECHO:case J.constant.EnumCallback.MEASURE:case J.constant.EnumCallback.MESSAGE:case J.constant.EnumCallback.PICK:return!0}return!1},"J.constant.EnumCallback");Clazz.overrideMethod(c$,"getText",function(){return this.output.getText()});Clazz.overrideMethod(c$,"sendConsoleEcho",function(a){null==a&&(this.updateLabels(),this.outputMsg(null),a=this.defaultMessage);this.outputMsg(a)},"~S");$_M(c$,"outputMsg",($fz=function(a){null==a||0==a.length?this.output.setText(""):
("\n"!=a.charAt(a.length-1)&&(a+="\n"),this.output.append(a))},$fz.isPrivate=!0,$fz),"~S");$_M(c$,"clearContent",function(a){this.output.setText(a)},"~S");Clazz.overrideMethod(c$,"sendConsoleMessage",function(a){null!=a&&this.output.getText().startsWith(this.defaultMessage)&&this.outputMsg(null);this.outputMsg(a)},"~S");Clazz.overrideMethod(c$,"notifyCallback",function(a,c){var b=null==c||null==c[1]?null:c[1].toString();switch(a){case J.constant.EnumCallback.ECHO:this.sendConsoleEcho(b);break;case J.constant.EnumCallback.MEASURE:var d=
c[3];0<=d.indexOf("Picked")||0<=d.indexOf("Sequence")?this.sendConsoleMessage(b):0<=d.indexOf("Completed")&&this.sendConsoleEcho(b.substring(b.lastIndexOf(",")+2,b.length-1));break;case J.constant.EnumCallback.MESSAGE:this.sendConsoleMessage(null==c?null:b);break;case J.constant.EnumCallback.PICK:this.sendConsoleMessage(b)}},"J.constant.EnumCallback,~A");Clazz.overrideMethod(c$,"setCallbackFunction",function(){},"~S,~S");Clazz.overrideMethod(c$,"zap",function(){});$_M(c$,"recallCommand",function(a){a=
this.viewer.getSetHistory(a?-1:1);null!=a&&this.input.setText(a)},"~B");$_M(c$,"processKey",function(a,c,b){var d=0;switch(c){case 401:switch(a){case 9:d=1;if(this.input.getCaretPosition()==this.input.getText().length)return a=this.completeCommand(this.getText()),null!=a&&this.input.setText(a.$replace("\t"," ")),this.nTab++,d;break;case 27:d=1,this.input.setText("")}this.nTab=0;if(10==a&&!b)return this.execute(null),d;if(38==a||40==a)return this.recallCommand(38==a),d;break;case 402:if(10==a&&!b)return d}return d|
2},"~N,~N,~B");c$.splitCommandLine=$_M(c$,"splitCommandLine",($fz=function(a){var c=Array(4),b=!1,d=!1,e=!1;if(0==a.length)return null;for(var f=-1,j=0,h=0,g=0,l,k=0;k<a.length;k++){switch(l=a.charAt(k)){case '"':!e&&!b&&(d=!d)&&(f=h=k);break;case "'":!e&&!d&&(b=!b)&&(f=h=k);break;case "\\":e=!e;continue;case " ":!e&&(!b&&!d)&&(h=k+1,f=-1);break;case ";":!b&&!d&&(j=h=k+1,f=-1,g=0);break;case "{":case "}":!b&&!d&&(g+="{"==l?1:-1,h=k+1,f=-1);break;default:!b&&!d&&(f=-1)}e=!1}c[0]=a.substring(0,j);c[1]=
h==j?a.substring(j):a.substring(j,h>f?h:f);c[2]=h==j?null:a.substring(h);c[3]=0<g?"{":null;return c},$fz.isPrivate=!0,$fz),"~S")});Clazz.declarePackage("J.consolejs");
Clazz.load(["J.console.GenericConsole"],"J.consolejs.AppletConsole",null,function(){c$=Clazz.decorateAsClass(function(){this.jsConsole=null;Clazz.instantialize(this,arguments)},J.consolejs,"AppletConsole",J.console.GenericConsole);Clazz.makeConstructor(c$,function(){Clazz.superConstructor(this,J.consolejs.AppletConsole,[])});Clazz.overrideMethod(c$,"start",function(a){this.setViewer(a);this.setLabels();this.displayConsole()},"J.api.JmolViewer");Clazz.overrideMethod(c$,"layoutWindow",function(){this.jsConsole=
new Jmol.Console.JSConsole(this);this.setTitle()},"~S");Clazz.overrideMethod(c$,"setTitle",function(){this.jsConsole&&this.jsConsole.setTitle(this.getLabel("title"))});Clazz.overrideMethod(c$,"setVisible",function(a){this.jsConsole.setVisible(a)},"~B");Clazz.overrideMethod(c$,"setButton",function(a){return new Jmol.Console.Button(a)},"~S");Clazz.overrideMethod(c$,"dispose",function(){this.setVisible(!1)});Clazz.overrideMethod(c$,"isMenuItem",function(){return!1},"~O");Clazz.overrideMethod(c$,"getScriptEditor",
function(){return null});Clazz.overrideMethod(c$,"nextFileName",function(){return null},"~S,~N")});