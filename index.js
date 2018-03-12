class Driver {
  constructor(a,b) {
    this.name = a;
    this.startDate = new Date(b);
  }

  yearsExperienceFromBeginningOf(n) {
    return n - this.startDate.getFullYear()
  }
}

class Route {
  blocksTravelled() {
    
  }
}
