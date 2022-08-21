export default function handler(req, res) {
    res.status(200).json({ name: 'Blog Api' })  //.status - is a function to set status code, .json - sends json response
  }