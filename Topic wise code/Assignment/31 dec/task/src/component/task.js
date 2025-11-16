export const Task=()=>{
    return(
        <div className="content-wrapper d-flex flex-column ">
            <Header/>
            <div className="d-flex" style={{height:"80vh"}}>
                <Aside/>
                <Main/>
            </div>
            <Footer/>
        </div>
    )
}


const Header=()=>{
  return(
    <div className="bg-dark text-white text-center p-3">
        <h1>Header</h1>
    </div>
  )
}

const Footer=()=>{
    return(
        <div className="bg-dark text-white text-center p-2 ">
            <h1>Footer</h1>
        </div>
      )
}

const Aside=()=>{
    return(
        <div className="col-md-3 text-center bg-light p-3 ">
            <h1>Sidebar</h1>
            <p>Some sidebar content here.</p>
        </div>
      )
}

const Main=()=>{
    return(
        <div className="col-md-9 text-center p-3">
            <h1>Main Content</h1>
                <p>This is the main section where the content goes.</p>
        </div>
      )
}