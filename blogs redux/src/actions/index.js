import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  /*
 // actions must be plain objects use 
 //custom middleware for async actions

 //because of async await it is not returning a object as babel transpiler return switch
 //case where there is a case 0 that return the request and that request is being returned as an action
 // const response = await jsonPlaceholder.get('/post');

 */
  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
