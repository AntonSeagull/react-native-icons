

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMediaOverlayAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 2v12h17v-12h-17zM1 10.010v-7.010h15v7.010h-15z" fill="#000000" />
        </G>
      </Svg>
    );
  }

