
getGroups();

function getGroups() {
    $.get("/instructions", function(data) {
        if (!data)
            console.log("No data received !");
        else {
            showGroups(data);
        }
    });
}

function getCategories(group_name) {
    $.get("/categories", group_name ,function(data) {
        if (!data)
            console.log("No data received !");
        else {
           showCategories(data);
        }
    });
}

function getProducts(category_name) {
    $.get("/products", category_name ,function(data) {
        if (!data)
            console.log("No data received !");
        else {
           showProducts(data);
        }
    });
}

function getVariations(variation_name) {
    $.get("/variations", variation_name, function(data) {
        if (!data)
            console.log("No data received !");
        else {
            showVariations(data);
        }
    });
}

// navigating back will just display the groups again and you will have to renavigate
function displayVariation(variation_name) {
    $.get("/displayVariation", variation_name, function(data) {
        if (!data)
            console.log("No data received !");
        else {
            // remove usage pannel
            //console.log(data);
            var usage = document.getElementById("usage");
            if (usage != null) {
                while (usage.firstChild) {
                    usage.removeChild(usage.firstChild);
                }
                usage.remove();
            }
            // remove current stuff if any
            var section = document.getElementById("section");
            if (section != null) {
                while (section.firstChild) {
                    section.removeChild(section.firstChild);
                }
            }

            var steps = document.createElement("section");
            steps.className = "section";
            steps.id = "steps_wrapper";
            // create title for product variation
            var title = document.createElement("h1");
            title.innerHTML = variation_name;
            // add to DOM
            steps.appendChild(title);

            // add the steps for this variation
            for (let i=0; i < data.length; i++) {
                createStep(steps, data[i]);
            }
            section.appendChild(steps);

            getPDF(variation_name);
        }
    });
}  

function getPDF(variation_name) {
    $.get("/getPDF", variation_name, function(data) {
        if (!data)
            console.log("No data received !");
        else {
            //console.log(data);

            // create pdf.
            var ifrm_wrapper = document.createElement("div");
            ifrm_wrapper.className = "flexbox iframe-container";

            var ifrm = document.createElement("iframe"); 
            // append #toolbar=0&navpanes=0&scrollbar=0 for security
            let pdf = data[0].variation_documentation;
            let security = "#toolbar=0&navpanes=0&scrollbar=0";
            let src = "/documents/" + pdf + security;

            // a range of error checks to make sure the pdf is not empty, null, etc (however no checks for .pdf extension)
            if (pdf.length > 0) {
                ifrm.setAttribute("src", src);

                var ifrm_title = document.createElement("h2"); 
                ifrm_title.innerHTML = "Additional Information";

                var el = document.getElementById("steps_wrapper");
                el.appendChild(ifrm_title);
                ifrm_wrapper.appendChild(ifrm);
                el.appendChild(ifrm_wrapper);
            }
        }
    });
}

// navigating back will just display the groups again and you will have to renavigate
function navBack() {
    removeNavItems();
    $.get("/navBack", function(data) {
        if (!data)
            console.log("No data received !");
        else {
            showGroups(data);
        }
    });
    document.getElementById('nav-title').innerHTML = "Groups";
}

/**
 * Gets the groups data from the db and constructs the navigation with that fata
 * @param {String} groups 
 */
function showGroups(groups) {
  // GET <ul> TAG AS PARENT NAV DOM ELEMENT
  var navList = document.getElementById("tab-list"); // get the <ul> tag as parent nav DOM element
  // loop through all group names
  for (let i=0; i < groups.length; i++) { 
      var navItem = document.createElement("li"); // create a new nav item
      navItem.className += "group-nav" + " tab-item"; // give appropriate classes (for styling)
      navItem.id = groups[i].group_name; // give unique id (primary key of table)
      navItem.innerHTML = groups[i].group_name; // innerHTML is content from db table

      navList.appendChild(navItem); // append to the parent DOM element

      // event to show CATEGORIES when nav item is clicked
      let el = document.getElementById(groups[i].group_name);
      el.addEventListener("click", function() {
        var navGroups = document.getElementsByClassName('group-nav');
        for (var i=0; i<navGroups.length;i++)
            navGroups[i].style.display = 'none';
        getCategories(el.id); 
      });
  }
}

/**
 * Gets the categories data from the db and constructs the navigation with that fata
 * @param {String} categories 
 */
function showCategories(categories) {
    // GET <ul> TAG AS PARENT NAV DOM ELEMENT
    var navList = document.getElementById("tab-list"); // get the <ul> tag as parent nav DOM element
    // loop through all group names
    for (let i=0; i < categories.length; i++) { 
        var navItem = document.createElement("li"); // create a new nav item
        navItem.className += "category-nav" + " tab-item"; // give appropriate classes (for styling)
        navItem.id = categories[i].category_name; // give unique id (primary key of table)
        navItem.innerHTML = categories[i].category_name; // innerHTML is content from db table
  
        navList.appendChild(navItem); // append to the parent DOM element
  
        // event to show CATEGORIES when nav item is clicked
        let el = document.getElementById(categories[i].category_name);
        el.addEventListener("click", function() {
            var navCateg = document.getElementsByClassName('category-nav');
            for (var i=0; i<navCateg.length;i++)
                navCateg[i].style.display = 'none';
            getProducts(el.id);
        });
        document.getElementById('nav-title').innerHTML = "Categories";
    }
}

/**
 * Gets the categories data from the db and constructs the navigation with that fata
 * @param {String} products 
 */
function showProducts(products) {
    // GET <ul> TAG AS PARENT NAV DOM ELEMENT
    var navList = document.getElementById("tab-list"); // get the <ul> tag as parent nav DOM element
    // loop through all group names
    for (let i=0; i < products.length; i++) { 
        var navItem = document.createElement("li"); // create a new nav item
        navItem.className += "product-nav" + " tab-item"; // give appropriate classes (for styling)
        navItem.id = products[i].product_name; // give unique id (primary key of table)
        navItem.innerHTML = products[i].product_name; // innerHTML is content from db table
  
        navList.appendChild(navItem); // append to the parent DOM element
  
        // event to show CATEGORIES when nav item is clicked
        let el = document.getElementById(products[i].product_name);
        el.addEventListener("click", function() {
            var navProd = document.getElementsByClassName('product-nav');
            for (var i=0; i<navProd.length;i++)
                navProd[i].style.display = 'none';
            getVariations(el.id);
        });
        document.getElementById('nav-title').innerHTML = "Products";
    }
}

/**
 * Gets the categories data from the db and constructs the navigation with that fata
 * @param {String} variations 
 */
function showVariations(variations) {
    // GET <ul> TAG AS PARENT NAV DOM ELEMENT
    var navList = document.getElementById("tab-list"); // get the <ul> tag as parent nav DOM element
    // loop through all group names
    for (let i=0; i < variations.length; i++) { 
        var navItem = document.createElement("li"); // create a new nav item
        navItem.className += "variation-nav" + " tab-item"; // give appropriate classes (for styling)
        navItem.id = variations[i].variation_name; // give unique id (primary key of table)
        navItem.innerHTML = variations[i].variation_name; // innerHTML is content from db table
  
        navList.appendChild(navItem); // append to the parent DOM element
  
        // event to show CATEGORIES when nav item is clicked
        let el = document.getElementById(variations[i].variation_name);
        let vartn_name = variations[i].variation_name;
        el.addEventListener("click", function() {
            displayVariation(vartn_name);
        });
        document.getElementById('nav-title').innerHTML = "Variations";
    }
}

/**
 * BACK ARROW functionality
 */
document.getElementById("backarrow").addEventListener("click", function() {
    navBack();
});

/**
 * Remove all nav items from DOM
 */
function removeNavItems() {
    var navs = document.getElementById("tab-list");

    while (navs.firstChild) {
        navs.removeChild(navs.firstChild);
    }
}

function createStep(el, data) {
    // create a step wrapper
    var step = document.createElement("div");
            
    // create title
    var step_title = document.createElement("h2");
    step_title.innerHTML = data.step;
    
    // create description
    var step_desc = document.createElement("p");
    step_desc.innerHTML = data.description;
    
    // create video
    var video_wrapper = document.createElement('div');
    video_wrapper.className = "flexbox videoWrapper";
    
    var step_video = document.createElement('video');
    step_video.controls = true;
    var source = document.createElement('source');

    let src = "/media/";
    src += data.video;
    source.src = src; // '/media/SampleVideo_1280x720_1mb.mp4'
    source.type = "video/mp4";
    source.innerHTML="Your browser does not support the video tag.";
    step_video.appendChild(source);
    
    // Append all to step div wrapper created above
    step.appendChild(step_title);
    step.appendChild(step_desc);
    video_wrapper.appendChild(step_video);
    step.appendChild(video_wrapper);

    // add to el
    el.appendChild(step);
}
