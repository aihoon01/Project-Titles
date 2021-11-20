const whatsapp= ['hey there am using whatsapp', 'At the movies', 'Urgent calls only'];
const network = ['MTN everywhere you go', 'Vodafone the future is exciting', 'Glo the fastest the network'];
const phones = ['Samsung built for tech', 'Apple is premium', 'Infinix is low budget'];

const generateRandomMessage = message => {
    const randomMessage = Math.floor(Math.random() * message.length);
    return message[randomMessage];
}
console.log(`This is your whatsapp status: ${generateRandomMessage(whatsapp)} and this is you network status: ${generateRandomMessage(network)}, and this is your phone status: ${generateRandomMessage(phones)}.`);

