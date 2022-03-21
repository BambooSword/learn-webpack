function GrandPa(val) {
  this.grandPa = val;
}
GrandPa.prototype.getGrandPa = function () {
  console.log(this.val);
};
function Parent(parent, grandpa) {
  GrandPa.call(this, grandpa);
  this.val = parent;
}
  Parent.prototype = Object.create(GrandPa.prototype, {
    constructor: {
      value: Parent,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
// Parent.prototype.__proto__=GrandPa.prototype;
Parent.prototype.getValue = function () {
  console.log(this.val);
};

function Child(child, parent, grandpa) {
  Parent.call(this, parent, grandpa);
  this.child = child;
}
  Child.prototype = Object.create(Parent.prototype, {
    constructor: {
      value: Child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
// Child.prototype.__proto__=Parent.prototype;

Child.prototype.getChild = function () {
  console.log(this.child);
};
let c = new Child("1", "2", "3");
c.getChild()
