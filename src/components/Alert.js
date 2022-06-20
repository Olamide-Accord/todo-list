import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'

const Alert = ({removeAlert}) => {
  const {alert, list} = useGlobalContext();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 2000)
    return () => clearTimeout(timeout)
  }, [list]);

  return (
    <div className={`alarm alert-${alert.type}`}>
      <p>{alert.msg}</p>
    </div>
  );

}

export default Alert