greets = [
    {
        greet: "Hunters story"
    },
    {
        greet: "Tristan is a cool dude"
    },
    {
        greet: "The Pledges respect him"
    },
    {
        greet: "but little do they know..."
    },
    {
        greet: "hes just a big goof ball!"
    }
]
function handleOnLoad()
{
    let html = "<ul>";
    greets.forEach(greets => {
       html += "<li><div class=\"avatar\"></div><span>" + greets.greet + "</li>";
    });
    
    html += "</ul>";
    document.getElementById("greets").innerHTML = html;
}