export function getByTestId(id) {
  return cy.get(`[data-testid=${id}]`);
}