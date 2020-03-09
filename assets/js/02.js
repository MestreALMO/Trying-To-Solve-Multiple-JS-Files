var arrLang = {
    'english': {
        'n1.1': '01: Cookie',
        'n1.2': '02: Rice',

        'n2.1': '01: One',
        'n2.2': '02: Two',
        'n2.3': '03: Three',
        
        'n3.1': '01: Pants',
        'n3.2': '02: Shirt',
        
        'n4.1': '01: Car',
        'n4.2': '02: Bike',
    },
    'portuguese': {
        'n1.1': '01: Biscoito',
        'n1.2': '02: Arroz',

        'n2.1': '01: Um',
        'n2.2': '02: Dois',
        'n2.3': '03: Três',
        
        'n3.1': '01: Calça',
        'n3.2': '02: Camisa',
        
        'n4.1': '01: Carro',
        'n4.2': '02: Bicicleta',
    }
};

// Process translation
$(function() {
    // grab a reference to the DOM elements
    var $translate = $('.translate');
    var $lang = $('.lang');
    // get the user language
    var userLang = (navigator.language || navigator.userLanguage) == "pt-BR" ? "portuguese" : "english";
    
    $translate
        // bind the change event
        .on("change", function() {
            var lang = $translate.val();
            $lang.each(function(index, item) {
                var $this = $(this);
                var id = $this.attr('id');
                $this.text(arrLang[lang][id]);
            });
        })
        // update the value of the language dropdown with the user lang (happens only on page load)
        .val(userLang)
        // trigger the change event so that the callback gets called (happens only on page load)
        .trigger("change");
});
