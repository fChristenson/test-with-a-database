const UserService = require("../user_service");
const sinon = require("sinon");

describe("UserService test", () => {
  it("has a module", () => {
    expect(UserService).toBeDefined();
  });

  describe("listUsers test", () => {
    it("lists Users", () => {
      const MockModel = {
        find: sinon.spy()
      };
      const userService = UserService(MockModel);
      userService.listUsers();
      const expected = true;
      const actual = MockModel.find.calledOnce;
      expect(actual).toEqual(expected);
    });
  });

  describe("createUser test", () => {
    it("creates a user", () => {
      const save = sinon.spy();
      let name;
      let birthday;

      const MockModel = function(data) {
        name = data.name;
        birthday = data.birthday;

        return {
          ...data,
          save
        };
      };
      const userService = UserService(MockModel);

      userService.createUser("foo", "foo");

      const expected = true;
      const actual = save.calledOnce;

      expect(actual).toEqual(expected);
      expect(name).toEqual("foo");
      expect(birthday).toEqual("foo");
    });
  });
});
