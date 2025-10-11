

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFlaskOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M208,48v93.48a64.09,64.09,0,0,1-9.88,34.18L73.21,373.49C48.4,412.78,76.63,464,123.08,464H388.92c46.45,0,74.68-51.22,49.87-90.51L313.87,175.66A64.09,64.09,0,0,1,304,141.48V48" />
        </G>
      </Svg>
    );
  }

