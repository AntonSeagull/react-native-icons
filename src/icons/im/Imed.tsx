

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imed = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z" fill="#000000" />
          <Path d="M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

