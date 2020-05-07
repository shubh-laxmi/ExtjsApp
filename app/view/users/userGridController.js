Ext.define('MyApp.view.users.userGridController', {
    extend: 'Ext.app.ViewController',

   alias: 'controller.grid',
   onGridItemClick: function (selModel, rec) {
    var form = Ext.ComponentQuery.query('myForm')[0];
    if (!form) {
        form = Ext.create('MyApp.view.users.userDetail');
    }
    if (form.isHidden()) {
        form.show();
    }
    form.getViewModel().set('userData', rec)
}
})

