import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';


const services = [
  { icon: "home_app_logo", title: "Banking" },
  { icon: "yard", title: "Education" },
  { icon: "nest_eco_leaf", title: "Communications, and Information Services" },
  { icon: "deployed_code", title: "High Tech" },
  { icon: "stat_3", title: "Travel and Logistics" },
  { icon: "store", title: "Retail" },
  { icon: "home_iot_device", title: "Life Sciences" },
  { icon: "manufacturing", title: "Manufacturing" },
  { icon: "public", title: "Public Services" },
  { icon: "energy", title: "Energy, Resources, and Utilities" },
  { icon: "storefront", title: "Markets" },
  { icon: "newspaper", title: "Media" },
];



const Home = () => {
  return (
    <main style={{ fontSize: "14px",color:"000",fontWeight:"500",background:"white" }}>
      <div className="container py-5">
       
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6  col-sm-12 industries-item ">
              <h2 style={{fontSize:"1rem",cursor:"pointer"}}>
                <span className="material-symbols-outlined service-icon">
                  {service.icon}
                </span>
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
