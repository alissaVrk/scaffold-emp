/// <reference types="cypress" />
import {getByTestId, addTestUserPerSpec, addTestUserOnce, getSpecTestUser} from "../../utils";

describe("login flows", () => {
    before(() => {
        addTestUserPerSpec()
    });
    beforeEach(() => {
        cy.visit("/login");
        cy.contains("Get Started").should("exist");
    });

    it("should login and navigate welcome page", () => {
        loginUser(getSpecTestUser(), "123456");

        cy.contains("Welcome vvv bar").should("exist");
    });

    it("should show error for server fail", () => {
        loginUser("+19691234567", "123450");

        cy.contains("could not login user").should("exist");
    });

    it("should go back to phone screen when back is pressed when on pin screen", () => {
        cy.get("input").type("+19691234567");
        cy.get("button").click();

        cy.contains("Enter the code").should("exist");
        getByTestId("back").click();
        cy.contains("Get Started").should("exist");

        cy.get("input").should("have.value", "+1 (969) 123-4567");
    });

    it("should navigate to a page that doesn't require login on close", () => {
        getByTestId("close").click();

        cy.contains("this is some page").should("exist");
    });

    it("should log out and navigate to a page that doesn't require login on LOGOUT", () => {
        loginUser(getSpecTestUser(), "123456");

        cy.contains("Welcome vvv bar").should("exist");

        cy.contains("Sign Out").click();

        cy.contains("this is some page").should("exist");
    })
});

describe("protected page navigation", () => {
    it("should navigate to login page, login and navigate to paths on sucess", () => {
        cy.visit("/paths");

        cy.contains("Get Started").should("exist");

        addTestUserOnce().then(phoneNumber => {
            loginUser(phoneNumber, "123456");
        });

        cy.contains("Preparing for a loss").should("exist");
    });

    it("should navigate directly after login", () => {
        cy.visit("/login");
        loginUser(getSpecTestUser(), "123456");

        cy.contains("paths").click();

        cy.contains("Preparing for a loss").should("exist");
    })
})


function loginUser(phoneNumber, code) {
    cy.get("input").type(phoneNumber);
    cy.get("button").click();

    cy.contains("Enter the code").should("exist");

    cy.get("swd-pin-field").find("input").then($input => {
        for (let i = 0; i < code.length; i++) {
            const input = $input.get(i);
            cy.get(input).type(code.at(i));
        }
    });
}
