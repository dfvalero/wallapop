describe('Home', () => {
  it('render with default props', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="global.search"] input').should('have.value', '');
    cy.get('[data-id="selector"]').should('contain', 'Title');
    cy.get('[data-id="favorites.count"]').should('contain', '0 Favorites');
    cy.get('[data-id="item"]').should('have.length', 5);
  });

  it('searches by title', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="global.search"] input').type('Iphone');
    cy.get('[data-id="global.search"] input').type('{Enter}');
    cy.get('[data-id="item"]').should(($list) => {
      expect($list).to.have.length(1);
    });
  });

  it('searches by price', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="selector"]').click();
    cy.get('[data-id="selector.option"]:nth-child(3)').click();
    cy.get('[data-id="global.search"] input').type('90');
    cy.get('[data-id="global.search"] input').type('{Enter}');
    cy.get('[data-id="item"]').should(($list) => {
      expect($list).to.have.length(2);
    });
  });

  it('adds and remove to favorite', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="favorites.count"]').should('contain', '1 Favorites');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="favorites.count"]').should('contain', '0 Favorites');
  });
});
