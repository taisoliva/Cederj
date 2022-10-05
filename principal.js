var tabDestaq = new Array (4);

tabDestaq[0] = [ "Softlens",
                  "Fabricante: Bauch & Lonb",
                  "Período: 30 dias",
                  "BauchELomb_30D_200",
                  "Preço: R$ 100,00"];

tabDestaq[1] = [ "Bioinfinity",
                 "Fabricante: Coopervision",
                 "Período: 30 dias",
                 "Bioinfinity_30D_200",
                 "Preço: R$180,00"];

tabDestaq[2] = [ "Acuvue Oasys",
                 "Fabricante: Johnson & Johnson",
                 "Período: 15 dias",
                 "Acuvue_15D_200",
                 "Preço: R$220,00"];

tabDestaq[3] = [ "Acuvue 2",
                 "Fabricante: Johnson & Johnson",
                 "Período: 15 dias",
                 "Acuvue2_15D_200",
                 "Preço: R$170,00"];

function MostraProd (tipo)
{
    var jan = open ("",tabDestaq[tipo][0], "location=no, status=no," + "width = 290, height = 460");

    with (jan.document){
        write ("<!DOCTYPE html>");
        write ("<html> <head> <title> AD2 </title>");
        write ("<link rel='stylesheet' type='text/css' href='estilos.css'>");
        write ("<link href='https://fonts.googleapis.com/css?family=Stoke' rel='stylesheet'>");
        write ("<link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'>");
        write ("<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>");
        write ("</head><body><section>");
        write ("<div class='janInfoDetalhe'>");
        write ("<h2>", tabDestaq[tipo][0], "</h2>");

        write ("<p> <img src = 'Imagens2/",tabDestaq[tipo][3],".jpg'> </p>");
        write ("<p>", tabDestaq[tipo][1], "</p>");
        write ("<p>", tabDestaq[tipo][2], "</p>");
        write ("<p>", tabDestaq[tipo][4], "</p>");
        write ("<form class='janInfo'> ");
        write ("<input type = 'button' value = 'Fechar' onClick='window.close();'>");
        write ("</form > </div> </section>");
        write ("</body></html>");
        close();
    }
}

/*var Produtos = [["", "Vazio", "", 0],
                ["Oakley Wingfold", "M_Oakley_100", "Masculino", 855],
                ["Persol", "M_Persol_100", "Masculino", 1377],
                ["Ray-ban Round", "M_Ray-ban_100","Masculino", 666],
                ["Kipling", "F_Kipling_100", "Feminino", 423],
                ["Michael Kors", "F_MichaelKors_100","Feminino", 684]];*/

var Produtos = new Array(6);

Produtos [0]= ["", "Vazio", "", 0];

Produtos[1] = ["Oakley Wingfold", "M_Oakley_100", "Masculino", 855];

Produtos [2] = ["Persol", "M_Persol_100", "Masculino", 1377];

Produtos [3] = ["Ray-ban Round", "M_Ray-ban_100","Masculino", 666];

Produtos [4] = ["Kipling", "F_Kipling_100", "Feminino", 423];

Produtos [5] = ["Michael Kors", "F_MichaelKors_100","Feminino", 684];



function Mostra(id){

    var tit = document.getElementById("titDes");
    var foto = document.getElementById("imgDes");
    var prec = document.getElementById("prcDes");

    tit.innerHTML = "<h2>" + Produtos[id][0] + "</h2> <br>";
    foto.src = "Imagens2/" + Produtos[id][1] + ".jpg";
    prec.innerHTML = "<div class='prcDes'>"+ Produtos[id][2] + "<br> Preço: R$ <span class='preco'>" + Produtos[id][3] + ",00 </span>";

}

var tabPrcProd = [0, 100 , 180, 220, 170, 855, 1377, 666, 423, 684];

var valor;
var valorParcelado = document.getElementById("parcela");

function IncluirLista (sel)
{
    var prod = sel.selectedIndex;

    if(prod != 0)
    {
        var prc = tabPrcProd [prod];
        sel.selectedIndex = 0;
        with(sel.form){
            lista.value += sel.options[prod].text + '\n';
            var v = document.getElementById("valor");
            TxtTotal.value = prc + parseInt(TxtTotal.value)
            v.innerHTML = TxtTotal.value + ",00" ;

            valor = TxtTotal.value;

            //v.value = prc + parseInt(TxtTotal.value);
            //v.innerHTML = v.value
           
            var parcelas = document.getElementById("parcelas");
            var opcao = parcelas.options[parcelas.selectedIndex].text;

            var op = document.getElementById("opcao");
            op.innerHTML = opcao;

            //var valorParcelado = document.getElementById("parcela");

            if(TxtTotal.value !=0)
            {
                if(opcao != "à vista")
                {   
                    var op = document.getElementById("opcao");
                    op.innerHTML = opcao;
                    TxtPar.value = Math.round((parseInt(TxtTotal.value)/parseInt(opcao)));
                    valorParcelado.innerHTML = TxtPar.value + ",00";
                }

                else

                {
                    var op = document.getElementById("opcao");
                    op.innerHTML = "1x";
                    TxtPar.value = parseInt(TxtTotal.value);
                    valorParcelado.innerHTML = TxtPar.value + ",00";
                }
        
            }
    
        }
    }

    else
    {
        alert("Nenhum Produto Selecionado!")
    }
}

var parcelas = document.getElementById("parcelas");
parcelas.addEventListener('change',function(){
    var option = this.selectedOptions[0];
    var texto = option.textContent;

    console.log(texto);
    console.log(valor);

    TxtPar.value = Math.round((parseInt(valor)/parseInt(texto)));
    valorParcelado.innerHTML = TxtPar.value + ",00";

})

var btn = document.getElementById("Limpar");

btn.addEventListener("click",function(){
    location.reload();
});









              