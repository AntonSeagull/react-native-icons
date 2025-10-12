

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotsThreeOutlineLight = (props: IconProps) => {

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
          <Path  d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146ZM48,98a30,30,0,1,0,30,30A30,30,0,0,0,48,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,48,146ZM208,98a30,30,0,1,0,30,30A30,30,0,0,0,208,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,208,146Z" />
        </G>
      </Svg>
    );
  }

