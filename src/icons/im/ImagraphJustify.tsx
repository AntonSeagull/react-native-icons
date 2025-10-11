

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImagraphJustify = (props: IconProps) => {

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
          <Path d="M0 1h16v2h-16zM0 4h16v2h-16zM0 7h16v2h-16zM0 10h16v2h-16zM0 13h16v2h-16z" fill="#000000" />
        </G>
      </Svg>
    );
  }

