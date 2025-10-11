

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLeftIndent = (props: IconProps) => {

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
          <Path d="M4 7h10v2H4zm0-4h16v2H4zm0 8h10v2H4zm0 4h10v2H4zm0 4h16v2H4zm16-3V8l-4 4z" />
        </G>
      </Svg>
    );
  }

