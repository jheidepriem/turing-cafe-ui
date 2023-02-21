describe('Turing Cafe Reservations', () => {
  
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'library.json'})
      cy.visit('http://localhost:3000/')
    });

    it('Should display a title and cards with ideas that have a name, date, time, and number of guests', () => {
      cy.contains('Turing Cafe Reservations')
        .get('.card')
        .should('have.length', 9)
      cy.contains('Christie')
      cy.contains('Leta')
      cy.contains('Pam')
      cy.contains('Khalid')
      cy.contains('Will')
      cy.contains('Eric')
      cy.contains('Robbie')
      cy.contains('Travis')
      cy.contains('Brittany')
    })

    it('Should be able to add a name, date, time, and number of guests to create a reservation', () => {
      cy.get('input').first()
        .type("Josephine")
        .should('have.value', 'Josephine')
      cy.get('input').eq(1)
        .type('2023-02-23')
        .should('have.value', '2023-02-23')
      cy.get('input').eq(2)
        .type('07:00')
        .should('have.value', '07:00')
      cy.get('input').eq(3)
        .type('8')
        .should('have.value', '8')
      cy.get('button').first().click()
      cy.get('.card').eq(9).contains('Josephine')
      cy.get('p').contains('2023-02-23')
      cy.get('p').contains('07:00')
      cy.get('p').contains('8')
        .should('be.visible')
    })
  })
