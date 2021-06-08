const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");

(async () => {
  const files = await imagemin(["./src/images/*.{jpeg,jpg,png}"], {
    destination: "./docs/images",
    plugins: [imageminJpegtran({ progressive: true }), imageminOptipng()],
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
