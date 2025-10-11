

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSushi = (props: IconProps) => {

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
          <Path  d="M12 2C7.51 2 4 4.2 4 7v10c0 2.8 3.51 5 8 5s8-2.2 8-5V7c0-2.8-3.51-5-8-5zm0 18c-3.54 0-6-1.58-6-3v-6.67A10.52 10.52 0 0 0 12 12a10.52 10.52 0 0 0 6-1.67V17c0 1.42-2.46 3-6 3zm0-10c-3.54 0-6-1.58-6-3s2.46-3 6-3 6 1.58 6 3-2.46 3-6 3z" />
        </G>
      </Svg>
    );
  }

