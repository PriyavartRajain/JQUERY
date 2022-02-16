/* Selecting with tag name. All h1's will hide */
// $('h1').hide();

/* Selecting with id. Hides element with id = heading3 */
// $('#heading3').hide();

/* Selecting with tag and id. Hides h1 with id = heading1 */
// $('h1#heading1').hide();

/* Selecting with class name. Everything with a class heading2 will hide*/
// $('.heading2').hide();

/* Selecting nested elements */
/* css(css_property, value) takes a css property and its value and links it to every span inside a p */
// $('p span').css('color', 'red');

/* Selecting particular elements in a list */
/* li: first is used to refer to the first item in the list, li: last refers to the last item.
li: even refers to every item at an even place, and li: odd refers to every item at an odd place*/
// $('ul#list li:first').css('color', 'red');

/* Selecting with type. Everything that has a type button will hide*/
// $(':button').hide();

/* Selecting with attributes. Everything that has an attribute of href will turn to red */
// $('[href]').css('color', 'red')

/* Selecting with type and attribute. Every a tag with https://yahoo.com as a href value will turn green*/
// $('a[href="https://yahoo.com"]').css('color', 'green')