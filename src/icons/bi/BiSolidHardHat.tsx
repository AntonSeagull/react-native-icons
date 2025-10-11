

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidHardHat = (props: IconProps) => {

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
          <Path d="M20 18v-3a8 8 0 0 0-5-7.4V13h-1V5h-4v8H9V7.6A8 8 0 0 0 4 15v3H2v2h20v-2z" />
        </G>
      </Svg>
    );
  }

