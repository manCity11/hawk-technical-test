/* istanbul ignore file */
export class Card {
  constructor({
    id,
    name,
    cardmarket,
    images,
  } = {}) {
    this.id = id;
    this.name = name;
    this.price = cardmarket?.prices?.averageSellPrice || 0;
    this.image = images?.small;
  }
}
