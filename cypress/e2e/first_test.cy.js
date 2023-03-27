describe("login", () => {
	// TEST 1
	it("Log in to the LMS", () => {
		cy.visit("https://www.edu.goit.global/account/login");
		cy.get("#user_email").type("user888@gmail.com");
		cy.get("#user_password").type("1234567890");
		cy.contains("Log in").click();
		cy.wait(5000);
		// Log-out
		cy.get(".css-7afvtf").click();
		cy.contains("Log out").click();
	});
});
