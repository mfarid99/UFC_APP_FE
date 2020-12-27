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
      <td>6'0''</td>
      <td>170lbs.</td>
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
      <td>5'11''</td>
      <td>170lbs.</td>
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
      <td>5'7''</td>
      <td>135lbs.</td>
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
      <td>Marlon</td>
      <td>Vera</td>
      <td>Chito</td>
      <td>5'8''</td>
      <td>135lbs.</td>
      <td>69.0''</td>
      <td>16</td>
      <td>7</td>
      <td>1</td>
      <td></td>
      <td>3:13</td>
      <td>49%</td>
      <td>63%</td>
      <td>72%</td>
    </tr>

    <tr>
      <td>Michael</td>
      <td>Pereira</td>
      <td>Demolidor</td>
      <td>6'1''</td>
      <td>170lbs.</td>
      <td>73.0''</td>
      <td>25</td>
      <td>11</td>
      <td>0</td>
      <td></td>
      <td>3.47</td>
      <td>56%</td>
      <td>71%</td>
      <td>39%</td>
    </tr>

    <tr>
      <td>Khaos</td>
      <td>Williams</td>
      <td>The OxFighter</td>
      <td>6'0''</td>
      <td>170lbs.</td>
      <td>77.0''</td>
      <td>11</td>
      <td>2</td>
      <td>0</td>
      <td></td>
      <td>2:56</td>
      <td>55%</td>
      <td>70%</td>
      <td>57%</td>
    </tr>

    <tr>
      <td>Anthony</td>
      <td>Pettis</td>
      <td>Showtime</td>
      <td>5'10''</td>
      <td>155lbs.</td>
      <td>72.0''</td>
      <td>24</td>
      <td>10</td>
      <td>0</td>
      <td></td>
      <td>3:37</td>
      <td>55%</td>
      <td>64%</td>
      <td>51%</td>
    </tr>

    <tr>
      <td>Alex</td>
      <td>Morono</td>
      <td>The Great White</td>
      <td>5'11''</td>
      <td>170lbs.</td>
      <td>72.0''</td>
      <td>18</td>
      <td>7</td>
      <td>0</td>
      <td></td>
      <td>3:1</td>
      <td>59%</td>
      <td>47%</td>
      <td>52%</td>
    </tr>

    <tr>
      <td>Marcin</td>
      <td>Tybura</td>
      <td>Tybur</td>
      <td>6'3''</td>
      <td>249lbs.</td>
      <td>78.0''</td>
      <td>21</td>
      <td>6</td>
      <td>0</td>
      <td></td>
      <td>2:49</td>
      <td>64%</td>
      <td>61%</td>
      <td>57%</td>
    </tr>

    <tr>
      <td>Greg</td>
      <td>Hardy</td>
      <td>Prince Of War</td>
      <td>6'5''</td>
      <td>265lbs.</td>
      <td>75.0''</td>
      <td>7</td>
      <td>3</td>
      <td>0</td>
      <td></td>
      <td>3.28</td>
      <td>39%</td>
      <td>51%</td>
      <td>33%</td>
    </tr>

    <tr>
      <td>Khabib</td>
      <td>Nurmagomedov</td>
      <td>The Eagle</td>
      <td>5'10''</td>
      <td>155lbs.</td>
      <td>70.0''</td>
      <td>29</td>
      <td>0</td>
      <td>0</td>
      <td>Lightweight</td>
      <td>2:17</td>
      <td>88%</td>
      <td>81%</td>
      <td>92%</td>
    </tr>

    <tr>
      <td>Conor</td>
      <td>McGregor</td>
      <td>The Notorious</td>
      <td>5'9''</td>
      <td>155lbs.</td>
      <td>74.0''</td>
      <td>22</td>
      <td>4</td>
      <td>0</td>
      <td></td>
      <td>2:48</td>
      <td>70%</td>
      <td>83%</td>
      <td>77%</td>
    </tr>

    <tr>
      <td>Jon</td>
      <td>Jones</td>
      <td>Bones</td>
      <td>6'4''</td>
      <td>205lbs.</td>
      <td>84.0''</td>
      <td>26</td>
      <td>1</td>
      <td>0</td>
      <td></td>
      <td>3.52</td>
      <td>79%</td>
      <td>75%</td>
      <td>75%</td>
    </tr>

    <tr>
      <td>Francis</td>
      <td>Ngannou</td>
      <td>The Predator</td>
      <td>6'4''</td>
      <td>250lbs.</td>
      <td>83.0''</td>
      <td>15</td>
      <td>3</td>
      <td>0</td>
      <td></td>
      <td>1:59</td>
      <td>47%</td>
      <td>90%</td>
      <td>92%</td>
    </tr>

    <tr>
      <td>Max</td>
      <td>Holloway</td>
      <td>Blessed</td>
      <td>5'11''</td>
      <td>145lbs.</td>
      <td>69.0''</td>
      <td>21</td>
      <td>6</td>
      <td>0</td>
      <td></td>
      <td>3:29</td>
      <td>51%</td>
      <td>88%</td>
      <td>80%</td>
    </tr>

    <tr>
      <td>Brian</td>
      <td>Ortega</td>
      <td>T-City</td>
      <td>5'8''</td>
      <td>145lbs.</td>
      <td>69.0''</td>
      <td>15</td>
      <td>1</td>
      <td>0</td>
      <td></td>
      <td>2:20</td>
      <td>52%</td>
      <td>79%</td>
      <td>65%</td>
    </tr>

    <tr>
      <td>Amanda</td>
      <td>Nunes</td>
      <td>Lioness</td>
      <td>5'8''</td>
      <td>145lbs.</td>
      <td>67.0''</td>
      <td>20</td>
      <td>4</td>
      <td>0</td>
      <td>Featherweight</td>
      <td>1:56</td>
      <td>79%</td>
      <td>89%</td>
      <td>85%</td>
    </tr>

  </tbody>
</Table>

</div>
    
</>)
}
    export default Stats
