

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFerrisWheel = (props: IconProps) => {

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
          <Path d="M12 2v4" />
          <Path d="m6.8 15-3.5 2" />
          <Path d="m20.7 7-3.5 2" />
          <Path d="M6.8 9 3.3 7" />
          <Path d="m20.7 17-3.5-2" />
          <Path d="m9 22 3-8 3 8" />
          <Path d="M8 22h8" />
          <Path d="M18 18.7a9 9 0 1 0-12 0" />
        </G>
      </Svg>
    );
  }

