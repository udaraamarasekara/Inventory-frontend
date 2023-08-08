import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
import { Card, } from "react-bootstrap";

class barChart extends Component {
	render() {
		const options = {
			
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
		   <Card className="mx-5 my-5">
            <Card.Header className="bg-info">
              <h3>ggt4g3</h3>
            </Card.Header>
            <Card.Body>   
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		
		    </Card.Body>  
          </Card> 		
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default barChart;              