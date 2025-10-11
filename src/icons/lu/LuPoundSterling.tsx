

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPoundSterling = (props: IconProps) => {

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
          <Path  d="M18 7c0-5.333-8-5.333-8 0" />
          <Path  d="M10 7v14" />
          <Path  d="M6 21h12" />
          <Path  d="M6 13h10" />
        </G>
      </Svg>
    );
  }

