import step_1 from 'src/images/step_1.png'
import step_2 from 'src/images/step_2.png'
import step_3 from 'src/images/step_3.png'
import step_4 from 'src/images/step_4.png'
import { Link } from 'react-router-dom';


export const FourStepProcess = (props) => {
    const { largeScreen } = props;
    return (
        <div className="page-section">
            <h1>- My service in 4 simple steps -</h1>
            <div className="sub-section two-column-container left-align">
                <img className="step-image" src={step_1}/>
                <div>
                    <h2>1. First contact</h2>
                    <p className="page-text-description">We come into contact, discuss terms and expectations, and agree on a price. You can reach me via the <Link to="/contact"><b>contact form</b></Link>  or through my social media.</p>
                </div>
            </div>
            <div className="sub-section two-column-container left-align">
                {largeScreen ?
                    <>
                        <div>
                            <h2>2. The photoshoot</h2>
                            <p className="page-text-description">The big day arrives. Rest easy, have fun, and don't forget to smile! You're in good hands!</p>
                        </div>
                        <img className="step-image" src={step_2}/>
                    </>
                    :
                    <>
                        <img className="step-image" src={step_2}/>
                        <div>
                            <h2>2. The photoshoot</h2>
                            <p className="page-text-description">The big day arrives. Rest easy, have fun, and don't forget to smile! You're in good hands!</p>
                        </div>
                        
                    </>
                }
            </div>
            <div className="sub-section two-column-container left-align">
                <img className="step-image" src={step_3}/>
                <div>
                    <h2>3. Editing</h2>
                    <p className="page-text-description">I sort through all the pictures and perform individual edits to make them look their absolute best. Once they're ready to share, I send you watermarked versions to preview so you can submit edit requests and give final approval. Watermarks are removed after receiving payment, which means <i>you don't have to pay unless/until you're fully satisifed with the images!</i></p>
                </div>
            </div>
            <div className="sub-section two-column-container left-align">
                {largeScreen ?
                    <>
                        <div>
                            <h2>4. Delivery</h2>
                            <p className="page-text-description">I remove the watermark and upload the full-resolution images in a folder on a cloud-sharing service, usually Google Drive or Dropbox. This folder is 100% exclusive to you and is available to download for 2 months. Hooray!</p>
                        </div>
                        <img className="step-image" src={step_4}/>
                    </>
                    :
                    <>
                        <img className="step-image" src={step_4}/>
                        <div>
                            <h2>4. Delivery</h2>
                            <p className="page-text-description">I remove the watermark and upload the full-resolution images in a folder on a cloud-sharing service, usually Google Drive or Dropbox. This folder is 100% exclusive to you and is available to download for 2 months. Hooray!</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}