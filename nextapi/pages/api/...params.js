export default function handler(req, res) {
    const params = req.query.params //params- filename
    console.log(params); 
    res.status(200).json(params)  //send it back as json
}