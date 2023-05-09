// student object
const student = {
  firstName: 'Nhu Quan',
  lastName: 'Tran',
  age: 34,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log("Student's full name: ", fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Military Service';
console.log('Is student living in Irvine? ', student.livesInIrvine);
console.log("Student's previous job: ", student.previousOccupation);
console.log('Student object: ', student);

// vehicle object
const vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: '2012',
};
vehicle['color'] = 'blue';
vehicle['isConvertable'] = false;
console.log('Vehicle color: ', vehicle['color']);
console.log('Vehicle convertability: ', vehicle['isConvertable']);
console.log('vehicle object: ', vehicle);

// pet object
const pet = {
  name: 'Cosmo',
  type: 'Golden Retriever',
};
delete pet.name;
delete pet.type;
console.log('Pet object after deletion: ', pet);
