import img from '../static/card2.png'
const items = [
    //pc smth
    {type: 'PC components', title: 'AMD Ryzen 7 7800X3D Processor', img:img, price: 240, discount: 10, count: 35, chars: 10, ID:'701233344', params:{Category:'Processors', Necessity:'For gaming', [`Year of issue`]:'2022'}},
    {type: 'PC components', title: 'Intel Xeon Gold 6238 processor', img:img, price: 420, discount: 0, count: 0, chars: 10, ID:'701234124',  params:{Category:'Processors', Necessity:'For work', [`Year of issue`]:'<2020',}},
    
    //monitors
    {type: 'Monitors', title: 'Monitor 23.8" Acer K240YB, Black (UM.QE0EE.B01)', img:img, price: 120, discount: 10, stars: 4, count: 35, chars: 10, ID:'7012344', params:{[`Matrix update`]:'60hz', Resolution:'1280x1024', Diagonal:'<15"'}},
    {type: 'Monitors', title: 'Gaming monitor LG UltraGear 27GR93U-B', img:img, price: 130, discount: 20, count: 35, chars: 10, ID:'701234232', params:{[`Matrix update`]:'75hz', Resolution:'2560x1440', Diagonal:'15.6"'}},

    //PC
    {type: 'Computers', title: 'Computer TGPC Action 5 86303 A-X', img:img, price: 2000, discount: 0, count: 3, chars: 10, ID:'710012344', params:{RAM:'8 GB', [`Video card`]:'Another', HDD:'1000 GB', Processor:'AMD Ryzen 5 8400F'}},
    {type: 'Computers', title: 'Computer Raskat Standart 700 Standart700108497', img:img, price: 4200, discount: 20, count: 1, chars: 10, ID:'8001234232', params:{RAM:'>32 GB', [`Video card`]:'RTX 4070 TI 12 GB', HDD:'10000 GB', Processor:'AMD Ryzen 7 7700'}},

]

items.map((e,i)=>e.id=i)

export default items