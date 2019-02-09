//SYNCHRONOUS CODE//
chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe("Shopping List Item Tests", () => {
  it("ShoppingListItem should be a class", () => {
    expect(ShoppingListItem).to.be.a("function");
  });

  it("ShoppingListItem has a property named name", () => {
    var myItem = new ShoppingListItem("pizza");
    expect(myItem).to.have.property("name")
  });

  it("ShoppingListItem has a property named description", () => {
    var itemDescription = new ShoppingListItem("cheesy goodness");
    expect(itemDescription).to.have.property("description")
  });

  it("ShoppingListItem has a property named isDone", () => {
    var isDone = new ShoppingListItem("isDone");
    expect(isDone).to.have.property("isDone")
  });



});
