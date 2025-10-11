

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiCssdesignawards = (props: IconProps) => {

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
          <Path d="m7.46.93-7.46 7.38 3.73 3.73 3.74 3.65 3.73 3.65 3.74-3.65-7.47-7.38 7.47-7.4zm5.33 3.73-3.67 3.65 7.39 7.38-7.46 7.4h7.46l3.76-3.66 3.73-3.73-3.73-3.65-3.74-3.73z" />
        </G>
      </Svg>
    );
  }

