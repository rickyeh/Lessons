function AlphabetSoup(str) { 

    str = str.split('');
    str.sort();

    str = str.join('');
  
    return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down

AlphabetSoup(readline());  
                      

