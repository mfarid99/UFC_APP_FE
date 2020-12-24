import React from "react"
import {GlobalCtx} from "../App"
import {Figure, Button, Row, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const Stats = (props) => {

    
    return (<>

      <h1> Fighter stats</h1>

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
      <th>Average Oct. Time</th>
      <th>Takedown Accuracy</th>
      <th>Striking Accuracy</th>
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

      
    
</>)
}
    export default Stats
