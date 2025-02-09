// Initialize global variables
let selectedGender = localStorage.getItem('selectedGender');
let selectedStyles = JSON.parse(localStorage.getItem('selectedStyles')) || [];
let selectedOccasion = localStorage.getItem('selectedOccasion') || '';
let selectedItems = [];

// Sample clothing items data (omitted for brevity)
// Sample clothing items data (omitted for brevity)
const clothingItems = {
    male: {
        Casual: {
            Tops: [
                { src: 'clothes/male/casual/tee.jpg', name: 'T-Shirt' },
                { src: 'clothes/male/casual/tee2.jpg', name: 'Full Sleeves T shirt' },
                { src: 'clothes/male/casual/shirt.jpg', name: ' Checks Shirt' },
                { src: 'clothes/male/casual/shirt2.jpg', name: 'Half Shirt' },
            ],
            Pants: [
                { src: 'clothes/male/casual/pant.jpg', name: 'Blue Jeans' },
                { src: 'clothes/male/casual/pant2.png', name: 'Black Jeans' },
                { src: 'clothes/male/casual/short.png', name: 'Shorts' },
            ],
            Jackets: [
                { src: 'clothes/male/casual/denim jac.jpg', name: 'Denim Jacket' },
                { src: 'clothes/male/casual/denim jac2.jpg', name: 'Black Denim Jacket' },
            ],
            Footwear: [
                { src: 'clothes/male/casual/sneakr.jpg', name: 'Adidas Sneakers' },
                { src: 'clothes/male/casual/sneakr2.jpg', name: 'Nike Sneakers' },
            ],
            Accessories: [
                { src: 'clothes/male/casual/acc1.jpg', name: 'Cap' },
                { src: 'clothes/male/casual/acc2.jpg', name: 'Hat ' },
                { src: 'clothes/male/casual/acc3.jpg', name: ' Brownn Watch' },
                { src: 'clothes/male/casual/acc4.jpg', name: 'Black Watch' },

            ]
        },
        Formal: {
            Shirts : [
                { src: 'clothes/male/formal/shirt1.jpg', name: 'Light Blue Shirt  ' },
                { src: 'clothes/male/formal/shirt2.jpg', name: 'Black Shirt ' },
                { src: 'clothes/male/formal/shirt3.jpg', name: 'Navy Blue Shirt  ' },
                { src: 'clothes/male/formal/shirt4.jpg', name: 'Maroon Strip Shirt ' },
                { src: 'clothes/male/formal/shirt5.jpg', name: 'Light Green  Strip Shirt ' },
                { src: 'clothes/male/formal/shirt6.jpg', name: 'Dark Blue Strip Shirt  ' },
            ],
            Pants: [
                { src: 'clothes/male/formal/pant2.jpg', name: 'Black Trousers' },
                { src: 'clothes/male/formal/pant3.jpg', name: 'Cream Trousers' },
                { src: 'clothes/male/formal/pant4.jpg', name: 'Brown Trousers' },
                { src: 'clothes/male/formal/pant1.jpg', name: 'Grey Trousers' },

            ],
            Tie: [
                { src: 'clothes/male/formal/tie1.jpg', name: ' Basic Dark Blue Tie' },
                { src: 'clothes/male/formal/tie2.jpg', name: 'Grey Tie' },
                { src: 'clothes/male/formal/tie3.jpg', name: 'Blue Design Tie' },

            ],
            Belt: [
                { src: 'clothes/male/formal/belt1.jpg', name: 'Black Belt' },
                { src: 'clothes/male/formal/belt2.jpg', name: 'Brown Belt' },
            ],
            Watches : [
                { src: 'clothes/male/formal/watch1.jpg', name: 'Blue Watch' },
                { src: 'clothes/male/formal/watch2.jpg', name: 'Light Brown Watch' },
                { src: 'clothes/male/formal/watch3.jpg', name: 'Dark Leather Watch ' },

            ],
            Footwear: [
                { src: 'clothes/male/formal/shoes1.jpg', name: 'Brown Oxfords' },
                { src: 'clothes/male/formal/shoes3.jpg', name: 'Black Derby' },
                { src: 'clothes/male/formal/shoes4.jpg', name: 'Brown Loafers' },

            ]
            
        },
        BusinessCasual: {
            Tops: [
                { src: 'clothing/male/business-casual/button-down.jpg', name: 'Business Casual Button-Down' },
                { src: 'clothing/male/business-casual/sweater.jpg', name: 'Business Casual Sweater' }
            ],
            Pants: [
                { src: 'clothing/male/business-casual/chinos.jpg', name: 'Chinos' }
            ],
            Jackets: [
                { src: 'clothing/male/business-casual/blazer.jpg', name: 'Business Casual Blazer' }
            ],
            Footwear: [
                { src: 'clothing/male/business-casual/loafers.jpg', name: 'Loafers' }
            ],
            Accessories: [
                { src: 'clothing/male/business-casual/belt.jpg', name: 'Belt' }
            ]
        },
        Sporty: {
            Tee: [
            { src: 'clothes/male/sporty/tee1.jpg', name: 'Grey Tshirt' },
            { src: 'clothes/male/sporty/tee2.jpg', name: 'Green Tshirt' },
            { src: 'clothes/male/sporty/tee3.jpg', name: 'Light Blue Adidas Tee' },
            { src: 'clothes/male/sporty/tee4.jpg', name: 'Black Tank Top' },


            ],
            TrackPants : [
            { src: 'clothes/male/sporty/pant1.jpg', name: 'Black Adidas Track' },
            { src: 'clothes/male/sporty/pant2.jpg', name: 'Black Cargo Track' },
            { src: 'clothes/male/sporty/pant3.jpg', name: 'Blue Puma Track' },


            ],
            Shorts: [
            { src: 'clothes/male/sporty/short1.jpg', name: 'Adidas Short ' },
            { src: 'clothes/male/sporty/short2.jpg', name: 'Blue Puma Shorts ' },


            ],
            Footwear: [
            { src: 'clothes/male/sporty/foot1.jpg', name: 'Blue Sport Shoes' },
            { src: 'clothes/male/sporty/foot2.jpg', name: 'White Nike ' },
            { src: 'clothes/male/sporty/foot3.jpg', name: 'Adidas Sport shoes' },

        ],
            Cap : [
            { src: 'clothes/male/sporty/cap1.jpg', name: 'White Cap' },
            { src: 'clothes/male/sporty/cap2.jpg', name: 'Orange Cap' },
            { src: 'clothes/male/sporty/cap3.jpg', name: 'Black Cap' },

        ]
            
        },
        Preppy: {
            Polo: [
                { src: 'clothes/male/preppy/tee1.jpg', name: 'Polo Shirt' },
                { src: 'clothes/male/preppy/tee2.jpg', name: 'V-Neck Polo' },
                { src: 'clothes/male/preppy/tee3.jpg', name: 'Maroon Polo Tee' },
            ],

            Shirts: [
                { src: 'clothes/male/preppy/tee4.jpg', name: 'Light Green Strip Shirt' },
                { src: 'clothes/male/preppy/tee5.jpg', name: 'Light Pink Strip Shirt' },


            ],
            Pants: [
                { src: 'clothes/male/preppy/pant1.jpg', name: 'Grey Chinos' },
                { src: 'clothes/male/preppy/pant2.jpg', name: 'Brown Khakis ' },

            ],
            Sweater: [
                { src: 'clothes/male/preppy/jac1.jpg', name: 'V-Neck Sweater' },
                { src: 'clothes/male/preppy/jac2.jpg', name: 'Cardigan Sweater' },

            ],
            Footwear: [
                { src: 'clothes/male/preppy/shoes1.jpg', name: 'Black Loafers' },
                { src: 'clothes/male/preppy/shoes2.jpg', name: 'Suede Loafers' },

            ],
            Accessories: [
                { src: 'clothes/male/preppy/acc1.jpg', name: 'Brown Leather Belt' },
                { src: 'clothes/male/preppy/acc2.jpg', name: 'Black Leather Belt' },

            ]
        },
        Streetwear: {
            Tshirt: [
                { src: 'clothes/male/streetwear/tee1.jpg', name: 'Blue Graphic Tee' },
                { src: 'clothes/male/streetwear/tee2.jpg', name: 'Black Graphic Tee' },
                { src: 'clothes/male/streetwear/tee3.jpg', name: 'Pink Graphic Tee' },
                { src: 'clothes/male/streetwear/tee4.jpg', name: 'Grey Acid Wash Graphic Tee' },
                { src: 'clothes/male/streetwear/tee5.jpg', name: 'Light Graphic Tee' },
            ],
            Hoodies: [
            { src: 'clothes/male/streetwear/hood1.jpg', name: 'Pink Hoodie' },
            { src: 'clothes/male/streetwear/hood2.jpg', name: 'Grey Acid Wash Hoodie' },
            { src: 'clothes/male/streetwear/hood3.jpg', name: 'Tie Dye Hoodie '},
        ],

            Shirt: [
            { src: 'clothes/male/streetwear/shirt1.jpg', name: 'Red Flannel' },
            { src: 'clothes/male/streetwear/shirt2.jpg', name: 'Grey Flannel' },
            { src: 'clothes/male/streetwear/shirt3.jpg', name: 'Black Flannel' },
            ],
            Cargo: [
            { src: 'clothes/male/streetwear/cargo.jpg', name: 'Olive Cargo' },
            { src: 'clothes/male/streetwear/cargo2.jpg', name: 'Brown Cargo' },
            { src: 'clothes/male/streetwear/cargo3.jpg', name: 'Black Cargo' },
            ],
            Jorts: [
            { src: 'clothes/male/streetwear/jort1.jpg', name: 'Washed Jorts' },
            { src: 'clothes/male/streetwear/jort2.jpg', name: 'Grey Acid Wash Jorts' },
            { src: 'clothes/male/streetwear/jort3.jpg', name: 'Blue Denim Jorts' },

            ],
            
            Footwear: [
            { src: 'clothes/male/streetwear/shoes1.jpg', name: 'NB 960' },
            { src: 'clothes/male/streetwear/shoes2.jpg', name: 'NB 550' },
            { src: 'clothes/male/streetwear/shoes3.jpg', name: 'Adidas Samba' },
            { src: 'clothes/male/streetwear/shoes4.jpg', name: 'Adidas Gazelle ' },
            ],
            Cap: [
            { src: 'clothes/male/streetwear/cap1.jpg', name: 'NY Navy Blue Cap' },
            { src: 'clothes/male/streetwear/cap2.jpg', name: 'NY BaseBall Cap' },
            { src: 'clothes/male/streetwear/cap3.jpg', name: 'Two Socks Cap' },
            { src: 'clothes/male/streetwear/cap4.jpg', name: 'A Cap' },
            ],
            Accessories: [
            { src: 'clothes/male/streetwear/acc1.jpg', name: 'Star Chain' },
            { src: 'clothes/male/streetwear/acc2.jpg', name: 'Silver chain' },
            { src: 'clothes/male/streetwear/acc3.jpg', name: 'Smile Chain' },
            ]
        },
        Bohemian: {
            Shirts: [
                { src: 'clothes/male/bohemian/shirt1.jpg', name: 'Warli Shirt' },
                { src: 'clothes/male/bohemian/shirt3.jpg', name: 'DisTress Shirt' },
                { src: 'clothes/male/bohemian/shirt2.jpg', name: 'Print Shirt' },
            ],
            Pants: [
            { src: 'clothes/male/bohemian/pant1.jpg', name: 'Linen Cargo Pant' },
            { src: 'clothes/male/bohemian/pant2.jpg', name: 'Jogger Cargo Pant' },
            { src: 'clothes/male/bohemian/pant3.jpg', name: 'Printed Joggers Pant' },
            { src: 'clothes/male/bohemian/pant4.jpg', name: 'Brown Linen Joggers Pant' },
            ],
            Jackets: [
            { src: 'clothes/male/bohemian/jac1.jpg', name: 'Pink Design Shacket' },
            { src: 'clothes/male/bohemian/jac2.jpg', name: 'Brown Hand-Made Jacket' },
            { src: 'clothes/male/bohemian/jac3.jpg', name: 'Tie Dye Shacket' },
            ],
            Footwear: [
            { src: 'clothes/male/bohemian/shoes1.jpg', name: 'Front Foot' },
            { src: 'clothes/male/bohemian/shoes2.jpg', name: 'Joota' },
            { src: 'clothes/male/bohemian/shoes3.jpg', name: 'Black Sandal' },
            { src: 'clothes/male/bohemian/shoes4.jpg', name: 'Leather Chappal' },
            ],
            Accessories: [
            { src: 'clothes/male/bohemian/acc1.jpg', name: 'Hand-wear ' },
            { src: 'clothes/male/bohemian/acc2.jpg', name: 'Hand-wear' },
            { src: 'clothes/male/bohemian/acc3.jpg', name: 'Chain' },
            ]
        },
        Vintage: {
            Shirts: [
                { src: 'clothes/male/vintage/shirt1.jpg', name: 'Brown-White Shirt' },
                { src: 'clothes/male/vintage/shirt2.jpg', name: 'Blue-White Shirt' },
                { src: 'clothes/male/vintage/shirt3.jpg', name: 'Brown Shirt' },
                { src: 'clothes/male/vintage/shirt4.jpg', name: 'Half-Checks Shirt' },
            ],
            Pants: [
            { src: 'clothes/male/vintage/pant1.jpg', name: 'Cream Pant' },
            { src: 'clothes/male/vintage/pant2.jpg', name: 'Blue Denim Pant' },
            { src: 'clothes/male/vintage/pant3.jpg', name: 'Boot-Cut Pant' },
            ],
            Jackets: [
            { src: 'clothes/male/vintage/jac1.jpg', name: 'Brown Jacket' },
            { src: 'clothes/male/vintage/jac2.jpg', name: 'Dark-Blue Denim Jacket' },
            { src: 'clothes/male/vintage/jac3.jpg', name: 'Leather-Patch Jacket' },
            { src: 'clothes/male/vintage/jac4.jpg', name: 'Green Jacket' },
            ],
            Footwear: [
            { src: 'clothes/male/vintage/shoes1.jpg', name: 'Laces Loafer' },
            { src: 'clothes/male/vintage/shoes2.jpg', name: 'Brown Loafer' },
            { src: 'clothes/male/vintage/shoes3.jpg', name: 'Derby Loafer' },
            { src: 'clothes/male/vintage/shoes4.jpg', name: 'Min Loafer' },
            ],
            Belt: [
            { src: 'clothes/male/vintage/belt1.jpg', name: "'90's Brown Belt" },
            { src: 'clothes/male/vintage/belt2.jpg', name: "80's Brown Belt" },
            { src: 'clothes/male/vintage/belt3.jpg', name: 'High Buckle Belt' },
            ],
            Watches: [
            { src: 'clothes/male/vintage/watch1.jpg', name: 'Casio 960' },
            { src: 'clothes/male/vintage/watch2.jpg', name: 'Casio 852' },
            { src: 'clothes/male/vintage/watch3.jpg', name: 'Billy Batson lim-Ed' },
            { src: 'clothes/male/vintage/watch.jpg', name: 'Black Lim-Ed' },
            ],
            SunGlasses: [
            { src: 'clothes/male/vintage/sun1.jpg', name: 'Brown Glasses' },
            { src: 'clothes/male/vintage/sun2.jpg', name: 'Light Brown Glasses' },
            { src: 'clothes/male/vintage/sun3.jpg', name: 'Black Glasses' },
            ],
            Cap: [
            { src: 'clothes/male/vintage/cap1.jpg', name: 'Green Cap' },
            { src: 'clothes/male/vintage/cap2.jpg', name: 'Vtng 90 Cap' },
            ]
        },
        Classic: {
            Tops: [
                { src: 'clothing/male/classic/collared-shirt.jpg', name: 'Collared Shirt' },
                { src: 'clothing/male/classic/sweater.jpg', name: 'Classic Sweater' }
            ],
            Pants: [
                { src: 'clothing/male/classic/tailored-trousers.jpg', name: 'Tailored Trousers' },
                { src: 'clothing/male/classic/jeans.jpg', name: 'Classic Jeans' }
            ],
            Jackets: [
                { src: 'clothing/male/classic/blazer.jpg', name: 'Blazer' },
                { src: 'clothing/male/classic/trench-coat.jpg', name: 'Trench Coat' }
            ],
            Footwear: [
                { src: 'clothing/male/classic/loafers.jpg', name: 'Loafers' },
                { src: 'clothing/male/classic/pumps.jpg', name: 'Pumps' }
            ],
            Accessories: [
                { src: 'clothing/male/classic/leather-belt.jpg', name: 'Leather Belt' },
                { src: 'clothing/male/classic/tie.jpg', name: 'Tie' }
            ]
        },
        Rocker: {
            Tops: [
                { src: 'clothing/male/rocker/rock-band-tee.jpg', name: 'Rock Band Tee' },
                { src: 'clothing/male/rocker/leather-jacket.jpg', name: 'Leather Jacket' }
            ],
            Pants: [
                { src: 'clothing/male/rocker/ripped-jeans.jpg', name: 'Ripped Jeans' }
            ],
            Footwear: [
                { src: 'clothing/male/rocker/combat-boots.jpg', name: 'Combat Boots' }
            ],
            Accessories: [
                { src: 'clothing/male/rocker/spiked-bracelet.jpg', name: 'Spiked Bracelet' },
                { src: 'clothing/male/rocker/chain-necklace.jpg', name: 'Chain Necklace' }
            ]
        },
        Minimalist: {
            Tops: [
                { src: 'clothing/male/minimalist/plain-tee.jpg', name: 'Plain Tee' },
                { src: 'clothing/male/minimalist/simplistic-sweater.jpg', name: 'Simplistic Sweater' }
            ],
            Pants: [
                { src: 'clothing/male/minimalist/neutral-trousers.jpg', name: 'Neutral Trousers' }
            ],
            Footwear: [
                { src: 'clothing/male/minimalist/clean-sneakers.jpg', name: 'Clean Sneakers' }
            ],
            Accessories: [
                { src: 'clothing/male/minimalist/sleek-belt.jpg', name: 'Sleek Belt' }
            ]
        },
        Urban: {
            Tops: [
                { src: 'clothing/male/urban/hoodie.jpg', name: 'Hoodie' },
                { src: 'clothing/male/urban/urban-tee.jpg', name: 'Urban Tee' }
            ],
            Pants: [
                { src: 'clothing/male/urban/urban-jeans.jpg', name: 'Urban Jeans' }
            ],
            Jackets: [
                { src: 'clothing/male/urban/puffer-jacket.jpg', name: 'Puffer Jacket' }
            ],
            Footwear: [
                { src: 'clothing/male/urban/urban-sneakers.jpg', name: 'Urban Sneakers' }
            ],
            Accessories: [
                { src: 'clothing/male/urban/urban-cap.jpg', name: 'Urban Cap' }
            ]
        },
        Retro: {
            Tops: [
                { src: 'clothing/male/retro/retro-tee.jpg', name: 'Retro Tee' },
                { src: 'clothing/male/retro/retro-sweater.jpg', name: 'Retro Sweater' }
            ],
            Pants: [
                { src: 'clothing/male/retro/retro-jeans.jpg', name: 'Retro Jeans' }
            ],
            Footwear: [
                { src: 'clothing/male/retro/retro-sneakers.jpg', name: 'Retro Sneakers' }
            ],
            Accessories: [
                { src: 'clothing/male/retro/retro-watch.jpg', name: 'Retro Watch' }
            ]
        },
        FallSeason: {
            Tops: [
                { src: 'clothing/male/fall-season/knit-sweater.jpg', name: 'Knit Sweater' },
                { src: 'clothing/male/fall-season/flannel-shirt.jpg', name: 'Flannel Shirt' }
            ],
            Pants: [
                { src: 'clothing/male/fall-season/chinos.jpg', name: 'Chinos' }
            ],
            Jackets: [
                { src: 'clothing/male/fall-season/peacoat.jpg', name: 'Peacoat' }
            ],
            Footwear: [
                { src: 'clothing/male/fall-season/boots.jpg', name: 'Boots' }
            ]
        },
        Spring: {
            
            Shirts: [
                { src: 'clothes/male/spring/shirt1.jpg', name: 'Linen Flower Shirt' },
                { src: 'clothes/male/spring/shirt2.jpg', name: 'Brown Linen Shirt' },
                { src: 'clothes/male/spring/shirt3.jpg', name: 'Cream Shirt' },
                { src: 'clothes/male/spring/shirt4.jpg', name: 'Blue Linen Shirt' },
                { src: 'clothes/male/spring/shirt5.jpg', name: 'Dark Brown Shirt' },
            ],
            Vest: [
                { src: 'clothes/male/spring/vest1.jpg', name: 'White Vest' },
                { src: 'clothes/male/spring/vest2.jpg', name: 'Black Vest' },
                

            ],
            Pants: [
                { src: 'clothes/male/spring/pant1.jpg', name: 'Cream Linen Pant' },
                { src: 'clothes/male/spring/pant2.jpg', name: 'Brown Linen Pant' },
                { src: 'clothes/male/spring/pant3.jpg', name: 'Light Green Linen Pant' },
                { src: 'clothes/male/spring/pant4.jpg', name: 'Patch Work Linen Pant' },

            ],
            Footwear: [
                { src: 'clothes/male/spring/foot1.jpg', name: 'Joota' },
                { src: 'clothes/male/spring/foot2.jpg', name: 'Onisuka Tiger ' },
                { src: 'clothes/male/spring/foot3.jpg', name: 'Chappal ' },
                { src: 'clothes/male/spring/foot4.jpg', name: 'BirkenStocks' },

            ]
        },
        Traditional: {
            Kurta: [
                { src: 'clothes/male/traditional/kurta1.jpg', name: 'Light Blue Kurta' },
                { src: 'clothes/male/traditional/kurta2.jpg', name: 'White-Cream Kurta' },
                { src: 'clothes/male/traditional/kurta3.jpg', name: 'Pink Kurta' },
                { src: 'clothes/male/traditional/kurta4.jpg', name: 'Printed Kurta' },
            ],
            Dhoti : [
            { src: 'clothes/male/traditional/paj2.jpg', name: 'Red Dhoti' },
            { src: 'clothes/male/traditional/paj3.jpg', name: 'Cream Dhoti' },
            ],
            Pajama: [
            { src: 'clothes/male/traditional/paj1.jpg', name: 'White Pajama' },
            ],
            Dupatta : [
            { src: 'clothes/male/traditional/dup1.jpg', name: 'Black Dupatta' },
            { src: 'clothes/male/traditional/dup2.webp', name: 'Parrot - Green Dupatta' },
            { src: 'clothes/male/traditional/dup3.jpg', name: 'Chiknari - Dupatta' },

            ],
            Kolhapuri : [
            { src: 'clothes/male/traditional//chap1.jpg', name: 'Light Brown Kolhapuri' },
            { src: 'clothes/male/traditional/chap3.jpg', name: 'Dark Brown Kolhapuri' },
            { src: 'clothes/male/traditional/chap4.jpg', name: 'Green Kolhapuri' },
            ]
        },
        Beach: {
            Tops: [
                { src: 'clothes/male/beach/shirt1.jpg', name: 'White Linen Shirt' },
                { src: 'clothes/male/beach/shirt2.jpg', name: 'Floral Shirt' },
                { src: 'clothes/male/beach/shirt3.jpg', name: 'Full Cream Shirt' },

            ],
            Sleevless: [
            { src: 'clothes/male/beach/half1.jpg', name: 'Sleevless Denim Shirt' },
            { src: 'clothes/male/beach/half2.jpg', name: 'Tank Top' },
            ],
            Shorts: [
            { src: 'clothes/male/beach/short1.jpg', name: 'Swim Shorts' },
            { src: 'clothes/male/beach/short2.jpg', name: 'Black Shorts' },
            { src: 'clothes/male/beach/short3.jpg', name: 'Chinos Shorts' },
            { src: 'clothes/male/beach/short4.jpg', name: 'Navy Blue Shorts' },
            ],
            Footwear: [
            { src: 'clothes/male/beach/foot1.jpg', name: 'Black Chappal' },
            { src: 'clothes/male/beach/foot2.jpg', name: 'Leather Sandal' },
            { src: 'clothes/male/beach/foot3.jpg', name: 'Joota' },

            ],
            SunGlasses: [
            { src: 'clothes/male/beach/sun1.jpg', name: 'RayBan' },
            { src: 'clothes/male/beach/sun2.jpg', name: 'Gucci' },
            { src: 'clothes/male/beach/sun3.jpg', name: 'Burberry' },

            ],
            Hats: [
            { src: 'clothes/male/beach/hat1.jpg', name: 'Cream Hat' },
            { src: 'clothes/male/beach/hat2.jpg', name: 'Supported Hat' },
            ]
        }
    },

   
    female: {
        Casual: {
            Tops: [
                { src: 'clothes/female/casual/top1.jpg', name: 'White T-Shirt' },
                { src: 'clothes/female/casual/top2.jpg', name: 'Purple Strip Crop Top' },
                { src: 'clothes/female/casual/top3.jpg', name: 'MOD T-Shirt' },
                { src: 'clothes/female/casual/top4.jpg', name: 'White Strip Top' },
                { src: 'clothes/female/casual/top5.jpg', name: 'Basic Black Top' },
                { src: 'clothes/female/casual/top6.jpg', name: 'Tree Top' },
            ],
            Jeans: [
                { src: 'clothes/female/casual/jns1.jpg', name: 'Casual Jeans' },
                { src: 'clothes/female/casual/jns2.jpg', name: 'Casual Jeans' },
                { src: 'clothes/female/casual/jns3.jpg', name: 'Casual Jeans' },
                { src: 'clothes/female/casual/jns4.jpg', name: 'Casual Jeans' },
                { src: 'clothes/female/casual/jns5.jpg', name: 'Casual Jeans' },
                { src: 'clothes/female/casual/jns6.jpg', name: 'Casual Jeans' },
            ],
        
            Footwear: [
                { src: 'clothes/female/casual/foot1.jpg', name: 'Casual Sneakers' },
                { src: 'clothes/female/casual/foot2.jpg', name: 'Casual Sneakers' },
                { src: 'clothes/female/casual/foot3.jpg', name: 'Casual Sneakers' },
                { src: 'clothes/female/casual/foot4.jpg', name: 'Casual Sneakers' },

            ]
            
        },
        Formal: {
            Tops: [
                { src: 'clothing/female/formal/blouse.jpg', name: 'Formal Blouse' }
            ],
            Pants: [
                { src: 'clothing/female/formal/skirt.jpg', name: 'Formal Skirt' }
            ],
            Dresses: [
                { src: 'clothing/female/formal/dress.jpg', name: 'Formal Dress' }
            ],
            Footwear: [
                { src: 'clothing/female/formal/heels.jpg', name: 'Formal Heels' }
            ],
            Accessories: [
                { src: 'clothing/female/formal/clutch.jpg', name: 'Clutch' },
                { src: 'clothing/female/formal/jewelry.jpg', name: 'Jewelry' }
            ]
        },
        BusinessCasual: {
            Tops: [
                { src: 'clothing/female/business-casual/blouse.jpg', name: 'Business Casual Blouse' },
                { src: 'clothing/female/business-casual/sweater.jpg', name: 'Business Casual Sweater' }
            ],
            Pants: [
                { src: 'clothing/female/business-casual/trousers.jpg', name: 'Business Trousers' }
            ],
            Jackets: [
                { src: 'clothing/female/business-casual/blazer.jpg', name: 'Business Blazer' }
            ],
            Footwear: [
                { src: 'clothing/female/business-casual/loafers.jpg', name: 'Loafers' }
            ],
            Accessories: [
                { src: 'clothing/female/business-casual/belt.jpg', name: 'Belt' }
            ]
        },
        Sporty: {
            Tops: [
                { src: 'clothes/female/sporty/top1.jpg', name: 'Athletic Top' },
                { src: 'clothes/female/sporty/top2.jpg', name: 'Athletic Top' },
                { src: 'clothes/female/sporty/top3.png', name: 'Athletic Top' },
                { src: 'clothes/female/sporty/top4.jpg', name: 'Athletic Top' },


            ],
            Pants: [
                { src: 'clothes/female/sporty/pant1.jpg', name: 'Sporty Shorts' },
                { src: 'clothes/female/sporty/pant2.jpg', name: 'Sporty Shorts' },
                { src: 'clothes/female/sporty/pant3.jpg', name: 'Sporty Shorts' },
                { src: 'clothes/female/sporty/pant4.jpg', name: 'Sporty Shorts' },
                { src: 'clothes/female/sporty/pant5.jpg', name: 'Sporty Shorts' },

            ],
            Shorts: [
                { src: 'clothes/female/sporty/short1.jpg', name: 'Running Shoes' },
                { src: 'clothes/female/sporty/short2.jpg', name: 'Running Shoes' },
                { src: 'clothes/female/sporty/short3.jpg', name: 'Running Shoes' },
                { src: 'clothes/female/sporty/short4.jpg', name: 'Running Shoes' },

            ],
            Footwear: [
                { src: 'clothes/female/sporty/shoes1.jpg', name: 'Sporty Hat' },
                { src: 'clothes/female/sporty/shoes2.jpg', name: 'Sporty Hat' },
                { src: 'clothes/female/sporty/shoes3.jpg', name: 'Sporty Hat' },

                

            ],
            Cap: [
                { src: 'clothes/female/sporty/cap1.jpg', name: 'Sporty Hat' },
                { src: 'clothes/female/sporty/cap2.jpg', name: 'Sporty Hat' },
                { src: 'clothes/female/sporty/cap3.jpg', name: 'Sporty Hat' },


            ]
        },
        Chic: {
            Tops: [
                { src: 'clothing/female/chic/blouse.jpg', name: 'Chic Blouse' },
                { src: 'clothing/female/chic/sweater.jpg', name: 'Chic Sweater' }
            ],
            Pants: [
                { src: 'clothing/female/chic/culottes.jpg', name: 'Culottes' }
            ],
            Dresses: [
                { src: 'clothing/female/chic/dress.jpg', name: 'Chic Dress' }
            ],
            Footwear: [
                { src: 'clothing/female/chic/ankle-boots.jpg', name: 'Ankle Boots' }
            ],
            Accessories: [
                { src: 'clothing/female/chic/handbag.jpg', name: 'Handbag' }
            ]
        },
        Bohemian: {
            Tops: [
                { src: 'clothes/female/bohemian/top1.jpg', name: 'Boho Blouse' },
                { src: 'clothes/female/bohemian/top2.jpg', name: 'Boho Blouse' },
                { src: 'clothes/female/bohemian/top3.jpg', name: 'Boho Blouse' },
                { src: 'clothes/female/bohemian/top4.jpg', name: 'Boho Blouse' },
                { src: 'clothes/female/bohemian/top5.jpg', name: 'Boho Blouse' },


            ],
            Pants: [
            { src: 'clothes/female/bohemian/pant1.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/pant2.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/pant3.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/pant4.jpg', name: 'Boho Blouse' },

            ],
            Jackets: [
            { src: 'clothes/female/bohemian/jac1.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/jac2.jpg', name: 'Boho Blouse' },
           
            ],
            Dresses: [
            { src: 'clothes/female/bohemian/dress1.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/dress2.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/dress3.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/dress4.jpg', name: 'Boho Blouse' },

            ],
            Footwear: [
            { src: 'clothes/female/bohemian/foot1.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/foot2.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/foot3.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/foot4.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/foot5.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/foot6.jpg', name: 'Boho Blouse' },
            ],
            Accessories: [
            { src: 'clothes/female/bohemian/acc1.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/acc2.jpg', name: 'Boho Blouse' },
            { src: 'clothes/female/bohemian/acc3.jpg', name: 'Boho Blouse' },


            ]
        },
        Vintage: {
            Tops: [
                { src: 'clothes/female/vintage/top1.jpg', name: 'Vintage Blouse' },
                { src: 'clothes/female/vintage/top2.jpg', name: 'Vintage Blouse' },
                { src: 'clothes/female/vintage/top3.jpg', name: 'Vintage Blouse' },
                { src: 'clothes/female/vintage/top4.jpg', name: 'Vintage Blouse' },
                { src: 'clothes/female/vintage/top5.jpg', name: 'Vintage Blouse' },
            ],
            Pants: [
                { src: 'clothes/female/vintage/pant1.jpg', name: 'Vintage Jeans' },
                { src: 'clothes/female/vintage/pant2.jpg', name: 'Vintage Jeans' },
                { src: 'clothes/female/vintage/pant3.jpg', name: 'Vintage Jeans' },

            ],
            Dresses: [
                { src: 'clothes/female/vintage/dress1.jpg', name: 'Vintage Dress' },
                { src: 'clothes/female/vintage/dress2.jpg', name: 'Vintage Dress' },
                { src: 'clothes/female/vintage/dress3.jpg', name: 'Vintage Dress' },

            ],
            Footwear: [
                { src: 'clothes/female/vintage/foot1.jpg', name: 'Vintage Shoes' },
                { src: 'clothes/female/vintage/foot2.jpg', name: 'Vintage Shoes' },
                { src: 'clothes/female/vintage/foot3.jpg', name: 'Vintage Shoes' },
                { src: 'clothes/female/vintage/foot4.jpg', name: 'Vintage Shoes' },

            ],
            Bag: [
                { src: 'clothes/female/vintage/bg1.jpg', name: 'Vintage Shoes' },
                { src: 'clothes/female/vintage/bg2.jpg', name: 'Vintage Shoes' },
                { src: 'clothes/female/vintage/bg4.jpg', name: 'Vintage Shoes' },

            ]
        },
        Classic: {
            Tops: [
                { src: 'clothing/female/classic/blouse.jpg', name: 'Classic Blouse' },
                { src: 'clothing/female/classic/sweater.jpg', name: 'Classic Sweater' }
            ],
            Pants: [
                { src: 'clothing/female/classic/trousers.jpg', name: 'Classic Trousers' }
            ],
            Dresses: [
                { src: 'clothing/female/classic/dress.jpg', name: 'Classic Dress' }
            ],
            Footwear: [
                { src: 'clothing/female/classic/loafers.jpg', name: 'Loafers' }
            ]
        },
        Glamorous: {
            Tops: [
                { src: 'clothing/female/glamorous/sequined-top.jpg', name: 'Sequined Top' },
                { src: 'clothing/female/glamorous/silk-blouse.jpg', name: 'Silk Blouse' }
            ],
            Pants: [
                { src: 'clothing/female/glamorous/embellished-trousers.jpg', name: 'Embellished Trousers' }
            ],
            Dresses: [
                { src: 'clothing/female/glamorous/ball-gown.jpg', name: 'Ball Gown' }
            ],
            Footwear: [
                { src: 'clothing/female/glamorous/stilettos.jpg', name: 'Stilettos' }
            ],
            Accessories: [
                { src: 'clothing/female/glamorous/clutch.jpg', name: 'Clutch' },
                { src: 'clothing/female/glamorous/jewelry.jpg', name: 'Jewelry' }
            ]
        },
        Elegant: {
            Tops: [
                { src: 'clothing/female/elegant/peplum-top.jpg', name: 'Peplum Top' },
                { src: 'clothing/female/elegant/blouse.jpg', name: 'Elegant Blouse' }
            ],
            Pants: [
                { src: 'clothing/female/elegant/trousers.jpg', name: 'Elegant Trousers' }
            ],
            Dresses: [
                { src: 'clothing/female/elegant/elegant-dress.jpg', name: 'Elegant Dress' }
            ],
            Footwear: [
                { src: 'clothing/female/elegant/heels.jpg', name: 'Elegant Heels' }
            ]
        },
        Romantic: {
            Tops: [
                { src: 'clothing/female/romantic/lace-blouse.jpg', name: 'Lace Blouse' },
                { src: 'clothing/female/romantic/floral-top.jpg', name: 'Floral Top' }
            ],
            Pants: [
                { src: 'clothing/female/romantic/soft-trousers.jpg', name: 'Soft Trousers' }
            ],
            Dresses: [
                { src: 'clothing/female/romantic/romantic-dress.jpg', name: 'Romantic Dress' }
            ],
            Footwear: [
                { src: 'clothing/female/romantic/floral-flats.jpg', name: 'Floral Flats' }
            ]
        },
        Minimalist: {
            Dresses: [
                { src: 'clothes/female/minimalist/d1.jpg', name: 'Neutral Top' },
                { src: 'clothes/female/minimalist/d2.jpg', name: 'Neutral Top' },
                { src: 'clothes/female/minimalist/d3.jpg', name: 'Neutral Top' },
                { src: 'clothes/female/minimalist/d4.jpg', name: 'Neutral Top' },
                { src: 'clothes/female/minimalist/d5.jpg', name: 'Neutral Top' },
                { src: 'clothes/female/minimalist/d6.jpg', name: 'Neutral Top' },
            ],
            Fits: [
            { src: 'clothes/female/minimalist/c1.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/c2.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/c3.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/c4.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/c5.jpg', name: 'Neutral Top' },
            ],
            Footwear: [
            { src: 'clothes/female/minimalist/f1.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/f2.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/f3.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/f4.jpg', name: 'Neutral Top' },
            ],
            Bags: [
            { src: 'clothes/female/minimalist/b1.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/b2.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/b3.jpg', name: 'Neutral Top' },
            { src: 'clothes/female/minimalist/b4.jpg', name: 'Neutral Top' },
            ]
        },
        Streetwear: {
            Tshirt: [
                { src: 'clothes/female/streetwear/tee1.jpg', name: 'Graphic Tee' },
                { src: 'clothes/female/streetwear/tee2.jpg', name: 'Graphic Tee' },
                { src: 'clothes/female/streetwear/tee3.jpg', name: 'Graphic Tee' },
                { src: 'clothes/female/streetwear/tee4.jpg', name: 'Graphic Tee' },
                { src: 'clothes/female/streetwear/tee5.jpg', name: 'Graphic Tee' },
            ],
            Hoodies: [
            { src: 'clothes/female/streetwear/hood1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/hood2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/hood3.jpg', name: 'Graphic Teshirt '},
        ],

            Shirt: [
            { src: 'clothes/female/streetwear/shirt1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/shirt2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/shirt3.jpg', name: 'Graphic Tee' },
            ],
            Cargo: [
            { src: 'clothes/female/streetwear/cargo.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/cargo2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/cargo3.jpg', name: 'Graphic Tee' },
            ],
            Jorts: [
            { src: 'clothes/female/streetwear/jort1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/jort2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/jort3.jpg', name: 'Graphic Tee' },

            ],
            
            Footwear: [
            { src: 'clothes/female/streetwear/shoes1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/shoes2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/shoes3.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/shoes4.jpg', name: 'Graphic Tee' },
            ],
            Cap: [
            { src: 'clothes/female/streetwear/cap1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/cap2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/cap3.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/cap4.jpg', name: 'Graphic Tee' },
            ],
            Accessories: [
            { src: 'clothes/female/streetwear/acc1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/acc2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/acc3.jpg', name: 'Graphic Tee' },
            ],
            Bags: [
            { src: 'clothes/female/streetwear/bg1.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/bg2.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/bg3.jpg', name: 'Graphic Tee' },
            { src: 'clothes/female/streetwear/bg4.jpg', name: 'Graphic Tee' },

            ]
        },
        Preppy: {
            Shirts: [
                { src: 'clothes/female/preppy/s1.jpg', name: 'Collared Blouse' },
                { src: 'clothes/female/preppy/s2.jpg', name: 'Collared Blouse' },
            ],
            Tshirt: [
            { src: 'clothes/female/preppy/t1.jpg', name: 'Collared Blouse' },
            ],
            Sweater: [
            { src: 'clothes/female/preppy/sweat1.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/sweat2.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/sweat3.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/sweat4.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/sweat5.jpg', name: 'Collared Blouse' },
            ],
            Pants: [
            { src: 'clothes/female/preppy/p1.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/p2.jpg', name: 'Collared Blouse' },
            ],
            Skirts: [
            { src: 'clothes/female/preppy/skrt1.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/skrt2.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/skrt3.jpg', name: 'Collared Blouse' },

            ],
            Footwear: [
            { src: 'clothes/female/preppy/f1.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/f2.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/f3.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/f4.jpg', name: 'Collared Blouse' },
            ],
            Bags: [
            { src: 'clothes/female/preppy/b1.jpg', name: 'Collared Blouse' },
            { src: 'clothes/female/preppy/b2.jpg', name: 'Collared Blouse' },
            ]
        },
        Modern: {
            Tops: [
                { src: 'clothing/female/modern/crop-top.jpg', name: 'Crop Top' },
                { src: 'clothing/female/modern/modern-blouse.jpg', name: 'Modern Blouse' }
            ],
            Pants: [
                { src: 'clothing/female/modern/high-waist-trousers.jpg', name: 'High-Waist Trousers' }
            ],
            Footwear: [
                { src: 'clothing/female/modern/ankle-boots.jpg', name: 'Ankle Boots' }
            ],
            Accessories: [
                { src: 'clothing/female/modern/sunglasses.jpg', name: 'Sunglasses' }
            ]
        },
        Retro: {
            Sarees: [
                { src: 'clothes/female/retro/s1.jpg', name: 'Vintage Tee' },
                { src: 'clothes/female/retro/s2.jpg', name: 'Vintage Tee' },
                { src: 'clothes/female/retro/s3.jpg', name: 'Vintage Tee' },
                { src: 'clothes/female/retro/s4.jpg', name: 'Vintage Tee' },
            ],
            Dresses: [
            { src: 'clothes/female/retro/d1.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/d2.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/d3.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/d4.jpg', name: 'Vintage Tee' },
            ],
            Footwear: [
            { src: 'clothes/female/retro/f1.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/f2.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/f3.jpg', name: 'Vintage Tee' },
            ],
            Hats: [
            { src: 'clothes/female/retro/h1.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/h2.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/h3.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/h4.jpg', name: 'Vintage Tee' },
            { src: 'clothes/female/retro/h5.jpg', name: 'Vintage Tee' },
            ]
        }, 
        Traditional: {
            Dresses: [
                { src: 'clothes/female/traditional/dres1.jpg', name: 'Sari' },
                { src: 'clothes/female/traditional/dres2.jpg', name: 'Sari' },
                { src: 'clothes/female/traditional/dres3.jpg', name: 'Sari' },
                { src: 'clothes/female/traditional/dres4.jpg', name: 'Sari' },
                { src: 'clothes/female/traditional/dres5.jpg', name: 'Sari' },
            ],
            Sarees: [
                { src: 'clothes/female/traditional/sar1.jpg', name: 'Salwar' },
                { src: 'clothes/female/traditional/sar2.jpg', name: 'Salwar' },
                { src: 'clothes/female/traditional/sar3.jpg', name: 'Salwar' },
                { src: 'clothes/female/traditional/sar4.jpg', name: 'Salwar' },

            ],
            Footwear: [
            { src: 'clothes/female/traditional/f1.jpg', name: 'Salwar' },
            { src: 'clothes/female/traditional/f2.jpg', name: 'Salwar' },
            { src: 'clothes/female/traditional/f3.jpg', name: 'Salwar' },

            ]
        },
        Beach: {
            Dresses: [
                { src: 'clothes/female/beach/d1.jpg', name: 'Swimwear' },
                { src: 'clothes/female/beach/d2.jpg', name: 'Swimwear' },
                { src: 'clothes/female/beach/d3.jpg', name: 'Swimwear' },
                { src: 'clothes/female/beach/d4.jpg', name: 'Swimwear' },
                { src: 'clothes/female/beach/d5.jpg', name: 'Swimwear' },
            ],
            Footwear: [
            { src: 'clothes/female/beach/f1.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/f2.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/f3.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/f4.jpg', name: 'Swimwear' },
            ],
            Hats: [
            { src: 'clothes/female/beach/h1.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/h2.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/h3.jpg', name: 'Swimwear' },
            ],
            SunGlasses: [
            { src: 'clothes/female/beach/s1.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/s2.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/s3.jpg', name: 'Swimwear' },
            { src: 'clothes/female/beach/s4.jpg', name: 'Swimwear' },
            ]
        }
    }
};




function populateClothingItems() {
    const grid = document.getElementById('outfit-grid');
    grid.innerHTML = '';

    if (selectedGender && selectedStyles.length > 0) {
        selectedStyles.forEach(style => {
            if (clothingItems[selectedGender][style]) {
                const section = document.createElement('div');
                section.classList.add('style-section');
                const sectionTitle = document.createElement('h2');
                sectionTitle.textContent = style;
                section.appendChild(sectionTitle);

                Object.keys(clothingItems[selectedGender][style]).forEach(category => {
                    const categoryTitle = document.createElement('div');
                    categoryTitle.classList.add('section-title');
                    categoryTitle.textContent = category;
                    section.appendChild(categoryTitle);

                    const categoryItems = clothingItems[selectedGender][style][category];
                    categoryItems.forEach(item => {
                        const outfitItem = document.createElement('div');
                        outfitItem.classList.add('item');
                        outfitItem.dataset.name = item.name;
                        outfitItem.innerHTML = `
                            <img src="${item.src}" alt="${item.name}">
                            <p>${item.name}</p>
                        `;
                        outfitItem.addEventListener('click', () => {
                            toggleItemSelection(item.name, outfitItem);
                        });
                        section.appendChild(outfitItem);
                    });
                });

                grid.appendChild(section);
            }
        });
    } else {
        grid.innerHTML = '<p>Please go back and select your gender and style preferences.</p>';
    }

    // Display selected occasion
    document.getElementById('occasion-name').textContent = selectedOccasion || 'None';
}

function toggleItemSelection(name, element) {
    if (selectedItems.includes(name)) {
        selectedItems = selectedItems.filter(item => item !== name);
        element.classList.remove('selected');
    } else {
        selectedItems.push(name);
        element.classList.add('selected');
    }
}

function submitOutfit() {
    if (selectedItems.length > 0) {
        const submittedProfiles = JSON.parse(localStorage.getItem('submittedOutfits')) || [];
        submittedProfiles.push({
            occasion: selectedOccasion,
            outfit: selectedItems
        });
        localStorage.setItem('submittedOutfits', JSON.stringify(submittedProfiles));
        window.location.href = 'yo.html';
    } else {
        alert('Please select at least one item for your outfit.');
    }
}

function openSaveModal() {
    document.getElementById('save-modal').style.display = 'block';
}

function closeSaveModal() {
    document.getElementById('save-modal').style.display = 'none';
}

function saveForNext() {
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;

    if (date && name && gender) {
        const savedProfiles = JSON.parse(localStorage.getItem('savedOutfits')) || [];
        savedProfiles.push({
            date,
            name,
            gender,
            occasion: selectedOccasion,
            outfit: selectedItems
        });
        localStorage.setItem('savedOutfits', JSON.stringify(savedProfiles));
        alert('Profile saved successfully.');
        closeSaveModal();
        window.location.href = 'yo.html';
    } else {
        alert('Please fill in all fields.');
    }
}

function logout() {
    alert('Logged out!');
    window.location.href = 'main.html'; // Redirect to the login page
}

// Initialize page
populateClothingItems();