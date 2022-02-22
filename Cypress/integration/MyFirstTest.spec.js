describe('Tests clicking a button in the side menu', function () {
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

    describe('Tests datorbygge', function () {
        it('Clicks thge next and previous on slides', function () {
            //cy.viewport('iphone-6')
    
            cy.visit('https://www.inet.se/')
    
            cy.contains('Jag förstår').click()
    
            cy.get(':nth-child(22) > .tree-item > .item-button > .name').click()
    
            cy.get('#chassi > a > .large').click()
    
            cy.get('.form-control').type('Phanteks P600S Tempered Glass Svart').should('have.value', 'Phanteks P600S Tempered Glass Svart')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#cpu > a > .large').click()
    
            cy.get('.form-control').type('AMD Ryzen 9 5900X').should('have.value', 'AMD Ryzen 9 5900X')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#gpu > a > .large').click()
    
            cy.get('.form-control').type('msi rtx 3080 ti suprim').should('have.value', 'msi rtx 3080 ti suprim')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#mobo > a > .large').click()
    
            cy.get('.form-control').type('MSI MPG X570S CARBON MAX WIFI').should('have.value', 'MSI MPG X570S CARBON MAX WIFI')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#ram > a > .large').click()
    
            cy.get('.form-control').type('Corsair 32GB (2x16GB) DDR4 3200MHz CL16 Vengeance RGB RT Svart').should('have.value', 'Corsair 32GB (2x16GB) DDR4 3200MHz CL16 Vengeance RGB RT Svart')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#ssd > a > .large').click()
    
            cy.get('.form-control').type('Gigabyte AORUS NVMe Gen4 7000s SSD 1TB').should('have.value', 'Gigabyte AORUS NVMe Gen4 7000s SSD 1TB')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#cooler > a > .large').click()
    
            cy.get('.form-control').type('Noctua NH-U12A Chromax Black').should('have.value', 'Noctua NH-U12A Chromax Black')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#psu > a > .large').click()
    
            cy.get('.form-control').type('Corsair RM1000X 1000W v3').should('have.value', 'Corsair RM1000X 1000W v3')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.get('#os > a > .large').click()
    
            cy.get('.form-control').type('Windows 11 Home Svensk 64-bit OEM').should('have.value', 'Windows 11 Home Svensk 64-bit OEM')
    
            cy.wait(1000)
    
            cy.get('.price-buy-compare > .btn').click()
    
            cy.wait(1000)
    
            cy.get('.button-toolbar-pc > a > .btn').click()
        })
    })
})