const divida = ( dividendo, divisor ) => dividendo / divisor
const delta = ( inicial, final, unidade ) => final - inicial

const distancia = { inicial: 0, 
                    final: 100, 
                    unidade: 'km'
                  }

const tempo = { inicial: 0, 
                final: 1, 
                unidade: 'h'
              }

// const aceleracao = ( velocidade, tempo ) => divida( velocidade, tempo )
const aceleracao = ( distancia, tempo ) => 
  divida(  
    divida( delta( distancia.inicial, distancia.final ), 
            delta( tempo.inicial, tempo.final ) ), 
    delta( tempo.inicial, tempo.final ) ) + 
    `${distancia.unidade}/${tempo.unidade}^2`

console.log('aceleracao', aceleracao( distancia, tempo ))