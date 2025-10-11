

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuIndianRupee = (props: IconProps) => {

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
          <Path  d="M6 3h12" />
          <Path  d="M6 8h12" />
          <Path  d="m6 13 8.5 8" />
          <Path  d="M6 13h3" />
          <Path  d="M9 13c6.667 0 6.667-10 0-10" />
        </G>
      </Svg>
    );
  }

