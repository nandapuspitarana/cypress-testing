describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://payoff.regopantes.com');

    cy.contains('Pesan Sekarang').click();
  });
});
