import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
/*
export const fetchPosts = async () => {
  
 // actions must be plain objects use 
 //custom middleware for async actions

 //because of async await it is not returning a object as babel transpiler return switch
 //case where there is a case 0 that return the request and that request is being returned as an action
 // const response = await jsonPlaceholder.get('/post');

 
  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};

 */

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

/*
export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  };
};
*/

export const fetchUser = (id) => (dispatch) => {
  return _fetchUser(id, dispatch);
};
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
});
