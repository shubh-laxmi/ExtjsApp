Ext.define('MyApp.view.users.formController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.dataform',
    OnSubmit: function (button) {

        var store = Ext.StoreManager.lookup('userStore');

        var form = button.up('form').getForm();
        var userGrid = Ext.getCmp("usergrid_list");
        var store = userGrid.ownerGrid.getStore();

        store.insert(store.getCount(), form.getValues());
        store.commitChanges();

    },

    closeWindow: function (button) {
        button.up('window').close();
        Ext.Msg.alert('Alert box', 'form clossed sussesfully.');
        //alert("window Closed");
    }
});