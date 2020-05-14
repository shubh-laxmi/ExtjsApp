Ext.define('MyApp.store.students.Students', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.students.Students',
    storeid: 'studentStore',
    alias: 'store.studentStore',
    groupField: 'class',

    data: [
        // items: 
        { id: '25', name: 'devi',  class: '5th', marks: '95', gender: 'female' },
        { id: '20', name: "pihu",  class: "4th", marks: "65", gender: "female" },
        { id: '28', name: "aashi", class: "2nd", marks: "85", gender: "female" },
        { id: '24', name: "aisha", class: "1st", marks: "95", gender: "female" },
        { id: '04', name: "adhya", class: "3rd", marks: "75", gender: "female" },
        { id: '01', name: "disha", class: "5th", marks: "98", gender: "female" },
        { id: '19', name: "diya",  class: "2nd", marks: "89", gender: "female" },

    ]

});


