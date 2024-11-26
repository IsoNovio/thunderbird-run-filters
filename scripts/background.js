// requires permission "menus"

// apply rules on folders
messenger.menus.create({
    id: "run-filters-on-folder",
    title: "Apply Filters",
    contexts: ["folder_pane"]
});

messenger.menus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId == "run-filters-on-folder") {
        console.log("run-filters-on-folder menu item clicked");
        try {
            browser.myapi.run_filters_on_folder();
            console.log("run-filters-on-folder finished");
        } catch (error) {
            console.log(`Error applying filters: ${error.message}`);
        }
    }
});

// apply rules on messages
messenger.menus.create({
    id: "run-filters-on-message",
    title: "Apply Filters",
    contexts: ["message_list"]
});

messenger.menus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId == "run-filters-on-message") {
        console.log("run-filters-on-message menu item clicked");
        try {
            browser.myapi.run_filters_on_message();
            console.log("run-filters-on-message finished");
        } catch (error) {
            console.log(`Error applying rules: ${error.message}`);
        }
    }
});
