describe('Turing Cafe', () => {
  
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'library.json'})
      cy.visit('http://localhost:3000/')
    });
    
  })
