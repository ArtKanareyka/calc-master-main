function calculateFirst() {
    let summ =  +$("#width-A").val() * 10 +
                +$("#height-B").val() * 10 +
                +$("#length-C").val() * 10 +
                +$("#length-D").val() * 10 +
                +$("#quantity").val() * 10 ;

        if($(".mansard").prop("checked")) {
            summ = summ * +$(".mansard").val();
        } else if ($(".attic").prop("checked")) {
            summ = summ * +$(".attic").val();
        }

        if($(".lessThenTwelve").prop("checked")) {
            summ = summ * +$(".lessThenTwelve").val();
        } else if ($(".moreThenTwelve").prop("checked")) {
            summ = summ * +$(".moreThenTwelve").val();
        }
    
    $("#result-1").text(summ.toFixed(2) + "₽");
}

function calculateSecond() {
    let summ =  +$("#width-A-2").val() * 20 +
                +$("#height-B-2").val() * 20 +
                +$("#length-C-2").val() * 20 +
                +$("#length-D-2").val() * 20 +
                +$("#quantity-2").val() * 20 ;

        if($(".mansard-2").prop("checked")) {
            summ = summ * +$(".mansard-2").val();
        } else if ($(".attic-2").prop("checked")) {
            summ = summ * +$(".attic-2").val();
        }

        if($(".lessThenTwelve-2").prop("checked")) {
            summ = summ * +$(".lessThenTwelve-2").val();
        } else if ($(".moreThenTwelve-2").prop("checked")) {
            summ = summ * +$(".moreThenTwelve-2").val();
        }
    
    $("#result-2").text(summ.toFixed(2) + "₽");
}

function calculateThird() {
    let summ =  +$("#width-A-3").val() * 30 +
                +$("#width-A1-3").val() * 30 +
                +$("#height-B-3").val() * 30 +
                +$("#height-B1-3").val() * 30 +
                +$("#length-C-3").val() * 30 +
                +$("#length-D-3").val() * 30 +
                +$("#quantity-3").val() * 30 +
                +$(".attic-3").val();

        if($(".lessThenTwelve-3").prop("checked")) {
            summ = summ * +$(".lessThenTwelve-3").val();
        } else if ($(".moreThenTwelve-3").prop("checked")) {
            summ = summ * +$(".moreThenTwelve-3").val();
        }
    
    $("#result-3").text(summ.toFixed(2) + "₽");
}