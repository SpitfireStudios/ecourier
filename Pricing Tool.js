function calculatePrice()
            {
            //select data
            var agirlik = 5.00;
            var uzunluk = 2.00;
            var en = 2.00;
            var yukseklik = 2.00;

            var agirlikNumara = document.getElementById("agirlikNumara").value;
            var uzunlukNumara = document.getElementById("uzunlukNumara").value;
            var enNumara = document.getElementById("enNumara").value;
            var yukseklikNumara = document.getElementById("yukseklikNumara").value;

            //calculate final cost

            var total = (agirlik * agirlikNumara) + (uzunluk * uzunlukNumara) + (en * enNumara) + (yukseklik * yukseklikNumara);

               document.getElementById("orderTotal").value=total;
             }


             $(document).ready(function() {
             $('button').click(function() {
                 $('button.active').removeClass("active");
                 $(this).addClass("active");
             });
            });
