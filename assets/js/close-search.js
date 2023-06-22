    const search_btn = document.getElementById("search_btn");
    const search_menu_wrapper = document.getElementById("search_menu_wrapper");
    const search_menu_close_btn = document.getElementById("search_menu_close_btn");

    search_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.remove("hidden");
        search_menu_input.focus();
    });

    search_menu_close_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.add("hidden");
    });
