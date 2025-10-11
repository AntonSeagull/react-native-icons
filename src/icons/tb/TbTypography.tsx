

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTypography = (props: IconProps) => {

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
          <Path d="M4 20l3 0" />
          <Path d="M14 20l7 0" />
          <Path d="M6.9 15l6.9 0" />
          <Path d="M10.2 6.3l5.8 13.7" />
          <Path d="M5 20l6 -16l2 0l7 16" />
        </G>
      </Svg>
    );
  }

