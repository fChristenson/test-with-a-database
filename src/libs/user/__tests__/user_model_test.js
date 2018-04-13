var mongoose = require("mongoose");
// we use a test database for testing
var mongoDB = "mongodb://127.0.0.1/my_test_database";
mongoose.connect(mongoDB);
const User = require("../user_model");

describe("User model test", () => {
  beforeAll(async () => {
    await User.remove({});
  });

  afterEach(async () => {
    await User.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("has a module", () => {
    expect(User).toBeDefined();
  });

  describe("get user", () => {
    it("gets a user", async () => {
      const user = new User({ name: "foo", birthday: "1987-01-02" });
      await user.save();

      const foundUser = await User.findOne({ name: "foo" });
      const expected = "foo";
      const actual = foundUser.name;
      expect(actual).toEqual(expected);
    });
  });

  describe("save user", () => {
    it("saves a user", async () => {
      const user = new User({ name: "foo", birthday: "1987-01-02" });
      const savedUser = await user.save();
      const expected = "foo";
      const actual = savedUser.name;
      expect(actual).toEqual(expected);
    });
  });

  describe("update user", () => {
    it("updates a user", async () => {
      const user = new User({ name: "foo", birthday: "1987-01-02" });
      await user.save();

      user.name = "bar";
      const updatedUser = await user.save();

      const expected = "bar";
      const actual = updatedUser.name;
      expect(actual).toEqual(expected);
    });
  });
});
