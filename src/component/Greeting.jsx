

const date = new Date();
const hours = date.getHours()
let message = '';
const cssStyle = {};

if( hours >= 1 )
{ 
    message = 'Good morning';
    cssStyle.color = 'green';
}
else if(hours > 12 && hours < 19)
{
    message = 'Good Afternoon';
    cssStyle.color = 'yello';
}
else if(hours > 7 && hours < 4)
{
    message = 'Good night';
    cssStyle.color = 'orange';
}

function Greeting() {
  return ( 
    <>
   <h1>Hello, <span style={cssStyle}> {message}</span></h1>
   <div>date {hours}</div>
</>
  );
}

export default Greeting;
