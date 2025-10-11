

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuALargeSmall = (props: IconProps) => {

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
          <Path  d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" />
          <Path  d="M15.697 14h5.606" />
          <Path  d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
          <Path  d="M3.304 13h6.392" />
        </G>
      </Svg>
    );
  }

