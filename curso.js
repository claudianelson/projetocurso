$(document).ready(function(){
    var url = $("#videoCurso").attr('src');
    
    $("#modalCurso").on('hide.bs.modal', function(){
        $("#videoCurso").attr('src', '');
    });
    
    $("#modalCurso").on('show.bs.modal', function(){
        $("#videoCurso").attr('src', url);
    });
});

function playVideo() {
    $('#modalCurso').modal();
}