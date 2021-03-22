class LoginPage{

userNameField(){
    return cy.get('#user-name').should('be.visible')
}

passwordField(){
    return cy.get('#password').should('be.visible')
    
}

loginButton(){
    return cy.get('#login-button').should('be.enabled').click()
}
notificationError(){
    return cy.get('[data-test="error"]')
}

}
export default LoginPage;