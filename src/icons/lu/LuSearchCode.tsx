

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSearchCode = (props: IconProps) => {

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
          <Path  d="m13 13.5 2-2.5-2-2.5" />
          <Path  d="m21 21-4.3-4.3" />
          <Path  d="M9 8.5 7 11l2 2.5" />
        </G>
      </Svg>
    );
  }

