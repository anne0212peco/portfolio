$(function () {
    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('is-active');
    });


}());
$(function () {
    $("#sample-form").submit(function () {
        if ($("input[type='text']").val() == '' || $("input[type='email']").val() == '') {
            if ($("input[type='text']").val() == '') {
                $("#form-text").html("名前を入力してください");
                return false;
            }
        }
    });
}());
$(function () {
    $("#sample-form").submit(function () {
        if ($("input[type='text']").val() == '' || $("input[type='email']").val() == '') {
            if ($("input[type='email']").val() == '') {
                $("#form-text2").html("メールアドレスを入力してください");
                return false;
            }
        }
    });
}());
$(function () {
    $("#sample-form").submit(function () {
        if ($("input[type='text']").val() != '' && $("input[type='email']").val() != '') {
            $("#sample-form").submit();
        }
    });
}());
$(function () {
    $("#sample-form").submit(function () {
        if ($("input[type='text']").val() != '') {
            $("#form-text").html("");

        }
    });
}());
$(function () {
    $("#sample-form").submit(function () {
        if ($("input[type='email']").val() != '') {
            $("#form-text2").html("");
        }
    });
}());

var ctx = $("#myChart").get(0).getContext('2d')
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML/CSS', 'Javascript', 'Java', 'Swift', 'C#', 'MySQL'],
        datasets: [{
            label: 'Front-end/Back-end',
            data: [4, 3, 2, 2, 1, 3],
            backgroundColor: [
                '#66b7cc8c'
            ],
            borderColor: [
                '#66b7cc8c'
            ],
            borderWidth: 1
        }]
    }, options: {
        scales: {
            r: {
                //グラフの最小値・最大値
                min: 1,
                max: 5,
                //背景色
                backgroundColor: 'snow',
                //グリッドライン
                grid: {
                    color: 'gray',
                },

                //各項目のラベル
                pointLabels: {
                    color: 'gray',
                },
            }
        }
    }
});
