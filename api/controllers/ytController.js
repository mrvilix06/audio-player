const youtubedl = require('youtube-dl-exec');

module.exports.toMp3 = async function (req, res, next) {
  const id = req.params.id;
  const title = req.params.title;
  const url = 'https://www.youtube.com/watch?v=' + id;

  try {
    const options = {
      format: 'bestaudio/best',
      postprocessors: [{ key: 'FFmpegExtractAudio', preferredcodec: 'mp3', preferredquality: '192' }],
    };

    const result = await youtubedl(url, options);

    // Set response headers
    res.setHeader('Content-disposition', `attachment; filename=${title}.mp3`);
    res.setHeader('Content-type', 'audio/mpeg');

    // Send the mp3 file
    res.sendFile(result._filename, { root: './' }, (err) => {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', result._filename);
      }
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement du fichier audio:', error);
    next(error);
  }
};
