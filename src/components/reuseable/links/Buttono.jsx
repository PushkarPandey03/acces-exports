import { useState } from 'react';

const Buttono = (props) => {
  const { title, className, downloadLink, ...others } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault(); // Prevent the default behavior
    window.open(downloadLink, '_blank'); // Open the link in a new tab
  };

  return (
    <button
      className={`btn btn-secondary ${className || 'dropdown-item dropdown-toggle'} d-flex align-items-center justify-content-center`}
      style={{
        backgroundColor: isClicked ? '#0363ff' : isHovered ? '#000' : '#094099',
        color: '#fff',
        margin: '13px 0',
        padding: '10px 10px',
        boxShadow: isHovered ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onClick={handleDownload} // Trigger download on click
      {...others}
    >
      {title}
    </button>
  );
};

export default Buttono;
