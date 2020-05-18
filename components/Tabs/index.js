// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

class TabLink{
    constructor(element){
        this. element = element;
        this. tabData = this.element.dataset.tab;
            if(this.tabData === 'all') {
                this.card = document.querySelectorAll('.card');
        } else {
    this.card = document.querySelectorAll(`.card[data-tab='${this.tab}']`);
    this.cards = Array.from(this.cards).map(card => new TabCard(card) );
    this.element.addEventListener('click', () => this.selectTab() );
}

selectTab; {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab') );
    this.element.classList.add('active-tab');

    const cards = document.querySelectorAll('card');
    cards.forEach(card => card.getElementsByClassName.display ="none");
    cards.forEach(card => card.selectCard());


class TabCard {
    constructor(element) {
    this.cardElement = cardElemnet;
}

selectCard() {
this.element.style.display = null;
}
}


tabs = document.querySelectorAll('.tab').forEach(item=>new TabLink(item));
tabs = Array.from(tabs).map(tab => new TabLink(tab) );
tabs[0].selectTab();
}
    
}
}
