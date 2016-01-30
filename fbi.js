var prompt = require('prompt');
prompt.start();

prompt.get(['first_name', 'last_name', 'age', 'time_of_sighting', 'location_of_sighting','name_of_another_witness','description_of_sighting','initial_thoughts'], function(err, result) {

    var answers = 0;

    if (result.first_name !== '') {
        answers ++;
    }
    if (result.last_name !== '') {
        answers ++;
    }    
    if (result.age !== '') {
        answers ++;
    }
    if (result.time_of_sighting !== '') {
        answers ++;
    }    
    if (result.location_of_sighting !== '') {
        answers ++;
    }    
    if (result.name_of_another_witness !== '') {
        answers ++;
    }    
    if (result.description_of_sighting !== '') {
        answers ++;
    }    


    var report = `FBI aliens sighting report:

    Eye witness name is ${result.first_name} ${result.last_name} at age: ${result.age}
    According to eye witness sighting happened sometime around ${result.time_of_sighting} near ${result.location_of_sighting}
    Another possible witness includes ${result.name_of_another_witness}
    The sighting is described as: ${result.description_of_sighting} and the witness'\s initial thoughts are: ${result.initial_thoughts}
    This is the witness'\s 11th encounter

    `;

    console.log(report);

    if (answers > 7) {
        console.log("Report Conclusion: Complete");
    }    
    if (answers < 5) {
        console.log("Report Conclusion: Unreliable");
    }    
    if (answers < 2) {
        console.log("Report Conclusion: Very Unreliable");
    }
});