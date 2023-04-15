import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Landing } from "./Landing";

describe("Landing Page", () => {
  it("renders the form", () => {
    const { getByLabelText } = render(<Landing />);
    expect(
      getByLabelText("Aanwezig bij openingsfeest op 24 september")
    ).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Leeftijd")).toBeInTheDocument();
    expect(getByLabelText("Geslacht")).toBeInTheDocument();
    expect(getByLabelText("Woonplaats")).toBeInTheDocument();
    expect(getByLabelText("Abonneren op de nieuwsbrief")).toBeInTheDocument();
  });
});

describe("Landing Page", () => {
  it("updates the form inputs correctly", () => {
    const { getByLabelText } = render(<Landing />);
    const emailInput = getByLabelText("Email") as HTMLInputElement;
    const ageInput = getByLabelText("Leeftijd") as HTMLInputElement;
    const genderInput = getByLabelText("Geslacht") as HTMLInputElement;
    const locationInput = getByLabelText("Woonplaats") as HTMLInputElement;
    const newsletterInput = getByLabelText(
      "Abonneren op de nieuwsbrief"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(ageInput, { target: { value: "30-39" } });
    fireEvent.change(genderInput, { target: { value: "man" } });
    fireEvent.change(locationInput, {
      target: { value: "Driebergen-Rijsenburg" },
    });
    fireEvent.change(newsletterInput, { target: { value: "ja" } });

    expect(emailInput.value).toBe("test@test.com");
    expect(ageInput.value).toBe("30-39");
    expect(genderInput.value).toBe("man");
    expect(locationInput.value).toBe("Driebergen-Rijsenburg");
    expect(newsletterInput.value).toBe("ja");
  });
});
