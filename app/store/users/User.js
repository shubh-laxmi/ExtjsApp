Ext.define('MyApp.store.users.User', {
    extend: 'Ext.data.Store',

    alias: 'store.users.User',
    model: 'MyApp.model.users.User',

    storeId: 'userStore',


    autoload: true,

    data: [
        // items: 
        { id: '25', firstname: "devi", middlename: "diya", lastname: "k", age: "55", gender: "female" },
        { id: '04', firstname: "Pihu", middlename: "singh", lastname: "p", age: "65", gender: "female" },
        { id: '24', firstname: "aisha", middlename: "anu", lastname: "a", age: "25", gender: "female" },
        { id: '28', firstname: "aashi", middlename: "roy", lastname: "s", age: "75", gender: "female" },
        { id: '20', firstname: "isha", middlename: "shukla", lastname: "i", age: "45", gender: "female" },
        { id: '23', firstname: "navi", middlename: "singh", lastname: "n", age: "35", gender: "female" },

    ]


    /*  proxy: {
          type: 'memory',
          reader: {
              type: 'json',
              rootProperty: 'items'
          }
      },*/

});
