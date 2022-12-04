function getAllClients() {
    $.ajax({
        url: "Service/ClientService.svc/GetAllClients",
        type: "GET",
        dataType: "json",
        success: function (result) {
            clients = result;
            bindClientListToTable(clients);
        }
    });
}


function deleteClient() {
    var id = $("#deleteId").val();
    $.ajax({
        url: "Service/ClientService.svc/DeleteClient/" + id,
        type: "DELETE",
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            getAllClients();
        }
    });
}