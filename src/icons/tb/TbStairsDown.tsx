

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStairsDown = (props: IconProps) => {

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
          <Path d="M22 21h-5v-5h-5v-5h-5v-5h-5" />
          <Path d="M18 3v7" />
          <Path d="M15 7l3 3l3 -3" />
        </G>
      </Svg>
    );
  }

