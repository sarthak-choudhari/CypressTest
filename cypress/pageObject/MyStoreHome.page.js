const logIn='.login'
const userNameField='#email'
const passwordFiled='#passwd'
const loginButton='#SubmitLogin'
const productToolTip='[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"] > li'
const tShirtSection='a[title="T-shirts"]'

class HomePage{
  WomenToolTip(){
      cy.get(productToolTip).eq(0).invoke('show')
      //.trigger('mouseover')
  }
  Tshrit(){
      cy.get(tShirtSection).eq(0).click({force: true})
  }
  sinIn(){
    cy.get(logIn).should('be.visible').click()
  }
  userName(usr){
    cy.get(userNameField).should('be.visible').type(usr)
  }
  password(pswd){
      cy.get(passwordFiled).should('be.visible').type(pswd)
  }
  logIn(){
      cy.get(loginButton).should('be.visible').click()
  }
}
export default HomePage