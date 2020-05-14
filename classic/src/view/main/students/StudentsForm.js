Ext.define('MyApp.view.students.StudentsForm', {
    extend: 'Ext.window.Window',
    height: 450,
    width: 400,
    layout: 'fit',
    controller: 'studentsform',
    title: 'STUDENTS FORM',
    items: {
        xtype: 'form',

        items: [
            {
                xtype: 'numberfield',
                //anchor: '50%',
                fieldLabel: 'Id',
                name: 'id',
                allowBlank: false,


                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false

            },
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'name',
                allowBlank: false,

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

            {
                xtype: 'combo',
                fieldLabel: 'Class',
                name: 'class',
                queryMode: 'local',
                store: ['1st', '2nd', '3rd', '4th', '5th'],
                autoSelect: true,
                forceSelection: true,
                allowBlank: false,

            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Marks',
                name: 'marks',
                allowBlank: false,
                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: true,
                minValue: '0'
            }

        ],

        buttons: [

            {
                text: 'save',
                handler: 'OnSave'
            },

            {

                text: 'Close',
                handler: 'Onclose'

            }
        ]
    }
});