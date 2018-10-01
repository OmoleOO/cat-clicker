// Cat class
class Cat{
    constructor(name, image){
        //cat name
        this._name = name;
        //cat image src
        this._image = image;
        //number of clicks for cat instance
        this._numberOfClicks = 0;
    }
    
    getName(){
        return this._name;
    }
    
    setName(name){
        this._name = name;
    }
    
    getImage(){
        return this._image;
    }
    
    setImage(image){
        this._image = image;
    }
    
    getNumberOfClicks(){
        return this._numberOfClicks;
    }
    
    increaseNumberOfClicks(){
        this._numberOfClicks++;
    }
    
    resetNumberOfClicks(){
        this._numberOfClicks = 0;
    }
}