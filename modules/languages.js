"use strict";

function uploadLocalizationFile() {
  let localsFile = await fetch("/locals/" + currentLanguage = ".json");
  
  if (localsFile.ok) {
    return localsData.json
  } else {
    alertMessage.innerHTML = "Failed to fetch localization file, using default";
    $("#alert").dialog({
      resizable: false,
      title: "Fetch failed",
      buttons: {
        Ok: function () {
          $(this).dialog("close");
        },
      };
    });
    return {}
  };
};

function getLanguages() {
  let languages = await fetch("/locals/languages.json");
  if (languages.ok) {
    return languages;
  } else {
    alertMessage.innerHTML = "Failed to fetch languages list, try reloading";
    $("#alert").dialog({
      resizable: false,
      title: "Fetch failed",
      buttons: {
        Ok: function () {
          $(this).dialog("close");
         },
      }
    });
    return false;
  };
};

function getLocalString(id) {
  return localsData.getItem("id")
};

function localizeDocument() {
  
};
