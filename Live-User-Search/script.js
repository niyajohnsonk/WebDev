function operation() {
    let value = $('#user').val().trim();

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        beforeSend: function () {
            $(".table").find("tbody").html(`<tr><td colspan="3">Loading...</td></tr>`);
        },
        success: function (response, status) {
            let html = "";
            for (let i = 0; i < response.length; i++) {
                const { id, name, email } = response[i];
                if (name.toLowerCase().includes(value.toLowerCase())) {
                    html += `
                        <tr>
                            <td>${id}</td>
                            <td>${name}</td>
                            <td>${email}</td>
                        </tr>
                    `;
                }
            }

            if (html === "") {
                html = `<tr><td colspan="3">No users found</td></tr>`;
            }

            // 🔄 Overwrite previous content — not append
            $(".table").find("tbody").html(html);
        },
        error: function (error, status) {
            $(".table").find("tbody").html(`<tr><td colspan="3">Error loading users</td></tr>`);
        }
    });
}
