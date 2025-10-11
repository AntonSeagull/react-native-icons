

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTrainTrack = (props: IconProps) => {

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
          <Path d="M2 17 17 2" />
          <Path d="m2 14 8 8" />
          <Path d="m5 11 8 8" />
          <Path d="m8 8 8 8" />
          <Path d="m11 5 8 8" />
          <Path d="m14 2 8 8" />
          <Path d="M7 22 22 7" />
        </G>
      </Svg>
    );
  }

