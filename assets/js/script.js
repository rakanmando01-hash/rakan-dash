
// 12 تعديل كود الدرس الثالث في درس

let content = document.querySelector("#content");
let sidebar = document.getElementById("sidebar");

let sidebar_toggle = document.querySelector("#sidebar-toggle");

sidebar_toggle.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right;

    if (window.innerWidth > 767) {
        if (sidebarRight == "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight = "0";
        } else {
            sidebar.style.right = "0";
            content.style.marginRight = "250px";
        }
    } else {
//    فوقه  الشريط  يظهر  المحتوى  حذف  يتم  لا  للجوال 
        if (sidebarRight == "0px") {
            sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0px";
        }
    }
});



new DataTable('#example');



const rowsPerPage = 5; // عدد الصفوف بكل صفحة
const table = document.getElementById("productsTable");
const rows = table.querySelectorAll("tr");

let currentPage = 1;
const totalPages = Math.ceil(rows.length / rowsPerPage);

function showPage(page) {
    if (page < 1 || page > totalPages) return;

    currentPage = page;

    rows.forEach((row, index) => {
        row.style.display =
            index >= (page - 1) * rowsPerPage &&
            index < page * rowsPerPage
                ? ""
                : "none";
    });

    document.getElementById("currentPage").innerText = page;
}

function nextPage() {
    if (currentPage < totalPages) showPage(currentPage + 1);
}

function prevPage() {
    if (currentPage > 1) showPage(currentPage - 1);
}

// عرض أول صفحة
showPage(1);


// messages



messagescontainer.addEventListener('click', function () {
    messagesarea.classList.toggle("show");
});


new DataTable('#productsTable', {
responsive: true
});



