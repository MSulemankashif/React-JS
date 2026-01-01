import BoxExample from './Components/BoxExample'
import ControlledExample from './Components/ControlledExample'
import CounterExample from './Components/CounterExample'
import PasswordExample from './Components/PasswordExample'


function App() {

  const cardContent = [
    
    {
      image: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg",
      title: "Title 1",
      desc: "this will be the desc of the card whoich is being displayed in the list 1",
    },


    {
      image: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg",
      title: "Title 2",
      desc: "this will be the desc of the card whoich is being displayed in the list 2",
    },


    {
      image: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg",
      title: "Title 3",
      desc: "this will be the desc of the card whoich is being displayed in the list 3",
    },
    
  ]

  const cardStyling = {
    display: "flex",   
    alignItems: "center", 
    justifyContent: "center", 
    gap: "20px",
    margin: "25px 5px"
  }


  return (
    <>


    <ControlledExample/>

    {/* <div style={cardStyling}>

      {
        cardContent.map( (obj)=>{

          return <Card
            image = {obj.image}
            title = {obj.title}
            desc = {obj.desc}
          
          />
 
        })
      }
      
      
    </div> */}

    
    </>
  )

}

export default App










{/* <Card
         image = "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg"
         title = "Title 1"
         desc= "this is the desc of the card 1"
      />


      <Card
         image = "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg"
         title = "Title 2"
         desc= "this is the desc of the card 2"
      />


      <Card
         image = "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg"
         title = "Title 3"
         desc= "this is the desc of the card 3"
      /> */}
