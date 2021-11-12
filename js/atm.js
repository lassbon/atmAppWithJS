


function login() {
 
    // let username = document.getElementById('inputUsername').value
    // let password = document.getElementById('inputPassword').value

    // console.log(username)

    // alert(`Your username is ${username} and password is ${password}`)

    alert(50 + 67)

}













// const title= "Miss"
// const fullname = "Hikmah Abdganniyy"
// const bank = "GTBank"
// let password = "2234"
// let balance = 340435
// let accounNumber = '1234567890'

// let userSelection

// alert(`Welcome ${title} ${fullname}, to this ATM Machine`)
// let userInputPassword = prompt('Enter your password')

// if (userInputPassword != password) {
//    alert('Incorrect Password!!!')
// } else {
//     //user's passwors is correct
//     userSelection = prompt('Select an action to perform \n 1. Transfer \n 2. Withdrawal \n 3. Check Balanace \n 4. Change Pin \n 5. Bills Payment \n 6. Exit')
//     switch (userSelection) {
//         case '1':
//             //transfer
//                 console.log(`Before Transfer, Your current balance is ${balance}`)
//             //transfer
//             /* Todos:
//                 1. collect account number  and amount to transfer to
//                 2. check if teh custimer have that amount, proceed
//                 3. if not , you dont have that amount 
//             */
//             let accountNumberOfReceiver = prompt("Enter the receivers account number...")
//             let amountToTransfer = prompt("Enter the amount to transfer ...")
            
//             if (balance >= amountToTransfer) {
//                 //process the transfer transaction
//                 balance = balance - amountToTransfer
//                 //call trabsfer api here e.g interswitch
//                 //displey success alert on sucess transfer
//                 alert(`Your have successfully transfered ${amountToTransfer} to ${accountNumberOfReceiver}`)
//                 //reverse the transcation

//             } else {
//                 alert(`Insufficient funds`)
//             }
            
//             console.log(`After transfer Your balance is ${balance}`)
//             break
        
//         case '2':
//         //withdrawal
//             let withdrawalAmount = 0
//             alert(`Hello ${fullname}, You sa want to withdrawal...`)
//             let amountToWithdrawSelection = prompt('Select amount to withdraw \n 1. 10000 \n 2. 20000 3. 30000 \n4. Others')
//             switch (amountToWithdrawSelection) {
//                 case '1':
//                     //10000 withdrawal
//                     withdrawalAmount = 10000
//                     if (balance > withdrawalAmount) {
//                         //withdrawal  successful]
//                         balance = balance - withdrawalAmount
//                         alert('Take your cash, Thank you for banking with us')

//                     }else{
//                          alert('Oga , you know you dont have money and you still came here to withdrawal. Find you way jere')
//                     }
//                     break
//                 case '2':
//                     //20000 withdrawal
//                     withdrawalAmount = 20000
//                     if (balance > withdrawalAmount) {
//                         //withdrawal  successful]
//                         balance = balance - withdrawalAmount
//                         alert('Take your cash, Thank you for banking with us')

//                     }else{
//                          alert('Oga , you know you dont have money and you still came here to withdrawal. Find you way jere')
//                     }
//                     break
//                 case '3':
//                     //30000 withdrawal
//                     withdrawalAmount = 30000
//                     if (balance > withdrawalAmount) {
//                         //withdrawal  successful]
//                         balance = balance - withdrawalAmount
//                         alert('Take your cash, Thank you for banking with us')

//                     }else{
//                          alert('Oga , you know you dont have money and you still came here to withdrawal. Find you way jere')
//                     }
//                     break
//                 case '4':
//                     //others
//                     withdrawalAmount = prompt('Enter amount to withdraw ?')
//                     if (balance > withdrawalAmount) {
//                         //withdrawal  successful]
//                         balance = balance - withdrawalAmount
//                         alert('Take your cash, Thank you for banking with us')

//                     }else{
//                          alert('Oga , you know you dont have money and you still came here to withdrawal. Find you way jere')
//                     }
//                 default:
//                       alert('Invalid Selection.')

//             }
//             break
//         case '3':
//         //check balance
//             alert(`Your balance on account-number: ${accounNumber}  is ${balance} `)
//             break
//         case '4':
//         //chnage pin
//             let customerOldPin = prompt('Enter your old pin')

//             if (customerOldPin != password) {
//                 alert('Authentication failed.')
//             } else {
//                 let newPin = prompt('Enter a new pin')
//                 let confirmNewPin = prompt('Enter a new pin')
//                 if (newPin != confirmNewPin) {
//                     alert('Your pin does not match')
//                 } else {
//                     password = newPin
//                     alert('Your have sucessfully chnage your pin ')
//                 }
//             }
//             break
//         case '5':
//             break
//         case '6':
//             alert('Thank you for atm-ing with us.')
//             break
//         default:
//              alert('Invalid selection ');
//     }

    
    
// }






//  if (userSelection == 1) {

//      //transfer
//     console.log(`Before Transfer, Your current balance is ${balance}`)
//     //transfer
//     /* Todos:
//         1. collect account number  and amount to transfer to
//         2. check if teh custimer have that amount, proceed
//         3. if not , you dont have that amount 
//     */
//     let accountNumberOfReceiver = prompt("Enter the receivers account number...")
//     let amountToTransfer = prompt("Enter the amount to transfer ...")
            
//     if (balance >= amountToTransfer) {
//         //process the transfer transaction
//         balance = balance - amountToTransfer
//         //call trabsfer api here e.g interswitch
//         //displey success alert on sucess transfer
//          alert(`Your have successfully transfered ${amountToTransfer} to ${accountNumberOfReceiver}`)
//          //reverse the transcation

//      } else {
//         alert(`Insufficient funds`)
//     }
            
//             console.log(`After transfer Your balance is ${balance}`)





//      } else if (userSelection == 2) {
//         //withdrawal

        
//     } else if (userSelection == 3) {
//         //check balance

//     }else if (userSelection == 4) {
//         //change pin 

//     }else if (userSelection == 5) {
//         //Bills Payment 
//     }else if (userSelection == 6) {
//         //Exit
//     } else {
//         alert('Invalid selection!!!')
//     }






