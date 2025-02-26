# HTML.js

**HTML.js** is a lightweight library which provides a domain-specific language (DSL) for coding HTML directly in JavaScript, primarily to generate HTML files on the server side.

The advantage is obvious: Instead of a separate template language with its own engine, the HTML structure can be built dynamically using ordinary JavaScript functions:

```javascript
import {
	body, br, div, head, html, p, title
} from 'htmljs'


let page = html({lang: "de"},
    head(
        title("Kafka Blindtext")
    ),
    body(
        p("Aber sie überwanden sich, umdrängten den Käfig und wollten sich gar nicht fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet.")
    )
);

console.log(page.expand());
```

This approach is not only much more efficient than running a separate text processing engine, but also eliminates the need to learn a template language with its own syntax, as **HTML.js** strictly adheres to HTML5: All HTML elements can be imported as ordinary functions. The only exception here is the `var` element, as this coincides with a JavaScript keyword, which is why it is referred to as `variable`. Apart from that, all HTML elements and attributes are available under their actual names.

Another intention behind **HTML.js** is to provide a DSL with as little syntactical noise as possible, so things like lambda expressions were not used: You just nest function calls to build the HTML declaratively. Void elements such as `br` or elements without attributes and content do not even have to be called as functions, but can be passed directly:

```javascript
let hello = p("Hallo,", br, "kaputte Welt!");
```

In fact, all non-void elements have a rest parameter, so they can contain any number of other elements or JavaScript values. Arguments that do not represent HTML elements and are not already strings get automatically converted. Therefore, by overriding the corresponding `toString` method, the output in HTML can be precisely defined. This is particularly useful for outputting specific data, without any additional abstraction layers needed.

## Attributes

Any attribute can be specified using an object whose keys are interpreted as such, and gets passed as the first argument; or specified subsequently using the `set` method. In addition, there are same-named methods for all global and element-specific attributes, for example `x.id("about")`.

If an attribute has the value `null` or `undefined`, it is simply translated into HTML without a value, which can be used to represent Boolean attributes such as `checked`.

Another special feature offers the attribute `class`, to which an array of class names is assignable instead of contacting them first.

Furthermore, all mouse events can also be set using methods such as `buttonXYZ.onclick(() => …)`, whereupon the lambda expression gets automatically inserted as called code:

```html
<button name="xyz" onclick="(() => …)()">…
```

## Development Status

**HTML.js** only contains around a thousand lines of code with no dependencies. The principle of how HTML is described in JavaScript is quite simple and so are the interfaces. Consequently, no breaks are to be expected in future versions.

Future Version are only intended to offer more methods, provided this seems sensible. The question that still needs to be clarified here is whether more type safety should be built in, which ensures that, for example, the `href` can actually only be called on those elements that are allowed to contain it according to the current HTML5 specification, which are `a`, `area`, `base` and `link`. Currently, no distinction is made here for the sake of simplicity, also to facilitate possible custom elements.

Exceptions are not thrown. Instead, necessary type conversions get performed to enable error-free expansion into valid HTML as far as possible, regardless of what values are passed.

## License

This software is published under the Unlicense.
