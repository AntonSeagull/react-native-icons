

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRewindFill = (props: IconProps) => {

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
          <Path  d="M232,71.84V184.16a15.92,15.92,0,0,1-24.48,13.34L128,146.86v37.3a15.92,15.92,0,0,1-24.48,13.34L15.33,141.34a15.8,15.8,0,0,1,0-26.68L103.52,58.5A15.91,15.91,0,0,1,128,71.84v37.3L207.52,58.5A15.91,15.91,0,0,1,232,71.84Z" />
        </G>
      </Svg>
    );
  }

