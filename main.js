//Goal: By clicking the read more link
//we see the rest of the content.

//Selects the Read more link
const readMoreBtn  = document.getElementById('readMore');
//Selects the Paragraphs
const allParagraphs = document.getElementsByTagName('p');
//Selets the first Paragraph
const firstParagraph = allParagraphs[0];

for (let i = 0; i < allParagraphs.length; i++) {

  if (i === 0) {
    continue;
  }
  allParagraphs[i].style.display = "none";

  readMore.addEventListener('click', () => {
    console.log('you clicked me');
    if (allParagraphs[i].style.display === "none") {
      allParagraphs[i].style.display = "block";
    } else {
      allParagraphs[i].style.display = "none";
    }
  });
}
