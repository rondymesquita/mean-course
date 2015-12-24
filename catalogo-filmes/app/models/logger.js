var Log = function(){
    this.info = function(msg){
        console.log("==> " + msg);
    };
    return new Log();
}
