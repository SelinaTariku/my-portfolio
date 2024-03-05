document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.menu a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });
});
