import Ember from 'ember';

  let categories = [
    {
      id: "nav",
      name: "navigation",
    },
    {
      id: "in",
      name: "input"
    },
    {
      id: "e",
      name: "etc"
    }
  ];
  

export default Ember.Route.extend({
  model() {
    categories.forEach((cat)=> {
      console.log( "cat ==>", cat);
      console.log( "cat.id ==>", cat.id);
      console.log( "cat.name ==>", cat.name);
    });
    console.log( "categories ==>", categories);

    return categories;
  }
});
