const errorHandler = async (err, req, res, next) => {
    console.error(err)

    return res.status(err.status).json({
        success:true,
        message:err.message
    })

}

module.exports = errorHandler