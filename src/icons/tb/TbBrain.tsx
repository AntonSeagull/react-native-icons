

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrain = (props: IconProps) => {

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
          <Path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
          <Path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
          <Path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
          <Path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
          <Path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
          <Path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
        </G>
      </Svg>
    );
  }

