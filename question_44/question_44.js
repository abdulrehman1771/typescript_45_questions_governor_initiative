const order_sandwich = (lst, sandwich_name) => {
    if (sandwich_name) {
        console.log(`''''''''''''${sandwich_name}''''''''''''`);
    }
    console.log("Ingredients:");
    for (let i = 0; i < lst.length; i++) {
        console.log(`${i + 1}. ${lst[i]}`);
    }
    ;
};
let order1 = ["Bread", "Cabbage", "Capsicum", "Carrot"];
let order2 = ["Bread", "Cheese", "Pickle", "mayonnaise"];
let order3 = ["Bread", "Unsalted Butter", "Pepperoni", "Black Olives", "Mozzarella Cheese"];
order_sandwich(order1, "Veggie Sandwich");
order_sandwich(order2, "Cheese Sandwich");
order_sandwich(order3, "Pepperoni Pizza Grilled Cheese Sandwich");
export {};
