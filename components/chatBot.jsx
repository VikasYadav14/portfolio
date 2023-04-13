import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import botImage from '../public/chatBot.png';
import AboutImg from '../public/assets/about.jpg';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaDownload, FaGithub, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import LoadingImg from '../public/assets/dots-loading.gif'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatContainerRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (userInput) => {
    setConversation((prevConversation) => [
      ...prevConversation,
      { role: 'user', content: userInput },
    ]);
    setConversation((prevConversation) => [
      ...prevConversation,
      { role: 'loading', content: <Image src={LoadingImg} alt='/' height='20' width='24'></Image> },
    ]);

    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
      setConversation((prevConversation) =>
      prevConversation.filter((message) => message.role !== 'loading')
    );
      setConversation((prevConversation) => [
        ...prevConversation,
        { role: 'bot', content: botResponse },
      ]);
    }, 2000);
  };

  const getBotResponse = (userInput) => {
    const BOT_RESPONSES = {
      hello: {
        content: (<>
          <p>Hi!👋 I am chatBot created by Vikas Yadav. what you want to know❓</p>
          <ul >
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('About') }}>About</ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('TechStack') }}>TechStack</ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Projects') }}>Projects</ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Resume') }}>Resume</ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Contact') }}>Contact</ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Social Media') }}>Social Media</ol>
          </ul></>)
      }
      ,
      hi: {content:(<>
        <p>Hello!👋 I am chatBot created by Vikas Yadav. what you want to know❓</p>
        <ul >
          <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('About') }}>About</ol>
          <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('TechStack') }}>TechStack</ol>
          <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Projects') }}>Projects</ol>
          <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Resume') }}>Resume</ol>
          <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Contact') }}>Contact</ol>
          <ol className='text-indigo-400 font-semibold hover:text-indigo-600' onClick={() => { handleSendMessage('Social Media') }}>Social Media</ol>
        </ul></>)},
      about:{content: 'I am a Backend Developer trainee at functionUp with experience in completing 5+ projects using technologies such as JavaScript, NodeJs, Expressjs, MongoDB, AWS S3, Redis, Mysql, Python, Java, and tools like VS Code and Postman. I specialize in building responsive back-end APIs that connect with front-end applications. I am passionate about learning new technologies and believe that choosing the best tool for the job is essential in being a great developer.'},
      techstack:{content: 'Common Techstack 👨‍💻 i used Javascript, NodeJs, ExpressJs, MongoDB, NextJs'},
      projects: {content:(
        <>
          <p>Here&apos;s are my projects to know more click to the name of projects</p>
          <ul >
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600'><Link href='/blogging'>Blogging Backend</Link></ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600'><Link href='/shopping'>E-commerce</Link></ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600'><Link href='/book-management'>Book Management</Link></ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600'><Link href='/url-shortener'>Url Shortener</Link></ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600'><a href='https://quizers.vercel.app/' target='_blank' rel='noreferrer'>Quizers</a></ol>
            <ol className='text-indigo-400 font-semibold hover:text-indigo-600'><a href='https://github.com/VikasYadav14/job_board_website' target='_blank' rel='noreferrer'>Job-board Backend</a></ol>
          </ul>
        </>
      )},
      resume: {content:(<a
        href="Vikas_Resume.pdf"
        download
        title="Download Resume"
        className="flex bg-red-500 rounded-md text-white w-fit p-2"
      >
        Download Resume &nbsp;
        <FaDownload size={20} style={{ marginRight: '1rem' }} />
      </a>)},
      contact: {content:(
        <>
          <p>Contact me 😊</p>
          <div className="flex">
            <a
              href="https://api.whatsapp.com/send/?phone=7703990035&text=Hi..&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              title='WhatsApp'
            >
              <FaWhatsapp size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a><Link href='/#contact'>
              <AiOutlineMail size={20} style={{ marginRight: '1rem' }} /></Link>
            </a>
          </div></>
      )}
      ,
      'social media': {content:(
        <>
          <p>Here&apos;s are my social media links😎</p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/imvikasyadav"
              title='LinkedIn'
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/VikasYadav14"
              title='GitHub'
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div></>
      )},
      bye: {content:'Goodbye! 🙋‍♂️ Have a great day!'},
      default: {content:'I am sorry 😥, but I am not able to understand your message.'},
    };
    userInput = userInput.toLowerCase();
    if (userInput in BOT_RESPONSES) {
      return BOT_RESPONSES[userInput].content;
    }
    else {
      return BOT_RESPONSES.default.content;
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <div className="fixed bottom-0 right-0 md:bottom-10 md:right-10 z-20">
      {isOpen ? (
        <div className="p-4 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-between mb-4 bg-indigo-400 p-2">
            <div className="flex items-center">
              <span className="sr-only">Avatar</span>
              <Image
                className="w-8 h-8 mr-2 rounded-full"
                src={AboutImg}
                alt="Bot avatar"
                height={40}
                width={40}
              />
              <h3 className="text-lg font-medium text-white">Vikas Yadav</h3>
            </div>
            <div
              onClick={handleClose}
              className="rounded-full bg-gray-200 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div
            className="space-y-4 h-96 w-80 overflow-y-scroll"
            ref={chatContainerRef}
          >
            {conversation.length === 0 && (
              <div className="text-center text-gray-500 my-4">
                Say 👋 &quot;Hi&quot; or &quot;Hello&quot; to start a conversation!
              </div>
            )}
            {conversation.map((message, index) => (
              <div
                key={index}
                className={`${message.role === 'user' ? 'text-right' : 'text-left'
                  }`}
              >
                <span
                  className={`${message.role === 'user'
                    ? 'bg-indigo-400 text-white'
                    : 'bg-gray-200 text-black'
                    } inline-block px-4 py-2 rounded-md`}
                >
                  {message.content}
                </span>
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              id="userInput"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mr-2"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && userInput.trim() !== '') {
                  handleSendMessage(userInput);
                  setUserInput('');
                }
              }}
            />
            <button
              className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => {
                if (userInput.trim() !== '') {
                  handleSendMessage(userInput);
                  setUserInput('');
                }
              }}
            >
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      ) : (
        <Image
          onClick={toggleChatbot}
          src={botImage}
          alt="chatBot"
          height="100"
          width="100"
          className="cursor-pointer"
        ></Image>
      )}
    </div>
  );
};

export default ChatBot;
