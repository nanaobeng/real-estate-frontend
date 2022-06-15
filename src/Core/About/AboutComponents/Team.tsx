import react,{useState} from 'react'

const Team = () => {

    const [staff,setStaff] = useState([

        {
            "name" : "Employee 1",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU",
            "role" : "Role 1"
        },
        {
            "name" : "Employee 2",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU",
            "role" : "Role 2"
        },
        {
            "name" : "Employee 3",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU",
            "role" : "Role 3"
        }
    ])

    return(

        <div className='col-12 p-4'>
                <div className='row justify-content-center' style={{paddingRight:'10%',paddingLeft:'10%'}}>
                <div className='col-lg-4 col-sm-12 text-center' style={{paddingTop:'1vh',height:'5.8vh',backgroundColor:'rgba(245, 178, 33, 1)'}}>
                                <span style={{color:'rgba(14, 64, 85, 1)',fontWeight:'bold',fontSize:'2.5vh'}}>
                                    Meet the Team
                                </span>
                                </div>

                </div>

                <div className='col-12 pt-3 ' style={{paddingRight:'10%',paddingLeft:'10%'}}>
                    <div className='row'>

                        {staff && staff.map((member,i)=>{
                            return(
                                <div className='col-lg-4 col-sm-12 p-4'>
                            <div className='row'>
                                <div className='col-12 text-center'>

                                    <img className='img-fluid ' src={member.image} style={{height:'26vh'}}/>

                                </div>
                                <div className='col-12 pt-1 text-center' style={{fontSize:'1.8vh'}}>
                                    <b>{member.name}</b>
                                </div>
                                <div className='col-12 text-center' style={{color:'grey',fontSize:'1.5vh'}}>
                                <b>{member.role}</b>
                                </div>
                            </div>
                        </div>

                            )
                        })}
                        
                    </div>
                    
                </div>

                </div>
    )



}


export default Team