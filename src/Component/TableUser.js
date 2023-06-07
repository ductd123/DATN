import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchAllusers } from '../service/UserService';
import { Table } from 'react-bootstrap';

function TableUser() {
    const [listUsers, setListUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        getUsers(0);
    }, [])


    const handlePageClick = (event) => {
        getUsers(+event.selected +1)
    }
    const getUsers = async (index) => {
        let res =fetchAllusers(index);
        if (res && res.length>0) {
            setListUsers(res)
            setTotalPages(res.length/ 4 )
            setPageCount(+res.length)
        }
    }
    const currentRender = (a)=>{
        const currentItems = listUsers.slice(a*4,(a+1)*4)
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last name</th>
                    </tr>
                </thead>
                <tbody onClick={currentRender}>
                    
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />
        </div>
    );
};

export default TableUser;