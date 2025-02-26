

import * as HTML from '../src/html.ts'

import {
	a, article, aside, body, br, div, head, header, html, input, link, main, meta, nav, p, section, title
} from '../src/html.ts'

const t = HTML.a("", "Test")

console.log(typeof(HTML.a)); // Should show 'function'

console.log(HTML.a); // Should show the function

console.log("function name:", HTML.a.name); // Should display 'a'

console.log("tag:", t); // The tag content

// Safe access to symbol property
console.log("symbol:", t.symbol ? `<${t.symbol.description}>` : "No symbol");

// Example page generation
let page = html(
	{ lang: "de" },
	head(
		title("Kafka Blindtext")
	),
	body(
		p("Aber sie überwanden sich, umdrängten den Käfig und wollten sich gar nicht fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet.")
	)
);

//console.log(page);

console.log("\n");

let start, end;

start = performance.now();
console.log(page.expand(4));
end = performance.now();
console.log(`Execution time indented variant: ${end - start} milliseconds\n`);


start = performance.now();
console.log(page.expand());
end = performance.now();
console.log(`Execution time optimized variant: ${end - start} milliseconds\n`);


const acc_push = div(
	{ "hx-get": "/account", "hx-push-url": true },
	"Go to My Account"
);

console.log("acc_pushed:", acc_push);
console.log(page.expand(acc_push, 4));


let hello = p("Hallo,", br, "kaputte Welt!");
console.log(hello.expand(4));

let x = a("/kontakt", "Kontakt");
console.log(x.expand(4));

let m = main();
console.log(m.expand(4));