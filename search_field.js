Ext.ns('joshua');
joshua.searchField = new Ext.extend(Ext.form.TriggerField, {
    id:'searchField',
    width: 500,
    style:{
        height:30,
    },
    ctCls:'table_td2',
    triggerClass: 'search-icon',
    initComponent:function(){
        joshua.searchField.superclass.initComponent.call(this);
    },
});
Ext.reg('search-field',joshua.searchField);