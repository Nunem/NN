import React from 'react';
const List = propstt => (
  <ul>
    {
      
      propstt.items.map((item, index) => <li key={index} onClick={propstt.click.bind(propstt,index)} ><a href="https://content.guardianapis.com/search?api-key=d1820412-5603-4fe0-99d8-370cf09ce463&show-fields=thumbnail&page=${index}">{item}</a></li>)

        }
  </ul>



);



export default List;
