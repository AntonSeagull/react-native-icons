

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAArrowUp = (props: IconProps) => {

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
          <Path  d="m14 11 4-4 4 4" />
          <Path  d="M18 16V7" />
          <Path  d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
          <Path  d="M3.304 13h6.392" />
        </G>
      </Svg>
    );
  }

