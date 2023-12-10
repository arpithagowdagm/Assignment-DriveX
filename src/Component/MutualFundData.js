import {useEffect, useState} from 'react';
import {MF_DATA_API} from '../utils/constant';
import { useParams } from 'react-router';
import ShimmerSchemeBox from './ShimmerUI';
import { Box, Paper, Typography } from '@mui/material';

const MutualFundData = () => {
    const [MFDetails, setMFDetails] = useState(null)

    const {id} = useParams();
    useEffect(()=>{
            getMfData();
    },[])

    const getMfData = async() => {
            const data = await fetch(MF_DATA_API+id);
            const jsonData = await data.json();
            setMFDetails(jsonData);


    }

    if (MFDetails === null) return <ShimmerSchemeBox/>

    const {meta} = MFDetails
    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
      <Paper elevation={3} style={{ padding: 16, marginBottom: 16,width: '50%',height:"300px"  }}>
      <Typography variant="h5" align="center" gutterBottom>Scheme Name: {meta.scheme_name}</Typography>
      <Typography variant="h6" align="center">Scheme Type: {meta.scheme_type}</Typography>
      <Typography variant="h6"align="center" >Scheme Category: {meta.scheme_category}</Typography>
      <Typography variant="body2"align="center" > Fund House: {meta.fund_house}</Typography>
      </Paper>
    </Box>
    )

}

export default MutualFundData;