

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineBrightness3 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 0h24v24H0V0z" fill="none" />
          <Path  d="M12.7 4.91C15.25 6.24 17 8.92 17 12s-1.75 5.76-4.3 7.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
        </G>
      </Svg>
    );
  }

