

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiAlignJustify = (props: IconProps) => {

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
          <Path d="M4 7h16v2H4zm0-4h16v2H4zm0 8h16v2H4zm0 4h16v2H4zm2 4h12v2H6z" />
        </G>
      </Svg>
    );
  }

