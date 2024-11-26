var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");

var myapi = class extends ExtensionCommon.ExtensionAPI {
    getAPI(context) {
        return {
            myapi: {
                async run_filters_on_folder() {
                    Services.wm.getMostRecentWindow("mail:3pane").goDoCommand('cmd_applyFilters');
                },
                async run_filters_on_message() {
                    Services.wm.getMostRecentWindow("mail:3pane").goDoCommand('cmd_applyFiltersToSelection');
                },
            },
        };
    }
};
