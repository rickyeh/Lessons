var api3 = {
  x: 0,
  incReturn: function() {
    return ++this.x;
  },
  hello: function() {
    console.log('Hello 3: ' + this.incReturn());
  }
};

