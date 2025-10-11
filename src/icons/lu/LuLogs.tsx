

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLogs = (props: IconProps) => {

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
          <Path  d="M3 5h1" />
          <Path  d="M3 12h1" />
          <Path  d="M3 19h1" />
          <Path  d="M8 5h1" />
          <Path  d="M8 12h1" />
          <Path  d="M8 19h1" />
          <Path  d="M13 5h8" />
          <Path  d="M13 12h8" />
          <Path  d="M13 19h8" />
        </G>
      </Svg>
    );
  }

