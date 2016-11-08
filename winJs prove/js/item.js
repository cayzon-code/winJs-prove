var itemArray = [
        { title: "spada", text: "-5ps", picture: "images/download.jpg" },
        { title: "arco", text: "-1 freccia nemico: -5ps", picture: "/images/fruits/60Strawberry.png" },

];
;

var items = [];

// Generate 160 items
for (var i = 0; i < 1; i++) {
    itemArray.forEach(function (item) {
        items.push(item);
    });
}


WinJS.Namespace.define("Sample.ListView", {
    data: new WinJS.Binding.List(items)
});
WinJS.UI.processAll();


