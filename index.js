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
  constructor(a,b) {
    this.beginningLocation = a;
    this.endingLocation = b;
  }

  blocksTravelled() {
    if(this.beginningLocation.vertical < this.endingLocation.vertical) {
       return this.beginningLocation.vertical - this.endingLocation.vertical;
    }
  }
}
