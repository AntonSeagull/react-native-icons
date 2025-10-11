

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoAddSharp = (props: IconProps) => {

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
          <Line  x1="256" y1="112" x2="256" y2="400" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="400" y1="256" x2="112" y2="256" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

