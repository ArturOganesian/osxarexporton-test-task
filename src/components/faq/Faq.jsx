import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { faqsData } from "../faqData";
import uniqid from 'uniqid';
import './faq.css';


const Faq = () => {

    const [openAnswers, setOpenAnswers] = useState([]);

    const toggleAnswer = (index) => {
 
      if (openAnswers.includes(index)) {
        setOpenAnswers(openAnswers.filter((item) => item !== index));
      } else {
        setOpenAnswers([...openAnswers, index]);
      }
    };
  
    return (
 
      <div className="global-faq-div">
            <div className="faq-title">
                <h1>FAQ</h1>
           </div>
          <div className="questions-answers">
          
              {faqsData.map((faq, index) => (
                      <div key={uniqid()} className="faq-fiv">
            <ul>
            <li>
              {faq[0].question}
                    <Button onClick={() => toggleAnswer(index)}><CaretUpOutlined /> , <CaretDownOutlined /></Button>  
            </li>
            {openAnswers.includes(index) && <li>{faq[0].answer}</li>}
                  </ul>
                  
              </div>
      
        ))}
      </div>
    </div>
  );
};

export default Faq;

