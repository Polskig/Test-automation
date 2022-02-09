describe('My First Test', function () {
    it('Clicks an element', function () {
        cy.visit('https://www.inet.se/')

        cy.contains('Jag förstår').click()

        cy.contains('Datorer').click()

        cy.url().should('include', '/kategori/27/datorer')

        cy.get('.form-control').type('MSI').should('have.value', 'MSI')

        cy.contains('Sök').click()
    })
})