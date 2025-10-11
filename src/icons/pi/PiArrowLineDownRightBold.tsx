

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineDownRightBold = (props: IconProps) => {

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
          <Path  d="M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM192,92a12,12,0,0,0-12,12v67L88.49,79.51a12,12,0,0,0-17,17L163,188H96a12,12,0,0,0,0,24h96a12,12,0,0,0,12-12V104A12,12,0,0,0,192,92Z" />
        </G>
      </Svg>
    );
  }

