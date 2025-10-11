

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClockArrowUp = (props: IconProps) => {

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
          <Path  d="M12 6v6l1.56.78" />
          <Path  d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
          <Path  d="m14 18 4-4 4 4" />
          <Path  d="M18 22v-8" />
        </G>
      </Svg>
    );
  }

