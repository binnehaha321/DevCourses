import styles from './button.module.css'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
export default function Buttonlogin({ children, loading, disable, ...prop}) {
  return (
    <button
      {...prop}
      className={`${styles.buttonLogin}  flex gap-3 justify-center bg-blue-400 w-4/5 p-2 rounded-lg relative`}
      disabled={disable}
    >
      {loading && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                color: 'white',
                fontSize: 24
              }}
              spin
            />
          }
        />
      )}
      {children}
    </button>
  )
}
