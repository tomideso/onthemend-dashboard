import NavBar from "../Nav/NavBar"


const Layout=({children})=>{

 return (
     <div className="uk-height-1-1">
         <NavBar/>
         <section className="uk-container-expand uk-height-1-1">
            {children}
         </section>
     </div>
 )
}

export default Layout;