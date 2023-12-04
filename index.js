const prompt = require("prompt-sync")()

let attackOne = {
    nom: "1. Frappe rapide",
    dommage: -10,
    chances: "50%"
}

let attackTwo = {
    nom: "2. Soin Léger",
    dommage: -15,
    chances: "33%"
}

let attackThree = {
    nom: "3. Coup Puissant",
    dommage: -20,
    chances: "33%"
}

let attackFour = {
    nom: "4. Frappe Dévastatrice",
    dommage: -30,
    chances: "25%"
}


let firstChar = {
    name: "Guerrier du Feu",
    vitalpoints: 25,
    attacks: [attackOne, attackTwo, attackThree, attackFour]
}

let secondChar = {
    name: "Sombre Lutin",
    vitalpoints: 25,
    attacks: [attackOne, attackTwo, attackThree, attackFour]
}


intro()

async function intro() {
    separation()
    await sleep(2500)
    console.log("\n\nBienvenue dans ce Jeu de M**** !");
    await sleep(3000)
    console.log("\nIci, c'est moi qui domine et vous qui allez tenter de rivaliser. Oui, face à moi, la machine. \nPas de panique, tout est aléatoire, aucune entourloupe ! 👌");
    await sleep(5000)
    console.log("\nTout d'abord, il vous faut choisir un nom. Prenez votre temps pour y penser... \n");
    await sleep(3000)
    let name = prompt("Nom du personnage  ➤   ")
    console.log("\n");
    loading()
    await sleep(5000)
    name = firstChar.name
    console.log(`\nEn fait, peu m'importe vraiment...  (¬_¬)`);
    await sleep(2000)
    console.log(`\nAprès tout, le nom de votre personnage sera 🔥 le '${name}' 🔥, en hommage à sa grandeur flamboyante`);
    await sleep(4000)
    console.log(`\nVoici votre personnage : \n`);
    await sleep(2000)
    fireWarrior()
    await sleep(2000)
    console.log("\nC'est génial, hein ?  q(❂‿❂)p \n");
    await sleep(5000)
    separation()
    await sleep(2000)
    console.log("\n\nMaintenant, voici le deal :");
    await sleep(3000)
    console.log("\n- Vous aurez l'audace de me défier, votre propre ordinateur.  ᕙ(  •̀ ᗜ •́  )ᕗ");
    await sleep(3000)
    console.log("\nJe me présente...  (૭ ｡•̀ ᵕ •́｡ )૭ ");
    await sleep(4000)
    console.log("\n\n          'Mesdames et messieurs, préparez-vous à être éblouis par ma présence irrésistible,");
    await sleep(4000)
    console.log(`          le sombre et incroyablement talentueux maître de l'ombre, le seul et unique ${secondChar.name}! \n`);
    await sleep(4000)
    darkGoblin()
    await sleep(3000)
    console.log("Majestueux, n'est-ce pas ?  (˶ᵔ ᵕ ᵔ˶)");
    await sleep(6000)
    console.log(`\n\n- Puis, chaque personnage aura ${secondChar.vitalpoints} points de vie : ${lifePoints(secondChar.vitalpoints)} `);
    await sleep(3000)
    console.log("\n- Tous les deux, nous avons les mêmes attaques, chacune avec ses propres dommages et probabilités. \n");
    await sleep(4000)
    separation()
    await sleep(3000)
    console.log("\n\n       Préparez-vous à découvrir une variété incroyable d'attaques ! \n       Rapides, stratégiques, nos combattants déploient une gamme impressionnante de compétences offensives :");
    await sleep(5000)
    console.log("\n★ La première attaque s'appelle 'Frappe Rapide' et inflige un dommage de -10 points.");
    console.log("  On a une probabilité de 50% de toucher l'adversaire ;");
    await sleep(5000)
    console.log("\n★ La deuxième attaque s'appelle 'Soin Léger' et inflige un dommage de -15 points.");
    console.log("  On a une probabilité de 33% de toucher l'adversaire ;");
    await sleep(5000)
    console.log("\n★ La troisième attaque s'appelle 'Coup Puissant' et inflige un dommage de -20 points.");
    console.log("  On a une probabilité de 33% de toucher l'adversaire ;");
    await sleep(5000)
    console.log("\n★ La dernière attaque s'appelle 'Frappe Dévastatrice' et inflige un dommage de -30 points.");
    console.log("  On a une probabilité de 25% de toucher l'adversaire. \n");
    await sleep(5000)
    separation()
    await sleep(4000)
    console.log("\n\nÊtes-vous prêt à commencer et à perdre contre une machine ? \nOh, la défaite sera exquise sous mon règne, vous savez  (ﾉ´ з `)ﾉ");
    await sleep(4000)
    confirm()
    console.log("\n");
    await sleep(8000)
    console.log("\nEh bien, sans plus tarder, commençons cette dérouillée !  ৻(  •̀ ᗜ •́  ৻)");
    await sleep(3000)
    console.log("");
    gameBegin()
    await sleep(3000)
    loading()
    await sleep(5000)
    console.log("");
    attacks()
}

async function attacks() {
    while (firstChar.vitalpoints > 0 && secondChar.vitalpoints > 0) {
        let lifeOne = firstChar.vitalpoints
        let lifeTwo = secondChar.vitalpoints
        await sleep(2000)
        separation()
        await sleep(3500)
        console.log("\n\nC'est à toi de jouer, si tu en es capable !\n");
        await sleep(2500)
        console.log(firstChar.attacks);
        console.log("");
        await sleep(2500)
        let attackUser = parseInt(prompt("Choisissez votre attaque (1 - 4)   ➤   "))
        await sleep(2500)
        while (attackUser != 1 && attackUser != 2 && attackUser != 3 && attackUser != 4) {
            await sleep(1500)
            console.log("\n");
            attackUser = parseInt(prompt("En vrai ? (¬_¬')  Choisissez entre 1 et 4, s'il vous plaît ! Vite !   ➤   "))
        }
        console.log("\n");
        loadAttack()
        await sleep(4000)
        switch (attackUser) {
            case 1:
                let randomOne = randomize(1, 2)
                if (randomOne == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackOne.dommage + " points !");
                    let resultAttackOne = lifeTwo + attackOne.dommage
                    secondChar.vitalpoints = resultAttackOne
                    await sleep(2000)
                    console.log("\nTu le regretteras, crois-moi !  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(resultAttackOne));
                    console.log("PV Sombre Lutin (adversaire) : " + resultAttackOne + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nHaha ! Rien pour toi !  凸(｡•ˇ‸ˇ•｡)凸 \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeTwo));
                    console.log("PV Sombre Lutin (adversaire) : " + lifeTwo + "\n\n");
                }
                break;
            case 2:
                let randomTwo = randomize(1, 3)
                if (randomTwo == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackTwo.dommage + " points !");
                    let resultAttackTwo = lifeTwo + attackTwo.dommage
                    secondChar.vitalpoints = resultAttackTwo
                    await sleep(2000)
                    console.log("\nTu le regretteras, crois-moi !  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(resultAttackTwo));
                    console.log("PV Sombre Lutin (adversaire) : " + resultAttackTwo + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nHaha ! Rien pour toi !  凸(｡•ˇ‸ˇ•｡)凸 \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeTwo));
                    console.log("PV Sombre Lutin (adversaire) : " + lifeTwo + "\n\n");
                }
                break;
            case 3:
                let randomThree = randomize(1, 3)
                if (randomThree == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackThree.dommage + " points !");
                    let resultAttackThree = lifeTwo + attackThree.dommage
                    secondChar.vitalpoints = resultAttackThree
                    await sleep(2000)
                    console.log("\nTu le regretteras, crois-moi !  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(resultAttackThree));
                    console.log("PV Sombre Lutin (adversaire) : " + resultAttackThree + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nHaha ! Rien pour toi !  凸(｡•ˇ‸ˇ•｡)凸 \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeTwo));
                    console.log("PV Sombre Lutin (adversaire) : " + lifeTwo + "\n\n");
                }
                break;
            case 4:
                let randomFour = randomize(1, 4)
                if (randomFour == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackFour.dommage + " points !");
                    let resultAttackFour = lifeTwo + attackFour.dommage
                    secondChar.vitalpoints = resultAttackFour;
                    await sleep(2000)
                    console.log("\nTu le regretteras, crois-moi !  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(resultAttackFour));
                    console.log("PV Sombre Lutin (adversaire) : " + resultAttackFour + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nHaha ! Rien pour toi !  凸(｡•ˇ‸ˇ•｡)凸 \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeTwo));
                    console.log("PV Sombre Lutin (adversaire) : " + lifeTwo + "\n\n");
                }
                break;
        }
        await sleep(6000)
        separation()
        await sleep(2000)
        console.log("\n\n\nMaintenant, je vais te donner un peu de mon génie par-derrière !  (੭˃ᴗ˂)੭ \n");
        await sleep(3000)
        let randomComp = randomize(1, 4)
        attackChoice(randomComp)
        console.log("");
        await sleep(4000)
        loadAttack()
        await sleep(4000)
        switch (randomComp) {
            case 1:
                let randomOne = randomize(1, 2)
                if (randomOne == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackOne.dommage + " points !");
                    let resultAttackOnes = lifeOne + attackOne.dommage
                    firstChar.vitalpoints = resultAttackOnes
                    await sleep(2000)
                    console.log("\nOh là là ! Ça t'a fait mal, hein ? Prends ça !  (˵ •̀ ᴗ - ˵ ) ✧ \n");
                    await sleep(2000)
                    console.log(lifePoints(resultAttackOnes));
                    console.log("PV Guerrier du Feu (vous) : " + resultAttackOnes + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nMince alors ! J'ai échoué cette fois-ci, mais je vais réussir la prochaine  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeOne));
                    console.log("PV Guerrier du Feu (vous) : " + lifeOne + "\n\n");
                }
                break;
            case 2:
                let randomTwo = randomize(1, 3)
                if (randomTwo == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackTwo.dommage + " points !");
                    let resultAttackTwos = lifeOne + attackTwo.dommage
                    firstChar.vitalpoints = resultAttackTwos
                    await sleep(2000)
                    console.log("\nOh là là ! Ça t'a fait mal, hein ? Prends ça !  (˵ •̀ ᴗ - ˵ ) ✧ \n");
                    await sleep(2000)
                    console.log(lifePoints(resultAttackTwos));
                    console.log("PV Guerrier du Feu (vous) : " + resultAttackTwos + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nMince alors ! J'ai échoué cette fois-ci, mais je vais réussir la prochaine  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeOne));
                    console.log("PV Guerrier du Feu (vous) : " + lifeOne + "\n\n");
                }
                break;
            case 3:
                let randomThree = randomize(1, 3)
                if (randomThree == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackThree.dommage + " points !");
                    let resultAttackThrees = lifeOne + attackThree.dommage
                    firstChar.vitalpoints = resultAttackThrees
                    await sleep(2000)
                    console.log("\nOh là là ! Ça t'a fait mal, hein ? Prends ça !  (˵ •̀ ᴗ - ˵ ) ✧ \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(resultAttackThrees));
                    console.log("PV Guerrier du Feu (vous) : " + resultAttackThrees + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nMince alors ! J'ai échoué cette fois-ci, mais je vais réussir la prochaine  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePoints(lifeOne));
                    console.log("PV Guerrier du Feu (vous) : " + lifeOne + "\n\n");
                }
                break;
            case 4:
                let randomFour = randomize(1, 4)
                if (randomFour == 1) {
                    console.log("\n\n⋙  ⋙  ⋙   EXACT !  ⋘  ⋘  ⋘\n");
                    console.log(attackFour.dommage + " points !");
                    let resultAttackFours = lifeOne + attackFour.dommage
                    firstChar.vitalpoints = resultAttackFours;
                    await sleep(2000)
                    console.log("\nOh là là ! Ça t'a fait mal, hein ? Prends ça !  (˵ •̀ ᴗ - ˵ ) ✧ \n");
                    await sleep(2000)
                    console.log(lifePoints(resultAttackFours));
                    console.log("PV Guerrier du Feu (vous) : " + resultAttackFours + "\n\n");
                } else {
                    console.log("\n\n⋙  ⋙  ⋙   PAS DE CHANCE !   ⋘  ⋘  ⋘\n");
                    console.log("-0 points");
                    await sleep(2000)
                    console.log("\nMince alors ! J'ai échoué cette fois-ci, mais je vais réussir la prochaine  p(´⌒｀｡q) \n");
                    await sleep(2000)
                    console.log(lifePointsTwo(lifeOne));
                    console.log("PV Guerrier du Feu (vous) : " + lifeOne + "\n\n");
                }
                break;
        }
    }

    await sleep(3000)
    loading()
    await sleep(5000)
    final(firstChar.vitalpoints, secondChar.vitalpoints)
}


async function final(a, b) {
    let winner;
    if (b <= 0 && a > 0) {
        console.log("\n\n✬ ✬ ✬ ✬ ✬ ✬    C'EST FINI !!!  ｡°(°.◜ᯅ◝°)°｡    ✬ ✬ ✬ ✬ ✬ ✬\n");
        await sleep(2500)
        winner = firstChar.name
        console.log(winner + ", vous êtes le gagnant ! ");
        await sleep(2000)
        console.log("\nCette fois-ci, tu as remporté la victoire, mais lors de la prochaine rencontre, tu constateras ma supériorité indéniable  (ಡ᎔ಡ) ");
    }
    else if (a <= 0 && b > 0) {
        console.log("\n\n✬ ✬ ✬ ✬ ✬ ✬    C'EST FINI !!!  (๑>؂ •̀๑)    ✬ ✬ ✬ ✬ ✬ ✬\n");
        await sleep(2500)
        winner = firstChar.name
        console.log(winner + ", vous êtes le perdant ! ");
        await sleep(2500)
        console.log("\nTu vois ? Je t'avais bien dit que me battre serait impossible dans ce jeu.");
        await sleep(2000)
        console.log("\nPeut-être la prochaine fois te donnerai-je une avance, pour voir si tu peux atteindre mon niveau  ( ๑‾̀◡‾́)✨");
    } else if (a <= 0 && b <= 0) {
        console.log("\n\✬ ✬ ✬ ✬ ✬ ✬    C'EST FINI !!!  ( う-´)づ︻╦̵̵̿╤── \(˚☐˚”)/    ✬ ✬ ✬ ✬ ✬ ✬\n");
        await sleep(2500)
        winner = 0
        console.log("\nAh, il semble que tu n'es pas si mal que ça. Tout le monde ne parvient pas à me défier, tu sais.");
        await sleep(2000)
        console.log("\nPeut-être qu'un jour, tu deviendras un Maître Pokemon de la Boucle If !");
    }
    await sleep(4500)
    console.log("");
    loading()
    await sleep(5000)
    console.log("");
    finalGame()
    await sleep(2000)
    console.log("La bataille est terminée, mais vous voudriez une revanche ? \nPeut-être cette fois-ci, vous aurez un peu de chance... Ou peut-être pas. \nC'est à vous de décider si vous osez  ( ｰ̀εｰ́ )");
    await sleep(4000)
    confirm(attacks())
}

async function confirm() {
    console.log("");
    let confirm = prompt("Voulez-vous continuer ?  (￣ω￣)/    ➤  ")
    while (confirm != "oui" && confirm != "non") {
        await sleep(1500)
        console.log("");
        confirm = prompt("Améliorez votre réponse, faites-la étinceler. Mon éclat exige la perfection  ╮(︶▽︶)╭   ➤  ")
    }
    while (confirm === "non") {
        await sleep(1500)
        console.log("");
        confirm = prompt("Êtes-vous certain ? Questionner mes actions serait audacieux, n'est-ce pas ? (•ิ_•ิ)?   ➤  ");
        if (confirm === "oui") {
            await sleep(1500)
            console.log("\nOk. Adieu, mon cher admirateur! N'oubliez pas de célébrer ma grandeur, même en mon absence! Bye bye!");
            await sleep(2000)
            process.exit()
        }
        else if (confirm === "non") {
            await sleep(1500)
            console.log("\nAlors.... Retournons au début.");
            await sleep(1500)
            console.log("");
            confirm = prompt("Voulez-vous continuer ?   (￣ω￣)/   ➤   ");
        }
    }

    if (confirm === "oui") {
        await sleep(1000)
        console.log("\nD'accord, poursuivons donc ! Après tout, suivre mes traces est la meilleure voie à suivre ヾ(☆ ▽ ☆)	");
    }
    return confirm
}


function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


async function loading() {
    let text = "loading";
    process.stdout.write(text);

    for (let i = 0; i < 5; i++) {
        await sleep(500);
        process.stdout.write(".");
    }
    process.stdout.write("\n");
}

async function loadAttack() {
    for (let i = 0; i < 3; i++) {
        await sleep(600);
        process.stdout.write("👉 ");
    }
    let text = " 👌";
    await sleep(600)
    process.stdout.write(text);
}


async function separation() {
    for (let i = 0; i < 70; i++) {
        await sleep(15);
        process.stdout.write("_");
    }
}

function attackChoice(prompt) {
    if (prompt == 1) {
        console.log(`\nJe me suis décidé à t'assaillir avec : 'Frappe rapide'  (≖ᴗ≖ )`);
    } else if (prompt == 2) {
        console.log(`\nJe me suis décidé à t'assaillir avec : 'Soin Léger'  (≖ᴗ≖ )`);
    } else if (prompt == 3) {
        console.log(`\nJe me suis décidé à t'assaillir avec : 'Coup Puissant'  (≖ᴗ≖ )`);
    } else if (prompt == 4) {
        console.log(`\nJe me suis décidé à t'assaillir avec : 'Frappe Dévastatrice'  (≖ᴗ≖ )`);
    }
}




/* -------------------------------------------------JUSQU'ICI ------------------------------------------------*/






























function fireWarrior() {
    return console.log(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣶⣤⣶⣿⣿⣷⣶⣦⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⢀⣴⡿⢿⣿⣿⠿⠻⠿⢿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠟⠋⣴⣦⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠟⠛⠛⢿⡟⠛⠿⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣧⠀⠀⠀⠀⠀⣠⡖⠀⠀⢀⣸⡿⠁⠀⠘⠿⣿⣶⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢔⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡀⠀⠀⠀⢸⡇⠀⢀⣴⣿⣿⠃⠀⠀⠀⠀⢀⣼⣿⣿⣿⣉⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠪⣛⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡇⠀⠀⠀⠊⠀⣶⣿⣿⣿⣿⠀⠀⠀⠀⣴⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡝⢷⣄⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣴⣿⠟⠉⠉⢿⠀⠀⠀⣀⣼⣿⣿⣿⣿⣿⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⡙⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⠙⣷⣄⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣼⠟⠁⠀⠀⠀⠈⣧⢀⣾⣿⣿⣿⣿⣿⣿⣿⡀⢀⣾⣿⣿⣿⣿⠖⠀⠀⠉⠉⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡈⢿⣦⠀⠀⠀
    ⠀⠀⠀⢀⡾⠁⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠈⢿⣧⠀⠀
    ⠀⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣮⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠘⣿⣇⠀
    ⠀⠀⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢯⣛⣛⣥⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⢹⣿⡄
    ⠀⢰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣹⣿⣿⣿⣿⣿⡟⠁⠀⠀⠉⠂⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠸⣿⡇
    ⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣾⣿⠿⠿⠿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⣿⣿
    ⢸⡇⠀⠀⠀⢠⠞⠓⢄⠀⠀⢀⣴⣿⡟⢱⢆⠀⠀⢀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⣿⣿
    ⣸⡇⠀⢀⡴⠁⠀⠀⢀⣷⣿⣿⣿⣿⡀⠃⠈⠀⢀⢚⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⣿⣿
    ⣿⡇⢠⠎⠀⠀⠀⠀⠸⠏⠘⡿⠋⠟⠃⠀⠀⠐⠃⢸⣿⣿⣿⣿⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⢸⣿⡏
    ⣿⡇⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢠⠁⠀⠀⠀⠀⠈⡿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⢀⣿⣿⠃
    ⢹⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⠀⢇⢻⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠁⠀⢀⣾⣿⠏⠀
    ⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⠀⠘⡌⢿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⢠⣿⣿⣿⣿⡃⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠾⠋⠀⠀⣠⣿⣿⡟⠀⠀
    ⠀⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⡙⢿⣿⣿⣿⣿⣿⣿⣷⣤⣄⡀⠉⠙⠻⠿⣷⣤⣀⣀⣀⣤⣤⠶⠞⠋⠁⠀⠀⢀⣴⣿⣿⠏⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣶⣍⡛⠿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⡿⠃⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣷⣮⣝⠻⢿⣿⣿⡿⢿⡿⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣷⣦⣽⣿⣷⣤⣤⣦⣤⣤⣤⣤⣤⣤⣶⣾⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `);
}


function darkGoblin() {
    return console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣷⠀⠀⠀⠀⣸⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡞⣿⣷⣮⣻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣾⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡝⢿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⠸⣸⣻⣏⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣿⣿⡿⡀⠀⠀⠀⠀⠀⣾⡞⡝⣿⢿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠩⣾⣿⣶⢦⣤⣀⠸⠻⢭⣥⡻⣧⠀⡙⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣄⢠⣴⣾⣿⣿⣿⣏⣶⣾⡽⣿⣷⣟⣿⣿⣿⣻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⣀⣀⠀⠀⠀⠸⣿⡿⠘⠻⢿⣿⣿⠟⠛⠿⠿⠃⢍⣿⣿⢸⣿⣿⣿⡽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣰⣟⠛⠛⢿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣜⢿⣿⡿⡷⡿⣼⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⣿⠃⠀⠀⠀⠈⢿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣷⣯⣾⣿⡀⠀⠙⠻⢿⣶⣄⠀⠀⠀⠀⠀⠀⠀
⢸⣿⠀⠀⠀⠀⠀⠀⢻⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣧⡀⠀⠀⠀⠙⢿⣧⡀⠀⠀⠀⠀⠀
⢸⣿⡀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣬⣽⣿⣿⢟⣛⣳⠀⠀⠀⠀⠀⠹⣿⣆⠀⠀⠀⠀
⠀⣿⣇⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣷⢻⣾⣿⣿⣷⡽⣄⠀⠀⢀⣾⣿⣷⣄⠀⠀
⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣷⣄⡀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⢹⣦⠀⢸⣇⠀⠹⣏⢧⡀
⠀⠀⠹⣿⣷⡀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⢸⣿⡄⠈⠛⠀⣶⠟⠼⠇
⠀⠀⠀⠹⣿⣿⣷⣤⡀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⡿⣼⣿⣿⣿⣿⡿⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠙⣿⣿⣿⣿⣶⣄⠀⠀⠈⠻⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⡿⣱⣿⣿⣿⣿⢟⣼⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣧⡀⠀⠀⠈⠻⢿⣿⢸⣿⣿⣿⡿⢟⣫⣾⣿⣿⠿⣛⣵⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⡇⠀⠀⠀⠀⠀⢈⣾⣿⡟⠙⠚⠛⠛⠋⠉⠀⠘⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠁⠀⠀⠀⠀⢀⣾⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣯⢻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠋⠘⠻⣿⣿⣷⣶⣒⣒⢢⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⣏⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠿⠿⠟⠈⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⡿⠿⠿⠿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `);
}


function gameBegin() {
    return console.log(`
    
    ─────▄██▀▀▀▀▀▀▀▀▀▀▀▀▀██▄─────
    ────███───────────────███────
    ───███─────────────────███───
    ──███───▄▀▀▄─────▄▀▀▄───███──
    ─████─▄▀────▀▄─▄▀────▀▄─████─
    ─████──▄████─────████▄──█████
    █████─██▓▓▓██───██▓▓▓██─█████
    █████─██▓█▓██───██▓█▓██─█████
    █████─██▓▓▓█▀─▄─▀█▓▓▓██─█████
    ████▀──▀▀▀▀▀─▄█▄─▀▀▀▀▀──▀████
    ███─▄▀▀▀▄────███────▄▀▀▀▄─███
    ███──▄▀▄─█──█████──█─▄▀▄──███
    ███─█──█─█──█████──█─█──█─███
    ███─█─▀──█─▄█████▄─█──▀─█─███
    ███▄─▀▀▀▀──█─▀█▀─█──▀▀▀▀─▄███
    ████─────────────────────████
    ─███───▀█████████████▀───████   "On va jouer à un jeu"
    ─███───────█─────█───────████
    ─████─────█───────█─────█████
    ───███▄──█────█────█──▄█████─
    ─────▀█████▄▄███▄▄█████▀─────
    ──────────█▄─────▄█──────────
    ──────────▄█─────█▄──────────
    ───────▄████─────████▄───────
    ─────▄███████───███████▄─────
    ───▄█████████████████████▄───
    ─▄███▀───███████████───▀███▄─
    ███▀─────███████████─────▀███
    ▌▌▌▌▒▒───███████████───▒▒▐▐▐▐
    ─────▒▒──███████████──▒▒─────
    ──────▒▒─███████████─▒▒──────
    ───────▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒───────
    ─────────████░░█████─────────
    ────────█████░░██████────────
    ──────███████░░███████───────
    ─────█████──█░░█──█████──────
    ─────█████──████──█████──────
    ──────████──████──████───────
    ──────████──████──████───────
    ──────████───██───████───────
    ──────████───██───████───────
    ──────████──████──████───────
    ─██────██───████───██─────██─
    ─██───████──████──████────██─
    ─███████████████████████████─
    ─██─────────████──────────██─
    ─██─────────████──────────██─
    ────────────████─────────────
    ─────────────██──────────────
    
    `)
}

function finalGame() {
    return console.log(`
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠶⠚⠋⠉⠉⠉⠉⠉⠳⠤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⠋⠀⣀⣀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠈⠻⣷⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠞⠁⠀⠀⣴⠃⣼⠀⠀⣰⡇⢸⡇⠀⠀⠀⠀⠀⠀⠉⠛⠒⠒⠒⠒⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠚⠉⠀⡄⠀⠀⠀⢸⣿⣿⡿⠀⠀⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⡄⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢠⠏⠁⠀⠀⡰⠁⠀⣀⡀⢸⣿⣿⠇⠀⠀⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣄⠀⠀⠱⡀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⣀⡀⡀⠀⢾⣯⣭⠟⠉⢋⣀⣀⣀⡨⠍⠁⠀⠀⣶⣶⡄⠀⠀⠀⠀⠀⠲⠯⢭⣅⣈⡀⠀⠀⠱⡄⠀⠀⠀
        ⠀⠀⠀⠀⠀⢀⡾⠀⠀⠒⢺⢀⡇⠀⠀⠀⠀⠀⠀⠈⠻⢿⡿⠃⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠰⡄⠀⠀⠀⠀⠀⠀⠀⠱⡄⠀⠀
        ⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠈⡎⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⡄⠀⠀⠀⠀⠀⠀⠙⣆⠀
        ⠀⠀⢠⡞⠁⠀⢷⣄⠀⣴⣾⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠃⠙⢶⣤⡀⠀⠀⠀⠀⠘⠀
        ⠀⠀⣾⠃⠀⠀⣈⣻⣿⣿⠟⠁⠹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠏⠀⠀⠀⢹⡏⢦⠀⠀⠀⠀⠀
        ⠀⢠⡏⠀⠀⣰⣿⢠⣾⠟⠀⠀⠀⠘⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡴⠋⠀⠀⠀⠀⠈⠻⣿⡄⠀⠀⠀⠀
        ⠀⡼⠀⠀⢰⣿⠿⠛⠁⠀⠀⠀⠀⠀⠈⣿⠷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠖⠋⠉⠁⢸⡁⠀⠀⠀⠀⠀⠀⠀⣠⠃⠀⠀⠀⠀
        ⢠⡇⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠉⠛⠶⣦⣤⣀⣀⣶⣤⠞⠋⠁⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⣸⣿⢦⣤⡀⠀⠀
        ⢸⣴⠀⣤⢶⣿⠀⠀⠀⠀⠀⠀⠀⠀⢰⠿⡆⠀⠀⠀⠀⠀⠈⣽⡟⠛⣧⡀⠀⠸⡄⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠹⣧⣴⠟⢇⢀⣀
        ⠘⣯⣜⠁⠘⠿⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⣿⣄⠀⠀⠀⠀⣠⡿⠀⠀⠘⣷⡄⠀⠹⡆⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣾⠟
        ⠀⠹⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣟⣿⣧⡄⠀⢰⡿⠁⠀⠀⠀⠘⣷⣀⣠⢷⣽⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡛⠻⣿⣶⣿⠃⠀⠀⠀⠀⠀⠘⣿⣏⢀⣤⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣟⡶⣮⣽⡏⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡶⠟⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠿⠛⠛⠙⡄⠀⠀⠀⠀⠀⠀⣰⠿⣟⠉⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⢀⣵⠀⠀⠀⠀⠀⠀⢿⠀⢸⡀⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣏⠀⠀⢠⣼⠏⠀⠀⠀⠀⠀⠀⠈⢿⣄⠃⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⣾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣷⣶⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⡛⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣼⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣷⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `);
}

function lifePoints(currentLife) {
    let hearts = "";

    let fullHeart = Math.floor(currentLife / 10);
    let brokenHeart = currentLife % 10;

    for (let i = 1; i <= fullHeart; i++) {
        hearts += "❤️ ";
    }

    if (brokenHeart === 5) {
        hearts += "💔 ";
    }
    return hearts
}

function lifePointsTwo(currentLife) {
    let hearts = "";

    let fullHeart = Math.floor(currentLife / 10);
    let brokenHeart = currentLife % 10;

    for (let i = 1; i <= fullHeart; i++) {
        hearts += "💙 ";
    }

    if (brokenHeart === 5) {
        hearts += "🩵 ";
    }

    return hearts
}





