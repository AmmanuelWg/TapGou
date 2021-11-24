import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function QRcode()
{
    return (
        <ImageList sx={{ width: '100%', height: '100%' }} cols={1} rowHeight='100%'>

            <ImageListItem >
                <img
                    src='https://mui.com/components/image-list/#main-content'
                    alt='testingCode'
                    loading="lazy"
                />
            </ImageListItem>

        </ImageList>
    );
}
