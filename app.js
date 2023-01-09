/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'sencha_explore.Application',

    name: 'sencha_explore',

    requires: [
        // This will automatically load all classes in the sencha_explore namespace
        // so that application classes do not need to require each other.
        'sencha_explore.*'
    ],

    // The name of the initial view to create.
    mainView: 'sencha_explore.view.main.Main'
});
