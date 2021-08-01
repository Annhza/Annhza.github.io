
		            window.onload = function() {
		                var aData = [{
		                        "imgUrl":"images01/index-more02.png",
		                        "proName": " 2L大容量绞肉机 ",
		                        "proPrice": "105",
		                        "proComm": "1"
		                    },
		                    {
		                        "imgUrl": "images01/index-more03.png",
		                        "proName": "原装官方授权路由器 ",
		                        "proPrice": "99",
		                        "proComm": "9.7"
		                    },
		                    {
		                        "imgUrl": "images01/index-more05.png",
		                        "proName": " 大吸力除尘大师干湿吹三用 ",
		                        "proPrice": "206",
		                        "proComm": "1.3"
		                    },
		                    {
		                        "imgUrl": "images01/text35.jpeg",
		                        "proName": "100%正品官方授权气垫",
		                        "proPrice": "366",
		                        "proComm": "1.1"
		                    },
		                    {
		                        "imgUrl": "images01/text36.jpeg",
		                        "proName": "官方荣耀平板6 10.1寸",
		                        "proPrice": "1599",
		                        "proComm": "0.3"
		                    },
		                    {
		                        "imgUrl": "images01/text37.jpeg",
		                        "proName": "荣耀Magicbook pro平板",
		                        "proPrice": "2099",
		                        "proComm": "3.3"
		                    },
		                    {
		                        "imgUrl": "images01/text38.jpeg",
		                        "proName": " 官方正品苹果平板",
		                        "proPrice": "3099",
		                        "proComm": "1.2"
		                    },
		                    {
		                        "imgUrl": "images01/text28.jpeg",
		                        "proName": "心心相印厨房吸油纸巾",
		                        "proPrice": "30",
		                        "proComm": "0.6"
		                    },
		                    {
		                        "imgUrl": "images01/text29.jpeg",
		                        "proName": "洁柔36卷金尊无芯卷纸",
		                        "proPrice": "38",
		                        "proComm": "0.3"
		                    },
		                    {
		                        "imgUrl": "images01/text45.jpeg",
		                        "proName": "华为高清摄像头1080p",
		                        "proPrice": "299",
		                        "proComm": "7.2"
		                    }
		                ];
		                var oBox = document.getElementById("box");
		                var oCar = document.getElementById("car");
		                var oUl = document.getElementsByTagName("ul")[0];
		 
		                for (var i = 0; i < aData.length; i++) {
		                    var oLi = document.createElement("li");
		                    var data = aData[i];
		 
		                    oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
		                    oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
		                    oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
		                    oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>';
		                    oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
		                    oUl.appendChild(oLi);
		 
		                }
		                var aBtn = getClass(oBox, "add_btn");//获取box下的所有添加购物车按钮
		                var number = 0;//初始化商品数量
		                for (var i = 0; i < aBtn.length; i++) {
		                    number++;
		                    aBtn[i].index = i;
		                    aBtn[i].onclick = function() {
		                        var oDiv = document.createElement("div");
		                        var data = aData[this.index];
		                        oDiv.className = "row hid";
		                        oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
		                        oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
		                        oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
		                        oDiv.innerHTML += '<div class="price left"><span>' + data["proPrice"] + '元</span></div>';
		                        oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
		                        oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
		                        oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;">×</a></div>';
		                        oCar.appendChild(oDiv);
		                        var flag = true;
		                        var check = oDiv.firstChild.getElementsByTagName("i")[0];
		                        check.onclick = function() {
		                            // console.log(check.className);
		                            if (check.className == "i_check i_acity") {
		                                check.classList.remove("i_acity");
		 
		                            } else {
		                                check.classList.add("i_acity");
		                            }
		                            getAmount();
		                        }
		                        var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
		                        delBtn.onclick = function() {
		                            var result = confirm("确定删除吗?");
		                            if (result) {
		                                oCar.removeChild(oDiv);
		                                number--;
		                                getAmount();
		                            }
		                        }
		                        var i_btn = document.getElementsByClassName("count_i");
		                        for (var k = 0; k < i_btn.length; k++) {
		                            i_btn[k].onclick = function() {
		                                bt = this;
		                                //获取小计节点
		                                at = this.parentElement.parentElement.nextElementSibling;
		                                //获取单价节点
		                                pt = this.parentElement.parentElement.previousElementSibling;
		                                //获取数量值
		                                node = bt.parentNode.childNodes[1];
		                                console.log(node);
		                                num = node.innerText;
		                                num = parseInt(num);
		                                num++;
		                                node.innerText = num;
		                                //获取单价
		                                price = pt.innerText;
		                                price = price.substring(0, price.length - 1);
		                                //计算小计值
		                                at.innerText = price * num + "元";
		                                //计算总计值
		                                getAmount();
		                            }
		                        }
		                        //获取所有的数量减号按钮
		                        var d_btn = document.getElementsByClassName("count_d");
		                        for (k = 0; k < i_btn.length; k++) {
		                            d_btn[k].onclick = function() {
		                                bt = this;
		                                //获取小计节点
		                                at = this.parentElement.parentElement.nextElementSibling;
		                                //获取单价节点
		                                pt = this.parentElement.parentElement.previousElementSibling;
		                                //获取c_num节点
		                                node = bt.parentNode.childNodes[1];
		                                num = node.innerText;
		                                num = parseInt(num);
		                                if (num > 1) {
		                                    num--;
		                                }
		                                node.innerText = num;
		                                //获取单价
		                                price = pt.innerText;
		                                price = price.substring(0, price.length - 1);
		                                //计算小计值     
		                                at.innerText = price * num + "元";
		                                //计算总计值
		                                getAmount();
		                            }
		                        }
		 
		                        delBtn.onclick = function() {
		                            var result = confirm("确定删除吗?");
		                            if (result) {
		                                oCar.removeChild(oDiv);
		                                number--;
		                                getAmount();
		                            }
		                        }
		 
		                    }
		                }
		 
		            }
		 
		            function getClass(oBox, tagname) {
		                var aTag = oBox.getElementsByTagName("*");
		                var aBox = [];
		                for (var i = 0; i < aTag.length; i++) {
		                    if (aTag[i].className == tagname) {
		                        aBox.push(aTag[i]);
		                    }
		                }
		                return aBox;
		            }
		 
		            var index = false;
		            function checkAll() {
		                var choose = document.getElementById("car").getElementsByTagName("i");
		                // console.log(choose);
		                if (choose.length != 1) {
		                    for (i = 1; i < choose.length; i++) {
		                        if (!index) {
		                            choose[0].classList.add("i_acity2")
		                            choose[i].classList.add("i_acity");
		                        } else {
		                            choose[i].classList.remove("i_acity");
		                            choose[0].classList.remove("i_acity2")
		                        }
		                    }
		                    index = !index;
		                }
		                getAmount();
		            }
		 
		            //进行价格合计
		            function getAmount() {
		                // console.log(ys);
		                ns = document.getElementsByClassName("i_acity");
		                console.log(ns);
		                sum = 0;
		                //选中框
		                document.getElementById("price_num").innerText = sum;
		                for (y = 0; y < ns.length; y++) {
		                    //小计
		                    amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
		                    num = parseInt(amount_info.innerText);
		                    sum += num;
		                    document.getElementById("price_num").innerText = sum;
		                }
		            }
	