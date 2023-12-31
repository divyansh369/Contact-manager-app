const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");


//@desc get all contacts
//@route GET /api/contacts
// @access public


const getContacts = asyncHandler(async(req, res) => {
  const contacts=await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contacts
//@route GET /api/contacts
// @access public

const CreateContact = asyncHandler(async(req, res) => {
  console.log("the request body is:", req.body);
  const {name,email,phone}=req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new error("all field are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

//@desc get contacts
//@route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async(req, res) => {
  const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(400);
    throw new error("contact not found");
  }
  res.status(200).json(contact);
});

//@desc update contacts
//@route GET /api/contacts/:id
// @access public

const updateContact =asyncHandler (async(req, res) => {
  const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(400);
    throw new error("contact not found");
  }
  const updatedContact=await Contact.findByIdAndUpdate(
    req.params.id,  
    req.body,
    {new:true}
  );

  res.status(200).json(updatedContact);
});
//@desc update contacts
//@route GET /api/contacts/:id
// @access public

const deleteContact = asyncHandler(async(req, res) => {
  const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(400);
    throw new error("contact not found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  CreateContact,
  getContact,
  updateContact,
  deleteContact,
};
