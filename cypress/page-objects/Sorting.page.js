import BasePage from "./Base.page";

class SortingPage extends BasePage{

    static get url(){
        return "/sortable"
    }

    static visit(){
        cy.visit(this.url)
    }

    static get sortableGrid(){
        return cy.get('#demo-tab-grid')
    }

    static get gridItem(){
        return cy.get('.create-grid .list-group-item')
    }
}

export default SortingPage;