/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function ItemFour(entitySet) {
        /// <summary>
        /// Represents the ItemFour entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this itemFour.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this itemFour.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this itemFour.
        /// </field>
        /// <field name="ItemThree" type="msls.application.ItemThree">
        /// Gets or sets the itemThree for this itemFour.
        /// </field>
        /// <field name="Masters" type="msls.EntityCollection" elementType="msls.application.Master">
        /// Gets the masters for this itemFour.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this itemFour.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this itemFour.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this itemFour.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this itemFour.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this itemFour.
        /// </field>
        /// <field name="details" type="msls.application.ItemFour.Details">
        /// Gets the details for this itemFour.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ItemOne(entitySet) {
        /// <summary>
        /// Represents the ItemOne entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this itemOne.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this itemOne.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this itemOne.
        /// </field>
        /// <field name="ItemTwoes" type="msls.EntityCollection" elementType="msls.application.ItemTwo">
        /// Gets the itemTwoes for this itemOne.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this itemOne.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this itemOne.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this itemOne.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this itemOne.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this itemOne.
        /// </field>
        /// <field name="details" type="msls.application.ItemOne.Details">
        /// Gets the details for this itemOne.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ItemThree(entitySet) {
        /// <summary>
        /// Represents the ItemThree entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this itemThree.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this itemThree.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this itemThree.
        /// </field>
        /// <field name="ItemFours" type="msls.EntityCollection" elementType="msls.application.ItemFour">
        /// Gets the itemFours for this itemThree.
        /// </field>
        /// <field name="ItemTwo" type="msls.application.ItemTwo">
        /// Gets or sets the itemTwo for this itemThree.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this itemThree.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this itemThree.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this itemThree.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this itemThree.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this itemThree.
        /// </field>
        /// <field name="details" type="msls.application.ItemThree.Details">
        /// Gets the details for this itemThree.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ItemTwo(entitySet) {
        /// <summary>
        /// Represents the ItemTwo entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this itemTwo.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this itemTwo.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this itemTwo.
        /// </field>
        /// <field name="ItemThrees" type="msls.EntityCollection" elementType="msls.application.ItemThree">
        /// Gets the itemThrees for this itemTwo.
        /// </field>
        /// <field name="ItemOne" type="msls.application.ItemOne">
        /// Gets or sets the itemOne for this itemTwo.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this itemTwo.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this itemTwo.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this itemTwo.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this itemTwo.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this itemTwo.
        /// </field>
        /// <field name="details" type="msls.application.ItemTwo.Details">
        /// Gets the details for this itemTwo.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Master(entitySet) {
        /// <summary>
        /// Represents the Master entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this master.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this master.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this master.
        /// </field>
        /// <field name="ItemFour" type="msls.application.ItemFour">
        /// Gets or sets the itemFour for this master.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this master.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this master.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this master.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this master.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this master.
        /// </field>
        /// <field name="details" type="msls.application.Master.Details">
        /// Gets the details for this master.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ItemFours" type="msls.EntitySet">
        /// Gets the ItemFours entity set.
        /// </field>
        /// <field name="ItemOnes" type="msls.EntitySet">
        /// Gets the ItemOnes entity set.
        /// </field>
        /// <field name="ItemThrees" type="msls.EntitySet">
        /// Gets the ItemThrees entity set.
        /// </field>
        /// <field name="ItemTwoes" type="msls.EntitySet">
        /// Gets the ItemTwoes entity set.
        /// </field>
        /// <field name="Masters" type="msls.EntitySet">
        /// Gets the Masters entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        ItemFour: $defineEntity(ItemFour, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "ItemThree", kind: "reference", type: ItemThree },
            { name: "Masters", kind: "collection", elementType: Master },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ItemOne: $defineEntity(ItemOne, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "ItemTwoes", kind: "collection", elementType: ItemTwo },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ItemThree: $defineEntity(ItemThree, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "ItemFours", kind: "collection", elementType: ItemFour },
            { name: "ItemTwo", kind: "reference", type: ItemTwo },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ItemTwo: $defineEntity(ItemTwo, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "ItemThrees", kind: "collection", elementType: ItemThree },
            { name: "ItemOne", kind: "reference", type: ItemOne },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Master: $defineEntity(Master, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "ItemFour", kind: "reference", type: ItemFour },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "ItemFours", elementType: ItemFour },
            { name: "ItemOnes", elementType: ItemOne },
            { name: "ItemThrees", elementType: ItemThree },
            { name: "ItemTwoes", elementType: ItemTwo },
            { name: "Masters", elementType: Master }
        ], [
            {
                name: "ItemFours_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemFours },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ItemFours(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "FoursBasedOnThrees", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemFours },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/FoursBasedOnThrees()",
                        {
                            Id: $toODataString(Id, "Int32?")
                        });
                }
            },
            {
                name: "ItemOnes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemOnes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ItemOnes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SortedOnes", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ItemOnes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/SortedOnes()",
                        {
                        });
                }
            },
            {
                name: "ItemThrees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemThrees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ItemThrees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ThreesBasedOnTwos", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemThrees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ThreesBasedOnTwos()",
                        {
                            Id: $toODataString(Id, "Int32?")
                        });
                }
            },
            {
                name: "ItemTwoes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemTwoes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ItemTwoes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TwosBasedOnOnes", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ItemTwoes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TwosBasedOnOnes()",
                        {
                            Id: $toODataString(Id, "Int32?")
                        });
                }
            },
            {
                name: "Masters_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Masters },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Masters(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
