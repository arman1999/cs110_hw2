<script>
const factorial = function(n){
  if (n === 1)
    return 1;
  else
    return n * factorial(n-1);
};
const x = 3;
console.log(factorial(x))

</script>