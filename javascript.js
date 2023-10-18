document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const addMenuItemButton = document.getElementById("addMenuItem");

    // Initial menu items
    const menuOptions = ["Home", "About", "Services", "Contact"];

    // Function to add a menu item
    function addMenuItem(text) {
      const li = document.createElement("li");
      li.textContent = text;
      menu.appendChild(li);
    }

    // Add the initial menu items
    menuOptions.forEach(function (option) {
      addMenuItem(option);
    });

    // Event listener to add a new menu item
    addMenuItemButton.addEventListener("click", function () {
      const newItem = prompt("Enter a new menu item:");
      if (newItem) {
        addMenuItem(newItem);
      }
    });
  });