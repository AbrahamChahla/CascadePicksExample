/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.ItemFour, {
        /// <field>
        /// Called when a new itemFour is created.
        /// <br/>created(msls.application.ItemFour entity)
        /// </field>
        created: [lightSwitchApplication.ItemFour]
    });

    msls._addEntryPoints(lightSwitchApplication.ItemOne, {
        /// <field>
        /// Called when a new itemOne is created.
        /// <br/>created(msls.application.ItemOne entity)
        /// </field>
        created: [lightSwitchApplication.ItemOne]
    });

    msls._addEntryPoints(lightSwitchApplication.ItemThree, {
        /// <field>
        /// Called when a new itemThree is created.
        /// <br/>created(msls.application.ItemThree entity)
        /// </field>
        created: [lightSwitchApplication.ItemThree]
    });

    msls._addEntryPoints(lightSwitchApplication.ItemTwo, {
        /// <field>
        /// Called when a new itemTwo is created.
        /// <br/>created(msls.application.ItemTwo entity)
        /// </field>
        created: [lightSwitchApplication.ItemTwo]
    });

    msls._addEntryPoints(lightSwitchApplication.Master, {
        /// <field>
        /// Called when a new master is created.
        /// <br/>created(msls.application.Master entity)
        /// </field>
        created: [lightSwitchApplication.Master]
    });

}(msls.application));
