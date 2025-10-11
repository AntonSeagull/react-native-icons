

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEyeglass = (props: IconProps) => {

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
          <Path d="M8 4h-2l-3 10" />
          <Path d="M16 4h2l3 10" />
          <Path d="M10 16l4 0" />
          <Path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
          <Path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
        </G>
      </Svg>
    );
  }

