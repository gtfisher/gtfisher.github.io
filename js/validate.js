$(function(){

    $("#device-form").validate({
        rules: {
            dateTime: {
                required: true
            },
            deviceGroups: {
                required: true
            },
            commands: {
                required: true
            }
        }
    });

});