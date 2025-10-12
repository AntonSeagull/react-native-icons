

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyJpyBold = (props: IconProps) => {

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
          <Path  d="M209.29,55.6l-56,68.4H176a12,12,0,0,1,0,24H140v16h36a12,12,0,0,1,0,24H140v28a12,12,0,0,1-24,0V188H80a12,12,0,0,1,0-24h36V148H80a12,12,0,0,1,0-24h22.68l-56-68.4A12,12,0,1,1,65.29,40.4L128,117.05,190.71,40.4a12,12,0,1,1,18.58,15.2Z" />
        </G>
      </Svg>
    );
  }

