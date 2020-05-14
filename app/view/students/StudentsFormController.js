
Ext.define('MyApp.view.students.StudentsFormController', {
    extend: 'Ext.app.ViewController',
 
    alias: 'controller.studentsform',
 
    OnSave: function (button) {
        var store = Ext.StoreManager.lookup('studentStore');
        var form = button.up('form').getForm();
        var StudentGrid = Ext.getCmp('StudentGrid_list');
        var store = StudentGrid.ownerGrid.getStore();
 
        store.insert(store.getCount(), form.getValues());
        store.commitChanges();
    },
 
    Onclose: function (button) {
        button.up('window').close();
        Ext.Msg.alert('Alert box', 'Student form clossed sussesfully.');
    }
});