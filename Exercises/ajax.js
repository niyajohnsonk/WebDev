function operation() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        // beforeSend: function(){

        // },
        success: function (response, status) {
            let html = "";
            for (let i = 0; i < response.length; i++) {
                const { id, name, email } = response[i];
                html += `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
            </tr>`;
            }
            $('.table').find('tbody').append(html);
        },
        error: function (error, status) {

        }
    })
}