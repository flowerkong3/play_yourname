
// ! Button Click Event
// * 버튼클릭 이벤트
function resultBtn() {
		var name; 
		var text;
		var section = document.querySelector(".section");
		var section02 = document.querySelector(".section02");
		var section03 = document.querySelector(".section03");
		var dog = document.getElementById("dog");
		var dog1 = document.querySelector(".dog1");
		var dog2 = document.querySelector(".dog2");
		
		name = document.getElementById("name").value; //input값 넣기
		//이름이 '망댕'이라면
		if (name === "망댕") { 
			text = "good!";
			section.style.backgroundColor = "#fef7e0"; //배경색 나타남
			dog2.style.display = "block"; //dog2 나타남
			dog1.style.display = "none"; //dog1 사라짐
			section02.classList.add('on'); //클래스명 on 생성
			section03.classList.add('on'); //클래스명 on 생성

			// 스크롤 섹션2로 이동
			$('html,body').animate({
				scrollTop:$('.section02').offset().top - 800},
				'slow');

		// 이름이 '망댕'이 아니라면			
		} else { 
			text = "sorry! let me try again"; //다시 입력해주세요
			section.style.backgroundColor = "#ccc"; //배경색 회색으로 변경
			dog2.style.display = "none"; //dog2 사라짐
			dog1.style.display = "block"; //dog1 나타남
			section02.classList.remove('on'); //클래스명 on 삭제
			section03.classList.remove('on'); //클래스명 on 삭제
		}

	//힌트부분 텍스트 결과값 
	document.getElementById("resultText").innerHTML = text; 
};

// * 리셋버튼 클릭 이벤트
function resetBtn(){
	document.getElementById('name').value = null; // input값 초기화
	window.location.reload(); // 페이지 새로고침


};



$(document).ready(function() {
    $(window).scroll( function(){
			
        $('.sec-tail p').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},700);
            }else {
							// $(this).animate({'opacity':'0'},700);
						}
            
        }); 
    });
});


