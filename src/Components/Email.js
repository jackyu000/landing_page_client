// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import axios from "axios";



// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 700,  // Increase the width
//   height: 400,  // Increase the height
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 6,  // Increase the padding
//   borderRadius: '30px',  // Adds curved corners
//   border: '4px solid orange',  // Adds an orange border

// };


// const Email = () => {
//   const [open, setOpen] = useState(false);
//   const [address, setEmail] = useState({
//     email: ""
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = async event => {
//     event.preventDefault();
//     try{
//       if (address.email.includes('@')) {
//         console.log('Email submitted:', address);
//         await axios.post("https://mailing-list-server-123b2b48a9d1.herokuapp.com/", address)
//         setOpen(true);
//       } else {
//         console.log('Invalid email');
//       }
//     }catch(err){

//     }
  
//   //make a POST Request 
    
//   };

//   return (
//     <div>
//       <Box
//         component="form"
//         noValidate
//         autoComplete="off"
//         className="email-form"
//         onSubmit={handleSubmit}
//       >
//         <div className="email-container">
//           <TextField
//             id="outlined-basic"
//             label="Email Address"
//             variant="outlined"
//             className="email-input"
//             value={address.email}
//             onChange={(e) => setEmail({["email"]: e.target.value})}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             className="waitlist-button"
//             disabled={!address.email.includes('@')} // Disable button if email does not contain '@'
//           >
//             Join our waitlist
//           </Button>
//         </div>
//       </Box>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={{ ...style, textAlign: 'center' }}>
//           <div id="modal-modal-title" className="modal-title">
//             Thank you for joining our waitlist!
//           </div>
//           <div id="modal-modal-description" className="modal-description">
//             We'll let you know when we launch.
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default Email;



import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { FaDiscord } from 'react-icons/fa6';

// Gmail login:
// Username: interns.fyi24@gmail.com
// Password: moneymoves

const Email = () => {
  const [open, setOpen] = useState(false);
  const [address, setEmail] = useState({
    email: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (address.email.includes('@')) {
        console.log('Email submitted:', address);
        await axios.post('https://mailing-list-server-123b2b48a9d1.herokuapp.com/', address);
        setOpen(true);
      } else {
        console.log('Invalid email');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="email-form"
        onSubmit={handleSubmit}
      >
        <div className="email-container">
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className="email-input"
            value={address.email}
            onChange={(e) => setEmail({ email: e.target.value })}
          />
          <Button
            type="submit"
            variant="contained"
            className="waitlist-button"
            disabled={!address.email.includes('@')} // Disable button if email does not contain '@'
          >
            Join our waitlist
          </Button>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content">
          <div id="modal-modal-title" className="modal-title">
            Thank you for joining our waitlist!
          </div>
          <div id="modal-modal-description" className="modal-description">
            We'll let you know when we launch.
          </div>
          <a
            href="https://discord.gg/duTNTruE9p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord
              size={50}
              style={{ color: 'white', marginLeft: '10px', marginBottom: '-50px' }}
            />
          </a>
        </Box>
      </Modal>
    </div>
  );
};

export default Email;
