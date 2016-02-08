/*
var evaluacionEndpoint=["Image",{src: base_url+"assets/img/evaluacion.gif", cssClass: "endpoint1"}];
var paraleloEndpoint=["Image",{src: base_url+"assets/img/paralelo.gif", cssClass: "endpoint1"}];
var paraleloEvaluacionEndpoint=["Image",{src: base_url+"assets/img/paralelo_evaluacion.gif", cssClass: "endpoint1"}];
var unionEndpoint=["Image",{src: base_url+"assets/img/union.gif", cssClass: "endpoint2"}];
*/

$(document).ready(function(){
    
    jsPlumb.Defaults.PaintStyle={
        strokeStyle:"#333", 
        lineWidth:1.6
    };
    jsPlumb.Defaults.Endpoint= "Blank";
    jsPlumb.Defaults.Connector=[ "Bezier", { curviness: 100 } ];
    jsPlumb.Defaults.HoverPaintStyle= {strokeStyle: "#FF00FF", lineWidth:3};
    jsPlumb.Defaults.ConnectionOverlays = [[ "Arrow", {
        location:1, 
        width:6 ,
        length:6
    } ]];
});

function drawFromModel(model,width,height){
    //alert('dibujo');
    //Modificamos el titulo
    //$("#areaDibujo h1").text(model.nombre);
    
    $("#draw").css("width",width).css("height",height);
    
    //limpiamos el canvas
    jsPlumb.reset();
    $("#draw .box").remove();
    
    //Creamos los elementos
    $(model.elements).each(function(i,e){
        $("#draw").append("<div id='"+e.id+"' class='box' style='top: "+e.top+"px; left: "+e.left+"px;'>"+e.name+(e.start==1?'<div class="inicial"></div>':'')+"</div>");
    });
    
    //Creamos las conexiones
    $(model.connections).each(function(i,c){
        drawConnection(c);
        
        
    });
    
    jsPlumb.draggable($("#draw .box"));
    
    //setJSPlumbEvents();
    
}

function drawFromModelUpdate(model,width,height){
    
    $("#draw").css("width",width).css("height",height);
    
    //limpiamos el canvas
    $("#draw .box").remove();
    
    //Creamos los elementos
    $(model.elements).each(function(i,e){
        $("#draw").append("<div id='"+e.id+"' class='box' style='top: "+e.top+"px; left: "+e.left+"px;'>"+e.name+(e.start==1?'<div class="inicial"></div>':'')+"</div>");
    });
    
    //Creamos las conexiones
    $(model.connections).each(function(i,c){
        drawConnection(c);
        
        
    });
    jsPlumb.draggable($("#draw .box"));
    
}

function drawConnection(c){
    
    //console.log(c);
    /*
        var endpoint1, endpoint2;
        if(c.tipo=='evaluacion')
            endpoint1=evaluacionEndpoint;
        else if(c.tipo=='paralelo')
            endpoint1=paraleloEndpoint;
        else if(c.tipo=='paralelo_evaluacion')
            endpoint1=paraleloEvaluacionEndpoint;
        else if(c.tipo=='union')
            endpoint2=unionEndpoint;
            */
        
        if(c.target!=null){     
            var connection=jsPlumb.connect({
                source: c.source,
                target: c.target,
                anchors: ["BottomCenter", "TopCenter"],
                paintStyle: {
                   strokeStyle: "#000000 ", 
                   lineWidth:1
               }
                //endpoints:[endpoint1,endpoint2],
                //parameters: {"id":c.id}
            });
            //console.log(connection);
        }
        
        if(c.tipo=="union")
            $("#draw #"+c.target).append('<div class="'+c.tipo+'"></div>');
        else
            $("#draw #"+c.source).append('<div class="conector '+c.tipo+'"></div>');
        
        if(!c.target)
            $("#draw #"+c.source).append('<div class="'+(c.tipo=='secuencial'?'final-secuencial':'final')+'"></div>');
}

/*
//Los eventos de jsPlumb los debo setear aca, ya que despues no se pueden setear con jquery live.
function setJSPlumbEvents(){
    var connections=jsPlumb.getConnections();
    $(connections).each(function(i,c){
        c.unbind();
        c.bind("dblclick",dblClickConnectionEvent);
        //$(c.endpoints).each(function(j,e){
        //    e.unbind();
        //    e.bind("dblclick",dblClickEndpointEvent);
        //});
    });
}
function dblClickConnectionEvent(connection){
    return true;
}

function dblClickEndpointEvent(endpoint){
    return true;
}
*/