import users from '../data/users.json';
const useFilter = (searchValue) => {
    return searchValue.length === ""?
    Array.from(users.map(user => user.name ))
    :
    users.filter( user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
        )
}


export default useFilter;