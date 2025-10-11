

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbKeyboardShow = (props: IconProps) => {

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
          <Path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
          <Path d="M6 7l0 .01" />
          <Path d="M10 7l0 .01" />
          <Path d="M14 7l0 .01" />
          <Path d="M18 7l0 .01" />
          <Path d="M6 11l0 .01" />
          <Path d="M18 11l0 .01" />
          <Path d="M10 11l4 0" />
          <Path d="M10 19l2 2l2 -2" />
        </G>
      </Svg>
    );
  }

