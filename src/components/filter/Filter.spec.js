import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";

import Filter from "./Filter";

describe("test filter component", () => {
  test("render filter component", () => {
    render(<Filter />);

    //* get filter elements
    const filterInput = screen.getByRole("textbox");
    const filteredUsers = screen.getByRole("list");
    const users = screen.getAllByRole("listitem");

    //* should have filter elements
    expect(filterInput).toBeInTheDocument();
    expect(filteredUsers).toBeInTheDocument();
    expect(users).toHaveLength(10);
  });

  test("should set input value and filter values", async () => {
    render(<Filter />);

    //* get filter elements
    const filterInput = screen.getByRole("textbox");
    const unfilteredUsers = screen.getAllByRole("listitem");

    //* should have 10 users
    expect(unfilteredUsers).toHaveLength(10);

    //* set input value
    fireEvent.change(filterInput, { target: { value: "le" } });

    //* get filtered users
    await waitFor(() => {
      const filteredUsers = screen.getAllByRole("listitem");
      expect(filteredUsers).toHaveLength(5);
    });

    //* should have filter
    expect(filterInput.value).toBe("le");
  });
});
