

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPercentage = (props: IconProps) => {

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
          <Path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M6 18l12 -12" />
        </G>
      </Svg>
    );
  }

