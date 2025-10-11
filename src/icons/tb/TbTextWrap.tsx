

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextWrap = (props: IconProps) => {

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
          <Path d="M4 6l16 0" />
          <Path d="M4 18l5 0" />
          <Path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" />
        </G>
      </Svg>
    );
  }

