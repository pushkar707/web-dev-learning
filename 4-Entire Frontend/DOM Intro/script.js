// InnerText
const changePara = () => {
    para = document.querySelector('p')
    para.innerText = 'Lol!'
}

// InnerHtml
const changeParaBold = () => {
    para = document.querySelector('p')
    para.innerHTML = '<B>LOL!</B>'
}

// Manipulating Attributes of Tags
const changeImage = () => {
    const banner = document.getElementById('banner')

    // Direct Method
    banner.src = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
    banner.alt = 'banner'

    // // Using Set Attribute
    // banner.setAttribute('src', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')

    // // Getattribute is used to get attribute value. It cannot be used to manipulate an attribute in document.
    // let bannerSrc = banner.getAttribute('src')
    // bannerSrc = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
    // console.log(bannerSrc);
}

// Changing Styles

const changeParaColor = () => {
    const para = document.querySelectorAll('p')
    para.forEach(p => {
        p.style.color = 'green'
    });
}

// classList

// const links = document.querySelectorAll('ul li a')
// links.forEach(link => {
//     link.classList.add('black')
//     link.classList.remove('black')
//     // Toggle - Removes if added already and adds if not there
//     link.classList.toggle('black')
//     // Contains - Check if a class is already present or nor (returns a boolean value).
//     link.classList.contains('black')
// });

//

// Other Important Properties

const firstLink = document.querySelector('a')// Breed is text of first link and its within <p> tag


//

// Getting parent element

const firstPara = firstLink.parentElement
// console.log(firstPara);

//

// Getting Child Element

// console.log(firstPara.childElementCount);
// console.log(firstPara.children); // Return all the Tags within firstPara.
// console.log(firstPara.children[2]);

//

// Getting Siblings

// console.log(firstLink.nextSibling); // As firstlink is present in a paragraph so returns next word in the paragraph
// console.log(firstLink.nextElementSibling); // Returns next element in paragraph used.
// // It works in same way as next.
// console.log(firstLink.previousSibling); 
// console.log(firstLink.previousElementSibling);

//

// 

// Inserting Elements in Document

//

// Append and Prepend

//

// const h1 = document.createElement('h1')
// const div = document.querySelector('div')
// h1.innerText = 'Lorem ipsum dolor sit amet.'
// document.body.append(h1) // Appends at end of body that
// // One node cannot be appended twice so we need to clone it to append it twice
// div.append(h1.cloneNode(true)) 
// // Prepend
// // We can also append or prepend two or mopre nodes at once.
// div.prepend(h1.cloneNode(true),h1.cloneNode(true))
// document.body.prepend(h1.cloneNode(true))

// // There is another alternative of append i.e. appendChild but with it only one node can be appended at time.

// // Append and prepend can also be used to add normal text not appendChild
// const p = document.querySelector('p')
// p.append('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, enim.')

//

// InsertAdjacentElement

// const firstH1 = document.querySelector('h1')
// const h2 = document.createElement('h2')
// h2.innerText = 'This is H2 after H1'
// // It have 4 values that can be passed as first parameter. Refer the MDN.
// firstH1.insertAdjacentElement('afterend',h2)

// After and Before

// const firstImg = document.querySelector('img')
// const secImg = document.createElement('img')
// secImg.src = 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
// secImg.style.width = '1215px'
// firstImg.after(secImg)
// firstImg.before(secImg.cloneNode(true))

//

//

// Removing Elements



