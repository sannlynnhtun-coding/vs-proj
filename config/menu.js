"use strict"
$(function() {
    GetMenuData();
})

function GetMenuData() {
    $.getJSON(window.projectUrl + "/config/menu-setting.json", function(res) {
        console.table(res.lstMenuGroup);
        console.table(res.lstMenuItem);
        var menuData = '';
        for (var i = 0; i < res.lstMenuGroup.length; i++) {
            var menuItemData = '';
            var group = res.lstMenuGroup[i];
            var items = res.lstMenuItem.filter(x => x.id == group.id);
            for (let j = 0; j < items.length; j++) {
                var item = items[j];
                menuItemData += `
                    <li>
                        <a href="#" class="href-link" data-form-type="${item.form_type}" 
                        data-href="${item.href}">${item.name}</a>
                    </li>
                `;
            }
            menuData +=
                `<li>
                <a href="javascript:void(0);" class="menu-toggle">
                    <i class="zmdi zmdi-home"></i>
                    <span>${group.name}</span>
                </a>
                <ul class="ml-menu">
                    ${menuItemData}
                </ul>
            </li>`;
        }
        $('#ul-Menu-Data').append(menuData);
    });
}

$('.href-link').bind('click', function() {
    var l_FormType = $(this).data('form-type');
    var l_Link = $(this).data('href');
    if (l_FormType == 'iframe') {
        var l_Link = `<iframe id="div_Content" height="500px" src="${l_Link}" frameborder="0" width="100%"></iframe>`;
        $('#div-Content').append(l_Link);
    } else if (l_FormType == 'link') {
        $('#div-Content').load(l_Link);
    }
});