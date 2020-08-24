import { apiStatus } from '../../../lib/util';
import { Router } from 'express';
const Magento2Client = require('magento2-rest-client').Magento2Client

module.exports = ({ config, db }) => {

  let api = Router();

  api.post('/regions', (req, res) => {
    const client = Magento2Client(config.magento2.api);

    client.directory.countries().then((countryList) => {
      const reqBody = req.body;

      if (reqBody.country !== '') {
        let regions = countryList.find(country => {
          return country.id === reqBody.country && country.hasOwnProperty('available_regions') && country.available_regions.length > 0
        })
        if (regions) {
          apiStatus(res, regions.hasOwnProperty('available_regions') ? regions.available_regions : [], 200);
        } else {
          apiStatus(res, [], 200);
        }
      } else {
        apiStatus(res, 'Empty country code...', 500);
      }
    }).catch(err => {
      apiStatus(res, err, 500);
    })
  })

  return api
}
