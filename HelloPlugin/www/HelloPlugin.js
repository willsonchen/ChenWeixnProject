var HelloPlugin = function() {};   

HelloPlugin.prototype.alert = function() {  
    alert("I am a js plugin");  
};  

var helloPlugin = new HelloPlugin();  
module.exports = helloPlugin;
