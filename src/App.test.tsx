import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });
  test("It should mount app component", () => {
    expect(component.length).toBe(1);
  });
});
