

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBarLeft = (props: IconProps) => {

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
          <Path d="M4 12l10 0" />
          <Path d="M4 12l4 4" />
          <Path d="M4 12l4 -4" />
          <Path d="M20 4l0 16" />
        </G>
      </Svg>
    );
  }

