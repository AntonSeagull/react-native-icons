

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAuth2fa = (props: IconProps) => {

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
          <Path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
          <Path d="M10 16v-8h4" />
          <Path d="M10 12l3 0" />
          <Path d="M17 16v-6a2 2 0 0 1 4 0v6" />
          <Path d="M17 13l4 0" />
        </G>
      </Svg>
    );
  }

