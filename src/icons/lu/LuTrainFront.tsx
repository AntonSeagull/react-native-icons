

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTrainFront = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
          <Path d="m9 15-1-1" />
          <Path d="m15 15 1-1" />
          <Path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
          <Path d="m8 19-2 3" />
          <Path d="m16 19 2 3" />
        </G>
      </Svg>
    );
  }

