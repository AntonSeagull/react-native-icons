

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDrum = (props: IconProps) => {

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
          <Path  d="m2 2 8 8" />
          <Path  d="m22 2-8 8" />
          <Path  d="M7 13.4v7.9" />
          <Path  d="M12 14v8" />
          <Path  d="M17 13.4v7.9" />
          <Path  d="M2 9v8a10 5 0 0 0 20 0V9" />
        </G>
      </Svg>
    );
  }

