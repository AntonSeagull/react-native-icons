

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockQuestion = (props: IconProps) => {

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
          <Path d="M15 21h-8a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.265 0 .518 .052 .75 .145" />
          <Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          <Path d="M19 22v.01" />
          <Path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
        </G>
      </Svg>
    );
  }

