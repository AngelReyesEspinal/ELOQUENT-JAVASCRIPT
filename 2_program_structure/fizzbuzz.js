let i = 1;

do {
   const fizz = i % 3 === 0 ? 'Fizz' : '';
   const buzz = i % 5 === 0 ? 'Buzz' : '';

   if (fizz || buzz) {
      const word = (fizz && buzz) ? `${fizz}${buzz}` : (fizz) ? fizz : buzz;
      console.log(word);
   } else {
      console.log(i);
   }

   i++;
} while (i <= 100);