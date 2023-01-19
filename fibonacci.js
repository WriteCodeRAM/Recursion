// Warmup: Fibonacci
// The Fibonacci Sequence, which sums each number with the one before it, is a great example of a problem that can be solved recursively.

//Using iteration

function fibs(n) {
  let sequence = [0, 1];

  for (let i = n; i > 2; i--) {
    sequence.push(
      sequence[sequence.length - 2] + sequence[sequence.length - 1]
    );
  }
  return sequence;
}

// console.log(fibs(8));

//recursively

function fibsRec(n) {
  const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

  let sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fib(i));
    // console.log(sequence);
  }
  return sequence;
}

// console.log(fibsRec(8));
