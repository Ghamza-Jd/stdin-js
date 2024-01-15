import readline from 'readline';

export const input = (prompt: string) => {
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
