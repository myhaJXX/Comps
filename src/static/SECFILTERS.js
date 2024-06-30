const secFilters = [
    {
        title:'PC components', 
        filters:[
            {title: 'Category', links:['Motherboards','Video cards', 'Processors', 'Gaming devices', 'RAM', 'SSD', 'Cooling systems', 'Devices']},
            {title: 'Necessity', links:['For work', 'For gaming', 'For daily use']},
            {title: 'Year of issue', links:['<2020', '2020', '2021', '2022', '2023', '>2024']},
        ]
    },

    {
        title:'Monitors', 
        filters:[
            {title: 'Matrix update', links:['50hz', '60hz', '75hz', '120hz', '144hz']},
            {title: 'Resolution', links:['1280x1024', '1366x768', '1600x900', '1920x1080', '2560x1440', 'Another']},
            {title: 'Diagonal', links:['<15"', '15.6"', '18.5"', '19"', '20"', '22.5"', '23.8"', '>24"']},
        ]
    },

    {
        title:'Computers', 
        filters:[
            {title: 'Processor', links:['Intel Core i5-10400F', 'AMD Ryzen 5 3600', 'Intel Core i3-10100F', 'AMD Ryzen 5 8400F', 'AMD Ryzen 7 7700', 'Another']},
            {title: 'RAM', links:['8 GB', '16 GB', '32 GB', '>32 GB']},
            {title: 'Video card', links:['RTX 3060 12GB', 'RTX 4060 8GB', 'RTX 4060 TI 8GB', 'RTX 4070 12GB', 'RTX 4070 TI 12 GB', 'Another']},
            {title: 'HDD', links:['500 GB', '1000 GB', '2000GB', '6000 GB', '10000 GB']},
        ]
    },

    {
        title:'Laptops', 
        filters:[
            {title: 'RAM', links:['8 GB', '16 GB', '32 GB', '>32 GB']},
            {title: 'Video card', links:['RTX 3060 12GB', 'RTX 4060 8GB', 'RTX 4060 TI 8GB', 'RTX 4070 12GB', 'RTX 4070 TI 12 GB', 'Another']},
            {title: 'Diagonal', links:['<15"', '15.6"', '18.5"', '19"', '20"', '22.5"', '23.8"', '>24"']},
        ]
    },

    {
        title:'Game consoles', 
        filters:[
            {title: 'TV connection', links:['HDMI', 'AV', 'AV + HDMI']},
            {title: 'Gamepad', links:['Wireless', 'Wired']},
            {title: 'Release date', links:['<2018', '2018', '2019', '2020', '2021', '2022']},
        ]
    },

    {
        title:'Accessories for laptops', 
        filters:[
            {title: 'Item', links:['Laptop case', 'Laptop bag', 'Computer sticker', 'Notebook Stand']},
            {title: 'Suitable for', links:['Apple', 'ASUS', 'Dell', 'Acer']},
            {title: 'Material', links:['Metal', 'Plastic', 'Polyurethane', 'Polyester', 'Textile']},
        ]
    },

    {
        title:'Tablets', 
        filters:[
            {title: 'RAM', links:['1 GB', '2 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB']},
            {title: 'Resolution', links:['1024x600', '1340x800', '1920x1080', '1920x1200', '2160x1440', 'Another']},
            {title: 'Built-in speakers', links:['2', '4', '6', '8']},
        ]
    },

    {
        title:'Printers and MFDs', 
        filters:[
            {title: 'Date of release', links:['<2017', '2017', '2018', '>2018']},
            {title: 'Format', links:['A0', 'A1', 'A2', 'A3', 'A4', 'Another']},
            {title: 'Seal', links:['Black&White', 'Colorful']},
        ]
    },

    {
        title:'Acoustic speakers', 
        filters:[
            {title: 'Material', links:['Tree', 'Leather', 'Plastic', 'MDF']},
            {title: 'Color', links:['Red', 'White', 'Green', 'Gold', 'Another']},
            {title: 'Country', links:['Britain', 'China', 'Another']},
        ]
    },

    {
        title:'Network hardware', 
        filters:[
            {title: 'Brand', links:['Asus','D-Link', 'HPE', 'Keenetic', 'TP-LInk', 'Zyxel', 'Another']},
            {title: 'Color', links:['White', 'Black', 'Another']},
            {title: 'Number of antennas', links:['1', '2', '3', '4', '5', '>5']},
        ]
    },
]

export default secFilters