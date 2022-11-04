exports.isPass = (req, res, next) => {
    // IF FREEUSER IS NOT IN HEADER THE RETURN RESPOSCE
    req.headers.isfreeappuser ? next() : res.send("Header Not Present");
  };