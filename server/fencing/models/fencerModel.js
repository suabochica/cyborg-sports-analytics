class Fencer {
  constructor(name, lastname, country) {
    this.name = name
    this.lastname = lastname
    this.country = country
  }
}

/*
query getSingleFencer($fencerId: Int!) {
  course(id: $fencerId) {
    name
    lastname
    country
  }
}*/

module.exports = Fencer