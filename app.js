const mm = require('music-metadata');
const util = require('util');
const fs = require('fs');





// const musicPath = './Amir Tataloo - Behesht.mp3'



// (async () => {
//   try {
//     const metadata = await mm.parseFile(musicPath);
//     console.log(util.inspect(metadata, { showHidden: true, depth: null }));
//   } catch (error) {
//     console.error(error.message);
//   }
// })();


const path = require('path');



const Coverage = async () => {
  const {common} = await mm.parseFile("./Baktash - Aramesh Lazemam (320).mp3");
  const cover = mm.selectCover(common.picture); // pick the cover image
  console.log(cover);
  





function bufferToImage(buffer, filename) {
 return new Promise((resolve, reject) => {
    fs.writeFile(filename, buffer, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(filename);
    });
 });
}

const imageData = {
 format: 'image/jpeg',
 type: 'Cover (front)',
 description: '',
 data: Buffer.from(cover.data),

};

(async () => {
 const filename = path.join(__dirname, 'cover.jpg');
 await bufferToImage(imageData.data, filename);
 console.log('Image saved successfully at', filename);
})();




}



Coverage()
























// (async () => {
//   try {
//     const metadata = await mm.parseFile('./Amir Tataloo - Behesht.mp3');
//     console.log(util.inspect(metadata, { showHidden: true, depth: null }));
//   } catch (error) {
//     console.error(error.message);
//   }
// })();








// mm.parseStream(someReadStream, {mimeType: 'audio/mpeg', size: 26838}, {duration: true})
//   .then( function (metadata) {
//      console.log(util.inspect(metadata, {showHidden: false, depth: null}));
//      someReadStream.close();
//    });







// (async () => {


//     const {common} = await mm.parseFile("./Amir Tataloo - Behesht.mp3");

//     const cover = mm.selectCover(common.picture); // pick the cover image

//     console.log(cover.data);



//     // let binary = Buffer.from(cover.data);  
//     // let binary = Buffer.from(cover.data, 'binary')

//     let imgData = new Blob(cover.data, { type: 'image/jpeg' });

//     // let imgData = new Blob(binary.buffer, { type: 'application/octet-binary' });

//     let link = URL.createObjectURL(imgData);




// const Jimp = require("jimp");
// const fs = require("fs");
// // Base64 string



// // const buffer = Buffer.from(link, "base64");
// Jimp.read(link, (err, res) => {

//   if (err) throw new Error(err);
//   res.quality(5).write("resized.jpg");
  
// });
//     // let img = new Image();
//     // img.onload = () => URL.revokeObjectURL(link);
//     // img.src = link;

//     console.log(link);


//   }
//   )();

  
  
