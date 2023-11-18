import React from 'react';
const Loader: React.FC = () => {
    return (
        <React.Fragment>
            <section className='sec_loader'>
                <img  src={require('../Assets/Icons/loading.svg').default} alt="" />
                <h3 className='sec_heading'>Generating Gift Ideas...</h3>
                <p className='sec_info'>Hang tight. Our AI-Powered Genie is generating gift ideas. This can take about 5-10 seconds.</p>
            </section>
        </React.Fragment>
    );
};
export default Loader;
