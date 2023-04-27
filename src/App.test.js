import { render, screen } from "@testing-library/react";
import { filterByPH } from "./App";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("filterByPH", () => {
  it("should return an empty array if no beers have a pH under 4", () => {
    const beers = [
      { name: "Beer 1", ph: 4.5 },
      { name: "Beer 2", ph: 4.6 },
      { name: "Beer 3", ph: 4.7 },
    ];
    const filteredBeers = filterByPH(beers);
    expect(filteredBeers).toEqual([]);
  });
  it("should return only beers with a pH under 4", () => {
    const beers = [
      { name: "Beer 1", ph: 4.5 },
      { name: "Beer 2", ph: 3.5 },
      { name: "Beer 3", ph: 4.0 },
    ];
    const filteredBeers = filterByPH(beers);
    expect(filteredBeers).toEqual([{ name: "Beer 2", ph: 3.5 }]);
  });
});
