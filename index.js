class Driver {
  constructor(a,b) {
    this.name = a;
    this.startDate = new Date(b);
  }

  yearsExperienceFromBeginningOf(n) {
    return this.startDate.year - n
  }
}
