let items;




async function readItemsFromJson() {
    items = await (await fetch('items.json')).json();
    //items = await $.getJSON('items.json')
    renderItemsToScreen()
}


readItemsFromJson()

function renderItemsToScreen() {
    for (let item of items) {
        $('#myData').append(`
        <div class="item">
        <img class="item_image" src="images/item${item.id}.jpeg"</img>     
        <h3> ${item.name} | ${item.description}. 
        </br> Can be yours for only: ${item.price}kr! </h3>
       
        </div>
        `
        )
    }
}
