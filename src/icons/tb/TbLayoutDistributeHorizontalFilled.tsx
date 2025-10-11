

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLayoutDistributeHorizontalFilled = (props: IconProps) => {

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
          <Path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" />
          <Path d="M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" />
          <Path d="M16 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
        </G>
      </Svg>
    );
  }

