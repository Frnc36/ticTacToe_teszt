describe("template spec", () => {
  it("OldalBetoltodik-e", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
  });

  it("Van-e9DbDiv", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    cy.get("div.elem").should("have.length", 9);
  });

  it("KattintasX", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    cy.get("div.elem").eq(0).click();
    cy.get("div.elem").eq(0).should("contain", "X");
    //cy.get("div.elem").click({ multiple: true });
  });

  it("KattintasXMasodikraO", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    for (let i = 0; i < 2; i++) {
      cy.get("div.elem").first().click();
    }
  });
});
