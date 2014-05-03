//CHAPTER 3

// Consider this puzzle: By starting from the number 1 and 
// repeatedly either adding 5 or multiplying by 3, an 
// infinite amount of new numbers can be produced. How 
// would you write a function that, given a number, tries 
// to find a sequence of additions and multiplications that
// produce that number?

function findSequence(goal) {

  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }

  return find(1, "1");
}

console.log(findSequence(24));
