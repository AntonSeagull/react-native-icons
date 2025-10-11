

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imed2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 20 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z" fill="#000000" />
          <Path d="M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z" fill="#000000" />
          <Path d="M10.958 2.352l1.085 0.296-3 11-1.085-0.296 3-11z" fill="#000000" />
        </G>
      </Svg>
    );
  }

