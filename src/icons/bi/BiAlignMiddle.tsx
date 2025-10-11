

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiAlignMiddle = (props: IconProps) => {

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
          <Path d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z" />
        </G>
      </Svg>
    );
  }

