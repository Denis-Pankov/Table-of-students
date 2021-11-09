(function () {
  const studentList = [
    {
      name: 'name-2',
      surname: 'surname-5',
      patronymic: 'patronymic-1',
      birthDate: { year: 1991, month: 1, day: 1 },
      dateStart: 2021,
      faculty: 'Вёрстка'
    },
    {
      name: 'name-2',
      surname: 'surname-6',
      patronymic: 'patronymic-2',
      birthDate: { year: 1996, month: 2, day: 2 },
      dateStart: 2020,
      faculty: 'Дизайн'
    },
    {
      name: 'name-1',
      surname: 'surname-2',
      patronymic: 'patronymic-3',
      birthDate: { year: 1994, month: 3, day: 3 },
      dateStart: 2019,
      faculty: 'Анализ'
    },
    {
      name: 'name-3',
      surname: 'surname-1',
      patronymic: 'patronymic-4',
      birthDate: { year: 1993, month: 4, day: 4 },
      dateStart: 2018,
      faculty: 'Маркетинг'
    },
    {
      name: 'name-5',
      surname: 'surname-3',
      patronymic: 'patronymic-5',
      birthDate: { year: 1995, month: 5, day: 5 },
      dateStart: 2018,
      faculty: 'Таргетинг'
    },
    {
      name: 'name-5',
      surname: 'surname-5',
      patronymic: 'patronymic-5',
      birthDate: { year: 1993, month: 4, day: 4 },
      dateStart: 2019,
      faculty: 'Маркетинг'
    },
    {
      name: 'name-5',
      surname: 'surname-2',
      patronymic: 'patronymic-3',
      birthDate: { year: 1995, month: 5, day: 5 },
      dateStart: 2017,
      faculty: 'Таргетинг'
    },
    {
      name: 'name-4',
      surname: 'surname-4',
      patronymic: 'patronymic-6',
      birthDate: { year: 1992, month: 6, day: 6 },
      dateStart: 2016,
      faculty: 'SMM'
    },
    {
      name: 'name-7',
      surname: 'surname-7',
      patronymic: 'patronymic-5',
      birthDate: { year: 1992, month: 6, day: 6 },
      dateStart: 2016,
      faculty: 'SMM'
    }
  ];

  let filterStudent = [];
  let searchStudent = [];
  let tempStudent = [];
  const DATA = new Date();

  function formAddStudent() {
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputPatronymic = document.createElement('input');
    const inputBirthDate = document.createElement('input');
    const inputYearStart = document.createElement('input');
    const inputFaculty = document.createElement('input');
    const button = document.createElement('button');

    form.classList.add('input-group', 'mb-3', 'mt-3');

    inputName.classList.add('form-control', 'mr-2');
    inputName.setAttribute('required', true);
    inputName.setAttribute('minlength', 2);
    inputName.setAttribute('maxlength', 30);
    inputName.setAttribute('onkeypress', 'if ("1234567890".indexOf(event.key) != -1) event.preventDefault();');
    inputName.placeholder = 'Имя';

    inputSurname.classList.add('form-control', 'mr-2');
    inputSurname.setAttribute('required', true);
    inputSurname.setAttribute('minlength', 2);
    inputSurname.setAttribute('maxlength', 30);
    inputSurname.setAttribute('onkeypress', 'if ("1234567890".indexOf(event.key) != -1) event.preventDefault();');
    inputSurname.placeholder = 'Фамилию';

    inputPatronymic.classList.add('form-control', 'mr-2');
    inputPatronymic.setAttribute('required', true);
    inputPatronymic.setAttribute('minlength', 2);
    inputPatronymic.setAttribute('maxlength', 30);
    inputPatronymic.setAttribute('onkeypress', 'if ("1234567890".indexOf(event.key) != -1) event.preventDefault();');
    inputPatronymic.placeholder = 'Отчество';

    inputBirthDate.classList.add('form-control', 'mr-2');
    inputBirthDate.setAttribute('type', 'date');
    inputBirthDate.setAttribute('required', true);
    inputBirthDate.setAttribute('min', '1900-01-01');
    inputBirthDate.setAttribute('max', `${DATA.getFullYear()}-${DATA.getMonth() + 1}-${DATA.getDate()}`);
    inputBirthDate.placeholder = 'Дата рождения';

    inputYearStart.classList.add('form-control', 'mr-2');
    inputYearStart.setAttribute('type', 'number');
    inputYearStart.setAttribute('required', true);
    inputYearStart.setAttribute('min', '2000');
    inputYearStart.setAttribute('max', `${DATA.getFullYear()}`);
    inputYearStart.placeholder = 'Год начала обуч.';

    inputFaculty.classList.add('form-control', 'mr-2');
    inputFaculty.setAttribute('required', true);
    inputFaculty.setAttribute('minlength', 2);
    inputFaculty.setAttribute('maxlength', 30);
    inputFaculty.placeholder = 'Факультет';

    button.classList.add('btn', 'btn-outline-dark', 'btn-block', 'mt-3');
    button.textContent = 'Добавить студента';

    form.append(inputName);
    form.append(inputSurname);
    form.append(inputPatronymic);
    form.append(inputBirthDate);
    form.append(inputYearStart);
    form.append(inputFaculty);
    form.append(button);

    return {
      form,
      inputName,
      inputSurname,
      inputPatronymic,
      inputBirthDate,
      inputYearStart,
      inputFaculty,
      button
    };
  }

  function tableSearch() {
    let div = document.createElement('div');
    let inputSearchFnLnP = document.createElement('input');
    let inputSearchFaculty = document.createElement('input');
    let inputSearchStartEduc = document.createElement('input');
    let inputSearchFinishEduc = document.createElement('input');

    div.classList.add('input-group', 'mb-3', 'mt-3');

    inputSearchFnLnP.classList.add('form-control', 'mr-2');
    inputSearchFnLnP.setAttribute('id', 'fnLnP');
    inputSearchFnLnP.placeholder = 'Поиск по ФИО';

    inputSearchFaculty.classList.add('form-control', 'mr-2');
    inputSearchFaculty.setAttribute('id', 'faculty');
    inputSearchFaculty.placeholder = 'Поиск по факультету';

    inputSearchStartEduc.classList.add('form-control', 'mr-2');
    inputSearchStartEduc.setAttribute('id', 'startEduc');
    inputSearchStartEduc.placeholder = 'Поиск по году нач.обучения';

    inputSearchFinishEduc.classList.add('form-control', 'mr-2');
    inputSearchFinishEduc.setAttribute('id', 'finishEduc');
    inputSearchFinishEduc.placeholder = 'Поиск по году оконч.обучения';

    div.append(inputSearchFnLnP);
    div.append(inputSearchFaculty);
    div.append(inputSearchStartEduc);
    div.append(inputSearchFinishEduc);

    return {
      div,
      inputSearchFnLnP,
      inputSearchFaculty,
      inputSearchStartEduc,
      inputSearchFinishEduc
    }
  }

  function tableTap() {
    const table = document.createElement('table');
    table.classList.add('table');

    const thead = document.createElement('thead');
    thead.classList.add('thead-dark');
    const theadTr = document.createElement('tr');
    const theadThName = document.createElement('th');
    theadThName.setAttribute('scope', 'col');
    theadThName.textContent = 'ФИО';
    const theadThFaculty = document.createElement('th');
    theadThFaculty.setAttribute('scope', 'col');
    theadThFaculty.textContent = 'Факультет';
    const theadThBirthDate = document.createElement('th');
    theadThBirthDate.setAttribute('scope', 'col');
    theadThBirthDate.textContent = 'ДР и возраст';
    const theadThYearStart = document.createElement('th');
    theadThYearStart.setAttribute('scope', 'col');
    theadThYearStart.textContent = 'Годы обучения';

    theadTr.append(theadThName);
    theadTr.append(theadThFaculty);
    theadTr.append(theadThBirthDate);
    theadTr.append(theadThYearStart);
    thead.append(theadTr);
    table.append(thead);

    return {
      table,
      thead,
      theadThName,
      theadThFaculty,
      theadThBirthDate,
      theadThYearStart
    }
  }

  function addStudent(inpName, inpSurname, inpPatronymic, inpBirthDate, inpYearStart, inpFaculty) {
    let student = {};

    student.name = inpName;
    student.surname = inpSurname;
    student.patronymic = inpPatronymic;
    const dateBirthDay = new Date(inpBirthDate);
    let birthDateObj = {};
    student.birthDate = birthDateObj;
    birthDateObj.year = dateBirthDay.getFullYear();
    birthDateObj.month = dateBirthDay.getMonth() + 1;
    birthDateObj.day = dateBirthDay.getDate();
    student.dateStart = +inpYearStart;
    student.faculty = inpFaculty;

    studentList.push(student);
  }

  function createTable(outList) {
    // console.log(outList);

    const tbody = document.createElement('tbody');

    for (let item = 0; item < outList.length; item++) {

      const itemValues = Object.values(outList[item]);
      const itemDateValues = Object.values(itemValues[3]);
      const itemKeys = Object.keys(outList[item]);

      const tbodyTr = document.createElement('tr');
      const tbodyTdName = document.createElement('td');
      tbodyTdName.setAttribute('scope', 'row')
      tbodyTdName.textContent = `${itemValues[1]} ${itemValues[0]} ${itemValues[2]}`;
      const tbodyTdFaculty = document.createElement('td');
      tbodyTdFaculty.textContent = itemValues[5];
      const tbodyTdBirthDate = document.createElement('td');
      function getAge() {
        if ((DATA.getMonth() + 1) > itemDateValues[1]) {
          age = DATA.getFullYear() - itemDateValues[0];
        }
        else {
          age = DATA.getFullYear() - itemDateValues[0] - 1;
        }
        return age;
      }
      const ageStudent = getAge();
      tbodyTdBirthDate.textContent = `${itemDateValues[2]}.${itemDateValues[1]}.${itemDateValues[0]} (${ageStudent})`;
      const tbodyTdYearStart = document.createElement('td');
      function getEducationYear() {
        if (DATA.getFullYear() - itemValues[4] > 4 || (DATA.getFullYear() - itemValues[4] === 4 && DATA.getMonth() > 8)) {
          educationYear = 'закончил';
        }
        else if (((DATA.getFullYear() - itemValues[4] === 4 && DATA.getMonth() <= 8) || (DATA.getFullYear() - itemValues[4]) < 4)) {
          educationYear = `${DATA.getFullYear() - itemValues[4] + 1} курс`;
        }
        return educationYear;
      }
      const getYear = getEducationYear();
      tbodyTdYearStart.textContent = `${itemValues[4]}-${itemValues[4] + 4} (${getYear})`;


      tbody.append(tbodyTr);
      tbodyTr.append(tbodyTdName);
      tbodyTr.append(tbodyTdFaculty);
      tbodyTr.append(tbodyTdBirthDate);
      tbodyTr.append(tbodyTdYearStart);

    }

    return {
      tbody
    }

  }

  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('student-list');

    const listAddStudent = formAddStudent();
    const addTableSearch = tableSearch();
    let addTableTap = tableTap();
    let addTableStudentList = createTable(studentList);

    container.append(listAddStudent.form);
    container.append(addTableSearch.div);
    container.append(addTableTap.table);
    addTableTap.table.append(addTableStudentList.tbody);


    // container.append(addTable.table);

    listAddStudent.form.addEventListener('submit', function (e) {
      //убираем стандартное действие браузера, чтобы страница не перезагружалась
      e.preventDefault();
      addTableStudentList.tbody.remove();

      const formAddStudent = addStudent(listAddStudent.inputName.value, listAddStudent.inputSurname.value, listAddStudent.inputPatronymic.value, listAddStudent.inputBirthDate.value, listAddStudent.inputYearStart.value, listAddStudent.inputFaculty.value);
      addTableStudentList = createTable(studentList);
      addTableTap.table.append(addTableStudentList.tbody);
      listAddStudent.inputName.value = '';
      listAddStudent.inputSurname.value = '';
      listAddStudent.inputPatronymic.value = '';
      listAddStudent.inputBirthDate.value = '';
      listAddStudent.inputYearStart.value = '';
      listAddStudent.inputFaculty.value = ''
    });

    // Поиск

    addTableSearch.inputSearchFnLnP.addEventListener('input', function () { transText(addTableSearch.inputSearchFnLnP, 'name') });
    addTableSearch.inputSearchFaculty.addEventListener('input', function () { transText(addTableSearch.inputSearchFaculty, 'faculty') });
    addTableSearch.inputSearchStartEduc.addEventListener('input', function () { transText(addTableSearch.inputSearchStartEduc, 'dateStart') });
    addTableSearch.inputSearchFinishEduc.addEventListener('input', function () { transText(addTableSearch.inputSearchFinishEduc, 'dateStart') });

    let text = '';
    let textId;
    let inputSearch;

    function transText(inputBlock, prorertyStudent) {
      clearTimeout(textId);
      text = inputBlock.value;
      textId = setTimeout(function () { entText(inputBlock, prorertyStudent) }, 1000);
    }

    function entText(inputBlock, prorertyStudent) {
      addTableStudentList.tbody.remove();
      inputSearch = text;
      if (searchStudent.length === 0) {
        tempStudent = studentList.slice();
      } else {
        tempStudent = searchStudent.slice();
      }
      if (inputBlock === addTableSearch.inputSearchFinishEduc) {
        // console.log('Сработал поиск по окончанию обучения');
        searchStudent = tempStudent.filter(tempStudent => tempStudent.dateStart == (inputSearch - 4));
      } else if (inputBlock === addTableSearch.inputSearchStartEduc) {
        // console.log('Сработал поиск по началу обучения');
        searchStudent = tempStudent.filter(tempStudent => tempStudent.dateStart == inputSearch);
      } else {
        searchStudent = tempStudent.filter(tempStudent => tempStudent[prorertyStudent] === inputSearch);
      }

      if (inputBlock === addTableSearch.inputSearchFnLnP) {
        // console.log('Доп.поиск по колонке ФИО');
        if (searchStudent.length === 0) {
          searchStudent = tempStudent.filter(tempStudent => tempStudent.surname === inputSearch);
        }
        if (searchStudent.length === 0) {
          searchStudent = tempStudent.filter(tempStudent => tempStudent.patronymic === inputSearch);
        }
      }

      createOutTable();

      function createOutTable() {
        // console.log('Построение и вывод таблицы');
        if (inputSearch.length > 0) {
          addTableStudentList = createTable(searchStudent);
        // } else if (inputSearch.length === 0 && (addTableSearch.inputSearchFnLnP.value.length !== 0 || addTableSearch.inputSearchFaculty.value.length !== 0 || addTableSearch.inputSearchStartEduc.value.length !== 0 || addTableSearch.inputSearchFinishEduc.value.length !== 0)) {
        //   if (document.getElementById('fnLnP').value.length !== 0) {
        //     console.log('Работает функция по имени');
        //     console.log(addTableSearch.inputSearchFnLnP);
        //     console.log(document.getElementById('fnLnP').value);
        //     inputSearch = addTableSearch.inputSearchFnLnP.value;
        //     transText(addTableSearch.inputSearchFnLnP, 'name');
        //   }
        //   if (document.getElementById('faculty').value.length !== 0) {
        //     console.log('Работает функция по факультету');
        //     console.log(document.getElementById('faculty').value);
        //     inputSearch = addTableSearch.inputSearchFaculty.value;
        //     transText(addTableSearch.inputSearchFaculty, 'faculty');
        //   }
        //   if (document.getElementById('startEduc').value !== 0) {
        //     console.log('Работает функция по началу обучения');
        //     console.log(document.getElementById('startEduc').value);
        //     console.log(addTableSearch.inputSearchStartEduc);
        //     inputSearch = addTableSearch.inputSearchStartEduc.value;
        //     transText(addTableSearch.inputSearchStartEduc, 'dateStart');
        //   }
        //   if (document.getElementById('finishEduc').value.length !== '') {
        //     console.log('Работает функция по окончанию обучения');
        //     console.log(document.getElementById('finishEduc').value);
        //     console.log(addTableSearch.inputSearchFinishEduc);
        //     inputSearch = addTableSearch.inputSearchFinishEduc.value;
        //     transText(addTableSearch.inputSearchFinishEduc, 'dateStart');
        //   }
        //   addTableStudentList = createTable(searchStudent);
        } else {
          addTableStudentList = createTable(studentList);
          addTableSearch.inputSearchFnLnP.value = '';
          addTableSearch.inputSearchFaculty.value = '';
          addTableSearch.inputSearchStartEduc.value = '';
          addTableSearch.inputSearchFinishEduc.value = '';
          tempStudent.length = 0;
          searchStudent.length = 0;
        }

        outTable();
        function outTable() {
          // console.log('Вывод таблицы на экран');
          addTableTap.table.append(addTableStudentList.tbody);
        }
      }
    }

    //Фильтрация
    addTableTap.theadThName.addEventListener('click', function () { filterTableString('surname') });
    addTableTap.theadThFaculty.addEventListener('click', function () { filterTableString('faculty') });
    addTableTap.theadThBirthDate.addEventListener('click', filterTableBirtdDate);
    addTableTap.theadThYearStart.addEventListener('click', filterTableYear);

    // addTable.theadThName.addEventListener('click', filterTable);

    function filterTableString(column) {
      addTableStudentList.tbody.remove();
      if (filterStudent.length !== studentList.length) {
        filterStudent = studentList.slice();
        // console.log('Сработало присвоение массива');
      }
      addTableStudentList = createTable(filterStudent.sort(function (a, b) {
        let itemA = a[column].toUpperCase();
        let itemB = b[column].toUpperCase();
        return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
      }, column));
      addTableTap.table.append(addTableStudentList.tbody);
    }

    function filterTableBirtdDate() {
      // console.log('Сработала сортировка по дате рождения');
      addTableStudentList.tbody.remove();
      if (filterStudent.length !== studentList.length) {
        filterStudent = studentList.slice();
        // console.log('Сработало присвоение массива');
      }
      addTableStudentList = createTable(filterStudent.sort(function (a, b) {
        let dateA = new Date(a.birthDate.year, (a.birthDate.month - 1), a.birthDate.day);
        let dateB = new Date(b.birthDate.year, (b.birthDate.month - 1), b.birthDate.day);
        return dateB - dateA;
      }));
      addTableTap.table.append(addTableStudentList.tbody);
    }

    function filterTableYear() {
      addTableStudentList.tbody.remove();
      if (filterStudent.length !== studentList.length) {
        filterStudent = studentList.slice();
        // console.log('Сработало присвоение массива');
      }
      addTableStudentList = createTable(filterStudent.sort(function (a, b) {
        return a.dateStart - b.dateStart;
      }));
      addTableTap.table.append(addTableStudentList.tbody);
    }

  });

})();
