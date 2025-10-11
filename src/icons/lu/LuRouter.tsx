

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRouter = (props: IconProps) => {

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
          <Path  d="M6.01 18H6" />
          <Path  d="M10.01 18H10" />
          <Path  d="M15 10v4" />
          <Path  d="M17.84 7.17a4 4 0 0 0-5.66 0" />
          <Path  d="M20.66 4.34a8 8 0 0 0-11.31 0" />
        </G>
      </Svg>
    );
  }

