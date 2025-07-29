// Higher Order Functions
function SayHello(name)
{
    return `Hello, ${name}`;
}

function greet(fn,name)
{
    return fn(name);
}

console.log(greet(SayHello,"Khazaal"));