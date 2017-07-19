
var game = {
  var letterGuessed : [],
  
}

//========
// var createAccount = function(){
//   var balance = 0; //private
//   var newAccount = {
//     name:'asd';
//     getBalance: function(){
//       return balance;
//     }
//     deposit:function(amount){
//       balance+= amount;
//     }
//   }
// }

// //========


// var savingsAccount = {
//   balance:500, //balance should be placed somewhere safe
//   savingsInput:document.querySelector('#savingsInput'),
//   savingsOutput:document.querySelector('#savingsOutput'),

//   withdraw:function(){
//     var amount = parseInt(savingsInput.value);
//     //check if amount is less than balance
//     if (amount <= savingsAccount.balance){
//       savingsAccount.balance-=amount;
//     } else {
//       if (checkingAccount.withdraw(amount - savingsAccount.balance) === success){
//         savingsAccount.balance = 0;  
//       }
//     }
//     savingsOutput.textContent = '$'+savingsAccount.balance;
    
//     if(savingsAccount.balance === 0){
//       savingsAccountDiv.style.backgroundColor = "red";
//     }
//   },
//   deposit:function(){
//     savingsAccount.balance+=parseInt(savingsInput.value);
//     savingsOutput.textContent = '$'+savingsAccount.balance;
//     if(savingsAccount.balance > 0){
//       savingsAccountDiv.style.backgroundColor = "grey";
//     }
//   }
// }

// var checkingAccount = {
//   balance:500, 
//   withdraw:function(amount){
//     if (amount === null){
//       amount = parseInt(checkingInput.value);
//     } else if (typeof amount != 'number'){
//       amount = parseInt(checkingInput.value);
//     }
    
//     if (amount <= checkingAccount.balance){
//       checkingAccount.balance-=amount;
//       checkingOutput.textContent = '$'+checkingAccount.balance;
//       if(checkingAccount.balance === 0){
//         checkingAccountDiv.style.backgroundColor = "red";
//       }
//       return true;
//     } else {
//       return false;
//     }
//   },
//   deposit:function(){
//     checkingAccount.balance+=parseInt(checkingInput.value);;
//     checkingOutput.textContent = '$'+checkingAccount.balance;  
//     if(checkingAccount.balance > 0){
//       checkingAccountDiv.style.backgroundColor = "grey";
//     }
//   }
// }

// var savingsWithdrawBtn = document.querySelector('#savingsWithdrawBtn'),
//   savingsDepositBtn = document.querySelector('#savingsDepositBtn'),
//   checkingWithdrawBtn = document.querySelector('#checkingWithdrawBtn'),
//   checkingDepositBtn = document.querySelector('#checkingDepositBtn'),
//   checkingInput = document.querySelector('#checkingInput'),
//   checkingOutput = document.querySelector('#checkingOutput'),

//   savingsAccountDiv = document.querySelector('#savingAccountDiv'),
//   checkingAccountDiv = document.querySelector('#checkingAccountDiv')
//   ;
  

// savingsWithdrawBtn.addEventListener('click', function(){
//   //grab amount = ....
//   savingsAccount.withdraw(amount));
// });
// savingsDepositBtn.addEventListener('click', savingsAccount.deposit);
// checkingWithdrawBtn.addEventListener('click', checkingAccount.withdraw);
// checkingDepositBtn.addEventListener('click', checkingAccount.deposit);



