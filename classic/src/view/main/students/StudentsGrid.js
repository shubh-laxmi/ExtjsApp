/**
 * This view is an example list of people.
 */

Ext.define('MyApp.view.students.StudentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'StudentGrid',
    title: 'StudentDetails',
    id: 'StudentGrid_list',
    
    store: {
        type: 'studentStore'
    },
 
    
    columns: [{
        xtype: 'rownumberer',
    },
    {
        text: 'Id',
        dataIndex: 'id',
        editor: {
            xtype: 'numberfield',
            hideTrigger: true,
            allowBlank: false
        },
        flex: 1
 
    },
    {
        text: 'Name',
        dataIndex: 'name',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        },
        flex: 1
 
    },
    
    {
        text: 'Gender',
        dataIndex: 'gender',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        },
        flex: 1
    },
    {
        text: 'Class',
        dataIndex: 'class',
        editor: {
            xtype: 'numberfield',
            hideTrigger: true,
            allowBlank: false
        },
        flex: 1
    },
    {
        text: 'Marks',
        dataIndex: 'marks',
        editor: {
            xtype: 'numberfield',
            hideTrigger: true,
            allowBlank: false
        },
        flex: 1
    }
    ],


 
    features: [{ ftype: 'grouping' }],
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 1
    },
 
    selModel: {
        checkOnly: false,
        injectCheckbox: 'last',
        mode: 'SIMPLE'
    },
    selType: 'checkboxmodel',


 
});




