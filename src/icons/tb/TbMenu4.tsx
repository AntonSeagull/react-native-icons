

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMenu4 = (props: IconProps) => {

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
          <Path d="M7 6h10" />
          <Path d="M4 12h16" />
          <Path d="M7 12h13" />
          <Path d="M7 18h10" />
        </G>
      </Svg>
    );
  }

