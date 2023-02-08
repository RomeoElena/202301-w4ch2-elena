import { render } from "@testing-library/react";
import App from "./App";
describe("given App component", () => {
  describe("when FirstForm", () => {
    test("then app renders it", () => {
      const { getByText } = render(<App></App>);
      expect(getByText(/data/i)).toBeInTheDocument();
    });
  });
});
