
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['6283830815715','0']
global.packname = 'Ｔａｓｙａ'
global.author = 'Tasyaa⸙'
global.sessionName = 'data'
global.prefa = ['','!','.','#']
global.ownername = 'Ｔａｓｙａ⸙'
global.sp = '<'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Data In Process, Please Wait A Minute.._',
}
global.thumb = fs.readFileSync('./lib/assets/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
