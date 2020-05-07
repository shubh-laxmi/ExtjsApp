/**
 * This view is an example list of people.
 */

    Ext.define('MyApp.view.users.UserGrid', {
        extend: 'Ext.grid.Panel',
        xtype: 'usergrid',
        title: 'UserDetails',
        id:'usergrid_list',
        controller: 'grid',
        /*requires: [
            'MyApp.store.users.user',
        ],*/
        
        viewModel: {
            type: 'userGrid'
        },
        /*bind: {
                store: '{users.user}'
            },*/
     
        store: {
            type: 'users.User'
        },

     
        listeners: {
            itemclick: 'onGridItemClick'
        },

    


    columns: [
        { text: 'Id',  dataIndex: 'id' ,flex:1},
        { text: 'First Name',  dataIndex: 'firstname' ,flex: 1},
        { text: 'Middle Name', dataIndex: 'middlename', flex: 1 },
        { text: 'Last Name', dataIndex: 'lastname', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        { text: 'Gender', dataIndex: 'gender', flex: 1 }
    ],

   /* listeners: {
        select: 'onItemSelected'
    },*/

    viewConfig: { 
        stripeRows: false, 
        getRowClass: function(record) { 
            return record.get('age') > 50 ? 'senior-row' : 'young-row'; 
        } 
    } ,





});
