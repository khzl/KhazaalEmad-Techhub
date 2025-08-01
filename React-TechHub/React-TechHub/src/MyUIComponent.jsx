import {Button , Card, Typography} from '@mui/material'

function MyUIComponent()
{
    return(
        <Card sx={{padding:2}}>
            <Typography variant='h5'>MUI Card</Typography>
            <Button variant='contained' color='primary'>Click Me</Button>
            <Button variant='contained' color='primary'>Save</Button>
        </Card>
    );
}
 export default MyUIComponent;