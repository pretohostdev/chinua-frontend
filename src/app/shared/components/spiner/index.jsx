import { ThreeDots } from 'react-loader-spinner'



export default function Spinner(){

    return(
        <ThreeDots
            visible={true}
            height="80"
            width=""
            color="#FFF"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          
    )
}