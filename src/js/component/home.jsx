import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = () => {
	const [second,setSecond]=useState(0);
		const [seconds,setSeconds]=useState(0);
			const [minutes,setMinutes]=useState(0)
														let home;
															useEffect(()=> {
																home= setInterval(()=> {
																	setSecond(second+1);

																		if(second === 59){
																			setSeconds(seconds+1);
																				setSecond(0);		
																							 }
																								}, 1000)

																						return ()=> clearInterval(home);
																														});


																	const restart = () => {
																		setInterval(0)
																		setSecond(0)
																		setSeconds(0)
																	}					
																	
																	const stop = () => {
																		clearInterval(home)
																	}


	return ( 
		<div className="container">
			<div className= "stopWatch">
				<div className ="TimerLogo" >
					<FontAwesomeIcon icon={faClock} />
						</div>
							<div className ="minutes"></div>
								<div className ="seconds">{ seconds<10? "0"+ seconds: seconds }</div>
									<div className ="second">:{second<10? "0"+ second: second }</div>
										</div>
										<button className="restart" onClick={restart}>Restart</button>
										<button className="stop" onClick={stop}>Stop</button>
											</div>
		)};


export default Home;
