console.log("Hello World from FILE LOAD");

Hooks.on("init", function() {
    console.log("Hello World from VTT INIT");
});

Hooks.on("ready", function() {
    console.log("Hello World from DATA READY");    
});

