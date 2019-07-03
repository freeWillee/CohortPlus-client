import * as constants from '../constants/index';

// my sort function
export const sortThisArray = (sortedArray, userClickSort, findUserCb) => {
    return sortedArray.sort(function(a, b, sortBy=userClickSort, findUserCbFunc=user => findUserCb(user)) {
        let nameA
        let nameB

        switch(sortBy) {
            case constants.FIRST_NAME:
                nameA = a.attributes.first_name.toUpperCase(); // ignore upper and lowercase
                nameB = b.attributes.first_name.toUpperCase(); // ignore upper and lowercase                    
                break
            case constants.LAST_NAME:
                nameA = a.attributes.last_name.toUpperCase(); // ignore upper and lowercase
                nameB = b.attributes.last_name.toUpperCase(); // ignore upper and lowercase                    
                break
            case constants.POSITION:
                nameA = findUserCbFunc(a).toUpperCase(); // ignore upper and lowercase
                nameB = findUserCbFunc(b).toUpperCase(); // ignore upper and lowercase
                break
            case constants.EMAIL:
                nameA = a.attributes.email.toUpperCase(); // ignore upper and lowercase
                nameB = b.attributes.email.toUpperCase(); // ignore upper and lowercase
                break
            case constants.TITLE:
                nameA = a.attributes.title.toUpperCase(); // ignore upper and lowercase
                nameB = b.attributes.title.toUpperCase(); // ignore upper and lowercase
                break                
            case constants.DESCRIPTION:
                nameA = a.attributes.description.toUpperCase(); // ignore upper and lowercase
                nameB = b.attributes.description.toUpperCase(); // ignore upper and lowercase
                break                
            case constants.DEADLINE:
                nameA = a.attributes.deadline.toUpperCase(); // ignore upper and lowercase
                nameB = b.attributes.deadline.toUpperCase(); // ignore upper and lowercase
                break                
            default:  // sort by id
                nameA = "a" // ignore upper and lowercase
                nameB = "b" // ignore upper and lowercase
                break
        }
        
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }              
        // names must be equal
        return 0;
    });

    
}