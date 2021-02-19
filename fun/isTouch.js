function isTouch(mr, fr) {
    if(mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2
         && mr.y - fr.y < mr.width/2 + fr.width/2 && fr.y - mr.y < mr.width/2 + fr.width/2) {
            mr.shapeColor = "red";
            fr.shapeColor = "red";
            console.log("Hello");
            return 1;
            
         }
    else
    {
        mr.shapeColor = "green";
        fr.shapeColor = "green";
        console.log("else hello")
        return 0;
        
    }
}