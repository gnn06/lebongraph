const leboncoin = require('leboncoin-api');

var search = new leboncoin.Search()
    .setPage(1)
    .setQuery("700 gs")
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("motos")
    .setTitleOnly(true)
    .addSearchExtra("regdate", { min: 2013, max: 2017 })
    .addSearchExtra("cubic_capacity", { min: 500, max: 1000 });

search.run().then(function (data) {
    process.stdout.write(JSON.stringify({ results: data.results}, null, 2));


    // console.log(data.results.map(function (item) {
    //     return {
    //         x: item.attributes.mileage,
    //         y: item.price
    //     };
    // }));
}, function (err) {
    console.error(err);
});
