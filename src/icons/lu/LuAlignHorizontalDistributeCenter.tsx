

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAlignHorizontalDistributeCenter = (props: IconProps) => {

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
          <Path  d="M17 22v-5" />
          <Path  d="M17 7V2" />
          <Path  d="M7 22v-3" />
          <Path  d="M7 5V2" />
        </G>
      </Svg>
    );
  }

