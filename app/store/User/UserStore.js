﻿Ext.define('MyGPS.store.User.UserStore', {

});


var _DataStore_User_Login = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.User.UserModel',
    id: 'User_LoginID',
    proxy: {
        type: 'ajax',
      //  url:'http://192.168.0.102:9012/GPSUser/GPSUserLog_in',
        url: document.location.protocol + '//' + document.location.host + '/API/GPSUser/GPSUserLog_in',
        actionMethods: {
            read: 'GET'
        },
      
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    //autoLoad: true
});




var _DataStore_CheckUserName = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.User.UserModel',
    id: 'User_CheckUserName',
    proxy: {
        type: 'ajax',
        //  url:'http://192.168.0.102:9012/GPSUser/GPSUserLog_in',
        url: document.location.protocol + '//' + document.location.host + '/API/GPSUser/GPSUserCheckUserName',
        actionMethods: {
            read: 'GET'
        },

        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    //autoLoad: true
});