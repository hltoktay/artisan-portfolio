function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[/[/]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {

    var projectTemplate = $("#project-template").html()

    var compiledProjectTemplate = Handlebars.compile(projectTemplate);
    var $projectList = $(".fh5co-projects-feed")
   
   var projectId = getParameterByName("id");
   console.log("project id: ", projectId)
   
    $.ajax("data.json").done((project) => {
        if($("body").hasClass("project-details")) {
            $projectList.html(compiledProjectTemplate(project.projects[projectId]))
        } else {
            $projectList.html(compiledProjectTemplate(project))
        }

    });

    // $(".fh5co-projects-feed").on("click", ".view-details", function(e) {
    //     e.preventDefault();
    //     console.log('BUtton Clicked')
    // })

});