import React from 'react'


const Singlememe = ({ele}) => {
    console.log(ele)
  return (
    <div class="template">
    <div class="img">
        {/* <img src={`${ele.src}`} alt=""/> */}
        </div>
        <div class="name">
            {/* <label for="">Name :</label><p>{ele.naam}</p> */}
        </div>
        <div class="dial">
            {/* <label for="">Dialouge:</label><p>{ele.dia}</p> */}
        </div>
        <div class="age">
            <label for="">Age :</label>
            {/* <p>{ele.age}</p> */}
        </div>
        
        <button class="button-56" role="button">More Dtails</button>
    </div>
  )
}

export default Singlememe