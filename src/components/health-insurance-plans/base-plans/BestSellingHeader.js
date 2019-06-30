import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PdfIcon from '../../../assets/images/pdf-icon.png';
import StarIcon from '../../../assets/images/star.png';
import ManIcon from '../../../assets/images/man.png';

class BestSellingHeader extends Component {
    render() {
        return (
            <div>
                <p className="pdf-section">Health Total Superior <span className="policy-broucher"><img
                    src={PdfIcon} alt="PDF" />Policy Brochure & TnC</span></p>
                <p><span className="customer">Customers Rating: <span>4.7</span><img src={StarIcon} alt="Star" /></span><span
                    className="rating">GB Rating:<span> 4.7 </span><img src={StarIcon} alt="Star" /></span><span
                        className="includes"><img src={ManIcon} alt="Man" />Includes maternity cover</span></p>
            </div>
        );
    }
}

export default BestSellingHeader;