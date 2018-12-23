export default class Campist {
  constructor(data) {
    this.names = data.names;
    this.lastNames = data.lastNames;
    this.age = data.age;
    this.weight = data.weight;
    this.team = data.team;
    this.allergies = data.allergies;
    this.medications = data.medications;
    this.insulinSchemeInterval = data.insulinSchemeInterval;
    this.insulinSchemeRatio = data.insulinSchemeRatio;
    this.basalInsulin = data.basalInsulin;
    this.foodTable = data.foodTable;
  }
}
