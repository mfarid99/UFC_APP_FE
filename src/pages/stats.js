import React from "react"
import {GlobalCtx} from "../App"
import {Figure, Button, Row, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const Stats = (props) => {

    
    return (<>

      <h1 id="statstxt"> FIGHTERS STATS</h1>
<div className = "statstbl"> 
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>First </th>
      <th>Last </th>
      <th>Nickname</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Reach</th>
      <th>Wins</th>
      <th>Losses</th>
      <th>Draws</th>
      <th>Belt</th>
      <th>Av. Oct. Time</th>
      <th>Takedown Acc.</th>
      <th>Striking Acc.</th>
      <th>Win Finish %</th>

      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Geoff</td>
      <td>Neal</td>
      <td>Handz of Steel</td>
      <td>@5'11''</td>
      <td>@170lbs.</td>
      <td>73.0''</td>
      <td>13</td>
      <td>3</td>
      <td>0</td>
      <td></td>
      <td>3:13</td>
      <td>47%</td>
      <td>69%</td>
      <td>37%</td>
    </tr>

    <tr>
      <td>Jose</td>
      <td>Aldo</td>
      <td></td>
      <td>@5'7''</td>
      <td>@135lbs.</td>
      <td>70.0''</td>
      <td>29</td>
      <td>7</td>
      <td>0</td>
      <td></td>
      <td>2:49</td>
      <td>65%</td>
      <td>81%</td>
      <td>73%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

    <tr>
      <td>Stephen</td>
      <td>Thompson</td>
      <td>Wonderboy</td>
      <td>@6'0''</td>
      <td>@170lbs.</td>
      <td>75.0''</td>
      <td>16</td>
      <td>4</td>
      <td>1</td>
      <td></td>
      <td>2:37</td>
      <td>35%</td>
      <td>72%</td>
      <td>47%</td>
    </tr>

  </tbody>
</Table>

</div>
    
</>)
}
    export default Stats
