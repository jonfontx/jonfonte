import React from "react";
import { Avatar, Heading, VStack, background } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar.JPG";
import video from '../images/codingvideo.webm';
import backimg from "../images/backimg.png";
import videoMp4 from "../images/videocoding.mp4"



const greeting = "Jonatan Fontebasso";
const bio1 = "Front-end developer";
const bio2 = "specialized in React";

const LandingSection = () => (
 <FullScreenSection
   justifyContent="center"
   alignItems="center"
   isDarkBackground
   backgroundColor="#2A4365"
 >
<video className='videoTag' autoPlay loop muted style={{position:"absolute", zIndex:0}}>
<source src={video} type='video/webm' />
<img src={backimg} alt="Fallback Image" />
<source src={videoMp4} type='video/mp4' />
</video>
   <VStack spacing={16} style={{zIndex:1}} >
     <VStack spacing={4} alignItems="center">
       <Avatar
         src={myAvatar}
         size="2xl"
         name="Jonatan Fontebasso"
       />
       <Heading as="h4" size="md" noOfLines={1}>
         {greeting}
       </Heading>
     </VStack>
     <VStack spacing={6}>
       <Heading as="h1" size="lg" noOfLines={1} id="bio">
         {bio1} 
       </Heading> 
       <Heading as="h1" size="sm" noOfLines={1} id="bio"> 
         {bio2} 
       </Heading>
     </VStack> 
   </VStack> 
 </FullScreenSection> 
);

export default LandingSection;