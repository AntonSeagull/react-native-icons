

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWarningDiamondThin = (props: IconProps) => {

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
          <Path  d="M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm4,28a8,8,0,1,0,8,8A8,8,0,0,0,128,164Zm108-36a11.87,11.87,0,0,1-3.5,8.45l-96.05,96.06a12,12,0,0,1-16.9,0h0l-96-96.06a12,12,0,0,1,0-16.9l96.05-96.06a12,12,0,0,1,16.9,0l96.05,96.06A11.87,11.87,0,0,1,236,128Zm-8,0a3.9,3.9,0,0,0-1.16-2.79L130.79,29.15a4,4,0,0,0-5.58,0l-96,96.06a3.94,3.94,0,0,0,0,5.58l96.05,96.06a4,4,0,0,0,5.58,0l96.05-96.06A3.9,3.9,0,0,0,228,128Z" />
        </G>
      </Svg>
    );
  }

