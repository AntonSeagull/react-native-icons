

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiSparkar = (props: IconProps) => {

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
          <Path d="M3.199 20.001L20.801 12v8.001L11.999 24l-8.8-3.999zm8.8 3.999zm-.001-24L3.199 3.999V12l17.602-8.001L11.998 0zM3.803 12.275l7.592 3.453 8.803-4.002-7.594-3.45-8.801 3.999z" />
        </G>
      </Svg>
    );
  }

