import { shallow } from "enzyme";
import Layout from "./index";

describe("<Layout />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Layout />);
  });
  test("It should mount layout component", () => {
    expect(component.length).toBe(1);
  });
});
