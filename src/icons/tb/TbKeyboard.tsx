

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbKeyboard = (props: IconProps) => {

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
          <Path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
          <Path d="M6 10l0 .01" />
          <Path d="M10 10l0 .01" />
          <Path d="M14 10l0 .01" />
          <Path d="M18 10l0 .01" />
          <Path d="M6 14l0 .01" />
          <Path d="M18 14l0 .01" />
          <Path d="M10 14l4 .01" />
        </G>
      </Svg>
    );
  }

