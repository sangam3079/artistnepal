import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from "../../styles/custom.js";
import { fontStyles } from '../../styles/fonts';
import Cover1 from "../../assets/images/img1.png";

const BlogList = ({ blogs }) => {
  return (
    <Box flexDirection="column" padding="20px 80px">
        <h1 style={fontStyles.extraLarge}>Latest News</h1>
        <p style={{...fontStyles.smallRegular, marginTop:"-2%"}}>
          Our latest stories to get you inspired
        </p>
        <Box flexWrap="wrap">
          {blogs && blogs.map((blog) => {
            return (
              <Box key={blog.id} flexDirection="column" style={{width:"clamp(100px, 100%, 380px)",color:'black', textDecoration:'none' }}>
              <img src={blog.fimg_url} width="100%" height="240px" alt="" />
              {/*<Link to={'/' + blog.id}><div style={fontStyles.mediumBold}>{blog.title.rendered}</div></Link>*/}
              <div style={fontStyles.mediumBold}>{blog.title.rendered}</div>
              <a href={'https://blog.songsnepal.com/' + blog.slug} style={{color:'black', textDecoration:'none'}}>
              <p 
                style={fontStyles.smallRegular} 
                dangerouslySetInnerHTML={{__html: blog.excerpt.rendered}}
              >
              </p>
              </a>
            </Box>
            )
          })}
        </Box> 
    </Box>
  );
}
 
export default BlogList;