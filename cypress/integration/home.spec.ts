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
    cy.get('[data-id="item"]').should('have.length', 1);
  });

  it('searches by price', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="selector"]').click();
    cy.get('[data-id="selector.option"]:nth-child(3)').click();
    cy.get('[data-id="global.search"] input').type('90');
    cy.get('[data-id="global.search"] input').type('{Enter}');
    cy.get('[data-id="item"]').should('have.length', 2);
  });

  it('adds and remove to favorite', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="favorites.count"]').should('contain', '1 Favorites');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="favorites.count"]').should('contain', '0 Favorites');
  });

  it('opens modal without any favorites', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="favorites.count"]').click();
    cy.get('[data-id="modal.title"]').should('contain', 'My Favorites');
    cy.get('[data-id="favorites.items"]').should('contain', 'No Favorites');
  });

  it('opens modal without one favorite', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="favorites.count"]').click();
    cy.get('[data-id="favorite.item"]').should('have.length', 1);
  });

  it('removes favorite from modal', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="favorites.count"]').click();
    cy.get('[data-id="trash.favorite"]').click();
    cy.get('[data-id="favorites.count"]').should('contain', '0 Favorites');
    cy.get('[data-id="favorites.items"]').should('contain', 'No Favorites');
  });

  it('searches in favorite modal', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="icon.favorite"]').first().click();
    cy.get('[data-id="icon.favorite"]').last().click();
    cy.get('[data-id="favorites.count"]').should('contain', '2 Favorites');
    cy.get('[data-id="favorites.count"]').click();
    cy.get('[data-id="favorites.items"] input').type('Coche');
    cy.get('[data-id="favorite.item"]').should('have.length', 1);
  });

  it('closes modal', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="favorites.count"]').click();
    cy.get('[data-id="modal.title"]').should('contain', 'My Favorites');
    cy.get('[data-id="modal.close"]').click();
    cy.get('[data-id="modal.title"]').should('not.exist');
  });

  it('loads more items', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-id="item"]').should('have.length', 5);
    cy.get('[data-id="view.more"]').click();
    cy.get('[data-id="item"]').should('have.length', 10);
  });
});
