 import { ThreeDots } from  'react-loader-spinner'

export const Loader = () => {
    return (
       
        <ThreeDots 
gap='50%'
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    )
}