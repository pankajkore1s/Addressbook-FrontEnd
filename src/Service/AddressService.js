import axios from "axios";
const  ADDRESS_API_BASE_URL="http://localhost:8082/addressbook/contacts"
const  ADDRESS_API_CREATE_URL="http://localhost:8082/addressbook/createcontact"

class AddressService{

    getContacts(){
        return axios.get(ADDRESS_API_BASE_URL);
    }
    createContact(addressbook){
        return axios.post(ADDRESS_API_CREATE_URL, addressbook);
    }

}
export default new AddressService()