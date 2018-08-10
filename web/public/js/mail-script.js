    // -------   Mail Send ajax
     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message
        
        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: '/users/create', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    // alertMsg("发送成功！")
                    // alert.fadeOut();
                    // submit.html('Sending....'); // change submit button text
                   
                },
                success: function(data) {
                    savedata(data);
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
        var message=JSON.parse(data);
        alertMsg("Hi,"+message.fname+",你的信息已收到，谢谢支持！");
    //      let transporter = nodemailer.createTransport({
    //     host: 'smtp.163.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //     user: 'dfinity_buzz@163.com', //邮箱的账号
    //     pass: 'hehao1987'//邮箱的密码
    //     }
    // });
    // let mailOptions = {
    //     from: '"Fred Foo 👻" <dfinity_buzz@163.com>', //邮件来源
    //     to: message.email, //邮件发送到哪里，多个邮箱使用逗号隔开
    //     subject: 'Re:'+message.message, // 邮件主题
    //     text: 'Hello world ?', // 存文本类型的邮件正文
    //     html: '<b>Hello world ?</b>' // html类型的邮件正文
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //     return console.log(error);
    //     }
    //     console.log('Message %s sent: %s', info.messageId, info.response);
    // });

    }
    
 
