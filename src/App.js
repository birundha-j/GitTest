import "./App.css";
import img1 from "./logo.svg";
import img2 from "./logo.svg";
import img3 from "./logo.svg";
import img4 from "./logo.svg";
const App = () => {
  return (
    <body class="container">
      <div className="common">
        <div className="firstbox">
          <div className="simple">
            <div className="plussymbol">+</div>
            <div className="nova">NOVA</div>
          </div>
          <div className="datacontainer">
            <div className="color"></div>
            <div className="searchicon">
              <img src={img1} alt="" width="15px" height="15px" />
            </div>
            <div className="database">DATABASE</div>
          </div>
          <div className="schedulecontainer">
            <div className="scheduleicon">
              <img src={img2} alt="" width="15px" height="15px" />
            </div>
            <div className="schedule">SCHEDULE</div>
          </div>
          <div className="reportcontainer">
            <div className="reporticon">
              <img src={img3} alt="" width="15px" height="15px" />
            </div>
            <div className="report">REPORTS</div>
          </div>
          <div className="permissioncontainer">
            <div className="permissionicon">
              <img src={img4} alt="" width="15px" height="15px" />
            </div>
            <div className="permission">PERMISSION</div>
          </div>
        </div>
        <div className="secondbox">
          <div className="firstline">
            <div className="boxshadow1"></div>
            <div className="asset">+ CREATE ASSET</div>
            <div className="boxshadow2"></div>
            <div className="twowork">
              <div className="namescomment">NAMES COMMENT</div>
              <button className="alphabutton">A</button>
            </div>
          </div>
          <div className="bigarea">
            <input className="text" placeholder="search" />
          </div>
          <div className="buttongroup">
            <button className="but1">VIEW ALL</button>
            <div className="type">TYPE</div>
            <div className="companies">COMPANIES</div>
            <div className="location">LOCATION</div>
            <button className="but22">+ CREATE ASSET</button>
          </div>
          <div className="namelist">
            <div className="title">
              <div className="nameline">NAME</div>
              <div className="typeline">TYPE</div>
              <div className="assetline">ASSET</div>
              <div className="companyline">COMPANY</div>
              <div className="locationline">LOCATION</div>
            </div>
            <div className="data1">
              <div className="nameline1">SUPERCARD MASTER</div>
              <div className="typeline1">SUPERVISOR</div>
              <div className="assetline1">#789654</div>
              <div className="companyline1">SEATY TALLYOS</div>
              <div className="locationline1">LEX AGELAZS</div>
              <div className="point1">
                <div className="dot1">.</div>
                <div className="dot2">:</div>
              </div>
            </div>
            <div className="data2">
              <div className="nameline2">SWETIZER MAIL</div>
              <div className="typeline2">TRAINER</div>
              <div className="assetline2">#12456</div>
              <div className="companyline2">MICROSOFT COMPANY</div>
              <div className="locationline2">CHENNAI EGMORE</div>
              <div className="point2">
                <div className="dot3">.</div>
                <div className="dot4">:</div>
              </div>
            </div>
            <div className="data3">
              <div className="nameline3">NAME</div>
              <div className="typeline3">MANAGER</div>
              <div className="assetline3">#2547896</div>
              <div className="companyline3">GIRLS SCHOOL</div>
              <div className="locationline3">SIRKALI</div>
              <div className="point3">
                <div className="dot5">.</div>
                <div className="dot6">:</div>
              </div>
            </div>
            <div className="data4">
              <div className="nameline4">THAISON KOKUL</div>
              <div className="typeline4">ACCOUNATANT</div>
              <div className="assetline4">#65510</div>
              <div className="companyline4">AVC COLLEGE</div>
              <div className="locationline4">MANNAMPANDAL</div>
              <div className="point4">
                <div className="dot7">.</div>
                <div className="dot8">:</div>
              </div>
            </div>
            <div className="data5">
              <div className="nameline5">THILLAR MANI SOA</div>
              <div className="typeline5">PROBLEM SOLVER</div>
              <div className="assetline5">#24782</div>
              <div className="companyline5">HAJJA SARA AMMAL</div>
              <div className="locationline5">VADAKARAI THARANGAI</div>
              <div className="point5">
                <div className="dot9">.</div>
                <div className="dot10">:</div>
              </div>
            </div>
            <div className="data6">
              <div className="nameline6">FASIDMNA KOLI</div>
              <div className="typeline6">VISITOR</div>
              <div className="assetline6">#478521</div>
              <div className="companyline6">AZAD GIRLS</div>
              <div className="locationline6">MAYILADUTHURAI</div>
              <div className="point6">
                <div className="dot11">.</div>
                <div className="dot12">:</div>
              </div>
            </div>
            <div className="data7">
              <div className="nameline7">MAISTHAR BHAI</div>
              <div className="typeline7">SPEAKER </div>
              <div className="assetline7">#12017</div>
              <div className="companyline7">SOFTWARE COMAPNY</div>
              <div className="locationline7">BANGALORE</div>
              <div className="point7">
                <div className="dot13">.</div>
                <div className="dot14">:</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default App;
