$(function(){

  //  var result = data.filter(function (parm) {return parm.theme == theme });
  //  var html = '';
  //alert(entry['name'])
 //  html += '<div class="swiper-slide">';
 //  html += '<img src="' + entry.src + '">';
 //  html += '<p>'+entry.name+'</p>';
 //  html += '</div>';


  


function movieData(cate,rankNum){
  $.getJSON('./asset/data/movie.json', function(data, status){
    if (status == "success"){
      var result = data.filter(function (parm) {return parm.category == cate });

      html="";
      $.each(result, function(index, movie){ //반복문

        html += '<li class="swiper-slide">';
        html += '<a href="'+movie.numb+'" class="image-wrap">';
        html += '<img src="'+movie.thumbSrc+'" alt="닥터스트레인지">';
        html += '<em class="num">'+(index+1)+'</em>';
        html += '<i class="age agenum"><span class="blind">'+movie.age+'</span></i>';
        html += '</a>';
        html += '<div class="content-wrap">';
        html += '<a href="'+movie.numb+'" class="movie-title">'+movie.title+'</a>';
        html += '<strong>';
        html += '예매율 <span class="rating">'+movie.rate+'%</span>';
        html += '<span class="score">'+movie.score+'</span>';
        html += '</strong>';
        html += '<a href="'+movie.numb+'" class="link-buy">바로예매</a>';
        html += '</div>';
        html += '</li>';
     });

        html += '<li class="swiper-slide plus">';
        html += '<a href="" class="link-plus">더보기</a>';
        html += '</li>';
      
     $(rankNum).find('.swiper-wrapper').append(html);

     }else if (status == "error" || status == "parsererror" ){
       alert("An error occured");
     }

     var slide03 = new Swiper('.rank-slide', {
      slidesPerView: 'auto',
      freeMode: true,
  });
     
 });
}
movieData("#박스오피스","#rank01");
movieData("#상영예정","#rank02");
movieData("#돌비시네마","#rank03");
movieData("#단독","#rank04");
movieData("#클소","#rank05");
movieData("#필소","#rank06");


    //pop-up페이지
    $(document).on('click', '.image-wrap',function(e){ //동적인 애한테는 이런식
        e.preventDefault();
        movieNumb = $(this).attr('href');
        
        $.getJSON('./asset/data/movie_detail.json', function(data, status){
          if (status == "success"){
           var result = data.filter(function (parm) {return parm.numb == movieNumb });
            html='';
              html += '<div class="rank-wrap">';
              html += '<div class="rank-topfixed">';
              html += '<div class="inner">';
              html += '<a href="" class="btn-back"><span class="blind">뒤로가기</span></a>';
              html += '<div class="share-wrap">';
              html += '<span class="showing">상영중</span>';
              html += '<a href="" class="btn-share"><span class="blind">공유하기</span></a>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '<div class="rank-info">';
              html += '<div class="bg-image">';
              html += '<img src="'+result[0].bgImg+'" alt="" class="back-img">';
              html += '<img src="./asset/images/content/rank/blur01.png" alt="" class="blur-top">';
              html += '<img src="./asset/images/content/rank/blur02.png" alt="" class="blur-bt">';
              html += '</div>';
              html += '<div class="inner">';
              html += '<div class="info-deliver">';
              html += '<em class="badge">'+result[0].badge+'</em>';
              html += '<h3 class="info-title">'+result[0].title+'</h3>';
              html += '<span class="eng-title">'+result[0].titleEng+'</span>';
              html += '<span class="view-age">'+result[0].age+'</span>';
              html += '<span class="rate">'+result[0].rate+'위 ('+result[0].rating+'%)</span>';
              html += '<span class="score">평점 <span class="score-color">'+result[0].score+'</span></span>';
              html += '</div>';
              html += '<div class="info-comment">';
              html += '<p class="info-msg">';
              html += '<span class="bold">'+result[0].infoMsg1+'</span><br>';
              html += ''+result[0].infoMsg2+'';
              html += '</p>';
              html += '<a href="" class="btn-down">';
              html += '<span class="txt-open">더보기</span>';
              html += '<span class="txt-close">닫기</span>';
              html += '</a>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '<div class="inner">';
              html += '<div class="swiper rank-feed">';
              html += '<div class="swiper-wrapper">';
              html += '<div class="swiper-slide">';
              html += '<img src="'+result[0].feedSrc+'" alt="닥터 스트레인지: 대혼돈의 멀티버스">';
              html += '<span class="like">'+result[0].like+'</span>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '<div class="rank-inside-banner"><img src="./asset/images/content/gnb/banner.jpg" alt=""></div>';
              html += '<div class="rank-tab-menu">';
              html += '<a href="" data-tab="#movieinfo" class="tab-title on">영화정보</a>';
              html += '<a href="" data-tab="#moviereview" class="tab-title">실관람평</a>';
              html += '<a href="" data-tab="#moviepost" class="tab-title">무비포스트</a>';
              html += '</div>';
              html += '<div class="rank-tab-cont">';
              html += '<div id="movieinfo" class="cont on">';
              html += '<div class="movieinfo-cont">';
              html += '<div class="inner">';
              html += '<div class="cont-top">';
              html += '<ul class="cont-list">';
              html += '<li class="cont-item">';
              html += '<span class="cont-tit">개봉</span>';
              html += ''+result[0].release+'';
              html += '</li>';
              html += '<li class="cont-item">';
              html += '<span class="cont-tit">타입</span>';
              html += ''+result[0].movieType+'';
              html += '</li>';
              html += '<li class="cont-item">';
              html += '<span class="cont-tit">장르</span>';
              html += ''+result[0].genre+'';
              html += '</li>';
              html += '<li class="cont-item bdbottom">';
              html += '<span class="cont-tit">등급</span>';
              html += ''+result[0].viewAge+'';
              html += '</li>';
              html += '<li class="cont-item">';
              html += '<span class="cont-tit">감독</span>';
              html += ''+result[0].director+'';
              html += '</li>';
              html += '<li class="cont-item bdbottom">';
              html += '<span class="cont-tit">출연</span>';
              html += ''+result[0].actor+'';
              html += '</li>';
              html += '</ul>';
              html += '</div>';
              html += '</div>';
              html += '<div class="cont-bottom">';
              html += '<div class="sum-num">';
              html += '<span class="title">누적 관객 수</span>';
              html += '<em class="numb">'+result[0].viewNum+'</em>만';
              html += '<span class="nowdate">개봉 '+result[0].releaseDay+'일차</span>';
              html += '</div>';
              html += '<div class="day-num">';
              html += '<span class="title">일별 관객 수</span>';
              html += '<em class="numb">'+result[0].dayviewNum+'</em>';
              html += '<span class="yesdata">전일대비 <span class="perc">'+result[0].beforeYes+'%</span></span>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '<div class="movieinfo-trailer">';
              html += '<h3 class="title">예고편</h3>';
              html += '<div class="swiper slide09">';
              html += '<ul class="swiper-wrapper">';
              html += '<li class="swiper-slide">';
              html += '<a href="">';
              html += '<div class="image-wrap"><img src="'+result[0].teaserSrc+'" alt=""></div>';
              html += '<div class="txt-wrap">';
              html += '<p class="text">스페셜 티저 영상</p>';
              html += '</div>';
              html += '</a>';
              html += '</li>';
              html += '<li class="swiper-slide">';
              html += '<a href="">';
              html += '<div class="image-wrap"><img src="'+result[0].trailerSrc01+'" alt=""></div>';
              html += '<div class="txt-wrap">';
              html += '<p class="text">정식 예고편1</p>';
              html += '</div>';
              html += '</a>';
              html += '</li>';
              html += '<li class="swiper-slide">';
              html += '<a href="">';
              html += '<div class="image-wrap"><img src="'+result[0].trailerSrc02+'" alt=""></div>';
              html += '<div class="txt-wrap">';
              html += '<p class="text">정식 예고편2</p>';
              html += '</div>';
              html += '</a>';
              html += '</li>';
              html += '<li class="swiper-slide">';
              html += '<a href="">';
              html += '<div class="image-wrap"><img src="'+result[0].trailerSrc03+'" alt=""></div>';
              html += '<div class="txt-wrap">';
              html += '<p class="text">정식 예고편3</p>';
              html += '</div>';
              html += '</a>';
              html += '</li>';
              html += '</ul>';
              html += '</div>';
              html += '</div>';
              html += '<div class="inner">';
              html += '<div class="movieinfo-steelcut">';
              html += '<h3 class="title">스틸컷</h3>';
              html += '<div class="image-box">';
              html += '<div class="image-wrap"><img src="'+result[0].steelSrc01+'" alt=""></div>';
              html += '<div class="image-wrap"><img src="'+result[0].steelSrc02+'" alt=""></div>';
              html += '<div class="image-wrap"><img src="'+result[0].steelSrc03+'" alt=""></div>';
              html += '<div class="image-wrap"><img src="'+result[0].steelSrc04+'" alt=""></div>';
              html += '<div class="image-wrap"><img src="'+result[0].steelSrc05+'" alt=""></div>';
              html += '</div>';
              html += '</div>';
              html += '<div class="movieinfo-event">';
              html += '<h3 class="title">이벤트</h3>';
              html += '<div class="swiper slide10">';
              html += '<ul class="swiper-wrapper">';
              html += '<li class="swiper-slide">';
              html += '<a href="">';
              html += '<div class="image-wrap"><img src="'+result[0].eventSrc01+'" alt=""></div>';
              html += '<div class="txt-wrap">';
              html += '  <strong class="event-title">'+result[0].eventTitle01+'</strong>';
              html += '  <span class="date">2022.05.14 - 2022.05.17 </span>';
              html += '</div>';
              html += '</a>';
              html += '</li>';
              html += '<li class="swiper-slide">';
              html += '<a href="">';
              html += '<div class="image-wrap"><img src="'+result[0].eventSrc02+'" alt=""></div>';
              html += '<div class="txt-wrap">';
              html += '  <strong class="event-title">'+result[0].eventTitle02+'</strong>';
              html += '  <span class="date">2022.05.14 - 2022.05.17 </span>';
              html += '</div>';
              html += '</a>';
              html += '</li>';
              html += '</ul>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '<div id="moviereview" class="cont">';
              html += '<div class="moviereview-cont">';
              html += '<strong class="cont-title"><span class="bold">‘'+result[0].title+'’</span>관람평점</strong>';
              html += '<div class="score">';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '<span class="half"></span>';
              html += '<em class="score-num">'+result[0].scoreNum+'</em>';
              html += '</div>';
              html += '<a href="" class="btn-write">실관람평 쓰기</a>';
              html += '<p class="review-msg">';
              html += '관람일 기준 7일 이내 등록 시<span class="txt-color">50P</span>가 적립됩니다. <br>';
              html += '포인트는 관람평 최대 10편 지급가능합니다.';
              html += '</p>';
              html += '</div>';
              html += '<div class="moviereview-review">';
              html += '<div class="review-num">';
              html += '<p class="number">실관람평 <span class="txt-color">'+result[0].reviewNum+'건</span></p>';
              html += '<a href="" class="btn-filter"><span class="blind">필터</span></a>';
              html += '</div>';
              html += '<div class="review-contbox">';
              html += '<div class="cont">';
              html += '<div class="profile-wrap">';
              html += '<div class="profile-image"><img src="'+result[0].porfileSrc+'" alt=""></div>';
              html += '<div class="profile-id">';
              html += '<span class="id">'+result[0].porfileId+'</span>';
              html += '<span class="time">'+result[0].porfileTime+'전</span>';
              html += '</div>';
              html += '<div class="profile-star">';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '<span class="star"></span>';
              html += '</div>';
              html += '</div>';
              html += '<p class="txt-wrap">'+result[0].riviewCont+'</p>';
              html += '<div class="etc-wrap">';
              html += '<div class="compli">';
              html += '<span class="compli-box">'+result[0].recommBox01+'</span>';
              html += '<span class="compli-box">'+result[0].recommBox02+'</span>';
              html += '</div>';
              html += '<span class="like">'+result[0].recommLike+'</span>';
              html += '</div>';
              html += '<a href="" class="btn-etc"><span class="blind">기타설정</span></a>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '</div>';
              html += '<div id="moviepost" class="cont">';
              html += '<div class="moviepost-cont">none</div>';
              html += '<div class="moviepost-cont">none</div>';
              html += '<div class="moviepost-cont">none</div>';
              html += '<div class="moviepost-cont">none</div>';
              html += '</div>';
              html += '</div>';
              html += '<div class="rank-bottomfixed">';
              html += '<a href="" class="btn-like">2,849</a>';
              html += '<a href="" class="btn-dolby"><span class="blind">돌비시네마</span></a>';
              html += '<a href="" class="btn-buyticket">바로예매</a>';
              html += '</div>';
              html += '</div>';
              
              // html2
              html2='';
              html2 += '<div class="rank-wrap">';
              html2 += '<div class="rank-topfixed">';
              html2 += '<div class="inner">';
              html2 += '<a href="" class="btn-back"><span class="blind">뒤로가기</span></a>';
              html2 += '<div class="share-wrap">';
              html2 += '<span class="showing">상영중</span>';
              html2 += '<a href="" class="btn-share"><span class="blind">공유하기</span></a>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="rank-info">';
              html2 += '<div class="bg-image">';
              html2 += '<img src="'+result[0].bgImg+'" alt="" class="back-img">';
              html2 += '<img src="./asset/images/content/rank/blur01.png" alt="" class="blur-top">';
              html2 += '<img src="./asset/images/content/rank/blur02.png" alt="" class="blur-bt">';
              html2 += '</div>';
              html2 += '<div class="inner">';
              html2 += '<div class="info-deliver">';
              html2 += '<h3 class="info-title">'+result[0].title+'</h3>';
              html2 += '<span class="eng-title">'+result[0].titleEng+'</span>';
              html2 += '<span class="view-age">'+result[0].age+'</span>';
              html2 += '<span class="rate">'+result[0].rate+'위 ('+result[0].rating+'%)</span>';
              html2 += '<span class="score">평점 <span class="score-color">'+result[0].score+'</span></span>';
              html2 += '</div>';
              html2 += '<div class="info-comment">';
              html2 += '<p class="info-msg">';
              html2 += '<span class="bold">'+result[0].infoMsg1+'</span><br>';
              html2 += ''+result[0].infoMsg2+'';
              html2 += '</p>';
              html2 += '<a href="" class="btn-down">';
              html2 += '<span class="txt-open">더보기</span>';
              html2 += '<span class="txt-close">닫기</span>';
              html2 += '</a>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="rank-inside-banner"><img src="./asset/images/content/gnb/banner.jpg" alt=""></div>';
              html2 += '<div class="rank-tab-menu">';
              html2 += '<a href="" data-tab="#movieinfo" class="tab-title on">영화정보</a>';
              html2 += '<a href="" data-tab="#moviereview" class="tab-title">실관람평</a>';
              html2 += '<a href="" data-tab="#moviepost" class="tab-title">무비포스트</a>';
              html2 += '</div>';
              html2 += '<div class="rank-tab-cont">';
              html2 += '<div id="movieinfo" class="cont on">';
              html2 += '<div class="movieinfo-cont">';
              html2 += '<div class="inner">';
              html2 += '<div class="cont-top">';
              html2 += '<ul class="cont-list">';
              html2 += '<li class="cont-item">';
              html2 += '<span class="cont-tit">개봉</span>';
              html2 += ''+result[0].release+'';
              html2 += '</li>';
              html2 += '<li class="cont-item">';
              html2 += '<span class="cont-tit">타입</span>';
              html2 += ''+result[0].movieType+'';
              html2 += '</li>';
              html2 += '<li class="cont-item">';
              html2 += '<span class="cont-tit">장르</span>';
              html2 += ''+result[0].genre+'';
              html2 += '</li>';
              html2 += '<li class="cont-item bdbottom">';
              html2 += '<span class="cont-tit">등급</span>';
              html2 += ''+result[0].viewAge+'';
              html2 += '</li>';
              html2 += '<li class="cont-item">';
              html2 += '<span class="cont-tit">감독</span>';
              html2 += ''+result[0].director+'';
              html2 += '</li>';
              html2 += '<li class="cont-item bdbottom">';
              html2 += '<span class="cont-tit">출연</span>';
              html2 += ''+result[0].actor+'';
              html2 += '</li>';
              html2 += '</ul>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="cont-bottom">';
              html2 += '<div class="sum-num">';
              html2 += '<span class="title">누적 관객 수</span>';
              html2 += '<em class="numb">'+result[0].viewNum+'</em>만';
              html2 += '<span class="nowdate">개봉 '+result[0].releaseDay+'일차</span>';
              html2 += '</div>';
              html2 += '<div class="day-num">';
              html2 += '<span class="title">일별 관객 수</span>';
              html2 += '<em class="numb">'+result[0].dayviewNum+'</em>';
              html2 += '<span class="yesdata">전일대비 <span class="perc">'+result[0].beforeYes+'</span></span>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="movieinfo-trailer">';
              html2 += '<h3 class="title">예고편</h3>';
              html2 += '<div class="swiper slide09">';
              html2 += '<ul class="swiper-wrapper">';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].trailerSrc01+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '<p class="text">론칭 예고편 1</p>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].trailerSrc02+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '<p class="text">론칭 예고편 2</p>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].trailerSrc03+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '<p class="text">티저 예고편</p>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].trailerSrc04+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '<p class="text">메인 예고편</p>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].trailerSrc05+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '<p class="text">월드와이드 스페셜 클립</p>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].trailerSrc06+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '<p class="text">강력한 컴백 예고편</p>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '</ul>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="inner">';
              html2 += '<div class="movieinfo-steelcut">';
              html2 += '<h3 class="title">스틸컷</h3>';
              html2 += '<div class="image-box">';
              html2 += '<div class="image-wrap"><img src="'+result[0].steelSrc01+'" alt=""></div>';
              html2 += '<div class="image-wrap"><img src="'+result[0].steelSrc02+'" alt=""></div>';
              html2 += '<div class="image-wrap"><img src="'+result[0].steelSrc03+'" alt=""></div>';
              html2 += '<div class="image-wrap"><img src="'+result[0].steelSrc04+'" alt=""></div>';
              html2 += '<div class="image-wrap"><img src="'+result[0].steelSrc05+'" alt=""></div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="movieinfo-event">';
              html2 += '<h3 class="title">이벤트</h3>';
              html2 += '<div class="swiper slide10">';
              html2 += '<ul class="swiper-wrapper">';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].eventSrc01+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '  <strong class="event-title">'+result[0].eventTitle01+'</strong>';
              html2 += '  <span class="date">2022.05.14 - 2022.05.17 </span>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '<li class="swiper-slide">';
              html2 += '<a href="">';
              html2 += '<div class="image-wrap"><img src="'+result[0].eventSrc02+'" alt=""></div>';
              html2 += '<div class="txt-wrap">';
              html2 += '  <strong class="event-title">'+result[0].eventTitle02+'</strong>';
              html2 += '  <span class="date">2022.05.14 - 2022.05.17 </span>';
              html2 += '</div>';
              html2 += '</a>';
              html2 += '</li>';
              html2 += '</ul>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div id="moviereview" class="cont">';
              html2 += '<div class="moviereview-cont">';
              html2 += '<strong class="cont-title"><span class="bold">‘'+result[0].title+'’</span>관람평점</strong>';
              html2 += '<div class="score">';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '<span class="half"></span>';
              html2 += '<em class="score-num">'+result[0].scoreNum+'</em>';
              html2 += '</div>';
              html2 += '<a href="" class="btn-write">실관람평 쓰기</a>';
              html2 += '<p class="review-msg">';
              html2 += '관람일 기준 7일 이내 등록 시<span class="txt-color">50P</span>가 적립됩니다. <br>';
              html2 += '포인트는 관람평 최대 10편 지급가능합니다.';
              html2 += '</p>';
              html2 += '</div>';
              html2 += '<div class="moviereview-review">';
              html2 += '<div class="review-num">';
              html2 += '<p class="number">실관람평 <span class="txt-color">'+result[0].reviewNum+'건</span></p>';
              html2 += '<a href="" class="btn-filter"><span class="blind">필터</span></a>';
              html2 += '</div>';
              html2 += '<div class="review-contbox">';
              html2 += '<div class="cont">';
              html2 += '<div class="profile-wrap">';
              html2 += '<div class="profile-image"><img src="'+result[0].porfileSrc+'" alt=""></div>';
              html2 += '<div class="profile-id">';
              html2 += '<span class="id">'+result[0].porfileId+'</span>';
              html2 += '<span class="time">'+result[0].porfileTime+'전</span>';
              html2 += '</div>';
              html2 += '<div class="profile-star">';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '<span class="star"></span>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<p class="txt-wrap">'+result[0].riviewCont+'</p>';
              html2 += '<div class="etc-wrap">';
              html2 += '<div class="compli">';
              html2 += '<span class="compli-box">'+result[0].recommBox01+'</span>';
              html2 += '<span class="compli-box">'+result[0].recommBox02+'</span>';
              html2 += '</div>';
              html2 += '<span class="like">'+result[0].recommLike+'</span>';
              html2 += '</div>';
              html2 += '<a href="" class="btn-etc"><span class="blind">기타설정</span></a>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div id="moviepost" class="cont">';
              html2 += '<div class="moviepost-cont">none</div>';
              html2 += '<div class="moviepost-cont">none</div>';
              html2 += '<div class="moviepost-cont">none</div>';
              html2 += '<div class="moviepost-cont">none</div>';
              html2 += '</div>';
              html2 += '</div>';
              html2 += '<div class="rank-bottomfixed">';
              html2 += '<a href="" class="btn-like">2,849</a>';
              html2 += '<a href="" class="btn-dolby"><span class="blind">돌비시네마</span></a>';
              html2 += '<a href="" class="btn-buyticket">바로예매</a>';
              html2 += '</div>';
              html2 += '</div>';

            if (movieNumb == 1) {
              $('body').append(html);
            } else if(movieNumb == 2){
              $('body').append(html2);
            }
            $('body').addClass('noscroll');
            $('.hd-topfixed').addClass('zdown');

            //rank-wrap 스크롤시 상단고정
            $('.rank-wrap').scroll(function () {

              curr = $(this).scrollTop();

              if (curr >= 2) {
                $('.rank-topfixed').addClass('down')
              } else {
                $('.rank-topfixed').removeClass('down')
              }
            })
            $(window).trigger('scroll');

            $(document).on('click','.btn-down',function(e){
              e.preventDefault();
              // alert('1');
              $(this).toggleClass('down');
              $('.info-msg').toggleClass('down');
            })

            //feed 슬라이드
            var slide09 = new Swiper('.slide09, .slide10', {
              slidesPerView: 'auto',
              resistance : true,
              freeMode: true,
          });
            
            //tab-title 클릭시 tab-cont
            $(document).on('click','.tab-title',function(e){
              e.preventDefault();
              $(this).addClass('on').siblings().removeClass('on');

              tabdata = $(this).data('tab');
              $(tabdata).addClass('on').siblings().removeClass('on')
            })


            //뒤로가기 버튼 클릭
            $(document).on('click','.btn-back',function(e){
              e.preventDefault();
              $('body').removeClass('noscroll');
              $('.hd-topfixed').removeClass('zdown');
            $('.footer-fixed').removeClass('zdown');
              $('.rank-wrap').remove();
            })

           }else if (status == "error" || status == "parsererror" ){
             alert("An error occured");
           }

       });
    })

//무비피드
$.getJSON("./asset/data/feed.json",function (data, textStatus, jqXHR) {
    html ='';
    $.each(data, function (index, feed) { 
      html += '<a href="' + feed.feedLink + '" class="box-feed box01">';
      html += '<div class="image"><img src="' + feed.thumbSrc + '" alt="화요일 지금 뜨는 영화"></div>';
      html += '<div class="txt">';
      html += '<h3 class="box-feed-title">' + feed.title + '</h3>';
      html += '<p class="box-feed-cont">' + feed.desc + '</p>';
      html += '</div>';
      html += '</a>';

    });
    // console.log(html);
    
    $('.feed-wrap').append(html);
  }
);

//무대인사
$.getJSON("./asset/data/preview.json",function (data, textStatus, jqXHR) {
    html='';
    $.each(data, function (index, preview) { 
        html += '<li class="swiper-slide">';
        html += '<a href="" class="image-wrap">';
        html += '<img src="'+preview.thumbSrc+'" alt="닥터스트레인지">';
        html += '<span class="img-title">'+preview.imgTitle+'</span>';
        html += '</a>';
        html += '<div class="content-wrap">';
        html += '<h3 class="preview-title">';
        html += '<a href="">'+preview.previewTitle+'</a>';
        html += '</h3>';
        html += '<div class="link-box">';
        html += '<a href="'+preview.previewLink+'" class="link-movieinfo">영화상세</a>';
        html += '<a href="'+preview.detailLink+'" class="link-entry">응모하기</a>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
    });
    $('.sc-movie-preview .swiper-wrapper').append(html);

    var slide04 = new Swiper('.slide04', {
      slidesPerView: 'auto',
      slideToClickedSlide : true,
      resistance : true,
      freeMode: true,
  });
  }
);


//이벤트
function eventData(cate,eventNum){
  $.getJSON("./asset/data/event.json", function (data, status) {
    if (status == "success") {
      var result = data.filter(function (parm) {return parm.category == cate});

      html='';
      html2='';
      $.each(result, function (index, event01) { 
        html += '<li class="swiper-slide">';
        html += '<a href="'+event01.eventLink+'">';
        html += '<div class="image-wrap">';
        html += '<img src="'+event01.thumbSrc+'" alt="돌비 시네마">';
        html += '</div>';
        html += '<span class="date">'+event01.startDate+' - '+event01.endDate+'</span>';
        html += '</a>';
        html += '</li>';
        html2 += '<li class="event-theater-item">';
        html2 += '<a href="'+event01.eventLink+'">';
        html2 += '<div class="image-wrap"><img src="'+event01.thumbSrc+'" alt=""></div>';
        html2 += '<div class="txt-wrap">';
        html2 += '<h3 class="theater-title">'+event01.title+'</h3>';
        html2 += '<span class="date">'+event01.startDate+' ~ '+event01.endDate+'';
        html2 += '</div>';
        html2 += '</a>';
        html2 += '</li>';
      });
      // console.log(html);
      // $('.sc-event .slide05 .swiper-wrapper').append(html);
      $(eventNum).find('.swiper-wrapper').append(html);
      $(eventNum).find('.event-theater-list').append(html2);
    } else if (status == "error" || status == "parsererror" ){
      alert("An error occured");
    }
    var slide05 = new Swiper('.slide05', {
      slidesPerView: 'auto',
      slideToClickedSlide : true,
      resistance : true,
      freeMode: true,
  });
  });
}
eventData("메가pick","#event01"); //함수호출
eventData("영화","#event02");
eventData("극장","#event03");
eventData("제휴/할인","#event04");
eventData("시사회/무대","#event05");



//무비포스트
$.getJSON("./asset/data/post.json", function (data, textStatus, jqXHR) {
  html ='';
    $.each(data, function (index, post) { 
      html += '<li class="swiper-slide">';
      html += '<a href="'+post.postLink+'">';
      html += '<div class="image-wrap">';
      html += '<img src="'+post.thumbSrc+'" alt="닥터스트레인지">';
      html += '</div>';
      html += '<div class="content-wrap">';
      html += '<span class="id">'+post.nick+'</span>';
      html += '<h3 class="post-title">'+post.title+'</h3>';
      html += '<p class="post-cont">'+post.desc+'</p>';
      html += '<span class="like"><span class="blind">좋아요 갯수</span>'+post.like+'</span>';
      html += '<span class="reply"><span class="blind">코멘트 수</span>'+post.commentCnt+'</span>';
      html += '</div>';
      html += '</a>';
      html += '</li>';
    });
    $('.sc-post .swiper-wrapper').append(html);

    var slide06 = new Swiper('.slide06', {
      slidesPerView: 'auto',
      slideToClickedSlide : true,
      resistance : true,
      freeMode: true,
  });
  }
);


//sc-notice 슬라이드
    var slide01 = new Swiper(".slide01", {
      slidesPerView: 'auto',
      freeMode: true,
    });
    var slide02 = new Swiper(".slide02", {
      slidesPerView: 'auto',
      slideToClickedSlide : true,
      resistance : true,
      freeMode: true,
    });

    var slide07 = new Swiper(".slide07", {
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    $('.sc-movie-rank .slide02 .swiper-slide').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')
        
        targ =$(this).data('target');
        
        $(targ).addClass('on').siblings().removeClass('on')
    })

   

    $('.sc-event .slide02 .swiper-slide').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')
        
        targ =$(this).data('target');
        
        $(targ).addClass('on').siblings().removeClass('on')

    })
    ScrollTrigger.refresh();
})