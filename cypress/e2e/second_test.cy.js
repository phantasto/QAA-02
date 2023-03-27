/// <reference types="cypress" />

describe("log in, log out", () => {
	// TEST 2
	beforeEach(() => {
		cy.visit("https://www.edu.goit.global/account/login");
	});
	it("Log in to the LMS", () => {
		cy.get("#user_email").type("testowyqa@qa.team");
		cy.wait(1000);
		cy.get("#user_password").type("QA!automation-1");
		cy.wait(1000);
		cy.contains("Log in").click();
		// Log-out
		cy.get(".css-7afvtf").click();
		cy.wait(1000);
		cy.contains("Log out").click();
	});
});
