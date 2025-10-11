

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoAlbumsOutline = (props: IconProps) => {

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
          <Line  x1="144" y1="80" x2="368" y2="80" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="112" y1="128" x2="400" y2="128" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

