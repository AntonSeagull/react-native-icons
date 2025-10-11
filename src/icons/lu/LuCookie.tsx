

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCookie = (props: IconProps) => {

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
          <Path  d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <Path  d="M8.5 8.5v.01" />
          <Path  d="M16 15.5v.01" />
          <Path  d="M12 12v.01" />
          <Path  d="M11 17v.01" />
          <Path  d="M7 14v.01" />
        </G>
      </Svg>
    );
  }

