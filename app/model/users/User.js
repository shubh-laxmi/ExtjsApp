Ext.define('MyApp.model.users.User', {
    extend: 'MyApp.model.Base',
    // extend:'Ext.data.Model',
    // autoLoad : true,
    fields: [
     'id', "firstname", "middlename", "lastname", "age", "gender",
    ]
});
