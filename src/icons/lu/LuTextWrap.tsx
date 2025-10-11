

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTextWrap = (props: IconProps) => {

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
          <Path  d="m16 16-3 3 3 3" />
          <Path  d="M3 12h14.5a1 1 0 0 1 0 7H13" />
          <Path  d="M3 19h6" />
          <Path  d="M3 5h18" />
        </G>
      </Svg>
    );
  }

