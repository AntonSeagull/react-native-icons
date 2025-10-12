

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFilmReelThin = (props: IconProps) => {

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
          <Path  d="M232,220H167.18A100,100,0,1,0,128,228H232a4,4,0,0,0,0-8ZM36,128a92,92,0,1,1,92,92A92.1,92.1,0,0,1,36,128Zm92-28a20,20,0,1,0-20-20A20,20,0,0,0,128,100Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,128,68Zm20,108a20,20,0,1,0-20,20A20,20,0,0,0,148,176Zm-32,0a12,12,0,1,1,12,12A12,12,0,0,1,116,176Zm60-28a20,20,0,1,0-20-20A20,20,0,0,0,176,148Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,176,116Zm-96-8a20,20,0,1,0,20,20A20,20,0,0,0,80,108Zm0,32a12,12,0,1,1,12-12A12,12,0,0,1,80,140Z" />
        </G>
      </Svg>
    );
  }

