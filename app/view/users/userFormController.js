Ext.define('MyApp.view.users.userFormController', {
    extend: 'Ext.window.Window',
    height: 450,
    width: 400,
    layout: 'fit',
    controller:'dataform',
    title:'USER FORM',
    items: {
        xtype: 'form',
        // defaultType: 'textfield',
        //broder: false,
        //column: [{ header: 'Name' }],
        //store: []
        items: [
            {
                xtype: 'numberfield',
                //anchor: '50%',
                fieldLabel: 'Id',
                name: 'id',
                allowBlank: false,
                minLength: 2,

                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false

            },
            {
                xtype: 'textfield',
                fieldLabel: 'FirstName',
                name: 'firstname',
                allowBlank: false,
                minLength: 3,
            },
            {
                xtype: 'textfield',
                fieldLabel: 'MiddleName',
                name: 'middlename',
                allowBlank: false,
                minLength: 3
            },
            {
                xtype: 'textfield',
                fieldLabel: 'LastName',
                name: 'lastname',
                allowBlank: false,
                minLength: 3
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Age',
                name: 'age',
                allowBlank: false,
                

                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false

            },
            {
                xtype: 'radiogroup',
                fieldLabel: 'Gender',
                columns: 1,
                vertical: true,
                items: [
                    { boxLabel: 'Male', name: 'gender', inputValue: 'Male' },
                    { boxLabel: 'Female', name: 'gender', inputValue: 'Female', checked: true },
                    { boxLabel: 'Other', name: 'gender', inputValue: 'Other' }
                ]

            },
        ],

        buttons: [
            {
                text: 'submit',
                //formBind:true,
                //disabled : true,
               /* handler: function () {
                    var form = this.up('form').getForm();
                    alert(JSON.stringify(form.getValues()));
                    if (form.isValid()) {
                        // success: function (form, action){
                        Ext.Msg.alert('Success', "Data Saved");

                        //}
                    }
                    // console.warn("print the form data", data.getForm().getValue());
                }*/

                 handler:'OnSubmit'


            }, {
                text: 'close',
                handler:'closeWindow'
                //formbind:true,
               /* handler: function () {
                    this.up('window').close();

                    Ext.Msg.alert("Click Ok button to close this form")

                }*/
            },
        ]
    }


   
});