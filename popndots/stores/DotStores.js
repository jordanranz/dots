class DotStore {
  static fetch() {
    return fetch(this.url())
      .then(response => response.json())
  }
  fetch() {
    return this.constructor.fetch()
      .then((items) => {
        this.reset(items)
        this.emitChange()
        return items
      })
  }
  ordered() {
    return _.sortBy(this.all(), 'position')
  }
}

module.exports = new DotStore