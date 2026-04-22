
export default function First(){
    var design = {
        height:"300px",
        width:"400px",
        backgroundColor:"green"
    }
    return(
      <>
      <div style={design}></div>

      <h1 style={{color:"green"}}>HELLO EVERYONE</h1>
        <h1>THIS Is </h1>

        <div style={{height:"300px",width:"400px",backgroundColor:"blue"}}>
            <h1>THIS IS A DIV</h1>
        </div>


        <div className="div1">
            <h1>THIS IS A DIV2</h1>
        </div>
      </>  
    )
}