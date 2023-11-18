import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AiCardPage from '../template/aiGiftCard';
// import Footer from './componenut/Footer';
import GiftForm from '../template/giftForm';
function Routing() {
    return (
        <Routes>
            <Route path="/products" element={<AiCardPage />} />
            <Route path="/" element={<GiftForm />} />
        </Routes>
    )

}
export default Routing;