describe('url spec', () => {
	beforeEach(() => {
		cy.intercept({ method: "GET", url: "http://localhost:3001/api/v1/urls" }, { fixture: "urls" })
		cy.visit("http://localhost:3000/")
	})
	it('should view the page title and the existing shortened URLs', () => {
		cy.get('h1').contains('URL Shortener')
		cy.get('main').should('be.visible')
		cy.get('main').find('section').should('have.length', 1).contains('Awesome photo')
	})
	it('should view the Form with the proper inputs', () => {
		cy.get("#root > main > Header").find('form').should('be.visible')
			.get('input.title').should('be.visible')
			.get('input.long-url').should('be.visible')
	})
	it('when a user fills out the form, the information shouuld be reflected in the input fields', () => {
		cy.get('.title').type('title').should('have.value','title')
		cy.get('.long-url').type('long url').should('have.value','long url')
	})
	it('When a user fills out and submits the form, the new shortened URL should rendered', () => {
		cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      id: 2,
      long_url: "long url",
      short_url: "http://localhost:3001/useshorturl/2",
      title: "title",
    })
		cy.get('.title').type('title').should('have.value','title')
		cy.get('.long-url').type('long url').should('have.value','long url')
		cy.get('button').click()
		cy.get('main').find('section').contains('long url')
	})
})
