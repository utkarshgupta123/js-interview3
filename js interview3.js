<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DayThree</title>
    <style>
        body{margin-left:2%;}
        p{margin-left:3%;}
    </style>
</head>
<body>
     
<h3>What are promises and why do we need them?</h3>
    <p>Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when 
        dealing with multiple asynchronous <br>operations where callbacks can create callback hell leading to unmanageable code. </p>
    <p>It also allows us to make API calls or fetch data from Web Servers successfully. If not 
        able to do so fetches us with an error message.</p><br>


<h3>What is the purpose of async/await keywords?</h3>
    <p>They are used to handle promises more efficiently. The word async before a function always 
        means that the function always returns a PROMISE.</p>
    <p>So, use async before the function name to return a promise instead of a value.</p>
    <p>Await function is used to wait for the promise. It could be used within the async block only. 
        It makes the code wait until the promise returns a result. It only makes the async block wait.</p><br>


<h3>What is hoisting?</h3>
    <p>Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.</p><br>


<h3>What is the DOM?</h3>
    <p>DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or 
        remove elements from the document.<br> We can also add events to these elements to make our page more dynamic.</p><br>


<h3>Difference between undefined vs not defined vs NaN?</h3>
    <p><b>undefined:</b>When we try to access a variable that is declared or not initialized with any value then it will return undefined.</p>
    <p><b>null:</b> It's a value that we initialize to a variable which will later be replaced with some other value.</p>
    <p><b>not-defined:</b> When we try to access a variable that is not declared.</p><br>


<h3>How many operators do we have in JS?</h3>
    <p>There are six types of operators: arithmetic, comparison, assignment, logical, Bitwise, Ternary.</p><br>


<h3>What is callback hell?</h3>
    <p>nested callbacks stacked below one another forming a pyramid structure. In this, each callback takes 
        arguments that have been obtained as a result of previous callbacks.</p><br>


<h3>What is promise chaining?</h3>
    <p>Promise chaining allows you to chain together multiple asynchronous tasks in a specific order.</p><br>


<h3>What are arrow functions?</h3>
    <p> It allows you to create functions in a cleaner way compared to regular functions.</p><br>
    arrow functions dosesn't support hoisting.


<h3>Give an example of async/await?</h3>
    <pre>
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
            resolve('Promise resolved')}, 1000); 
        });
    
        async function asyncFunc() {
            let result = await promise; 
            console.log(result);
            console.log('After promise return');
        }
        asyncFunc();
    </pre>

<script>
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
        resolve('Promise resolved')}, 1000); 
    });

    async function asyncFunc() {
        let result = await promise; 
        console.log(result);
        console.log('After promise return');
    }
    asyncFunc();

</script>
</body>
</html>