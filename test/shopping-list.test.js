//SYNCHRONOUS CODE//
chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe("Shopping List Item Tests", () => {
  it("ShoppingListItem should be a class", () => {
    expect(ShoppingListItem).to.be.a("function");
  });

  it("ShoppingListItem has a property named name", () => {
    var name = new ShoppingListItem("name");
    name.name.should.equal("name");
  });

  it("ShoppingListItem has a property named description", () => {
    var description = new ShoppingListItem("description");
    description.description.should.equal("description");
  });

});
