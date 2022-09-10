// fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic")
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data.colors[0].hex.value);
// 	});

// // {
// //     mode: 'analogic',
// //     count: 5,
// //     colors: [
// //       {
// //         hex: [Object],
// //         rgb: [Object],
// //         hsl: [Object],
// //         hsv: [Object],
// //         name: [Object],
// //         cmyk: [Object],
// //         XYZ: [Object],
// //         image: [Object],
// //         contrast: [Object],
// //         _links: [Object],
// //         _embedded: {}
// //       },
// //       {
// //         hex: [Object],
// //         rgb: [Object],
// //         hsl: [Object],
// //         hsv: [Object],
// //         name: [Object],
// //         cmyk: [Object],
// //         XYZ: [Object],
// //         image: [Object],
// //         contrast: [Object],
// //         _links: [Object],
// //         _embedded: {}
// //       },
// //       {
// //         hex: [Object],
// //         rgb: [Object],
// //         hsl: [Object],
// //         hsv: [Object],
// //         name: [Object],
// //         cmyk: [Object],
// //         XYZ: [Object],
// //         image: [Object],
// //         contrast: [Object],
// //         _links: [Object],
// //         _embedded: {}
// //       },
// //       {
// //         hex: [Object],
// //         rgb: [Object],
// //         hsl: [Object],
// //         hsv: [Object],
// //         name: [Object],
// //         cmyk: [Object],
// //         XYZ: [Object],
// //         image: [Object],
// //         contrast: [Object],
// //         _links: [Object],
// //         _embedded: {}
// //       },
// //       {
// //         hex: [Object],
// //         rgb: [Object],
// //         hsl: [Object],
// //         hsv: [Object],
// //         name: [Object],
// //         cmyk: [Object],
// //         XYZ: [Object],
// //         image: [Object],
// //         contrast: [Object],
// //         _links: [Object],
// //         _embedded: {}
// //       }
// //     ],
// //     seed: {
// //       hex: { value: '#0047AB', clean: '0047AB' },
// //       rgb: {
// //         fraction: [Object],
// //         r: 0,
// //         g: 71,
// //         b: 171,
// //         value: 'rgb(0, 71, 171)'
// //       },
// //       hsl: {
// //         fraction: [Object],
// //         h: 215,
// //         s: 100,
// //         l: 34,
// //         value: 'hsl(215, 100%, 34%)'
// //       },
// //       hsv: {
// //         fraction: [Object],
// //         value: 'hsv(215, 100%, 67%)',
// //         h: 215,
// //         s: 100,
// //         v: 67
// //       },
// //       name: {
// //         value: 'Cobalt',
// //         closest_named_hex: '#0047AB',
// //         exact_match_name: true,
// //         distance: 0
// //       },
// //       cmyk: {
// //         fraction: [Object],
// //         value: 'cmyk(100, 58, 0, 33)',
// //         c: 100,
// //         m: 58,
// //         y: 0,
// //         k: 33
// //       },
// //       XYZ: {
// //         fraction: [Object],
// //         value: 'XYZ(22, 25, 67)',
// //         X: 22,
// //         Y: 25,
// //         Z: 67
// //       },
// //       image: {
// //         bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=0047AB',
// //         named: 'https://www.thecolorapi.com/id?format=svg&hex=0047AB'
// //       },
// //       contrast: { value: '#ffffff' },
// //       _links: { self: [Object] },
// //       _embedded: {}
// //     },
// //     image: {
// //       bare: 'https://www.thecolorapi.com/scheme?format=svg&named=false&hex=0047AB&mode=analogic&count=5',
// //       named: 'https://www.thecolorapi.com/scheme?format=svg&hex=0047AB&mode=analogic&count=5'
// //     },
// //     _links: {
// //       self: '/scheme?hex=0047AB&mode=analogic&count=5',
// //       schemes: {
// //         monochrome: '/scheme?hex=0047AB&mode=monochrome&count=5',
// //         'monochrome-dark': '/scheme?hex=0047AB&mode=monochrome-dark&count=5',
// //         'monochrome-light': '/scheme?hex=0047AB&mode=monochrome-light&count=5',
// //         analogic: '/scheme?hex=0047AB&mode=analogic&count=5',
// //         complement: '/scheme?hex=0047AB&mode=complement&count=5',
// //         'analogic-complement': '/scheme?hex=0047AB&mode=analogic-complement&count=5',
// //         triad: '/scheme?hex=0047AB&mode=triad&count=5',
// //         quad: '/scheme?hex=0047AB&mode=quad&count=5'
// //       }
// //     },
// //     _embedded: {}
// //   }

const modeSelector = document.getElementById("modeSelector");
document.getElementById("testh1").textContent = "hello";
