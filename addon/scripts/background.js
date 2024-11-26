// requires permission "menus"

// apply rules on folders
messenger.menus.create({
    id: "run-all-rules-on-folder",
    title: "Apply All Rules",
    contexts: ["folder_pane"]
});

messenger.menus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId == "run-all-rules-on-folder") {
        console.log("apply-all-rules-on-folder menu item clicked");
        try {
            browser.myapi.run_filters_on_folder();
            console.log("apply-all-rules-on-folder finished");
        } catch (error) {
            console.log(`Error applying rules: ${error.message}`);
        }
    }
});

// apply rules on messages
messenger.menus.create({
    id: "run-all-rules-on-message",
    title: "Apply All Rules",
    contexts: ["message_list"]
});

messenger.menus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId == "run-all-rules-on-message") {
        console.log("apply-all-rules-on-message menu item clicked");
        try {
            browser.myapi.run_filters_on_message();
            console.log("apply-all-rules-on-message finished");
        } catch (error) {
            console.log(`Error applying rules: ${error.message}`);
        }
    }
});
