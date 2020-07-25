const rescode = {
    "00000": "Invalid response",
    "11111": "Unathorized access",
    "10101": "Failed to create web token",
    "10001": "Record added successfully",
    "10002": "Invalid POST data",
    "10003": "Record already exists",
    "10004": "Failed to save the record",
    "10005": "POST request fulfilled",
    "01001": "Record doesn't exists",
    "01002": "Bad GET request",
    "01003": "Failed to fulfill GET request",
    "01004": "GET request fulfilled successfully",
    "00101": "Record updated successfully",
    "00102": "Failed to update the record",
    "00103": "Bad PUT request",
    "22222": "CRON job failed",
    "33333": "Internal error"
};

module.exports = (isSuccess = false, code = 0000, resMsg = null, resData = null) => {
    return {
        isSuccess,
        code,
        resMsg: (resMsg ? resMsg : rescode[code]),
        resData
    }
}