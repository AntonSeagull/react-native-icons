

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSevenBold = (props: IconProps) => {

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
          <Path  d="M179.49,51.45l-48,160A12,12,0,0,1,120,220a11.82,11.82,0,0,1-3.45-.51,12,12,0,0,1-8-14.94L151.87,60H88a12,12,0,0,1,0-24h80a12,12,0,0,1,11.49,15.45Z" />
        </G>
      </Svg>
    );
  }

