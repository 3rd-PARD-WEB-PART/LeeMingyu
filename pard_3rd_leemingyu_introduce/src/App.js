import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/my_photo.jpg" className="my_photo" alt="Photo" />
        <p className="title">
          이민규
        </p>
        <p className="subtext">
          파드_3기_웹 / ENTP / 전전 6학기 / 열송학사 / 약속의 세대 / 축복의 세대 새섬 / MIC
        </p>
        <div className="intro">
        <a
          className="link"
          href="https://github.com/livingdavid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" className="logo" alt="Github Logo" />
           
        </a>
      <a
          className="link"
          href="https://we-pard.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pard.png" className="logo" alt="PARD Logo" />
        </a>  
        <a
          className="link"
          href="https://www.instagram.com/_lmingyu0115/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/insta.png" className="logo" alt="Instagram Logo" />
        </a>
      </div>
      </header>
      <div className="content">
        <p className="title">My Characteristics</p>
        <div className="content_detail">
          <div className="first">
          <img src="/nomad.png" className="photo" alt="Photo" />
            <p className="subtext">
              취미 유목민
            </p>
          </div>
          <div className="second">
          <img src="/entp.png" className="photo" alt="Photo" />
            <p className="subtext">
              확신의 ENTP 
            </p>
          </div>
          <div className="third">
          <img src="/helper.png" className="photo" alt="Photo" />
            <p className="subtext">
              조력자..!
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <p className="title">This Semester, I wanna Be..</p>
        <div className="content_detail">
          <div className="first">
          <img src="/Coding.png" className="photo" alt="Photo" />
            <p className="subtext">
              꾸준히 성취하며 성장하는 사람
            </p>
          </div>
          <div className="second">
          <img src="/Cowork.png" className="photo" alt="Photo" />
            <p className="subtext">
              협업을 두려워하지않고 자신감이 있는 사람 
            </p>
          </div>
          <div className="third">
          <img src="/balance.png" className="photo" alt="Photo" />
            <p className="subtext">
              몸과 마음, 사람을 챙기는 사람
            </p>
          </div>
        </div>
      </div>
      <div className="end">
        <p className="title">민규야!<br />잘할 수 있어! 아자 아자 화이팅!</p>
      </div>
      
    </div>
  );
}

export default App;
