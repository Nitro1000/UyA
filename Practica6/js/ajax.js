
$('#play').click(() => {
    if ($('#post_id').val()) {
        var param = $("#formulario").serialize();
        $.get("https://jsonplaceholder.typicode.com/comments", param, (data) => {
            let texto = `<div><p>`;
            for (let i in data) {
                texto += `
                    <li>
                        <div >ID: ${data[i].id}</div>
                        <div class="left-align">
                            <span>ID: ${data[i].name}</span><br>
                            <span>Email: ${data[i].email}</span><br>
                            <span>Body: ${data[i].body}</span><br>
                        </div>
                    </li>`
            }
            texto += `</p></div>`;
            $('#write').html(texto);

            $(document).ready(function () {
                $('.collapsible').collapsible();
            });
        });
    }
});
