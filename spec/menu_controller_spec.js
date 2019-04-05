const MenuController = require("../controllers/MenuController");
const Contact = require("../db/models").Contact;

describe("MenuController", () => {
  beforeEach(() => {
      this.menu = new MenuController();
    });


  describe("#remindMe()",() =>{
    it("should return the text Learning is a life-long pursuit", ()=>{
     expect(this.menu.remindMe()).toEqual("Learning is a life-long pursuit");

    });

      });
  });
