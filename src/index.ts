import readline from 'readline';

const stdinput = (prompt: string) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer: string) => {
            rl.close();
            resolve(answer);
        });
    })
}

export default stdinput;
