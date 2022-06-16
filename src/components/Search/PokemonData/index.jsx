import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import './index.css'

export const PokemonData = (props) => {
    const cardStyle = {
        border: '1px solid #ccc',
        backgroundColor: '#f5f5f5',
        margin: 'auto',
        textAlign: 'center'
    }

    const cardBodyStyle = {
        border: '1px solid #ccc',
        backgroundColor: '#30a7d7',
        margin: 'auto',
        textAlign: 'center'
    }

    const cardStatsStyle = {
        border: '1px solid #ccc',
        backgroundColor: 'white',
        margin: 'auto',
        textAlign: 'center'
    }
    return (
        <>
            <Card sx={{ width: 400 }} style={cardStyle}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        {props.name}
                    </Typography>
                    <Typography>
                        <img src={props.sprite} alt={props.name} />
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ width: 400 }} style={cardBodyStyle}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        weight
                        <Typography>
                            {(parseFloat(props.weight) / 10).toFixed(1)} kg
                        </Typography>
                    </Typography>

                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        height
                        <Typography>
                            {(parseFloat(props.height) / 10).toFixed(1)} m
                        </Typography>
                    </Typography>

                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        abilities
                    </Typography>

                    {props.abilities.map((ability, key) => (
                        <Typography key={key} sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                            {ability.ability.name}
                        </Typography>
                    ))}

                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        category
                    </Typography>
                    {props.types.map((type, key) => (
                        <Typography key={key} sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                            {type.type.name}
                        </Typography>
                    ))}
                </CardContent>
            </Card>


            <Card sx={{ width: 400 }} style={cardStatsStyle}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        base Stats
                    </Typography>

                    {props.stats.map((stat, key) => (
                        <Typography key={key} sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            {`${stat.stat.name} ${stat.base_stat}`}
                            <LinearProgress
                                variant="determinate"
                                value={stat.base_stat} />
                        </Typography>
                    ))}


                </CardContent>
            </Card>

        </>

    );
}