var chalk = require('chalk')
const fs = require('fs');
const JSONStream = require('JSONStream')
var transformStream = JSONStream.stringify();
var outputStream = fs.createWriteStream( __dirname + "/dataTest.json" );
transformStream.pipe( outputStream );
var faker = require('faker');
var counter = 0;

//generating random length array and filling using a set schema:
const reviewSchema = {
  user: faker.name.firstName(),
  title: faker.random.words(3),
  stars: faker.random.number(5),
  reviewText:faker.lorem.sentence(7)
}
// generator
const generator = (min = 1, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomLength = Math.floor(Math.random() * (max - min)) + min;
  return Array.from({length: randomLength})
    .map((val,index) =>
      ({
        user: faker.name.firstName(),
        title: faker.random.words(3),
        stars: (Math.floor(Math.random() * (5 - 0)) + 0),
        reviewText:faker.lorem.sentence(7)
      }));
};

// generate random clients between 1 and 20 units, based on client schema defined above
const data = () => {return generator(1, 5)};
const dataGen = (data) => {
  for(var i = 0; i  < 10000000; i++) {
    let newArr = data();
    transformStream.write({
      id: counter++,
      reviews: newArr
      })
      console.log(chalk.yellow("saved: "), i)
    }
    transformStream.end();
  outputStream.on('finish',function handleFinish() {
    console.log( chalk.green( "JSONStream serialization complete!" ) );
  });
}

// ----------------------------------------------------------------------------------- //
// Since the stream actions are event-driven (and asynchronous), we have to wait until
// our output stream has been closed before we can try reading it back in.
dataGen(data);
outputStream.on(
	"finish",
	function handleFinish() {
		// When we read in the Array, we want to emit a "data" event for every item in
		// the serialized record-set. As such, we are going to use the path "*".
		var transformStream = JSONStream.parse( "*" );
		var inputStream = fs.createReadStream( __dirname + "/dataTest.json" );
		// Once we pipe the input stream into the TRANSFORM stream, the parser will
		// start working it's magic. We can bind to the "data" event to handle each
		// top-level item as it is parsed.
		inputStream
			.pipe( transformStream )
			// Each "data" event will emit one item in our record-set.
			.on(
				"data",
				function handleRecord( data ) {
					//console.log( chalk.red( "Record (event):" ), data );
				}
			)
			// Once the JSONStream has parsed all the input, let's indicate done.
			.on(
				"end",
				function handleEnd() {
					console.log( "- - - - - - - - - - - - - - - - - - - - - - -" );
					console.log( chalk.green( "JSONStream parsing complete!" ) );
				}
			)
		;
	}
);

