const config = require('../../config');
const clearSession = require('./behaviours/clear-session');
const agentEmail = require('./behaviours/agent-email')(config.email);
// const userEmail = require('./behaviours/user-email');
const SaveImage = require('./behaviours/save-image');
const RemoveImage = require('./behaviours/remove-image');
const LimitDocument = require('./behaviours/limit-documents');

module.exports = {
  name: 'evisa',
  baseUrl: '/',
  steps: {
    '/start1': {
      next: '/start2',
    },
    '/start2': {
      next: '/invite',
    },
    '/invite': {
      fields: ['sent-email'],
      next: '/start',
      forks: [
          {
            target: '/no-invite',
            condition: {
              field: 'sent-email',
              value: 'no',
            }
          }
      ]
    },
    '/start': {
      next: '/technical'

    },
    '/no-invite': {
      backLink: false
    },
    '/technical': {
      fields: ['tech-problem'],
      next: '/contact-details',
    },
    '/contact-details': {
      behaviours: [agentEmail, 'complete', SaveImage('image'), RemoveImage, LimitDocument],
      fields: ['full-name', 'email', 'contact-number', 'ref-number', 'question', 'image', 'contacted'],
      next: '/confirmation',
    },
    '/confirmation': {
      behaviours: [],
      backLink: false
    },
  }
};
