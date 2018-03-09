# 100 Days Of Code - Log

### Day 1: March 2, 2018 

**Today's Progress**: Made a very simple readmore link to reveal more content.

**Thoughts:** This is my first day so I'm starting simple and small until I figure out what I should start learning. This is plain JS stuff. I used the free sample chapter from the A Book Apart book JavaScript for Web Designers. 

**Link to work:** The files are currently in this forked repo. Need to organize this.

### Day 2: March 3, 2018 

**Today's Progress**: Made a totally bananas image mover. Today I was running short on time and energy and started late, so I didn't have any idea prepared. I just added a way to move the position of an image on the page by clicking a button. It's all about using event listeners, and using style.position through JS to move stuff around.

**Thoughts:** Starting to think that one hour of coding, depending on the project, is not enough time to build anything substantial. Or maybe I'm just slow. 

**Link to work:** The files are currently in this forked repo. Need to organize this.

### Day 3: March 4, 2018 

**Today's Progress**: Today was mostly about studying a code example to understand the logic behind it. I followed this [tutorial](https://javascript.info/js-animation) on JavaScript animations. It seems simple enough, but there is a lot going on with these 20 or so lines on the script.

**Link to work:** The files are currently in this forked repo. Need to organize this.

### Day 4: March 5, 2018 

**Today's Progress**: Today I tried to solve this [code excercise](https://eloquentjavascript.net/code/#14.1) from the Eloquent JavaScript book. I had the right idea at the beginning of looping through the object with a for loop, but I was only creating one instance of the elements. So after an hour at taking a stab at it, I clicked the reveal solution button. I'm still not entirely 100% sure how the Object.keys with paramates like field, data[0] and all that work, but I get the gist that it's looping first through the keys and the second time around it loops through the properties.

**Thoughts:** Need to look into the forEach method more. 

**Link to work:** The files are currently in this forked repo. Need to organize this.

### Day 5: March 6, 2018 

**Today's Progress**: Today I created a responsive navigation menu, with the so called hamburger icon. I've done these before, but I usually just find code elsewhere, or just use the bootstrap framework. My main goal was to figure out how to do it without googling code examples on how to do these. I knew that first I had to work with CSS to set display: none according to window width size. I only took about 10 lines of JavaScript to get it working. I'm sure there are better ways to do these, but I'm pretty proud of myself for solving this without looking for examples. The idea is to get myself more comfortable and understand the logic of JS. 

**Link to work:** The files are currently in this forked repo. Need to organize this.

### Day 6: March 8, 2018 

**Today's Progress**: I fixed an problem with the navigation menu I made on Day 5. Even though I figured out how to make a menu appear, I went about the wrong way. My approach first of all was more complicated than it needed to be. I started first with creating to list menu items in the HTML markup, hidding them and unhiding them with media queries is display: none/block, and used JavaScript to add the event listener, and changing the display again with element.style.display. That approach wasn't working as intended because when I scrolled back the brower to over 600px in width, after clicking the burger, the list menu items stayed. But after spending a bit over an hour today, looking up tutorials and other approaches, I found that I didn't need to use to list items on the page, and that all that the JS needed to do was to add class and remove a class. The bulk of the work needs to be done in the CSS, specifically in the media queries. Now when I scroll the browswer back over 600px wide, it sets back the styles that where defined before the media querie, even after clicking the burger. Hope this makes sense to anyone who's reading it.

**Link to work:** The files are currently in this forked repo. Need to organize this.


