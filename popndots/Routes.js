class Routes {
  static register(name, handler) {
    if (this.handlers == null) this.handlers = {}
    this.handlers[name] = handler
  }
  static get(name, params) {
    if (this.handlers[name] == null) throw new Error('unknown route')
    return this.handlers[name](params)
  }
  static DotList() {
    return {
      component: require('./components/DotListScreen'),
      title: 'Dots List',
    }
  }
  static DotGoogleMapScreen() {
    return {
      component: require('./components/DotGoogleMapScreen'),
      title: 'Dots Google Map',
    }
  }
  static DotMapBoxScreen() {
    return {
      component: require('./components/DotMapBoxScreen'),
      title: 'Dots Map Box',
    }
  }
}

module.exports = Routes