

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCapRounded = (props: IconProps) => {

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
          <Path d="M20 6h-9a6 6 0 1 0 0 12h9" />
          <Path d="M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
          <Path d="M13 12h7" />
        </G>
      </Svg>
    );
  }

