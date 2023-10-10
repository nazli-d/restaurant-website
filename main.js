
     var yukarii = document.getElementsByClassName("yukari")[0];
    window.addEventListener("scroll",function(){
        const mesafe = this.window.scrollY;
        if(mesafe>300){
            yukarii.classList.add("goster");
        }else{
            yukarii.classList.remove("goster");
        }
    });
    yukarii.addEventListener("click",function() {
        window.scrollTo(0,0);
     });
   

    function ClickEvent()
    {
        alert("Mesajınız tarafımıza iletilmiştir.");
    }
    function getSize(){
        document.getElementById("qr").addEventListener("mouseover",popup);
        }
    function popup(){
        alert("QR KODU OKUTTUĞUNUZDA MENÜYÜ GÖREBİLİRSİNİZ");
    }
    function ClickReserv(){
        alert("Rezervasyon işleminiz tamamlanmıştır.");
        }
  

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
        
        var swiper = new Swiper(".index-slider", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

         var swiper = new Swiper(".musteri-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });   
          
          


        