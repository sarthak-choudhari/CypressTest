const flightFiled = 'div.fl-input-container ' 
const autoSuggestionName='._15Xg > span'
const calender='.ombl > table '
const allDates ='div._2JMZ:visible'

class FlightBook{
    
fromFlightFiled(fromName,zipPin){
    cy.get(flightFiled).eq(0).type(fromName)
   
    cy.get(autoSuggestionName).each(($e1,index,$list)=>{
        if($e1.text() ===zipPin)
        {
        $e1.click()
        }
       
    })
}

toFlightFiled(fromName,AirPin){
    cy.get(flightFiled).eq(1).type(fromName)
    cy.wait(2000)
   
    cy.get(autoSuggestionName).each(($e1,index,$list)=>{
        if($e1.text() ===AirPin)
        {
        $e1.click()
        }
       
    })
}
departureDate(selectDate){
    cy.get(flightFiled).eq(2).click()
    cy.get(calender).eq(0).find(allDates).each(($e1,index,$list)=>{
        
        if($e1.text() ===selectDate)
        {
        $e1.click()
        }
       
    })   
}
returnDate(selectDate){
    cy.get(flightFiled).eq(3).click()
    cy.get(flightFiled).eq(3).click()
    cy.get(calender).eq(1).find(allDates).each(($e1,index,$list)=>{
        
        if($e1.text() ===selectDate)
        {
        $e1.click()
        }
       
    }) 
}
searchFlight(){
    cy.get('.button').click({force: true})
}
selectFlight(flightNo){
  return  cy.xpath('//div[text()="'+flightNo+'"]/ancestor::div[@class="_3215 row"]/descendant::a[text()="Book "]').invoke('removeAttr','target')
}
nonStopCheckBox(){
    cy.get('div._1N9s').click()
    
}

}
export default FlightBook