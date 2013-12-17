/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditItemFour(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditItemFour screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemFour" type="msls.application.ItemFour">
        /// Gets or sets the itemFour for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditItemFour.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditItemFour", parameters);
    }

    function AddEditItemOne(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditItemOne screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemOne" type="msls.application.ItemOne">
        /// Gets or sets the itemOne for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditItemOne.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditItemOne", parameters);
    }

    function AddEditItemThree(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditItemThree screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemThree" type="msls.application.ItemThree">
        /// Gets or sets the itemThree for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditItemThree.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditItemThree", parameters);
    }

    function AddEditItemTwo(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditItemTwo screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemTwo" type="msls.application.ItemTwo">
        /// Gets or sets the itemTwo for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditItemTwo.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditItemTwo", parameters);
    }

    function AddEditMaster(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditMaster screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Master" type="msls.application.Master">
        /// Gets or sets the master for this screen.
        /// </field>
        /// <field name="SelectedThree" type="msls.application.ItemThree">
        /// Gets or sets the selectedThree for this screen.
        /// </field>
        /// <field name="SelectedTwo" type="msls.application.ItemTwo">
        /// Gets or sets the selectedTwo for this screen.
        /// </field>
        /// <field name="SelectedOne" type="msls.application.ItemOne">
        /// Gets or sets the selectedOne for this screen.
        /// </field>
        /// <field name="SortedOnes" type="msls.VisualCollection" elementType="msls.application.ItemOne">
        /// Gets the sortedOnes for this screen.
        /// </field>
        /// <field name="TwosBasedOnOnes" type="msls.VisualCollection" elementType="msls.application.ItemTwo">
        /// Gets the twosBasedOnOnes for this screen.
        /// </field>
        /// <field name="ThreesBasedOnTwos" type="msls.VisualCollection" elementType="msls.application.ItemThree">
        /// Gets the threesBasedOnTwos for this screen.
        /// </field>
        /// <field name="FoursBasedOnThrees" type="msls.VisualCollection" elementType="msls.application.ItemFour">
        /// Gets the foursBasedOnThrees for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMaster.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMaster", parameters);
    }

    function BrowseItemFours(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseItemFours screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemFours" type="msls.VisualCollection" elementType="msls.application.ItemFour">
        /// Gets the itemFours for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseItemFours.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseItemFours", parameters);
    }

    function BrowseItemOnes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseItemOnes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemOnes" type="msls.VisualCollection" elementType="msls.application.ItemOne">
        /// Gets the itemOnes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseItemOnes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseItemOnes", parameters);
    }

    function BrowseItemThrees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseItemThrees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemThrees" type="msls.VisualCollection" elementType="msls.application.ItemThree">
        /// Gets the itemThrees for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseItemThrees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseItemThrees", parameters);
    }

    function BrowseItemTwoes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseItemTwoes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ItemTwoes" type="msls.VisualCollection" elementType="msls.application.ItemTwo">
        /// Gets the itemTwoes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseItemTwoes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseItemTwoes", parameters);
    }

    function BrowseMasters(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMasters screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Masters" type="msls.VisualCollection" elementType="msls.application.Master">
        /// Gets the masters for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMasters.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMasters", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditItemFour: $defineScreen(AddEditItemFour, [
            { name: "ItemFour", kind: "local", type: lightSwitchApplication.ItemFour }
        ], [
        ]),

        AddEditItemOne: $defineScreen(AddEditItemOne, [
            { name: "ItemOne", kind: "local", type: lightSwitchApplication.ItemOne }
        ], [
        ]),

        AddEditItemThree: $defineScreen(AddEditItemThree, [
            { name: "ItemThree", kind: "local", type: lightSwitchApplication.ItemThree }
        ], [
        ]),

        AddEditItemTwo: $defineScreen(AddEditItemTwo, [
            { name: "ItemTwo", kind: "local", type: lightSwitchApplication.ItemTwo }
        ], [
        ]),

        AddEditMaster: $defineScreen(AddEditMaster, [
            { name: "Master", kind: "local", type: lightSwitchApplication.Master },
            { name: "SelectedThree", kind: "local", type: lightSwitchApplication.ItemThree },
            { name: "SelectedTwo", kind: "local", type: lightSwitchApplication.ItemTwo },
            { name: "SelectedOne", kind: "local", type: lightSwitchApplication.ItemOne },
            {
                name: "SortedOnes", kind: "collection", elementType: lightSwitchApplication.ItemOne,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.SortedOnes();
                }
            },
            {
                name: "TwosBasedOnOnes", kind: "collection", elementType: lightSwitchApplication.ItemTwo,
                createQuery: function (Id) {
                    return this.dataWorkspace.ApplicationData.TwosBasedOnOnes(Id);
                }
            },
            {
                name: "ThreesBasedOnTwos", kind: "collection", elementType: lightSwitchApplication.ItemThree,
                createQuery: function (Id) {
                    return this.dataWorkspace.ApplicationData.ThreesBasedOnTwos(Id);
                }
            },
            {
                name: "FoursBasedOnThrees", kind: "collection", elementType: lightSwitchApplication.ItemFour,
                createQuery: function (Id) {
                    return this.dataWorkspace.ApplicationData.FoursBasedOnThrees(Id);
                }
            }
        ], [
        ]),

        BrowseItemFours: $defineScreen(BrowseItemFours, [
            {
                name: "ItemFours", kind: "collection", elementType: lightSwitchApplication.ItemFour,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ItemFours;
                }
            }
        ], [
        ]),

        BrowseItemOnes: $defineScreen(BrowseItemOnes, [
            {
                name: "ItemOnes", kind: "collection", elementType: lightSwitchApplication.ItemOne,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ItemOnes;
                }
            }
        ], [
        ]),

        BrowseItemThrees: $defineScreen(BrowseItemThrees, [
            {
                name: "ItemThrees", kind: "collection", elementType: lightSwitchApplication.ItemThree,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ItemThrees;
                }
            }
        ], [
        ]),

        BrowseItemTwoes: $defineScreen(BrowseItemTwoes, [
            {
                name: "ItemTwoes", kind: "collection", elementType: lightSwitchApplication.ItemTwo,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ItemTwoes;
                }
            }
        ], [
        ]),

        BrowseMasters: $defineScreen(BrowseMasters, [
            {
                name: "Masters", kind: "collection", elementType: lightSwitchApplication.Master,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Masters;
                }
            }
        ], [
        ]),

        showAddEditItemFour: $defineShowScreen(function showAddEditItemFour(ItemFour, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditItemFour screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditItemFour", parameters, options);
        }),

        showAddEditItemOne: $defineShowScreen(function showAddEditItemOne(ItemOne, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditItemOne screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditItemOne", parameters, options);
        }),

        showAddEditItemThree: $defineShowScreen(function showAddEditItemThree(ItemThree, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditItemThree screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditItemThree", parameters, options);
        }),

        showAddEditItemTwo: $defineShowScreen(function showAddEditItemTwo(ItemTwo, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditItemTwo screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditItemTwo", parameters, options);
        }),

        showAddEditMaster: $defineShowScreen(function showAddEditMaster(Master, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditMaster screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMaster", parameters, options);
        }),

        showBrowseItemFours: $defineShowScreen(function showBrowseItemFours(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseItemFours screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseItemFours", parameters, options);
        }),

        showBrowseItemOnes: $defineShowScreen(function showBrowseItemOnes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseItemOnes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseItemOnes", parameters, options);
        }),

        showBrowseItemThrees: $defineShowScreen(function showBrowseItemThrees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseItemThrees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseItemThrees", parameters, options);
        }),

        showBrowseItemTwoes: $defineShowScreen(function showBrowseItemTwoes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseItemTwoes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseItemTwoes", parameters, options);
        }),

        showBrowseMasters: $defineShowScreen(function showBrowseMasters(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMasters screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMasters", parameters, options);
        })

    });

}(msls.application));
