import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import Api from '../api';
import {Container, Wrapper, Card} from './styles'

function App() {
  
  const [allPosts, setAllPosts ] = useState([]);
  const [visiblePosts, setVisiblePosts ] = useState([]);
  const [pageCount, setPageCount ] = useState(1);
  const [perPage, setPerPage ] = useState(9);
  const [currentPage, setCurrentPage ] = useState(0);

  useEffect( async ()=> {
    const response = await Api 
    setPageCount( Math.ceil(response.length / perPage));
    setAllPosts(response);
  }, []);

  useEffect(() => {
    setVisiblePosts( allPosts.filter((e)=> {
      if (e.id > currentPage && e.id <= currentPage + 9) {
        return e;
      }
    }));

    
  }, [allPosts]);


  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    let selected = data.selected;
    console.log(selected + ' selected');
    setVisiblePosts(allPosts.filter((e)=> {
      if (e.id > (selected * 9) && e.id <= (selected * 9) + 9) {
        console.log(e.id)
        
        return e;
      }})
    );
  };
  
  return (
    <Container>
      <h1>Posts API</h1>
      <Wrapper>
        {/* {console.log(visiblePosts)} */}
        { visiblePosts && visiblePosts.map((e, index)=> 
          
          <Card key={index} id={index}>
            {e.title}
          </Card>

        )
        }
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          pageLinkClassName={'paginationLink'}
        />
      </Wrapper>
    
    </Container>
    
  );
}

export default App;
