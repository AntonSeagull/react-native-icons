

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathOff = (props: IconProps) => {

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
          <Path d="M14 19l2.5 -2.5" />
          <Path d="M18.5 14.5l1.5 -1.5" />
          <Path d="M3 3l18 18" />
          <Path d="M19 5h-7l-.646 2.262" />
          <Path d="M10.448 10.431l-2.448 8.569l-3 -6h-2" />
        </G>
      </Svg>
    );
  }

