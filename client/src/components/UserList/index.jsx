import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, nextPage, prevPage } from '../../redux/slice/userSlice';

const UserList = (props) => {
  
  const users = useSelector((state) => state.user.user);
  const page = useSelector((state) => state.user.page);


  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const handlePrevPage = () => {
    if(page > 1) {
      dispatch(prevPage())
    }
  };
 
  const handleNextPage = () => {
    if(users.length > 0) {
      dispatch(nextPage());
    }
  };

  return (
    <div>
      <h3>UserList</h3>
      <div>
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <ol>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>
              <div>
                <h3>{`${user.firstName}`}</h3>
                <h5>{`${user.email} manufacturer`}</h5>
              </div>
            </li>
          ))
        ) : (
          <li>No user available.</li>
        )}
      </ol>
    </div>
  )
}

export default UserList