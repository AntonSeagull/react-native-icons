

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imly = (props: IconProps) => {

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
          <Path d="M7 12.119v3.881l-6-6 6-6v3.966c6.98 0.164 6.681-4.747 4.904-7.966 4.386 4.741 3.455 12.337-4.904 12.119z" fill="#000000" />
        </G>
      </Svg>
    );
  }

