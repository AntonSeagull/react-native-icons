

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockPause = (props: IconProps) => {

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
          <Path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" />
          <Path d="M12 7v5l2 2" />
          <Path d="M17 17v5" />
          <Path d="M21 17v5" />
        </G>
      </Svg>
    );
  }

