describe('Home', () => {
  it('render with default props', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="global.search"] input').should('have.value', '');
    cy.get('[data-id="selector"]').should('contain', 'Title');
    cy.get('[data-id="favorites.count"]').should('contain', '0 Favorites');
    cy.get('[data-id="item"]').should('have.length', 5);
  });
});
