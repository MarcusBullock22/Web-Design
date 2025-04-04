const { response } = require('express');
const request = require('request');
const apiOptions =
{
    server: 'http://locahost:3000'
}



// internal method to render the travel list

const renderTravellist = (req, res, responseBody) =>
{
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if(!(responseBody instanceof Array))
    {
        message = 'API lookup error';
        responseBody = [];
    }
    else 
    {
        if (!responseBody.length)
        {
            message = 'No trips exist in our database!';
        }
    }

    res.render('travel',
    {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

/* GET travel view */
const travelList = (req, res) =>
{
    const path = '/api/trips';
    const requestOptions = 
    {
        url: '${apiOptions.server}${path}',
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
            requestOptions,
            (err, {statuscode }, body) =>
            {
                if (err) 
                {
                    console.error(err);
                }
                renderTravelList(req, res, body);
            }
    )
}

module.exports = 
    {
        travelList
    };