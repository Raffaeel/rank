let nameDoHeroi='rapbox'
let niveisDeRank=[[10,'ferro'],[20,'bronze'],[30,'prata'],[51,'ouro'],[90,'diamante'],[100,'lendario'],[101,'imortal']]
let vitoria=30;
let derrota=10;
  let somatoria=vitoria-derrota
  let contador= null      
  function calculandoResultado(niveisDeRank, somatoria) {
    for (let i = 0; i < niveisDeRank.length; i++) {
        if (somatoria >= niveisDeRank[i][0]) {
            contador = niveisDeRank[i][1];
            console.log(`O herói ${nameDoHeroi} está no nível ${contador}`);

        }
    }
  }