    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: '/', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alertMsg("发送成功！")
                    // alert.fadeOut();
                    // submit.html('Sending....'); // change submit button text
                   
                },
                success: function(data) {
                    savedata(data)
                    // alert.html(data).fadeIn(); // fade in response data
                    // form.trigger('reset'); // reset form
                    // submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
    function alertMsg(text) {
        var bgHtml ="<div class='msg-bg'></div>";
        var msgAlertHtml = "<div class='msg-alertWrap'>" +
                                "<div class='msg-alert'>" +
                                    "<div class='msg-header'><button class='msg-dismiss'><span>&times;</span></button><h4 class='msg-title'>温馨提示</h4></div>" +
                                    "<div class='msg-body'>" +
                                        "<div class='msg-content'></div>" +
                                    "</div>" +
                                    "<div class='msg-footer'>" +
                                        "<button type='button' class='msg-btnOk'>确定</button>" +
                                    "</div>" +
                                "</div>"+
                            "</div>";
        if ($(".msg-bg").length == 0) {
            $("body").append(bgHtml + msgAlertHtml);
        } else {
            $("body").append(msgAlertHtml);
        }
    
        $(".msg-alertWrap:last-child .msg-content").html(text);
    
        $(".msg-btnOk,.msg-dismiss").on("click", function () {
            $(this).parents(".msg-alertWrap").remove();
            if ($(".msg-alertWrap").length == 0) {
                $(".msg-bg").remove();
            }
        })
    }
    function savedata(data){
        alertMsg(data.fname+","+data.email+","+data.message) 
    }