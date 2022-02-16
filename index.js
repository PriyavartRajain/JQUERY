/* SELECTORS */

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

/* EVENTS */

/* Adding a click event listener to an element by selecting it using its id*/
// $('#btn1').click(function () {
//     alert('Button Clicked!');
// });

/* Another way to do it: */
// $('#btn1').on('click', function () {
//     alert('Button Clicked');
// });

/*Using click event listener to do some other fun stuff, like making other elements disappear */
// $('#btn1').click(function () {
//     $('.para1').hide();
// })

/*Or.. Make it re-appear */
// $('#btn2').click(function () {
//     $('.para1').show();
// })

/*We could use toggle method to shorten the above code */
// $('#btn1').click(function () {
//     $('.para1').toggle();
// })

/*More events... */
/*Double click - dblclick*/
// $('#btn1').dblclick(function () {
//     $('.para1').toggle();
// });

/*Hover (a combination of mouseenter and mouseleave functions)*/
// $('#btn1').hover(function () {
//     $('.para1').toggle();
// });

/*Mouse move (If the mouse moves within the element) */
// $('#btn1').mousemove(function () {
//     $('.para1').toggle();
// });

/*Accessing event details by passing e to the event function */
/*The following prints all the details, e.g, timestamp, event type, etc. on the console */
// $('#btn1').click(function (e) {
//     console.log(e);
// });

/*We can use the object stored in e to retrieve information like id of the button*/
/*This prints: btn1 */
// $('#btn1').click(function (e) {
//     console.log(e.currentTarget.id)
// });

/*Cool stuff with mousemove */
/*The following prints the current coordinates of the mouse on the console */
// $(document).mousemove(function (e) {
//     console.log('X: ' + e.clientX + ' Y: ' + e.clientY);
// })

/*We can even print these coordinates on the browser itself */
// $(document).mousemove(function (e) {
//     $('#coords').html('X: ' + e.clientX + ' Y: ' + e.clientY);
// })

/*Focus event - When you click into an input element*/
// $('input').focus(function () {
//     $(this).css('background', 'pink');
// })

/*Blue event:  Opposite of focus - When you want the focus to go away when you click outside the element*/
// $('input').blur(function () {
//     $(this).css('background', 'white');
// })

/*keyup event: when you want to fetch what is being typed in a field */
// $('input').keyup(function (e) {
//     console.log(e.target.value);
// })

/*change event: when the value in a field (or in this case select) changes*/
// $('select#gender').change(function () {
//     alert('Changed');
// })

/*submit event: when a form is submitted */
// $('#form').submit(function (e) {
//     e.preventDefault();               // Prevents the form from submitting right away
//     let name = $('input#name').val(); // Grabs the value of the input field with id="name"
//     console.log(name);
// })