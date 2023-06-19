const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    john: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    michael: {
      position: 'Clerk',
      daysOfWeekWorking: ['M', 'W'],
    },
    shawn: {
      position: 'Developer',
      daysOfWeekWorking: ['T', 'Th'],
    },
    bob: {
      position: 'Accountant',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
  },
};

function addWeekends() {
  const weekends = ['Sat', 'Sun'];
  if (
    business.daysOpen.indexOf('Sat') === -1 &&
    business.daysOpen.indexOf('Sun') === -1
  ) {
    business.daysOpen = business.daysOpen.concat(weekends);
  }
  for (const employee in business.employees) {
    if (
      business.employees[employee].daysOfWeekWorking.indexOf('Sat') === -1 &&
      business.employees[employee].daysOfWeekWorking.indexOf('Sun') === -1
    ) {
      business.employees[employee].daysOfWeekWorking =
        business.employees[employee].daysOfWeekWorking.concat(weekends);
    }
  }
}

// get random number of radom weekdays, sort in order
function randomWeekdays() {
  const num = Math.floor(Math.random() * 5 + 1);
  const weekDays = ['M', 'T', 'W', 'Th', 'F'];
  return [...weekDays]
    .sort(() => 0.5 - Math.random())
    .slice(0, num)
    .sort((day1, day2) =>
      weekDays.indexOf(day1) < weekDays.indexOf(day2) ? -1 : 1
    );
}

function addFulltime() {
  for (const employee in business.employees) {
    if (!business.employees[employee].fullTime) {
      business.employees[employee].fullTime =
        business.employees[employee].daysOfWeekWorking.length > 5;
    }
  }
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', () => {
    const users = xhr.response;
    for (let i = 0; i < 4; i++) {
      business.employees[`${users[i].name}`] = {};
      business.employees[`${users[i].name}`].position = `Developer ${i + 1}`;
      business.employees[`${users[i].name}`].daysOfWeekWorking =
        randomWeekdays();
      business.employees[`${users[i].name}`].daysOfWeekWorking =
        business.employees[`${users[i].name}`].daysOfWeekWorking.concat([
          'Sat',
          'Sun',
        ]);
      business.employees[`${users[i].name}`].fullTime =
        business.employees[users[i].name].daysOfWeekWorking.length > 5;
    }
    business.totalEmployees = Object.keys(business.employees).length;
  });
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees = Object.keys(business.employees).length;
}

window.addEventListener('DOMContentLoaded', (event) => {
  addWeekends();
  addFulltime();
  addEmployees();
  deleteEmployee('bob');
});
