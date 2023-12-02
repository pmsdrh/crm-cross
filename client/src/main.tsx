import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
)
