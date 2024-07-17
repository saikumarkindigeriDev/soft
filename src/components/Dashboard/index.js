
import React from 'react'
import { useEffect,useState } from 'react'
import Sidebar from '../Sidebar'
import { FaRegCalendar } from "react-icons/fa";
import { MdDashboard, MdLibraryBooks } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import CardList from '../CardList'
import './index.css'

const cards=[




  {
    id:1,
    image:'https://images.moneycontrol.com/static-mcnews/2024/01/Market_up1-770x433.jpeg?impolicy=website&width=770&height=431',
    title:"State of Markets",
    description:"The market capitalisation of Indian stocks crossed US$4.5 trillion in january"
  },
  {
    id:2,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWcMMIQWFgoV-p8WgayXHA0Kt0kArcURcJhuPnMWoWA&s",
    title:"The Central Capex Surge",
    description:"The last few years have seen a very substanial step up in capital"
  },
  {
    id:3,
    image:'https://imageio.forbes.com/blogs-images/scottwinship/files/2014/10/tcherneva8.png?height=400&width=711&fit=bounds',
    title:"Direct Taxes and Business Cycle",
    description:"The share of direct taxes in total tax collections of the Central government is..."
  },
  {
    id:4,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS7p51qEFLHApFiab_CH0M38l4_9l0qY_OB25bBV1Ig&s",
    title:"Banking Monitor",
    description:"Credit growth has remained broadly stable in recent weeks at just..."
  },
  {
    id: 5,
    image: "https://www.shutterstock.com/image-photo/new-york-ny-usa-july-600nw-2199450605.jpg",
    title: "Apple Inc. (AAPL)",
    description: "Apple Inc. designs, manufactures, and markets consumer electronics, computer software, and online services...",
  },
  {
    id: 6,
    image: "https://www.shutterstock.com/image-illustration/seattle-usa-april-5-2023-600nw-2286327737.jpg",
    title: "Amazon.com Inc. (AMZN)",
    description: "Amazon.com Inc. is a multinational technology company focusing on e-commerce, cloud computing, digital streaming...",
  },
  {
    id: 7,
    image: "https://www.aljazeera.com/wp-content/uploads/2022/01/tesla.jpg?resize=1800%2C1800",
    title: "Tesla Inc. (TSLA)",
    description: "Tesla Inc. is an electric vehicle and clean energy company known for its electric cars, solar energy products...",
  },
  {
    id: 8,
    image: "https://cdn.vox-cdn.com/thumbor/wYOpPpMpf80s2qI1kORzdOIpxFA=/0x0:4500x3000/1200x800/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/59345043/512015968.jpg.0.jpg",
    title: "Facebook, Inc. (FB)",
    description: "Facebook, Inc. is a social media conglomerate that operates the Facebook platform, Instagram, WhatsApp...",
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct0Lo93EXctQN26issjUhb6zfCEX78Jdb7ZcAdOXyWFO-NJzvm3AXnEl5gNpnlbVUxOY&usqp=CAU",
    title: "Netflix Inc. (NFLX)",
    description: "Netflix Inc. is a streaming entertainment service provider offering a wide variety of television series...",
  },
  {
    id: 10,
    image: "https://imageio.forbes.com/specials-images/imageserve/64711d6851fc690b809d86b4/0x0.jpg?format=jpg&crop=2912,1638,x0,y147,safe&height=900&width=1600&fit=bounds",
    title: "NVIDIA Corporation (NVDA)",
    description: "NVIDIA Corporation is a technology company known for its graphics processing units (GPUs) and semiconductor products...",
  },
  {
    id: 11,
    image: "https://image.cnbcfm.com/api/v1/image/106644239-1596417971142-gettyimages-1251214481-vcg111288207943.jpeg?v=1677027919&w=1600&h=900",
    title: "Alibaba Group Holding Limited (BABA)",
    description: "Alibaba Group Holding Limited is a Chinese multinational conglomerate specializing in e-commerce, retail...",
  },
  {
    id: 12,
    image: "https://academy.education.investing.com/wp-content/uploads/2022/10/walt-disney.jpg",
    title: "Walt Disney Company (DIS)",
    description: "The Walt Disney Company is a multinational entertainment and media conglomerate known for its film studios...",
  },
  
]

const Dashboard = () => {


  const [isOpen, setIsOpen] = useState(true); 
  const toggleSidebar = (isOpen) => {
    setIsOpen(!isOpen); 
  };


  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  const hours =currentTime.getHours();
  const minutes = currentTime.getMinutes();
;

  // Format the time to ensure two digits for hours, minutes, and seconds
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  

const today=new Date()


  const month = today.toLocaleString('default', { month: 'long' });
  const day = today.getDate();

  const username = localStorage.getItem('username');

  
  return (
    <div className='main-container'>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/> 

      <div className={`${isOpen ? 'full-content' : 'half-content'}`}>

      <div className='header'>

      <div className='name-container'>
      <h1 className='main-heading'>Good Afternoon, {username}</h1>
        <p className='para'>You are subscribed to retail plan</p>
      </div>

      <div className='date-container'>
     <div className='datee'>
     <FaRegCalendar size={18} color='white' className='icon'/>
     <p className='date'>   {`Today, ${day} ${month}  `   }</p> 
     </div>
    <div className='datee'>
    <IoMdTime size={18} color='white' className='icon' />
     <p className='date'>  {`${formattedHours}: ${formattedMinutes}`} </p>
    </div>
     <IoMdNotificationsOutline size={18} color='white' className='icon' />
      </div>
      </div>

      <div className='library-container'>
<div className='card-box'>
<MdLibraryBooks size={25} color='red'/>
<h5 className='libray'>My Saved library 1</h5>
<p className='libray-p'>dd-mm-yyyy</p>
</div>

<div className='card-box'>
<MdLibraryBooks size={25} color='blue'/>
<h5 className='libray'>My Saved library 2</h5>
<p className='libray-p'>dd-mm-yyyy</p>
</div>

<div className='card-box'>
<MdLibraryBooks size={25} color='orange' />
<h5 className='libray'>My Saved library 3</h5>
<p className='libray-p'>dd-mm-yyyy</p>
</div>

<div className='card-box'>
<MdLibraryBooks size={25} color='green'/>
<h5 className='libray'>My Saved library 4</h5>
<p className='libray-p'>dd-mm-yyyy</p>
</div>

<div className='card-box'>
<MdLibraryBooks size={25} color='purple'/>
<h5 className='libray'>My Saved library 5</h5>
<p className='libray-p'>dd-mm-yyyy</p>
</div>
      </div>

  
      <CardList cards={cards} />
      </div>
     
    </div>
  )
}

export default Dashboard