const title= "Miss"
const fullname = "Hikmah Abdganniyy"
const bank = "GTBank"
const password = "2234"
let balance = 340435

let userSelection

alert(`Welcome ${title} ${fullname}, to this ATM Machine`)
let userInputPassword = prompt('Enter your password')

if (userInputPassword != password) {
   alert('Incorrect Password!!!')
} else {
    //user's passwors is correct
    userSelection = prompt('Select an action to perform \n 1. Transfer \n 2. Withdrawal \n 3. Check Balanace \n 4. Change Pin \n 5. Bills Payment \n 6. Exit')
    if (userSelection == 1) {
        console.log(`Before Transfer, Your current balance is ${balance}`)
        //transfer
        /* Todos:
            1. collect account number  and amount to transfer to
            2. check if teh custimer have that amount, proceed
            3. if not , you dont have that amount 
        */
        let accountNumberOfReceiver = prompt("Enter the receivers account number...")
        let amountToTransfer = prompt("Enter the amount to transfer ...")
        
        if (balance >= amountToTransfer) {
            //process the transfer transaction
            balance = balance - amountToTransfer
            //call trabsfer api here e.g interswitch
            //displey success alert on sucess transfer
            alert(`Your have successfully transfered ${amountToTransfer} to ${accountNumberOfReceiver}`)
            //reverse the transcation

        } else {
            alert(`Insufficient funds`)
        }
        
        console.log(`After transfer Your balance is ${balance}`)
    


    } else if (userSelection == 2) {
        //withdrawal
        
    } else if (userSelection == 3) {
        //check balance

    }else if (userSelection == 4) {
        //change pin 

    }else if (userSelection == 5) {
        //Bills Payment 
    }else if (userSelection == 6) {
        //Exit
    } else {
        alert('Invalid selection!!!')
    }
}






