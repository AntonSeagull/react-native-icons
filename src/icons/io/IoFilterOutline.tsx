

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFilterOutline = (props: IconProps) => {

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
          <Line  x1="32" y1="144" x2="480" y2="144" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="112" y1="256" x2="400" y2="256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="208" y1="368" x2="304" y2="368" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

