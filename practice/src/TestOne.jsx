//Props
function Properties({props}){
    return <h2>{props}</h2>
}

//Combined components
function Header() {
  return (
  <>
  <h1>Welcome</h1>
  
  <Properties props='Afeef'/>
  </>
  )
}

function Footer() {
  return <p>Copyright 2025</p>;
}


function TestOne() {
  return (
    <div>
        <Properties/>
      <Header />
      <p>This is the content.</p>
      <Footer />
    </div>
  );
}
export default TestOne