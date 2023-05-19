import BasePage from "../../page-objects/Base.page";
import SortingPage from "../../page-objects/Sorting.page";

describe('template spec', () => {

  beforeEach(() => {
    BasePage.visit();
  });

    it('Select "two", "four", "six" and "eight" and assert that they are selected',
        () => {
      SortingPage.visit();
      SortingPage.sortableGrid.click();
      SortingPage.gridItem.contains('Two').click();
      SortingPage.gridItem.contains('Four').click();
      SortingPage.gridItem.contains('Six').click();
      SortingPage.gridItem.contains('Eight').click();
      SortingPage.gridItem.contains('Two').should('have.attr', '[class="list-group-item active"]');
      SortingPage.gridItem.contains('Four').should('have.attr', '[class="list-group-item active"]');
      SortingPage.gridItem.contains('Six').should('have.attr', '[class="list-group-item active"]');
      SortingPage.gridItem.contains('Eight').should('have.attr', '[class="list-group-item active"]');
    });
})