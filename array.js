
    let listItem = ['Eyakub', 'Sorkar', 'Hi'];
    console.log(listItem[1]);
    //push
    listItem.push("Hi there", "vag");
    //pop from array
    listItem.pop();
    console.log(listItem);

    let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    //join() here it's joining all the first elements of array
    let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
    // Create the secretMessage array below
    let secretMessage = animals.map(function(animals){
    return animals[0];
    });
    //joining
    console.log(secretMessage.join(' '));

    
    //slice() to show the result in range index
    console.log(groceryList.slice(1, 4));

    //splice()

    //shift() to remove first item from list
    groceryList.shift();
    console.log(groceryList);

    //unshift() add popcorn at the beginning of the list
    groceryList.unshift('popcorn');
    console.log(groceryList);

    //concat()

    //every()
    //ekta array te shob gulo value jodi 6 er boro hoy true else false
    console.log(interestingWords.every(word =>  word.length > 6 ));


 