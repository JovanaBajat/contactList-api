import express from 'express';
import Contact from '../model/modelContact';

const router = express.Router();

// contactList

router.get('/', (req, res) => {
  Contact.find({}, (err, contacts) => {
    if(err) res.send(err)
    res.send(contacts)
  });
});

// contactList/addContact

router.post('/addContact', (req, res) => {
  const contact = new Contact(req.body);

  contact.save((err) => {
    if(err) res.redirect('http://localhost:3000/')
    res.redirect('http://localhost:3000/')
  });
});

// contactList/:id/update

router.post('/:id/update', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, err => {
    if(err) res.send(err)
    res.redirect('http://localhost:3000/')
  });
});

// contactList/:id/delete

router.get('/:id/delete', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, err => {
    if(err) res.send(err)
    res.redirect('http://localhost:3000/')
  });
});

export default router;
