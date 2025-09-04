function Food()
{
    let Food1 = "Orange";
    let Food2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{Food1}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;