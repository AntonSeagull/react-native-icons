

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiSquareRoot = (props: IconProps) => {

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
          <Path d="M15.382 4H22V6H16.618L9 21.2361L5.38197 14H2V12H6.61803L9 16.7639L15.382 4Z" />
        </G>
      </Svg>
    );
  }

