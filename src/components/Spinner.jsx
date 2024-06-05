import './spinner.css'

export const Spinner = () => {
  return (
    <div className='parent-element'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
