const yargs = require("yargs");
const Movie = require("./utils");
// console.log(yargs.argv);

// if (yargs.argv.actor) {
//   console.log(`It's ${yargs.argv.actor}`);
// }


// if (yargs.argv.Add){
//     console.log(`Movie: ${yargs.argv.movie}, Actor: ${yargs.argv.actor}, Director: ${yargs.argv.director}`);
// }


const app = (argv)=>{
    if (yargs.argv.Add){
        for (let i = 3; i < argv.length; i=i+1){
        const movie1 = new Movie(argv[i], argv[i+1], argv[i+2]);
        movie1.add(); i=i+2;
        console.log(`Movie: ${movie1.title}\n Actor: ${movie1.actor}\n Director: ${movie1.director}\n`);

    }}
}

app(process.argv);

