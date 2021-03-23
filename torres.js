var resolução = "";

function iniciar_torre_de_hanoi() {
    var n_disco = document.getElementById("num_disco").value;
    resolução = "Solução: <br/>";

    resolver_torre_de_hanoi(n_disco, "A", "C", "B");
    document.getElementById("solucionar").innerHTML = resolução;
}

function resolver_torre_de_hanoi(discos, pinoA, pinoC, pinoB) {
    if (discos == 1) {
        // base case of 1 disk, we know how to solve that
        resolução += "Mova o disco 1 do pino " + pinoA + " para o pino " + pinoC + ".<br/>";

    } else {
        // first solve for all except the last disk
        resolver_torre_de_hanoi(discos - 1, pinoA, pinoB, pinoC);

        // now move the last disk
        resolução += "Mova o disco " + discos + " do pino " + pinoA + " para o pino " + pinoC + ".<br/>";

        // now solve for the remaining disks
        resolver_torre_de_hanoi(discos - 1, pinoB, pinoC, pinoA);
    }
}