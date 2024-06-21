'use strict';

const hof = require('hof');
const Notify = hof.components.notify;
const path = require('path');

const parse = (model, translate) => {
    console.log('=====================');
    console.log(model['images'][0].url)
    console.log('=====================');
    return {
        contactDetails: [
            {
                label: 'name',
                value: model['full-name']
            },
            {
                label: 'Email',
                value: model['email']
            },
            {
                label: 'Phone',
                value: model['contact-number']
            },
            {
                label: 'imageLink',
                value: model['images'][0]['url']
            }
        ]
    }
}

module.exports = config => {
    return Notify(Object.assign({}, config, {
        recipient: config.caseWorker,
        subject: (model, translate) => 'Getting access to your eVisa',
        template: path.resolve(__dirname, '../views/emails/agent.html'),
        parse
    }));
};