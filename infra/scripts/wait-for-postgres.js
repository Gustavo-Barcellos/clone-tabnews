const { exec } = require("node:child_process")

function checkPostgres() {
    exec('docker exec postgres-dev pg_isready', handleReturn)

    function handleReturn(error, stdout, stderr) {
        if (stdout.search("accepting connections") === -1){
            process.stdout.write(".")
            checkPostgres();
            exec('npm run services:up')
            return;
    }
    console.log("\n\n🟢 Postgres está aceitando conexões!");
    }
}

process.stdout.write("\n\n🟡 Aguardando postgres aceitar conexões.");

checkPostgres();