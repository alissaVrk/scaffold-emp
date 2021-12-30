export function addTestUserPerSpec(withAccount= true){
  cy.request("POST", `${Cypress.env("api_server")}/e2eTests/${getFunctionName(withAccount)}`).then(res => {
    //this way you can add a test user once per spec and not per test (config lives per single file)
    Cypress.config("phoneNumber", res.body.phoneNumber);
  });
}

export function getSpecTestUser() {
  return Cypress.config("phoneNumber");
}

export function addTestUserOnce(withAccount= true) {
  return cy.request("POST", `${Cypress.env("api_server")}/e2eTests/${getFunctionName(withAccount)}`).then(res => {
    return cy.wrap(res.body.phoneNumber);
  });
}

const getFunctionName = withAccount => withAccount ? "addTestUserWithAccount" : "addTestUser";
