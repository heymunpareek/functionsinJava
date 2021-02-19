function collide() {
    
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
        movingRect.velocityY = fixedRect.velocityY;
  }
  }