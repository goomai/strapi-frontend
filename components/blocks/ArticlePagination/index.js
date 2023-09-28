import React from 'react'

function ArticlePagination(props) {
    const { totalPages, currentPage, onPageChange } = props;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.map((number) => (
            <button
                key={number}
                onClick={() => onPageChange(number)}
                className={number === currentPage ? "active" : "non-active"}
            >
                {number}
            </button>
        ));
    };

    return (
        <div className="pagination-block" >
            {
                currentPage===1?
                <>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        className="managebutton"
                        style={{ justifyContent: 'flex-start', marginRight: 'auto',backgroundColor:'white',color:'white',border:'none'}}
                    >
                       
                    </button>
                </>:
                <>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        className="managebutton"
                        style={{ justifyContent: 'flex-start', marginRight: 'auto'}}
                        disabled={currentPage === 1}
                    >
                        <svg width="9px" height="9px" viewBox="0 0 15 15"><path class="st0" d="M10.9,15c-0.2,0-0.4-0.1-0.6-0.2L3.6,8c-0.3-0.3-0.3-0.8,0-1.1l6.6-6.6c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1L5.2,7.4l6.2,6.2c0.3,0.3,0.3,0.8,0,1.1C11.3,14.9,11.1,15,10.9,15z"></path></svg>
                        Previous
                    </button>
                </>
            }
            
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',gap:'30px'}}>
                {renderPageNumbers()}
            </div>
            
            {
                currentPage === totalPages?
                <>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        className="managebutton"
                        style={{ justifyContent: 'flex-end',alignItems:'center',marginLeft: 'auto',border:'none'}}
                    >
                    </button>
                </>:
                <>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        className="managebutton"
                        style={{ justifyContent: 'flex-end',alignItems:'center',marginLeft: 'auto'}}
                        disabled={currentPage === totalPages}
                    >
                        Next
                        <svg width="9px" height="9px" viewBox="0 0 15 15"><path class="st0" d="M4.1,15c0.2,0,0.4-0.1,0.6-0.2L11.4,8c0.3-0.3,0.3-0.8,0-1.1L4.8,0.2C4.5-0.1,4-0.1,3.7,0.2C3.4,0.5,3.4,1,3.7,1.3l6.1,6.1l-6.2,6.2c-0.3,0.3-0.3,0.8,0,1.1C3.7,14.9,3.9,15,4.1,15z"></path></svg>
                    </button>
                </>
            }
        </div>

    );
};

export default ArticlePagination;
