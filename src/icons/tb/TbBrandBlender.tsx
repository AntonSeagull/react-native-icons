

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandBlender = (props: IconProps) => {

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
          <Path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
          <Path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M3 16l9 -6.5" />
          <Path d="M6 9h9" />
          <Path d="M13 5l5.65 5" />
        </G>
      </Svg>
    );
  }

