// list faq
const faqData = [
  {
    question: "What Is Html",
    answer: "Html stands for HyperText Markup Language.",
  },
  {
    question: "What Is CSS",
    answer: "CSS stands for cascading style sheets. it is",
  },
  {
    question: "What Is Javascript",
    answer: "Javascript is aProgramming language that is.",
  },
];

//get accordion container
const accordionContainer = document.getElementById("accordion");

// create function to generate faqData from array faqData

function generateAccordionItems(faqData) {
  faqData.forEach((item) => {
    const accordionItem = document.createElement("div");

    accordionItem.classList.add("accordion-item");

    //create element  for header
    const header = document.createElement("button");
    header.classList.add("accordion-header");
    header.textContent = item.question;

    //create element for content
    const content = document.createElement("div");
    content.classList.add("accordion-content");

    const contentText = document.createElement("p");
    contentText.textContent = item.answer;

    // insert elemnt to html
    content.appendChild(contentText);
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    //add accordion items to accordion container
    accordionContainer.appendChild(accordionItem);
  });
}

// call function generate faq
generateAccordionItems(faqData);

// get element accordion header
const accordionHeaders = document.querySelectorAll(".accordion-header");

//add event listener for accordon
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;

    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }

    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header && otherHeader.classList.contains("active")) {
        otherHeader.classList.remove("active");
        otherHeader.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});
