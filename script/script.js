$('#dept').keyup(function(){
    $('#xml').empty();
    var dept = $('#dept').val();
    url = "http://www.cyril-minette.net/iut/javascript/webservices/ws_villes_par_departement.php?departement=" + dept
    $.ajax( {
            type: "GET",
            url: url,
            dataType: "xml",
            success: function(xml) {
                $("#xml").append('<ul>');
                var ville1 = "";
                $(xml).find('ville').each(function() {
                    var ville = $(this).text();
                    if(ville1.charAt(0) !== ville.charAt(0)){
                        $("#xml").append('<h1>' +ville.charAt(0) + '</h1>');
                    }
                    $("#xml").append('<li>' + ville + '</li>');
                    ville1 = ville;
                });
                $("#xml").append('</ul>');
            }
        }
    );
});