

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLinkOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  x1="163.29" y1="256" x2="350.71" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36px" />
          <Path  d="M208,352H144a96,96,0,0,1,0-192h64" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36px" />
          <Path  d="M304,160h64a96,96,0,0,1,0,192H304" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36px" />
        </G>
      </Svg>
    );
  }

