function Node(val, nextNode) {
  this.val = val;
  this.next = nextNode;
}

// List of 20 items, wire them together
function createList(numNodes) {
  var firstNode;
  var prevNode;
  var currNode;
  
  // loop < numNodes 
  for (var i = 0; i < numNodes; i++) {
    currNode = new Node(i);
    
    if (prevNode) {
      prevNode.next = currNode;  
    } else { // Save the first node
      firstNode = currNode;
    }
    
    prevNode = currNode;
  }

  return firstNode;
}

// Look at 1st node
// Save 3rd node's pointer (2nd node's next)
// Make 2nd node's next pointer go to 1st node
// Look at 2nd node
// "New Next" is 3rd node

// Save 4th node's pointer (3rd node's next)
// Make 3rd node's next pointer go to 2nd node

function reverse(currNode) {
  var savedNext;
  var reversedList = undefined;
  
  while (currNode) {
    savedNext = currNode.next;
    currNode.next = reversedList;
    reversedList = currNode;
    currNode = savedNext;
  }
  
  return reversedList;
}

// print all vals separated by commas
// basically, print out the 'array'
function printList(currNode) {
  if (!currNode) {
    console.log('Empty List');
    return;
  }
  
  var result = [];
  
  do {
    result.push(currNode.val);
    currNode = currNode.next;
  } while (currNode !== undefined);
  
  console.log(result.join(','));
}

var list = createList(10);

printList(reverse(list));
