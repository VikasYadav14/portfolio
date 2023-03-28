// import { useState } from 'react';
// import Image from 'next/image';
// import botImage from '../public/chatBot.png';
// import AboutImg from '../public/assets/about.jpg';
// import { AiOutlineClose } from 'react-icons/ai';
// import { FaTelegramPlane } from 'react-icons/fa';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//     const [showOptions, setShowOptions] = useState(false);
//   const [showProjectOptions, setShowProjectOptions] = useState(false);

//   const options = [
//     'About me',
//     'My skills',
//     'Resume',
//     'My projects',
//     'Contact us',
//   ];

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     switch (option) {
//       case 'about me':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is some information about me...',
//             user: 'bot',
//           },
//         ]);
//         break;
//       case 'my skills':
//         setMessages([
//           ...messages,
//           {
//             text: 'These are my skills...',
//             user: 'bot',
//           },
//         ]);
//         break;
//       case 'resume':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is my resume...',
//             user: 'bot',
//           },
//         ]);
//         break;
//       case 'my projects':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here are my projects...',
//             user: 'bot',
//           },
//           {
//             text: 'Please select a project you would like to know more about:',
//             user: 'bot',
//           },
//           {
//             text: '1. Project 1',
//             user: 'bot',
//           },
//           {
//             text: '2. Project 2',
//             user: 'bot',
//           },
//           {
//             text: '3. Project 3',
//             user: 'bot',
//           },
//           {
//             text: '4. Project 4',
//             user: 'bot',
//           },
//         ]);
//         break;
//       case 'contact us':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is how you can contact me...',
//             user: 'bot',
//           },
//         ]);
//         break;
//       default:
//         setMessages([
//           ...messages,
//           {
//             text: "I'm sorry, I didn't understand that.",
//             user: 'bot',
//           },
//         ]);
//         break;
//     }
//   };

//   const handleProjectSelect = (project) => {
//     switch (project) {
//       case 'project 1':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is a short description of Project 1...',
//             user: 'bot',
//           },
//           {
//             text: 'Would you like to know more about this project?',
//             user: 'bot',
//             options: ['Yes', 'No'],
//           },
//         ]);
//         break;
//       case 'project 2':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is a short description of Project 2...',
//             user: 'bot',
//           },
//           {
//             text: 'Would you like to know more about this project?',
//             user: 'bot',
//             options: ['Yes', 'No'],
//           },
//         ]);
//         break;
//       case 'project 3':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is a short description of Project 3...',
//             user: 'bot',
//           },
//           {
//             text: 'Would you like to know more about this project?',
//             user: 'bot',
//             options: ['Yes', 'No'],
//           },
//         ]);
//         break;
//       case 'project 4':
//         setMessages([
//           ...messages,
//           {
//             text: 'Here is a short description of Project 4...',
//             user: 'bot',
//           },
//           {
//             text: 'Would you like to know more about this project?',
//             user: 'bot',
//             options: ['Yes', 'No'],
//           },
//         ]);
//         break;
//       default:
//         setMessages([
//           ...messages,
//           {
//             text: "I'm sorry, I didn't understand that.",
//             user: 'bot',
//           },
//         ]);
//         break;
//     }
//   };

//   // const handleProjectSelect = (project) => {
//   //   if (project === 'Project 1') {
//   //     setMessages([
//   //       ...messages,
//   //       { text: 'Project 1: Short description', user: 'bot' },
//   //       { text: 'Learn more', user: 'bot', link: 'https://project1.com' },
//   //     ]);
//   //   } else if (project === 'Project 2') {
//   //     setMessages([
//   //       ...messages,
//   //       { text: 'Project 2: Short description', user: 'bot' },
//   //       { text: 'Learn more', user: 'bot', link: 'https://project2.com' },
//   //     ]);
//   //   } else if (project === 'Project 3') {
//   //     setMessages([
//   //       ...messages,
//   //       { text: 'Project 3: Short description', user: 'bot' },
//   //       { text: 'Learn more', user: 'bot', link: 'https://project3.com' },
//   //     ]);
//   //   } else if (project === 'Project 4') {
//   //     setMessages([
//   //       ...messages,
//   //       { text: 'Project 4: Short description', user: 'bot' },
//   //       { text: 'Learn more', user: 'bot', link: 'https://project4.com' },
//   //     ]);
//   //   }
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const messageInput = e.target.elements.message.value.toLowerCase();

//     if (messageInput === 'hi' || messageInput === 'hello') {
//       setMessages([
//         ...messages,
//         { text: 'Hello', user: 'bot' },
//         {
//           text: 'My name is Vikas Yadav.\nWhat do you want to know about me?',
//           user: 'bot',
//         },
//         { text: 'Options:', user: 'bot', options: <div className="chatbot-options">
//         {messages.length === 0 &&
//           options.map((option, index) => (
//             <div
//               key={index}
//               className="chatbot-option"
//               onClick={() => handleOptionSelect(option.toLowerCase())}
//             >
//               {option}
//             </div>
//           ))}
//         {messages.length > 0 &&
//           messages[messages.length - 1].options &&
//           messages[messages.length - 1].options.map((option, index) => (
//             <div
//               key={index}
//               className="chatbot-option"
//               onClick={() => handleProjectSelect(option.toLowerCase())}
//             >
//               {option}
//             </div>
//           ))}
//       </div> },
//       ]);
//     } else if (messageInput.toLowerCase() === 'about me') {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//         {
//           text: 'I am a software developer with experience in web development and mobile app development. I am passionate about learning new technologies and creating innovative solutions.',
//           user: 'bot',
//         },
//         {
//           text: 'What else do you want to know about me?',
//           user: 'bot',
//           options: ['My skills', 'Resume', 'My projects', 'Contact me'],
//         },
//       ]);
//     } else if (messageInput.toLowerCase() === 'my skills') {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//         {
//           text: 'My skills include HTML/CSS, JavaScript, React, Node.js, MongoDB, Firebase, Swift, and Java.',
//           user: 'bot',
//         },
//         {
//           text: 'What else do you want to know about me?',
//           user: 'bot',
//           options: ['About me', 'Resume', 'My projects', 'Contact me'],
//         },
//       ]);
//     } else if (messageInput.toLowerCase() === 'resume') {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//         {
//           text: 'You can find my resume at this link: https://example.com/resume',
//           user: 'bot',
//         },
//         {
//           text: 'What else do you want to know about me?',
//           user: 'bot',
//           options: ['About me', 'My skills', 'My projects', 'Contact me'],
//         },
//       ]);
//     } else if (messageInput.toLowerCase() === 'my projects') {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//         {
//           text: 'Here are some of my projects:',
//           user: 'bot',
//           options: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
//         },
//       ]);
//     } else if (messageInput.toLowerCase() === 'contact me') {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//         {
//           text: 'You can reach me at example@email.com',
//           user: 'bot',
//         },
//         {
//           text: 'What else do you want to know about me?',
//           user: 'bot',
//           options: ['About me', 'My skills', 'My projects', 'Resume'],
//         },
//       ]);
//     } else if (messageInput.toLowerCase() === 'project 1') {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//         {
//           text: 'Project 1 is a web application that allows users to track their daily expenses.',
//           user: 'bot',
//           options: ['Know more'],
//         },
//       ]);
//     } else if (messageInput.toLowerCase() === 'know more') {
//       setMessages([
//         ...messages,
//         {
//           text: 'Here is a link to know more about Project 1: https://example.com/project1',
//           user: 'bot',
//         },
//         {
//           text: 'What else do you want to know about me?',
//           user: 'bot',
//           options: ['About me', 'My skills', 'My projects', 'Resume'],
//         },
//       ]);
//     } else {
//       setMessages([
//         ...messages,
//         {
//           text: messageInput,
//           user: 'me',
//         },
//       ]);
//     }

//     e.target.elements.message.value = '';
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="fixed bottom-0 right-0 md:bottom-10 md:right-10">
//       {isOpen ? (
//         <div className="p-4 bg-white rounded-md shadow-md">
//           <div className="flex items-center justify-between mb-4 bg-indigo-400 p-2">
//             <div className="flex items-center">
//               <span className="sr-only">Avatar</span>
//               <Image
//                 className="w-8 h-8 mr-2 rounded-full"
//                 src={AboutImg}
//                 alt="Bot avatar"
//                 height={40}
//                 width={40}
//               />
//               <h3 className="text-lg font-medium text-white"> Vikas Yadav</h3>
//             </div>
//             <div
//               onClick={handleClose}
//               className="rounded-full bg-gray-200 p-3 cursor-pointer"
//             >
//               <AiOutlineClose />
//             </div>
//           </div>
//           <div className="space-y-4 h-96 w-80 overflow-y-scroll">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.user === 'me' ? 'justify-end' : 'justify-start'
//                 }`}
//               >
//                 <div
//                   className={`py-2 px-4 rounded-md ${
//                     message.user === 'me'
//                       ? 'bg-indigo-400 text-white'
//                       : 'bg-gray-200 text-gray-800'
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {showOptions && (
//         <div>
//           <p>Select an option:</p>
//           <button onClick={() => handleOptionClick("aboutme")}>About Me</button>
//           <button onClick={() => handleOptionClick("project")}>Projects</button>
//           <button onClick={() => handleOptionClick("skill")}>Skills</button>
//         </div>
//       )}
//       {showProjectOptions && (
//         <div>
//           <p>Select a project:</p>
//           <button onClick={() => handleProjectOptionClick("project1")}>Project 1</button>
//           <button onClick={() => handleProjectOptionClick("project2")}>Project 2</button>
//           <button onClick={() => handleProjectOptionClick("project3")}>Project 3</button>
//         </div>
//       )}
//           {messages.length === 0 && (
//             <div className="text-center text-gray-500 my-4">
//               Say &quot;hi&quot; to start a conversation!
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="mt-4">
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 name="message"
//                 className="block w-full rounded-md sm:text-sm"
//                 placeholder="Type your message here..."
//               />
//               <button
//                 type="submit"
//                 className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-600"
//               >
//                 <FaTelegramPlane />
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <Image
//           onClick={toggleChatbot}
//           src={botImage}
//           alt="chatBot"
//           height="100"
//           width="100"
//           className="cursor-pointer"
//         ></Image>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import { HiDownload } from 'react-icons/hi';
// import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
// import { TextEncoder } from 'text-encoder';




// const Chatbot = () => {
//   const [chat, setChat] = useState([]);
//   const [input, setInput] = useState('');
//   const [options, setOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   if (typeof TextEncoder === 'undefined') {
//     global.TextEncoder = require('util').TextEncoder;
//   }
//   const handleInput = (event) => {
//     setInput(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const id = uuidv4();
//     setChat([...chat, { id, message: input }]);
//     setInput('');

//     if (input.toLowerCase() === 'hello') {
//       const botMessage = 'Hello! How can I assist you?';
//       const options = ['Option 1', 'Option 2'];
//       setChat([...chat, { id: uuidv4(), message: botMessage }]);
//       setOptions(options);
//     }
//      else if (options.includes(input)) {
//       setIsLoading(true);
//       const response = await axios.get('https://source.unsplash.com/random');
//       const imageUrl = response.request.responseURL;
//       setChat([
//         ...chat,
//         { id: uuidv4(), type: 'image', message: `Here's your image!`, value: imageUrl },
//       ]);      
//       setOptions([]);
//       setSelectedOption(null);
//       setIsLoading(false);
//     } else {
//       const botMessage = 'Sorry, I did not understand your request.';
//       setChat([...chat, { id: uuidv4(), message: botMessage }]);
//     }
//   };

//   const handleOptionClick = (options) => {
//     setSelectedOption(options);
//     console.log(selectedOption)
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="bg-gray-100 py-2 px-4">
//         <h2 className="text-lg font-bold text-gray-700">Chatbot</h2>
//       </div>
//       <div className="py-4 px-4">
//         {chat.map((message) => (
//           <div key={message.id} className="my-4">
//             {message.message && (
//               <div className="py-2 px-4 bg-gray-200 rounded-lg inline-block">
//                 <p className="text-gray-800">{message.message}</p>
//               </div>
//             )}
//             {message.imageUrl && (
//               <div className="my-2">
//                 <img
//                   src={message.imageUrl}
//                   alt="Random"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//         {options.map((option, index) => (
//   <button
//     key={index}
//     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//     onClick={() => handleOptionClick(option)}
//   >
//     {option}
//   </button>
// ))}
//         <form onSubmit={handleSubmit}>
//           <div className="flex">
//             <input
//               type="text"
//               className="py-2 px-4 rounded-lg w-full mr-2"
//               placeholder="Type a message..."
//               value={input}
//               onChange={handleInput}
//               disabled={isLoading}
//             />
//             <button
//               type="submit"
//               className="py-2 px-4 bg-blue-500 text-white rounded-lg"
//               disabled={isLoading || !input}
//             >
//               {isLoading ? (
//                 <span className="flex items-center">
//                   <svg
//                     className="animate-spin h-5 w-5 mr-2 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0c-4.418 0-8 3.582-8 8h-2zm16 0a8 8 0 01-8 8v-2c4.418 0 8-3.582 8-8h2zm-8-6a2 2 0 00-2 2v1a2 2 0 104 0V8a2 2 0 00-2-2zm0 12a2 2 0 002-2v-1a2 2 0 10-4 0v1a2 2 0 002 2z"
//                     ></path>
//                   </svg>
//                   Downloading...
//                 </span>
//               ) : (
//                 'Send'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
