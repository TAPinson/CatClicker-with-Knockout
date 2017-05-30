var initialCats = [
  {
    clickCount : 0,
    name : 'Tabby',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['The Crusher', 'The Mewdurer', 'Captain Nibbler']
  },
  {
    clickCount : 0,
    name : 'Tiger',
    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['The Tiger']
  },
  {
    clickCount : 0,
    name : 'Scaredy',
    imgSrc : 'img/22252709_010df3379e_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['Oh-Yikes']
  },
  {
    clickCount : 0,
    name : 'Shadow',
    imgSrc : 'img/1413379559_412a540d29_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['Lucky']
  },
  ]


var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observable(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
        title = 'Newborn';
    } else if (clicks < 50) {
        title = 'Infant';
    } else if (clicks < 100) {
        title = 'Child';
    } else if (clicks < 200) {
        title = 'Teen';
    } else if (clicks < 500) {
        title = 'Adult';
    } else {
        title = 'Ninja';
    }
    return title;
  }, this);
}

// [ ] Make the cats show up in a list
//

// [ ] Make the currentCat change when you click on a cat in the list
//


var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
 };

ko.applyBindings(new  ViewModel());
