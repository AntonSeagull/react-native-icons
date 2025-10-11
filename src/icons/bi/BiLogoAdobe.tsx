

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoAdobe = (props: IconProps) => {

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
          <Path d="M21 19.966V4.034h-6.654zM3 4.034v15.932L9.658 4.034zM9.092 16.76h3.104l1.268 3.205h2.778L12.003 9.904z" />
        </G>
      </Svg>
    );
  }

