it('waits for promises to resolve', () => {
    let waited = false
    function waitOneSecond() {
      // return a promise that resolves after 1 second
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          // set waited to true
          waited = true
          // resolve with 'foo' string
          resolve('foo')
        }, 1000)
      })
    }
    cy.wrap(null).then(() => {
      // return a promise to cy.then() that
      // is awaited until it resolves
      return waitOneSecond().then((str) => {
        expect(str).to.eq('too')
        expect(waited).to.be.true
      })
    })
  })