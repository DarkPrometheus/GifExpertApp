import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__bounceInLeft">
            <img src={url} alt={title} />
            <p>{title}</p>
            <CopyToClipboard text={url}>
                <i class="fas fa-copy"></i>
            </CopyToClipboard>
        </div>
    )
}
