
module.exports = {
    sleep: async function (millis) {
        return new Promise(resolve => setTimeout(resolve, millis));
    }
}
