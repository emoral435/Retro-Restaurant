import '../style.css';
import homePage from './home-page'

let makeDiv = (className) => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

export default function pageLoad() {

    let makeButton = (classname) => {
        const btn = document.createElement('button');
        btn.classList.add(classname);
        return btn;
    }

    const content = document.getElementById('content');

    // this defines what is the title section of the page
    let title = makeDiv('title');
    let imageDiv = makeDiv('image');
    let img = new Image(120, 90);
    img.classList.add('image', 'grow');
    img.src = 'src/images/burger.png'
    imageDiv.appendChild(img);
    title.textContent = 'Retro Restaurant';
    title.append(imageDiv);
    content.appendChild(title);

    // this is what defines the part that changes the content of the page
    let homeButton = makeButton('home')
    homeButton.textContent = 'Home';
    let menuButton = makeButton('menu')
    menuButton.textContent = 'Menu';
    let contactButton = makeButton('contact')
    contactButton.textContent = 'Contact';
    let nav = makeDiv('nav');
    nav.append(homeButton, menuButton, contactButton);
    content.append(nav)

    // this makes the first part of the webpage that someone sees when they first load the website
    let main = makeDiv('main');
    let mainContent = makeDiv('mainContent');
    mainContent.classList.add('genericHeight');
    let header  = makeDiv('header');
    header.textContent = 'About Us'
    mainContent.append(header, homePage());
    main.append(mainContent);
    content.append(main);

    //this makes the footer
    let footer = makeDiv('footer');
    let footerDiv = makeDiv('footerDiv');
    footerDiv.textContent = 'made by emoral435'
    let footerImg = new Image(120, 60);
    let footerTag = document.createElement('a');
    footerTag.href = 'https://github.com/emoral435'
    footerTag.target = '_blank';
    footerImg.classList.add('image', 'neon');
    footerImg.src = 'src/images/Nyan-Cat-PNG.png'
    footerTag.appendChild(footerImg);
    footer.append(footerDiv, footerTag)
    content.append(footer)
}

export { makeDiv }