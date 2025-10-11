

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMerge = (props: IconProps) => {

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
          <Path  d="m8 6 4-4 4 4" />
          <Path  d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
          <Path  d="m20 22-5-5" />
        </G>
      </Svg>
    );
  }

