

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockUp = (props: IconProps) => {

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
          <Path d="M20.983 12.548a9 9 0 1 0 -8.45 8.436" />
          <Path d="M19 22v-6" />
          <Path d="M22 19l-3 -3l-3 3" />
          <Path d="M12 7v5l2.5 2.5" />
        </G>
      </Svg>
    );
  }

