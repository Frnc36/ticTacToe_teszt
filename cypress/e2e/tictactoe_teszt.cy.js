describe("template spec", () => {
  /* 1. Létezik-e az oldal? */
  it("OldalBetoltodik-e", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
  });
  /* 2. Van-e 9 darab div? */
  it("Van-e9DbDiv", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    cy.get("div.elem").should("have.length", 9);
  });
  /* 4. Első kattintásra biztosan "X" lesz a szöveg? */
  it("KattintasX", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    cy.get("div.elem").eq(0).click();
    cy.get("div.elem").eq(0).should("contain", "X");
    //cy.get("div.elem").click({ multiple: true });
  });
  /* 5. Első kattintásra "X", második div-re katt. "O" (Ciklus kell) */
  it("KattintasXMasodikraO", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    for (let i = 0; i < 2; i++) {
      cy.get("div.elem").first().click();
    }
  });
});
