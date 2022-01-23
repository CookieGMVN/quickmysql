exports.ping = async function(data) {
    if (!data.con) return;
    return new Promise((res, rej) => {
        const con = data.con
        const ts = Date.now()
        con.query("SELECT 1", function(err, result) {
            if (err) return rej(err)
            if (result) return res(`${Math.floor(Date.now() - ts)}ms`)
        })
    })
}