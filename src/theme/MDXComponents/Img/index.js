import React, {useState, useEffect, useRef} from 'react';
import Img from '@theme-original/MDXComponents/Img';
import styles from '@site/src/css/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ImgWrapper(props) {
  let [expanded, setExpanded] = useState(false)
  let [pageWrapper, setWrapper] = useState(null)
  const imageLink = useRef(null)
  
  useEffect(()=>{
    if(!pageWrapper) {
      setWrapper(document.getElementById('__docusaurus'))
    }
    if(expanded) {
      pageWrapper.style.overflow='hidden';
      pageWrapper.style.height = '100vh';
    } else {
      
    }
  })
  return (
    <>
      {expanded && (
        <span className={styles.overlay} 
          style={
            {
              backgroundImage: `url(${props.src})`, 
              backgroundColor: 'rgba(28, 28, 28, 0.9)', 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center'
            }
          }
        >
          <button className={styles.closeOverlay} onClick={()=>{
            pageWrapper.style.removeProperty('overflow');
            pageWrapper.style.removeProperty('height');
            imageLink.current.scrollIntoView({block: 'center'})
            setExpanded(false)
          }}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </span>
      )}
      
      <a href="#" ref={imageLink} onClick={(e)=>{
        e.preventDefault()
        setExpanded(true)
      }}>
        <Img {...props} />
      </a>
    </>
  );
}
