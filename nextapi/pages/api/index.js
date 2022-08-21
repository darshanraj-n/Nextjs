// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'Home Api' })  //.status - is a function to set status code, .json - sends json response
}
