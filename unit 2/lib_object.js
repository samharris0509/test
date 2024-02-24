class Objectss {
    constructor(name) {
      this.name = name;
    }
  
    logName() {
      console.log(this.name);
    }
  }
  
  
  const Instance = new Objectss("Hello world");
  Instance.logName(); 
  