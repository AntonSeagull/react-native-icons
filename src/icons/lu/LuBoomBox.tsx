

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBoomBox = (props: IconProps) => {

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
          <Path  d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <Path  d="M8 8v1" />
          <Path  d="M12 8v1" />
          <Path  d="M16 8v1" />
        </G>
      </Svg>
    );
  }

