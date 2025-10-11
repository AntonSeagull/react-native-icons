

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlusEqual = (props: IconProps) => {

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
          <Path d="M4 7h6" />
          <Path d="M7 4v6" />
          <Path d="M20 16h-6" />
          <Path d="M20 19h-6" />
          <Path d="M5 19l14 -14" />
        </G>
      </Svg>
    );
  }

