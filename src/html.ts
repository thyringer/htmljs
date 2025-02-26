
export { HTMLAttributes, HTMLElement }

import { HTMLAttributes } from "./attributes.ts";
import { HTMLElement } from './element.ts';


type ElementBuilder = (...content: any[]) => HTMLElement;

type VoidElementBuilder = (attributes?: {}) => HTMLElement;


export const a = (...content) => {
	const attr = typeof content[0] === "string" && typeof content[1] === "string"
		? { href: content.shift() }
		: HTMLElement.hasAttr(content[0])
			? content.shift()
			: {};	

	return new HTMLElement(HTMLElement.Symbol.a, new HTMLAttributes(attr), content);
}


export const abbr = HTMLElement.NonVoid(HTMLElement.Symbol.abbr);

export const address = HTMLElement.NonVoid(HTMLElement.Symbol.address);

export const area = HTMLElement.Void(HTMLElement.Symbol.area);

export const article = HTMLElement.NonVoid(HTMLElement.Symbol.article);

export const aside = HTMLElement.NonVoid(HTMLElement.Symbol.aside);

export const audio = HTMLElement.NonVoid(HTMLElement.Symbol.audio);

export const b = HTMLElement.NonVoid(HTMLElement.Symbol.b);

export const base = HTMLElement.Void(HTMLElement.Symbol.base);

export const bdi = HTMLElement.NonVoid(HTMLElement.Symbol.bdi);

export const bdo = HTMLElement.NonVoid(HTMLElement.Symbol.bdo);

export const blockquote = HTMLElement.NonVoid(HTMLElement.Symbol.blockquote);

export const body = HTMLElement.NonVoid(HTMLElement.Symbol.body);

export const br = HTMLElement.Void(HTMLElement.Symbol.br);


type ButtonBuilder = ElementBuilder & { submit: ElementBuilder; reset: ElementBuilder; };

function __button(type) {
	return (...content) => {
		const attr = HTMLElement.hasAttr(content[0]) ? content.shift() : {};
	
		if (typeof content.at(-1) === "function") {
			attr.onclick = content.pop();
		}
	
		attr.type = type;
	
		return new HTMLElement(HTMLElement.Symbol.button, new HTMLAttributes(attr), content);
	}
}

export const button = __button("button") as ButtonBuilder;

button.submit = __button("submit");

button.reset = __button("reset");


export const canvas = HTMLElement.NonVoid(HTMLElement.Symbol.canvas);

export const caption = HTMLElement.NonVoid(HTMLElement.Symbol.caption);

export const cite = HTMLElement.NonVoid(HTMLElement.Symbol.cite);

export const code = HTMLElement.NonVoid(HTMLElement.Symbol.code);

export const col = HTMLElement.Void(HTMLElement.Symbol.col);

export const colgroup = HTMLElement.Void(HTMLElement.Symbol.colgroup);

export const data = HTMLElement.NonVoid(HTMLElement.Symbol.data);

export const datalist = HTMLElement.NonVoid(HTMLElement.Symbol.datalist);

export const dd = HTMLElement.NonVoid(HTMLElement.Symbol.dd);

export const del = HTMLElement.NonVoid(HTMLElement.Symbol.del);

export const details = HTMLElement.NonVoid(HTMLElement.Symbol.details);

export const dfn = HTMLElement.NonVoid(HTMLElement.Symbol.dfn);

export const dialog = HTMLElement.NonVoid(HTMLElement.Symbol.dialog);

export const div = HTMLElement.NonVoid(HTMLElement.Symbol.div);

export const dl = HTMLElement.NonVoid(HTMLElement.Symbol.dl);

export const dt = HTMLElement.NonVoid(HTMLElement.Symbol.dt);

export const em = HTMLElement.NonVoid(HTMLElement.Symbol.em);

export const embed = HTMLElement.Void(HTMLElement.Symbol.embed);

export const fieldset = HTMLElement.NonVoid(HTMLElement.Symbol.fieldset);

export const figcaption = HTMLElement.NonVoid(HTMLElement.Symbol.figcaption);

export const figure = HTMLElement.NonVoid(HTMLElement.Symbol.figure);

export const footer = HTMLElement.NonVoid(HTMLElement.Symbol.footer);

export const form = HTMLElement.NonVoid(HTMLElement.Symbol.form);

export const h1 = HTMLElement.NonVoid(HTMLElement.Symbol.h1);

export const h2 = HTMLElement.NonVoid(HTMLElement.Symbol.h2);

export const h3 = HTMLElement.NonVoid(HTMLElement.Symbol.h3);

export const h4 = HTMLElement.NonVoid(HTMLElement.Symbol.h4);

export const h5 = HTMLElement.NonVoid(HTMLElement.Symbol.h5);

export const h6 = HTMLElement.NonVoid(HTMLElement.Symbol.h6);


export const head = (...content) => HTMLElement.NonVoid(HTMLElement.Symbol.head)(
	meta({charset: "utf-8"}),
	...content
);


export const header = HTMLElement.NonVoid(HTMLElement.Symbol.header);

export const hgroup = HTMLElement.NonVoid(HTMLElement.Symbol.hgroup);

export const hr = HTMLElement.Void(HTMLElement.Symbol.hr);


export const html = (...content) => {
	const attr = typeof content[0] === "string"
		? { lang: content.shift() }
		: HTMLElement.hasAttr(content[0])
			? content.shift()
			: {};	

	return new HTMLElement(HTMLElement.Symbol.html, new HTMLAttributes(attr), content);
}


export const i = HTMLElement.NonVoid(HTMLElement.Symbol.i);

export const iframe = HTMLElement.NonVoid(HTMLElement.Symbol.iframe);

export const img = HTMLElement.Void(HTMLElement.Symbol.img);

export const input = HTMLElement.Void(HTMLElement.Symbol.input);

export const ins = HTMLElement.NonVoid(HTMLElement.Symbol.ins);

export const kbd = HTMLElement.NonVoid(HTMLElement.Symbol.kbd);

export const label = HTMLElement.NonVoid(HTMLElement.Symbol.label);

export const legend = HTMLElement.NonVoid(HTMLElement.Symbol.legend);

export const li = HTMLElement.NonVoid(HTMLElement.Symbol.li);

export const link = HTMLElement.Void(HTMLElement.Symbol.link);

export const main = HTMLElement.NonVoid(HTMLElement.Symbol.main);

export const map = HTMLElement.NonVoid(HTMLElement.Symbol.map);

export const mark = HTMLElement.NonVoid(HTMLElement.Symbol.mark);

export const math = HTMLElement.NonVoid(HTMLElement.Symbol.math);

export const menu = HTMLElement.NonVoid(HTMLElement.Symbol.menu);

export const menuitem = HTMLElement.NonVoid(HTMLElement.Symbol.menuitem);


type OGTagBuilder = ((attributes: Object) => HTMLElement[]) & {
	article: (attributes: Object) => HTMLElement[],
	book: (attributes: Object) => HTMLElement[],
	event: (attributes: Object) => HTMLElement[],
	product: (attributes: Object) => HTMLElement[],

	audio: (attributes: Object) => HTMLElement[],
	video: (attributes: Object) => HTMLElement[]
}

export const meta = HTMLElement.Void(HTMLElement.Symbol.meta) as VoidElementBuilder & {
	tags: (attributes: Object) => HTMLElement[],
	og: OGTagBuilder
};


meta.tags = (attributes) => {
	return Object.entries(attributes).map(([key, value]) =>
		meta({ name: key, content: value}));
};


function __og(prefix: string) {
	return ((attributes) => {
		return Object.entries(attributes).map(([key, value]) =>
			meta({ property: `${prefix}:${key}`, content: value}));
	});
}

meta.og = __og("og") as OGTagBuilder;

meta.og.article = __og("article");

meta.og.book = __og("book");

meta.og.event = __og("event");

meta.og.product = __og("product");

meta.og.event = __og("event");

meta.og.audio = __og("og:audio");

meta.og.video = __og("og:video");


export const meter = HTMLElement.NonVoid(HTMLElement.Symbol.meter);

export const nav = HTMLElement.NonVoid(HTMLElement.Symbol.nav);

export const noscript = HTMLElement.NonVoid(HTMLElement.Symbol.noscript);

export const object = HTMLElement.NonVoid(HTMLElement.Symbol.object);

export const ol = HTMLElement.NonVoid(HTMLElement.Symbol.ol);

export const optgroup = HTMLElement.NonVoid(HTMLElement.Symbol.optgroup);

export const option = HTMLElement.NonVoid(HTMLElement.Symbol.option);

export const output = HTMLElement.NonVoid(HTMLElement.Symbol.output);

export const p = HTMLElement.NonVoid(HTMLElement.Symbol.p);

export const param = HTMLElement.Void(HTMLElement.Symbol.param);

export const picture = HTMLElement.NonVoid(HTMLElement.Symbol.picture);

export const pre = HTMLElement.NonVoid(HTMLElement.Symbol.pre);

export const progress = HTMLElement.NonVoid(HTMLElement.Symbol.progress);

export const q = HTMLElement.NonVoid(HTMLElement.Symbol.q);

export const rb = HTMLElement.NonVoid(HTMLElement.Symbol.rb);

export const rp = HTMLElement.NonVoid(HTMLElement.Symbol.rp);

export const rt = HTMLElement.NonVoid(HTMLElement.Symbol.rt);

export const rtc = HTMLElement.NonVoid(HTMLElement.Symbol.rtc);

export const ruby = HTMLElement.NonVoid(HTMLElement.Symbol.ruby);

export const s = HTMLElement.NonVoid(HTMLElement.Symbol.s);

export const samp = HTMLElement.NonVoid(HTMLElement.Symbol.samp);

export const script = HTMLElement.NonVoid(HTMLElement.Symbol.script);

export const section = HTMLElement.NonVoid(HTMLElement.Symbol.section);

export const select = HTMLElement.NonVoid(HTMLElement.Symbol.select);

export const slot = HTMLElement.NonVoid(HTMLElement.Symbol.slot);

export const small = HTMLElement.NonVoid(HTMLElement.Symbol.small);

export const source = HTMLElement.Void(HTMLElement.Symbol.source);

export const span = HTMLElement.NonVoid(HTMLElement.Symbol.span);

export const strong = HTMLElement.NonVoid(HTMLElement.Symbol.strong);

export const style = HTMLElement.NonVoid(HTMLElement.Symbol.style);

export const sub = HTMLElement.NonVoid(HTMLElement.Symbol.sub);

export const summary = HTMLElement.NonVoid(HTMLElement.Symbol.summary);

export const sup = HTMLElement.NonVoid(HTMLElement.Symbol.sup);

export const svg = HTMLElement.NonVoid(HTMLElement.Symbol.svg);

export const table = HTMLElement.NonVoid(HTMLElement.Symbol.table);

export const tbody = HTMLElement.NonVoid(HTMLElement.Symbol.tbody);

export const td = HTMLElement.NonVoid(HTMLElement.Symbol.td);

export const template = HTMLElement.NonVoid(HTMLElement.Symbol.template);

export const textarea = HTMLElement.NonVoid(HTMLElement.Symbol.textarea);

export const tfoot = HTMLElement.NonVoid(HTMLElement.Symbol.tfoot);

export const th = HTMLElement.NonVoid(HTMLElement.Symbol.th);

export const thead = HTMLElement.NonVoid(HTMLElement.Symbol.thead);

export const time = HTMLElement.NonVoid(HTMLElement.Symbol.time);

export const title = HTMLElement.NonVoid(HTMLElement.Symbol.title);

export const tr = HTMLElement.NonVoid(HTMLElement.Symbol.tr);

export const track = HTMLElement.Void(HTMLElement.Symbol.track);

export const u = HTMLElement.NonVoid(HTMLElement.Symbol.u);

export const ul = HTMLElement.NonVoid(HTMLElement.Symbol.ul);

export const variable = HTMLElement.NonVoid(HTMLElement.Symbol.var);

export const video = HTMLElement.NonVoid(HTMLElement.Symbol.video);

export const wbr = HTMLElement.Void(HTMLElement.Symbol.wbr);
