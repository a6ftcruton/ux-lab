//Define new examples here with title and category to which they belong,
//the function will transform them into a jsonapi document returned to mirage/config
let exampleList = [
  {title: 'password strength indicator' , category: 'input' },
  {title: 'input basic' , category: 'input' },
  {title: 'header navigation' , category: 'navigation' },
  {title: 'mobile navigation' , category: 'navigation' },
  {title: 'cool transition' , category: 'etc' },
];

//Template for each json resource
function objectifyExample(title, category) {
  return {
    id: title.dasherize(),
    type: 'examples',
    attributes: {
      title: title.capitalize(),
      category: category
    }
  }
}
//
let examplesToJson = exampleList.map((example) => {
  return objectifyExample(example.title, example.category);
});

let Examples = {
  data: examplesToJson 
};

(function() {
  // console.log( "_examples ==>", _examples);
  console.log( "Examples ==>", Examples);
})()
export default Examples;
