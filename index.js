var birthday = (input) => {
  input = input.toString();
  const arrayBar = input.slice(1, input.length-2);
  const day = parseInt(input[input.length -2]) // total sum 
  const month = parseInt(input[input.length -1])// total of squares

  let count = 0;

  for (let i=0; i<arrayBar.length; i++) {
    let result = 0;
  
    for (let j=i; j<(month + i); j++) {
      result += parseInt(arrayBar[j])
    }

    if (result === day) {
      count +=1
    }

  }
  
  return(count)
}