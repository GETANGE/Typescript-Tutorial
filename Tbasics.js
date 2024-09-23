var acceptsObj = function (obj) {
    console.log(obj);
};
acceptsObj({
    foo: 'Hello',
    bar: 123,
    baz: true,
});
var my_Album = {
    artist: 'AC/DC',
    title: 'Back in Black',
    releaseYear: 1980,
};
console.log(my_Album);
// dealing with multiple-line errors
var loggedInUser = function (user) {
    var title = user.job;
    console.log(title);
};
loggedInUser({ job: { title: "Software Developer" } });
