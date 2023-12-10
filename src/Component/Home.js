import { useEffect,useState } from "react";
import { VariableSizeList } from 'react-window';
import { Box, Typography, Paper, Hidden } from '@mui/material';
import { Link } from "react-router-dom";
import {MF_API} from '../utils/constant';

const Home = () => {
const [apiData, setApiData] = useState([])

    const fetchData = async() =>{
            const response = await fetch(MF_API);
            const data = await response.json();
            setApiData(data);
    }
    useEffect(()=>{

            fetchData();
    },[])



    const Row = ({ index, style }) => (
        <Paper key={apiData[index].schemeCode} elevation={3} style={{ padding: 16, marginBottom: 16, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', ...style }}>
         <Link to={'/home/MutualFundData/' + apiData[index].schemeCode } style={{ textDecoration: 'none', color: 'inherit',transition: 'color 0.3s',':hover': { color: 'red' } }}>  <Typography variant="h6">{apiData[index].schemeName}</Typography> </Link>
        </Paper>
      );
    
      const ITEM_HEIGHT = 120; 
    
      return (
        <div style={{ overflow: 'hidden', textAlign: 'center', paddingTop: '20px', color: 'red' }}>
            <h2>LIST OF SCHEME</h2>
         <VariableSizeList
            height={window.innerHeight} 
            itemCount={apiData.length}
            itemSize={() => ITEM_HEIGHT}
            rowHeight={300}
            columnWidth={200}
            /* style={{overflow: 'hidden'}} */
          >
            {Row}
          </VariableSizeList>
        </div>
      );
    };
    
    

export default Home;