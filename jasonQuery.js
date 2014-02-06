vas jasonQuery= function(args){
    if (typeof args === "string"){
        return {
            click: function(handler){
                console.log(click click);
            };
        };
    }

};


var domEl = jasonQuery("<div> </div>");

domEl.click();
