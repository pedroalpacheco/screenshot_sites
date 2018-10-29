const phantom = require('phantom');

function mudasite(osite){
    buscapalavra = osite.includes('https://')
    if(buscapalavra===true){
        var novonome = osite.replace('https://','')
        var novonomedois = novonome.replace(/\./g,'_')
        var novonometres = novonomedois.replace(/\//g,'')
    }else{
        var novonome = osite.replace('http://','')
        var novonomedois = novonome.replace(/\./g,'_')
        var novonometres = novonomedois.replace(/\//g,'')
    }
    //console.log(novonometres)
    return novonometres
}

const takeScreenshot = async(url) =>{
    const instance = await phantom.create()
    const page = await instance.createPage()

    const status = await page.open(url)
    console.log(status)

    var nomedosite = mudasite(url)
    await page.render(`${nomedosite}.png`)
    await instance.exit()
}

const sites = ['https://cotacoes-pedroalpacheco.herokuapp.com/','http://www.adeusbrasil.com.br/']

//Nova forma de fazer um "FOR"
sites.forEach(function(st){
    takeScreenshot(`${st}`)
})

//takeScreenshot('https://www.furb.br')
//mudasite('https://g1.globo.com/')