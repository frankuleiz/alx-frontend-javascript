export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._loaction = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._loaction;
  }
}