class Driver {
  constructor(a,b) {
    this.name = a;
    this.startDate = new Date(b);
  }

  yearsExperienceFromBeginningOf(n) {
    return n - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(a,b) {
    this.beginningLocation = a;
    this.endingLocation = b;
  }

  blocksTravelled() {
       return Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical) + ;
  }
}
