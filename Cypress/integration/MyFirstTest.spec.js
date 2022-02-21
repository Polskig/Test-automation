describe('My First Test', function () {
    it('Clicks an element', function () {
        cy.visit('https://www.inet.se/')

        cy.contains('Jag förstår').click()

        cy.contains('Datorer').click()

        cy.url().should('include', '/kategori/27/datorer')

        cy.get('.form-control').type('MSI').should('have.value', 'MSI')

        cy.contains('Sök').click()
    })

    it('add something to the cart', function () {
        //cy.viewport('iphone-6')

        cy.visit('https://www.inet.se/')

        cy.contains('Jag förstår').click()

        cy.get('.form-control').type('MSI').should('have.value', 'MSI')

        cy.contains('Sök').click()

        cy.contains('MSI 27" Optix G273QF QHD IPS 165 Hz').click()

        cy.get('.product-purchase > .box-body > .btn').click()

        //cy.get('.product-name > a').should('MSI 27" Optix G273QF QHD IPS 165 Hz')
    })

    it('add something to the cart on a phone', function () {
        cy.viewport('iphone-6')

        cy.visit('https://www.inet.se/')

        cy.contains('Jag förstår').click()

        cy.get('.form-control').type('MSI').should('have.value', 'MSI')

        cy.contains('Sök').click()

        cy.contains('MSI 27" Optix G273QF QHD IPS 165 Hz').click()

        cy.get('.product-purchase > .box-body > .btn').click()

        //cy.get('.product-name > a').should('MSI 27" Optix G273QF QHD IPS 165 Hz')
    })

    it('Clicks thge next and previous on slides', function () {
        //cy.viewport('iphone-6')

        cy.visit('https://www.inet.se/')

        cy.contains('Jag förstår').click()

        cy.get('.next > .fa').click()

        cy.wait(1000)

        cy.get('.next > .fa').click()

        cy.wait(1000)

        cy.get('.next > .fa').click()

        cy.wait(1000)

        cy.get('.prev > .fa').click()

        cy.wait(1000)

        cy.get('.prev > .fa').click()

        cy.wait(1000)

        cy.get('.prev > .fa').click()
    })

    it('Clicks an element', function () {
        //cy.viewport('iphone-6')

        cy.visit('https://www.inet.se/')

        cy.contains('Jag förstår').click()

        cy.get('.form-control').type('MSI').should('have.value', 'MSI')

        cy.contains('Sök').click()

        cy.contains('MSI 27" Optix G273QF QHD IPS 165 Hz').click()

        cy.get('.product-purchase > .box-body > .btn').click()

        cy.get('.qty-selector > :nth-child(3)').click()

        cy.get('.qty-selector > :nth-child(3)').click()

        cy.get('.qty-selector > :nth-child(1)').click()

        cy.get('.qty-selector > :nth-child(1)').click()

        //cy.get('.qty-selector > :nth-child(1)').click()
    })
})