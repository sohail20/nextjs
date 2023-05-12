import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function SimpleCard({ product }) {
    const { id, image, name, description, price, content } = product;

    const [expanded, setExpanded] = React.useState(false);

    let htmlString = ""

    if (content && content[0]) {
        htmlString = content[0].htmlCode
    }

    // const htmlDocument = parser.parseFromString(htmlString, 'text/html');
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    // console.log("tempElement", tempElement)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader={description}
            />
            <CardMedia
                component="img"
                height="194"
                image={image.url}
                alt={image.alt}
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    Rs.{price}
                </Typography>
               <div dangerouslySetInnerHTML={{ __html: htmlString }}/>
            </CardContent>
        </Card>
    );
}