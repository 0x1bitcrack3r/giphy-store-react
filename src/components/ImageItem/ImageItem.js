// @flow
import React, {useState} from 'react'
import styles from './ImageItem.module.css'
import GifPlayer from 'react-gif-player'

type Props = {
  backgroundColor: string,
  item: Object,
  listItemClassName: string,
  onSelect: Function,
  size: number,
}

const ImageItem = ({
  backgroundColor,
  item,
  size,
  listItemClassName,
  onSelect,
}: Props) =>{ 
const [open,setOpen] = useState(false)
  return(
  <button
    data-testid="ImageItemButton"
    type="button"
    className={`${styles.imageButton}${
      listItemClassName ? ` ${listItemClassName}` : ''
    }`}
    style={{
      backgroundColor,
      width: `${size}px`,
      height: `${(item.images.fixed_width_downsampled.height * size) /
        item.images.fixed_width_downsampled.width}px`,
    }}
    onClick = { () => setOpen(!open)}
  >

    <img
      data-testid="ImageItemImage"
      width={item.images.fixed_width_downsampled.width}
      height={item.images.fixed_width_downsampled.height}
      alt={item.title}
      src = {open? item.images.fixed_width_downsampled.url: item.images.downsized_still.url
}
      className={styles.image}
    />
  </button>
)}

export default ImageItem
