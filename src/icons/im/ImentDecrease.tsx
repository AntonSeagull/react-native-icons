

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImentDecrease = (props: IconProps) => {

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
          <Path d="M0 1h16v2h-16zM6 4h10v2h-10zM6 7h10v2h-10zM6 10h10v2h-10zM0 13h16v2h-16zM4 5v6l-4-3z" fill="#000000" />
        </G>
      </Svg>
    );
  }

