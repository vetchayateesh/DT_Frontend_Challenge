const projectData = {
    "_id": {
        "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
        "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
        "Bare minimum knowledge of project management",
        "4SA Concept",
        "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
        "An open mind to learn any concept",
        "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
};

document.addEventListener("DOMContentLoaded", function () {

    // 1. Sidebar Toggle Logic
    const sidebar = document.querySelector(".left-side-bar");
    const toggleButton = document.querySelector(".arrow-button");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("expanded");
        });
    }

    // 2. Populate Project & Task Details form Data
    const currentTask = projectData.tasks[0];

    // Project Title (Top Left)
    const projectTitleEl = document.querySelector(".section1 p");
    if (projectTitleEl) projectTitleEl.innerText = projectData.title;

    // Task Title & Description (Main Content)
    const mainTaskTitle = document.querySelector(".section2 h3");
    const mainTaskDesc = document.querySelector(".section2 p");

    if (mainTaskTitle) mainTaskTitle.innerText = currentTask.task_title;
    if (mainTaskDesc) mainTaskDesc.innerText = currentTask.task_description;

    // Sidebar Task List
    const sidebarTitle = document.querySelector(".sidebar-menu h3");
    const sidebarList = document.querySelector(".sidebar-menu ol");

    if (sidebarTitle) sidebarTitle.innerText = currentTask.task_title;
    if (sidebarList) {
        sidebarList.innerHTML = ""; // Clear default content
        currentTask.assets.forEach(asset => {
            const li = document.createElement("li");
            li.innerText = asset.asset_title;
            sidebarList.appendChild(li);
        });
    }

    // 3. Render Assets (Cards)
    const assetContainer = document.getElementById("section3");
    assetContainer.innerHTML = ""; // Clear default content

    currentTask.assets.forEach(asset => {
        const { card, cardBody } = createAssetContainer(asset);

        // Route to specific renderer based on content type
        if (asset.asset_content_type === "video") {
            renderVideo(asset, cardBody);
        }
        else if (asset.asset_content_type === "threadbuilder") {
            renderThreadBuilder(asset, cardBody);
        }
        else if (asset.asset_type === "input_asset" && asset.asset_content_type === "article") {
            renderArticleInput(asset, cardBody);
        }
        else if (asset.asset_type === "display_asset" && asset.asset_content_type === "article") {
            renderArticleDisplay(asset, cardBody);
        } else {
            // Fallback for unknown types
            const p = document.createElement("p");
            p.innerText = "Content type not supported yet.";
            p.style.padding = "20px";
            cardBody.appendChild(p);
        }

        assetContainer.appendChild(card);
    });

});


// --- Helper Functions ---

/**
 * Creates the outer card shell with header, icon, and description.
 */
function createAssetContainer(asset) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    const titleText = document.createElement("p");
    titleText.innerText = asset.asset_title;
    cardTitle.appendChild(titleText);

    const cardIcon = document.createElement("div");
    cardIcon.classList.add("card-icon");
    const iconImg = document.createElement("img");
    // Ensure path is relative (no leading slash)
    iconImg.src = "Asset/icons/help.svg";
    iconImg.alt = "Info";
    cardIcon.appendChild(iconImg);

    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(cardIcon);
    card.appendChild(cardHeader);

    // Description
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-discription");
    const descriptionText = document.createElement("p");
    descriptionText.innerHTML = `<b style="font-size: 16px;">Description:</b> ${asset.asset_description}`;
    cardDescription.appendChild(descriptionText);
    card.appendChild(cardDescription);

    // Body Container
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    return { card, cardBody };
}


// --- Asset Renderers ---

function renderVideo(asset, parent) {
    // Check for valid URL
    if (!asset.asset_content || asset.asset_content.trim() === "") {
        parent.innerHTML = `<div style="padding: 20px; color: #888;">Video unavailable</div>`;
        return;
    }

    const videoFrame = document.createElement("iframe");
    videoFrame.src = asset.asset_content;
    videoFrame.width = "100%";
    videoFrame.height = "250";
    videoFrame.style.border = "none";
    videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    videoFrame.allowFullscreen = true;

    parent.appendChild(videoFrame);
}

function renderThreadBuilder(asset, parent) {
    const container = document.createElement("div");
    container.classList.add("threadbuilder-container");

    // Header with chevron
    const threadHeader = document.createElement("div");
    threadHeader.classList.add("thread-header");

    const arrow = document.createElement("span");
    arrow.innerText = "^";
    arrow.classList.add("bg-chevron");
    arrow.style.transform = "rotate(180deg)";

    const h4 = document.createElement("h4");
    h4.innerText = "Thread A";

    threadHeader.appendChild(arrow);
    threadHeader.appendChild(h4);
    container.appendChild(threadHeader);

    // Inputs Row
    const threadRow = document.createElement("div");
    threadRow.classList.add("thread-row");

    // Sub Thread 1
    const subThreadGroup = document.createElement("div");
    subThreadGroup.classList.add("input-sub-group");
    subThreadGroup.innerHTML = `
        <label>Sub Thread 1</label>
        <textarea placeholder="Enter Text Here"></textarea>
    `;

    // Icon Toolbar
    const iconToolbar = document.createElement("div");
    iconToolbar.classList.add("toolbar-row");
    iconToolbar.innerHTML = `
        <span class="toolbar-icon">💡</span>
        <span class="toolbar-icon">💬</span>
        <span class="toolbar-icon">❓</span>
        <span class="toolbar-icon">🌷</span> 
    `;
    subThreadGroup.appendChild(iconToolbar);

    // Sub Interpretation 1
    const subInterpGroup = document.createElement("div");
    subInterpGroup.classList.add("input-sub-group");
    subInterpGroup.innerHTML = `
        <label>Sub Interpretation 1</label>
        <textarea placeholder="Enter Text Here"></textarea>
    `;

    threadRow.appendChild(subThreadGroup);
    threadRow.appendChild(subInterpGroup);
    container.appendChild(threadRow);

    // Actions (Add Button + Selects)
    const actionRow = document.createElement("div");
    actionRow.classList.add("action-row");

    const addBtn = document.createElement("button");
    addBtn.classList.add("blue-btn");
    addBtn.innerText = "+ Sub Thread";

    const selectContainer = document.createElement("div");
    selectContainer.classList.add("select-container");
    selectContainer.innerHTML = `
        <select class="custom-select"><option>Select Categ</option></select>
        <select class="custom-select"><option>Select Proces</option></select>
    `;

    actionRow.appendChild(addBtn);
    actionRow.appendChild(selectContainer);
    container.appendChild(actionRow);

    // Summary Section
    const summaryContainer = document.createElement("div");
    summaryContainer.classList.add("summary-container");
    summaryContainer.innerHTML = `
        <div class="input-sub-group">
                <label>Summary for Thread A</label>
                <textarea placeholder="Enter Text Here" style="height: 70px;"></textarea>
        </div>
    `;
    container.appendChild(summaryContainer);

    parent.appendChild(container);
}

function renderArticleInput(asset, parent) {
    const container = document.createElement("div");
    container.classList.add("article-input-container");

    // Title Input
    const titleGroup = document.createElement("div");
    titleGroup.innerHTML = `
        <div class="input-label">Title</div>
        <input class="simple-input" type="text" placeholder="Enter Title">
    `;
    container.appendChild(titleGroup);

    // Content Editor (Visual Mockup)
    const contentGroup = document.createElement("div");
    contentGroup.innerHTML = `
        <div class="input-label">Content</div>
        <div class="wysiwyg-editor">
            <div class="editor-menubar">
                <span>File</span> <span>Edit</span> <span>View</span> <span>Insert</span> <span>Format</span> <span>Tools</span> <span>Table</span> <span>Help</span>
            </div>
            <div class="editor-toolbar">
                <span>↩ arrow_back</span> <span>↪ arrow_forward</span> <span>⤢ expand</span> <span style="background:#eee; padding:0 5px; font-size:10px;">Paragraph</span> <span>...</span>
            </div>
            <div class="editor-content-area" contenteditable="true" placeholder="Type something..."></div>
        </div>
    `;
    container.appendChild(contentGroup);

    parent.appendChild(container);
}

function renderArticleDisplay(asset, parent) {
    const container = document.createElement("div");
    container.classList.add("foursa-container");

    // Intro Accordion
    const introItem = document.createElement("div");
    introItem.classList.add("accordion-item");
    introItem.innerHTML = `
        <div class="accordion-header">
            <span class="bg-chevron">^</span> Introduction
        </div>
        <div class="accordion-content">
            <p>The 4SA Method, How to bring a idea into process?</p>
            <div class="read-more">See more</div>
        </div>
    `;
    container.appendChild(introItem);

    // Thread A Accordion
    const threadItem = document.createElement("div");
    threadItem.classList.add("accordion-item");
    threadItem.innerHTML = `
        <div class="accordion-header">
            <span class="bg-chevron">^</span> Thread A
        </div>
        <div class="accordion-content">
            <p>How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
            <div class="read-more">See more</div>
            
            <div class="example-box">
                <h5>Example 1</h5>
                <p>You have a concept; how will you put it into process...</p>
            </div>
        </div>
    `;
    container.appendChild(threadItem);

    parent.appendChild(container);
}

