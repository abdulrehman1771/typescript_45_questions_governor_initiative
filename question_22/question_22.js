let myarr = ['Karachi', 'Hyderabad', 'Kashmir', 'Mari'];
function indexError(index) {
    if (index < 0 || index >= myarr.length) {
        console.error(`Error! This index is not available, Please use correct index.`);
    }
    else {
        console.log(myarr[index]);
    }
}
indexError(1);
export {};
