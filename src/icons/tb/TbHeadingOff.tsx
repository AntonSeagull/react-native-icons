

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHeadingOff = (props: IconProps) => {

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
          <Path  d="M7 12h5m4 0h1" />
          <Path  d="M7 7v12" />
          <Path  d="M17 5v8m0 4v2" />
          <Path  d="M15 19h4" />
          <Path  d="M15 5h4" />
          <Path  d="M5 19h4" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

