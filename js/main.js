let greetingPromise = () => {
	new Promise ((resolve, reject) => {
		setTimeout( () => {
			resolve("World");
		}, 3000);

		})//no ; so it enables chaining as in next line
		.then((resolve) => {
			console.log(resolve, "today is a lovely day.");
		});

};

greetingPromise();
console.log("hello");
/*
let colorPromise = Legos.loadLegos()
.then(
	(resolve) => {
		let newItem = {LegoName:"my lego"};
		resolve.push(newItem);
		showItems(resolve);
	},
	(reject) => {
		console.log("oops", reject);
		//run some other code here
	});
*///original colorPromise

//version 2 with additional .then
let colorPromise = Legos.loadLegos()
.then(
	(resolve) => {
		let newItem = {LegoName:"my lego"};
		resolve.push(newItem);
		showItems(resolve);
		return resolve;
	},
	(reject) => {
		console.log("oops", reject);
		//run some other code here
	}).then(
		(resolve) => {
			console.log("one for the road", resolve);
		},
		() => {
			console.log("there was an error somewhere");
		});







function showItems(stuff){
	//show the stuff 
	console.log("showItems", stuff);
	let legoDisplay = document.getElementById("lego-display");
	stuff.forEach((lego) => {
		let legoBlock = buildLego(lego);
		legoDisplay.innerHTML += legoBlock;
	});
}

let buildLego = (lego) => {
	let block = "";
	let wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
        title = `<h3>Name: ${lego.LegoName}</h3>`,
        years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;
        // image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
        let link = lego.ColorstreamLinkImage;
        if (link){
             block += `<a href="${link}">${wrapper + title + years}</section></a>`;
        }else{
            block += `${wrapper + title + years}</section>`;
        }
        //console.log("what is block", block);


      return block;
}





var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'foo');
});

Promise.all([p1,p2,p3]).then((values) => {
	console.log("resolve values", values);//[3,1337,"foo"]
})