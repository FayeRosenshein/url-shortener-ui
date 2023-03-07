describe('url spec', () => {
	beforeEach(() => {
		cy.intercept({ method: "GET", url: "http://localhost:3001/api/v1/urls" }, { fixture: "urls" })
		cy.visit("http://localhost:3000/")
	})
	it('should view the page title and the existing shortened URLs', () => {
		cy.get('h1').contains('URL Shortener')
		cy.get('main').should('be.visible')
		cy.get('.url-container')
	})
	it('should view the Form with the proper inputs', () => {

	})
	it('when a user fills out the form, the information shouuld be reflected in the input fields', () => {

	})
	it('When a user fills out and submits the form, the new shortened URL should rendered', () => {

	})
})
