//Khai bao cac hang so
var GIA_UBER_X_1KM = 8000;
var GIA_UBER_X_CHO = 2000;
var GIA_UBER_X_1KM_21KM = 12000;
var GIA_UBER_X_21KM = 10000;

var GIA_UBER_SUV_1KM = 9000;
var GIA_UBER_SUV_CHO = 3000;
var GIA_UBER_SUV_1KM_21KM = 14000;
var GIA_UBER_SUV_21KM = 12000;

var GIA_UBER_BLACK_1KM = 10000;
var GIA_UBER_BLACK_CHO = 4000;
var GIA_UBER_BLACK_1KM_21KM = 16000;
var GIA_UBER_BLACK_21KM = 14000;


// Hàm trả về doucment.getElementById

function getMyEle(ele) {
    return document.getElementById(ele);
}

/*
Mục đích: kiểm tra loại xe nào được được chọn
 */

function TypeUber() {
    var chkUberX = getMyEle('uberX').checked;
    var chkUberSUV = getMyEle('uberSUV').checked;
    var chkUberBlack = getMyEle('uberBlack').checked;

    var type;
    if (chkUberX) {
        type = 'uberX';
    } else if (chkUberSUV) {
        type = 'uberSUV';
    } else if (chkUberBlack) {
        type = 'uberBlack';
    }
    return type;
}

function TinhTien() {
    //lay the tablebody

    var soKm = getMyEle('soKm').value;
    soKm = parseFloat(soKm); //đổi chuỗi sang số thực
    var thoiGianCho = getMyEle('thoiGianCho').value;
    thoiGianCho = parseFloat(thoiGianCho);

    //cho hien thi the DIV
    var divThanhTien = getMyEle('divThanhTien');
    var xuatTien = getMyEle('xuatTien');
    var tongTien = 0;
    // Kiểm tra uberX được chọn hay không
    var loaiXe = TypeUber();
    switch (loaiXe) {
        case 'uberX':
            {
                if (soKm <= 1) {
                    tongTien = soKm * GIA_UBER_X_1KM + thoiGianCho * GIA_UBER_X_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";

                } else if (soKm > 1 && soKm <= 21) {
                    tongTien = GIA_UBER_X_1KM + (soKm - 1) * GIA_UBER_X_1KM_21KM + thoiGianCho * GIA_UBER_X_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                } else {
                    tongTien = GIA_UBER_X_1KM + 20 * GIA_UBER_X_1KM_21KM + (soKm - 21) * GIA_UBER_X_21KM + thoiGianCho * GIA_UBER_X_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                }
                break;
            }
        case 'uberSUV':
            {
                if (soKm <= 1) {
                    tongTien = soKm * GIA_UBER_SUV_1KM + thoiGianCho * GIA_UBER_SUV_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                } else if (soKm > 1 && soKm <= 20) {
                    tongTien = GIA_UBER_SUV_1KM + (soKm - 1) * GIA_UBER_SUV_1KM_21KM + thoiGianCho * GIA_UBER_SUV_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                } else {
                    tongTien = GIA_UBER_SUV_1KM + 20 * GIA_UBER_SUV_1KM_21KM + (soKm - 21) * GIA_UBER_SUV_21KM + thoiGianCho * GIA_UBER_SUV_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                }
                break;
            }
        case 'uberBlack':
            {
                if (soKm <= 1) {
                    tongTien = soKm * GIA_UBER_BLACK_1KM + thoiGianCho * GIA_UBER_BLACK_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                } else if (soKm > 1 && soKm <= 20) {
                    tongTien = GIA_UBER_BLACK_1KM + (soKm - 1) * GIA_UBER_BLACK_1KM_21KM + thoiGianCho * GIA_UBER_BLACK_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                } else {
                    tongTien = GIA_UBER_BLACK_1KM + 20 * GIA_UBER_BLACK_1KM_21KM + (soKm - 21) * GIA_UBER_BLACK_21KM + thoiGianCho * GIA_UBER_BLACK_CHO;
                    divThanhTien.style.display = 'block';
                    xuatTien.innerHTML = tongTien + " vnd";
                }
                break;
            }
    }
}
/*
Muc dich: tao tung dong du lieu
 */


function TaoDong(chiTiet, soKmSuDung, donGia) {

}


/*
    MUC DICH:Xuat chi tiet hoa don theo 
    Tham so: khong co
    nguoi tao:phuc nguyen
    Ngay tao:xxx
    Version:1.0
 */

function InHoaDon() {
    //xuat hien the div in hoa don
    var hoaDon = getMyEle('hoaDon');
    //lay the tBody
    var tBody = getMyEle('tBody');
    // tBody.value('');
    var mainTable = getMyEle('tableContent');
    //lay soKM va thoi gian cho
    var soKm = getMyEle('soKm').value;
    soKm = parseFloat(soKm); //đổi chuỗi sang số thực
    var thoiGianCho = getMyEle('thoiGianCho').value;
    thoiGianCho = parseFloat(thoiGianCho);

    var tongTien = 0;

    //Mảng dữ liệu của xe UberX
    var ArrayUberX_1KM = ['Mở của/1km đầu tiên', soKm, GIA_UBER_X_1KM, soKm * GIA_UBER_X_1KM];
    var ArrayUberX_1KM_21KM = ['Mở của/1km đầu tiên', 1, GIA_UBER_X_1KM, GIA_UBER_X_1KM, '1KM - 21KM', soKm - 1, GIA_UBER_X_1KM_21KM, (soKm - 1) * GIA_UBER_X_1KM_21KM]
    var ArrayUberX_21KM = ['Mở của/1km đầu tiên', 1, GIA_UBER_X_1KM, GIA_UBER_X_1KM, '1KM - 21KM', 20, GIA_UBER_X_1KM_21KM, 20 * GIA_UBER_X_1KM_21KM, '21KM trở đi', soKm - 21, GIA_UBER_X_21KM, (soKm - 21) * GIA_UBER_X_21KM]
    var ArrayUberX_Cho = ['Thời gian chờ', thoiGianCho, GIA_UBER_X_CHO, thoiGianCho * GIA_UBER_X_CHO]

    //Mảng dữ liệu của xe UberSUV
    var ArrayUberSUV_1KM = ['Mở của/1km đầu tiên', soKm, GIA_UBER_SUV_1KM, soKm * GIA_UBER_SUV_1KM];
    var ArrayUberSUV_1KM_21KM = ['Mở của/1km đầu tiên', 1, GIA_UBER_SUV_1KM, GIA_UBER_SUV_1KM, '1KM - 21KM', soKm - 1, GIA_UBER_SUV_1KM_21KM, (soKm - 1) * GIA_UBER_SUV_1KM_21KM]
    var ArrayUberSUV_21KM = ['Mở của/1km đầu tiên', 1, GIA_UBER_SUV_1KM, GIA_UBER_SUV_1KM, '1KM - 21KM', 20, GIA_UBER_SUV_1KM_21KM, 20 * GIA_UBER_SUV_1KM_21KM, '21KM trở đi', soKm - 21, GIA_UBER_SUV_21KM, (soKm - 21) * GIA_UBER_SUV_21KM]
    var ArrayUberSUV_Cho = ['Thời gian chờ', thoiGianCho, GIA_UBER_SUV_CHO, thoiGianCho * GIA_UBER_SUV_CHO]

    //Mảng dữ liệu của xe UberBlack
    var ArrayUberBLACK_1KM = ['Mở của/1km đầu tiên', soKm, GIA_UBER_BLACK_1KM, soKm * GIA_UBER_BLACK_1KM];
    var ArrayUberBLACK_1KM_21KM = ['Mở của/1km đầu tiên', 1, GIA_UBER_BLACK_1KM, GIA_UBER_BLACK_1KM, '1KM - 21KM', soKm - 1, GIA_UBER_BLACK_1KM_21KM, (soKm - 1) * GIA_UBER_BLACK_1KM_21KM]
    var ArrayUberBLACK_21KM = ['Mở của/1km đầu tiên', 1, GIA_UBER_BLACK_1KM, GIA_UBER_BLACK_1KM, '1KM - 21KM', 20, GIA_UBER_BLACK_1KM_21KM, 20 * GIA_UBER_BLACK_1KM_21KM, '21KM trở đi', soKm - 21, GIA_UBER_BLACK_21KM, (soKm - 21) * GIA_UBER_BLACK_21KM]
    var ArrayUberBLACK_Cho = ['Thời gian chờ', thoiGianCho, GIA_UBER_BLACK_CHO, thoiGianCho * GIA_UBER_BLACK_CHO]

    var loaiXe = TypeUber();
    var mang = new Array();
    switch (loaiXe) {

        case 'uberX':
            {
                if (soKm <= 1) {
                    tongTien = soKm * GIA_UBER_X_1KM + thoiGianCho * GIA_UBER_X_CHO;
                    //Thành tiền KM
                    for (var i = 0; i < 1; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberX_1KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberX_1KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberX_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);
                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);

                } else if (soKm > 1 && soKm <= 21) {
                    tongTien = GIA_UBER_X_1KM + (soKm - 1) * GIA_UBER_X_1KM_21KM + thoiGianCho * GIA_UBER_X_CHO;
                    for (var i = 0; i < 2; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberX_1KM_21KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberX_1KM_21KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberX_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);

                } else {
                    tongTien = GIA_UBER_X_1KM + 20 * GIA_UBER_X_1KM_21KM + (soKm - 21) * GIA_UBER_X_21KM + thoiGianCho * GIA_UBER_X_CHO;

                    for (var i = 0; i < 3; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberX_21KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberX_21KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberX_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                }
                break;
            }
        case 'uberSUV':
            {
                if (soKm <= 1) {
                    tongTien = soKm * GIA_UBER_SUV_1KM + thoiGianCho * GIA_UBER_SUV_CHO;


                    //Thành tiền KM
                    for (var i = 0; i < 1; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberSUV_1KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberSUV_1KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberSUV_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                } else if (soKm > 1 && soKm <= 20) {
                    tongTien = GIA_UBER_SUV_1KM + (soKm - 1) * GIA_UBER_SUV_1KM_21KM + thoiGianCho * GIA_UBER_SUV_CHO;

                    //Thành tiền KM
                    for (var i = 0; i < 2; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberSUV_1KM_21KM[0]);
                            tagTD.appendChild(txtNode);
                            console.log(ArrayUberSUV_1KM_21KM);
                            ArrayUberSUV_1KM_21KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberSUV_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                } else {
                    tongTien = GIA_UBER_SUV_1KM + 20 * GIA_UBER_SUV_1KM_21KM + (soKm - 21) * GIA_UBER_SUV_21KM + thoiGianCho * GIA_UBER_SUV_CHO;


                    //Thành tiền KM
                    for (var i = 0; i < 3; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberSUV_21KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberSUV_21KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberSUV_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                }
                break;
            }
        case 'uberBlack':
            {
                if (soKm <= 1) {
                    tongTien = soKm * GIA_UBER_BLACK_1KM + thoiGianCho * GIA_UBER_BLACK_CHO;

                    //Thành tiền KM
                    for (var i = 0; i < 1; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = i; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberBLACK_1KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberBLACK_1KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberBLACK_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                } else if (soKm > 1 && soKm <= 20) {
                    tongTien = GIA_UBER_BLACK_1KM + (soKm - 1) * GIA_UBER_BLACK_1KM_21KM + thoiGianCho * GIA_UBER_BLACK_CHO;




                    //Thành tiền KM
                    for (var i = 0; i < 2; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberBLACK_1KM_21KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberBLACK_1KM_21KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberBLACK_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                } else {
                    tongTien = GIA_UBER_BLACK_1KM + 20 * GIA_UBER_BLACK_1KM_21KM + (soKm - 21) * GIA_UBER_BLACK_21KM + thoiGianCho * GIA_UBER_BLACK_CHO;


                    //Thành tiền KM
                    for (var i = 0; i < 3; i++) {
                        var tagTR = document.createElement('tr');
                        tBody.appendChild(tagTR);
                        for (var j = 0; j < 4; j++) {
                            var tagTD = document.createElement('td');
                            tagTR.appendChild(tagTD);
                            var txtNode = document.createTextNode(ArrayUberBLACK_21KM[0]);
                            tagTD.appendChild(txtNode);
                            ArrayUberBLACK_21KM.shift();
                        }
                    }
                    //Thành tiên thời gian chờ
                    var tagTR_Cho = document.createElement('tr');
                    tBody.appendChild(tagTR_Cho);
                    for (var i = 0; i < 4; i++) {
                        var tagTD_Cho = document.createElement('td');
                        tagTR_Cho.appendChild(tagTD_Cho);
                        var txtNode_Cho = document.createTextNode(ArrayUberBLACK_Cho[i]);
                        tagTD_Cho.appendChild(txtNode_Cho);
                    }
                    //IN ra tong tien
                    var tagTR_TongTien = document.createElement('tr');
                    tBody.appendChild(tagTR_TongTien);

                    var tagTD_TongTien = document.createElement('td');
                    tagTR_TongTien.appendChild(tagTD_TongTien);
                    tagTD_TongTien.colSpan = "4";
                    tagTD_TongTien.style.textAlign = "right";
                    var txtNode_TongTien = document.createTextNode('Tổng tiền: ' + tongTien + ' vnd');
                    tagTD_TongTien.appendChild(txtNode_TongTien);
                }
                break;
            }
    }
    // tBody.innerHTML = "";
}