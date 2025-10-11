

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutSlider = (props: IconProps) => {

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
          <Path d="M0 1v14h17v-14h-17zM16 14h-15v-12h15v12zM4.646 10.354l-2.353-2.354 2.354-2.354 0.707 0.707-1.647 1.647 1.646 1.646-0.707 0.708zM11.646 9.646l1.647-1.646-1.646-1.646 0.707-0.707 2.353 2.353-2.354 2.354-0.707-0.708z" fill="#000000" />
        </G>
      </Svg>
    );
  }

