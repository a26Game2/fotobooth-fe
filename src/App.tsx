import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ServicePage } from './pages/ServicePage'
import { ThankYouPage } from './pages/ThankYouPage'

export default function App() { return <Routes><Route path="/" element={<HomePage />} /><Route path="/dich-vu/:slug" element={<ServicePage />} /><Route path="/cam-on" element={<ThankYouPage />} /><Route path="*" element={<HomePage />} /></Routes> }
