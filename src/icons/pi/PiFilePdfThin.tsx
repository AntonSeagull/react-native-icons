

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFilePdfThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M220,152a4,4,0,0,1-4,4H188v24h20a4,4,0,0,1,0,8H188v20a4,4,0,0,1-8,0V152a4,4,0,0,1,4-4h32A4,4,0,0,1,220,152ZM88,172a24,24,0,0,1-24,24H52v12a4,4,0,0,1-8,0V152a4,4,0,0,1,4-4H64A24,24,0,0,1,88,172Zm-8,0a16,16,0,0,0-16-16H52v32H64A16,16,0,0,0,80,172Zm80,8a32,32,0,0,1-32,32H112a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h16A32,32,0,0,1,160,180Zm-8,0a24,24,0,0,0-24-24H116v48h12A24,24,0,0,0,152,180ZM44,112V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88v24a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0ZM156,84h42.34L156,41.65Z" />
        </G>
      </Svg>
    );
  }

