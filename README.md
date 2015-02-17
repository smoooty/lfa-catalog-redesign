# lfa-catalog-redesign
A redesign of the LFA catalog display

View a <a href="http://spencerpopedesign.com/lfa/">live version</a> of this repo. 

<h2>Opening Animation:</h2>

The idea behind this opening animation is to represent the concept of “order from chaos,” underscoring the stability provided by reading and gaining knowledge. The effect is achieved by randomly generating and distributing strings of letters. 

<h2>Color:</h2>

The colors used to render the letterforms in the opening animation as well as the book titles on the browse page are randomly generated using the javascript math object. The idea behind this decision was to convey the explorative quality of reading. 

<h2>Display and Navigation:</h2>

I wanted the layout of the display to be clean and navigable, respecting the medium of the written word. The navigation consists of a readily understandable downward scroll. The book title, authors, subjects, tags, and language are shown in a hierarchical view based on importance. Clicking on a row reveal second level information about the book - the cover and blurb. This data is queried from a JSON file and dynamically rendered to the view using the Angular.js ngRepeat directive.

<h2>Filtering and Sorting:</h2>

Although we recognize the three line or “hamburger” icon to denote “menu,” I was concerned that this symbol may not translate across cultures. For this reason I opted for a text based menu view in the interest of ease of use. The list of books is filterable by four different parameters displayed in the menu, “author,” “title,” “subject,” and “language.” The results may then be organized alphabetically from either A to Z or Z to A, controlled by switching the direction of the arrow next to the menu item. This is achieved by leveraging the Angular orderBy filter. 

The primary or most powerful method of finding specific books is the search feature achieved with the Angular search filter. Because the data is rendered using ngRepeat, the list of title updates immediately.

<h3>Dependencies</h3>
<ul>
  <li><a href="https://github.com/angular/angular.js">Angular</a></li>
  <li><a href="https://github.com/jquery/jquery">jQuery</a></li>
  <li><a href="https://github.com/Dogfalo/materialize">Materialize</a></li>
</ul>
