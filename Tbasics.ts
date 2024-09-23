const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => {
    console.log(obj);
};

acceptsObj({
    foo: 'Hello',
    bar: 123,
    baz: true,
});

// for every change you make to a file, the Typescript server will check your code
// const a = null;
// a.toString()

type Album = { // used for inheritance purposes
    artist: string,
    title: string,
    releaseYear: number,
}


// documenting my code
/**
 * @example
 * 
 */
const my_Album : Album ={ // inherits from the album object.
    artist: 'AC/DC',
    title: 'Back in Black',
    releaseYear: 1980,
}
console.log(my_Album)

// dealing with multiple-line errors
const loggedInUser = (user: { job:{title:string}})=>{
    const title = user.job;
    console.log(title);
}

loggedInUser({job:{title:"Software Developer"}});