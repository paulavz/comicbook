import Menu from ".";
import { render } from "../TestUtils/render";

test("Render Menu in Home Page", () => {
  render(<Menu title="Test" showMenu={false} />);
});

test("Render Menu in Comic Details Componentes", () => {
  render(<Menu title="Test" showMenu={true} />);
});
