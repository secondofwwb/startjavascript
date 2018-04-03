var put_out = Object();
put_out.befor = Array();   //输入栏存入数字
put_out.center = Array();  //运算符
put_out.last = Array();    //输出栏显示栏存入数字
put_out.pos_nag = true;
var string_sym = '';
var control_sym = false;


window.onload = function(){
    outPut();
    inPut();
    numFun();
    operatorsFun();
}

// 等于
function equalFun() {

};
// CE全部清零
function CEfun() {
    put_out.befor = [];
    put_out.last = [];
    put_out.center = [];
    put_out.pos_nag = true;
    string_sym = '';
    inPut();
    outPut();
};

//C 重新输入
function Cfun() {
    put_out.befor = [];
    put_out.pos_nag = true;
    inPut();
    outPut();
};

// 回删一个字符
function delfun() {
    if(put_out.befor.length == 0){
        put_out.befor = [];
        put_out.pos_nag = true;
    }else {
        put_out.befor.pop();
    }
    inPut();
};

// 正负值转换
function pos_nagfun() {
    put_out.pos_nag = !put_out.pos_nag;
    inPut();
};
// 数字输入
function numFun() {
    var num_button = document.getElementsByName('num');
    for (var i=0;i<num_button.length;i++){
            num_button[i].onclick = function () {
                inputNum(this);
            }
    }
};

function inputNum(buttonObj) {
    var num = buttonObj.getAttribute("value");
    put_out.befor.push(num);
    control_sym = false;
    inPut();
};

// 输出显示栏
function outPut() {
    var out_string = '';
    var outnow = document.getElementById('output');
    // 数组转为字符串
    for(var i=0;i<put_out.last.length;i++){
        out_string += put_out.last[i];
    };
    outnow.firstChild.nodeValue = out_string + string_sym;
};

// 输入显示栏
function inPut() {
    var innow = document.getElementById('input')
    var in_string = '';
    for(var i=0; i<put_out.befor.length; i++){
        in_string += put_out.befor[i];
    };
    if(put_out.pos_nag){
        innow.firstChild.nodeValue = in_string;
    }else {
        innow.firstChild.nodeValue = '-'+in_string;
    }

}

//运算符输入
function operatorsFun() {
    var ope_button = document.getElementsByName('symbol');
    for (var i=0;i<ope_button.length;i++){
            ope_button[i].onclick = function () {
                inputoperators(this);
            }
    }
};

function inputoperators(buttonObj) {
    put_out.center[0] = buttonObj.value;
    string_sym = buttonObj.firstChild.nodeValue;
    if(put_out.last[0] == null){
        for(var i=0;i<put_out.befor.length;i++){
            put_out.last.push(put_out.befor[i]);
        };
    };
    control_sym = true;
    put_out.befor = [];
    inPut();
    outPut();
};
