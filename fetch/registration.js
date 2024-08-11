import axios from 'axios';
const postparticipantsDetails= async (body)=>{
    try{
  const response= await axios.post('http://localhost:3004/api/register',body);
    return response.data;
    }
  catch(err){
    throw err
  }
}
export {postparticipantsDetails};