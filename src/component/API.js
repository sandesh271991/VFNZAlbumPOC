// import axios from 'axios';
// import * as myConstant from '../common/Constants';

// export default async function fetchInfo() {
//   return axios // IMPORTANT THE RETURN HERE
//     .get(myConstant.API + 'albums', {timeout: myConstant.TIMEOUT} )
//     .then((response) => {
//       const items = response.data.items;
//       return items;
//     })
//     .catch(err => {
//       this.setState({isLoading: false, apiLoadingError: true})
//     }); 
// }