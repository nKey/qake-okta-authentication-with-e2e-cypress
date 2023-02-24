describe("teste", () => {
  before(() => {
    cy.loginByOktaApi();
  });
  it("teste2", () => {
    cy.visit("http://localhost:3000/");
  });
});
