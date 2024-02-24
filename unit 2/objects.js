
class Objectss {
    constructor(name) {
      this.name = name;
    }
  
    logName() {
      console.log(this.name);
    }
  
    static logNames(objects) {
      objects.forEach(obj => {
        console.log(obj.name);
      });
    }
  }
  
  const object = new Objectss("hello");
  const object2 = new Objectss("world");
  
  object.logName();  
  object2.logName(); 
  

  const objectsArray = [object, object2];
  

  Objectss.logNames(objectsArray); 
  
