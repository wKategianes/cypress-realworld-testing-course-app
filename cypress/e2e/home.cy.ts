// beforeEach Hook - runs before the tests
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("hero section", () => {
    
    // .contains text is case sensative
    it('the h1 contains the correct text', () => {
      cy.get("[data-test='hero-heading']").contains('Testing Next.js Applications with Cypress')
    })
  
    it('the features on the homepage are correct', () => {
      cy.visit('http://localhost:3000')
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context("Courses section", () => {
    it.only("Courses: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it.only("Courses: Testing Your First Next.js Application", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it.only("Courses: Testing Your First Next.js Application", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})