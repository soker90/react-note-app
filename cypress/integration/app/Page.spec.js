describe('Page - <App />', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Initial state is correct', () => {
    cy.get('[data-cy=main-layout-container]').children().should('have.length', 5)
    cy.get('[data-cy=delete-button]').should('not.exist');
    cy.get('[data-cy=update-button]').should('not.exist');
    cy.get('[data-cy=undo-button]').should('not.exist');
  });

  it('Add a new Note', () => {
    cy.get('[data-cy=new-note]').click();
    cy.get('[data-cy=main-layout-container]').children().should('have.length', 6)
  })

  it('Delete a note', () => {
    cy.get('[data-cy=main-layout-container]').children().first().click();
    cy.get('[data-cy=delete-button]').click();
    cy.get('[data-cy=main-layout-container]').children().should('have.length', 4);
  })
});
