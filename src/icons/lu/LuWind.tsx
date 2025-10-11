

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWind = (props: IconProps) => {

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
          <Path  d="M12.8 19.6A2 2 0 1 0 14 16H2" />
          <Path  d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
          <Path  d="M9.8 4.4A2 2 0 1 1 11 8H2" />
        </G>
      </Svg>
    );
  }

