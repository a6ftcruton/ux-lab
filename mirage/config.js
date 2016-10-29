import categoryFixtures from './fixtures/categories';
import exampleFixtures from './fixtures/examples';

export default function() {
  this.get('/categories', function() {
    return categoryFixtures;
  });
  this.get('/examples', function(db, req) {
    let query = req.queryParams;

    //kinda re-implementing parts of emberdata here b/c yolo
    if(!!query.category) {
      console.log( "exampleFixtures ==>", exampleFixtures);
      let results = exampleFixtures["data"].filter((example)=> {
        return example["attributes"]["category"] === query.category;
      });
      return { data: results };
    } else {
      return { errors: "No results found. See mirage/config /examples setup, ya dingus!" }
    }
  });
}
