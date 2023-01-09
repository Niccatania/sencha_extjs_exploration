Ext.define('sencha_explore.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'sencha_explore.model.Personnel',

    data: { items: [
        { name: 'Nic Catania', email: "nicjcatania@gmail.com", phone: "Javascript" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
