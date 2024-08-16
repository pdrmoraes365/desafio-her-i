let nomeHeroi = "Jackson"
let xp = "7000"
let nivelHeroi = "Ouro"

if(xp <= 1000){
    nivelHeroi = "Ferro"
    console.log ("O herói com nome de Jackson está com xp menos 1000 e Está no nível ferro")
}
else if(xp >= 1001 && xp <= 2000){
    nivelHeroi = "Bronze"
    console.log ("O herói com nome de Jackson está com xp entre 1001/2000 e Está no nível bronze")
    
}
else if(xp >= 2001 && xp <= 5000){
    nivelHeroi = "Prata"
    console.log ("O herói com nome de Jackson está com xp entre 2001/5000 e Está no nível prata")
}
else if(xp >= 5001 && xp <= 7000){
    nivelHeroi = "Ouro"
    console.log ("O herói com nome de Jackson está com xp entre 5001/7000 e Está no nível Ouro")
}

else {nivelHeroi = "Desconhecido"
    console.log ("Nenhum herói tem 7000 de xp")

}
