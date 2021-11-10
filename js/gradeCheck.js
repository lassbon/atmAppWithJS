var firstName = prompt('Hey, what is your fullname')
console.log(`got ahere after receiving the firstName, the user entered ${firstName}`)

//alert('Yoooooo '+ firstName+ "/n"+ ", Welcome')
alert(`Yooooo ${firstName}, \n Welcome to Abasss palace.`)
var age = prompt('How old are you')
console.log(`got ahere after receiving the age, the age entered is ${age}`)
if(age < 18){
    console.log('entered this if block')
    alert(`Hey ${firstName}, you seem to be underage kindly come back when you are old enough`)

} else {
    console.log('entered this else block, seems the user is above 18')
       var examScore = prompt(`Mr ${firstName}, what is your exams score(1-100)`)

        // if(examScore >= 70){

        //     grade = 'A'

        // }else if(examScore >=60){
        //     grade  = 'B'

        // }else if(examScore >=50){

        //     grade = 'C'
        // }else if(examScore >=45){

        //     grade = 'D'
        // }else if(examScore >=40){

        //     grade = 'E'
        // }else{
        //     grade = 'F'
        // }
    
    //Teneray Operator
           (examScore >= 70) ? grade = 'A'
           : (examScore >60) ? grade = 'B'
           :  (examScore >= 50) ? grade = 'C'
           : (examScore >= 45) ? grade = 'D'
           : (examScore >= 40) ? grade = 'E'
           : grade = 'F'

alert(`Fullname: ${firstName} \n Age: ${age}years \n Exam score: ${examScore} \n Grade: ${grade}`)

}