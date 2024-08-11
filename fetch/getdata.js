import axios from 'axios';
const getResource = async (id) => {
    try {
        const response = await axios.get(id ? `http://localhost:3004/api/coderesource/${id}` : "http://localhost:3004/api/coderesource");
        return response.data;
    } catch (err) {
    throw err
    }
}

const getEvents = async (id) => {
    try {
        const response = await axios.get(id ? `http://localhost:3004/api/event/${id}` : "http://localhost:3004/api/event");
        return response.data;
    } catch (err) {
        throw err
    }
}

export {getResource,getEvents};
