

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgFormatLineHeight = (props: IconProps) => {

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
          <Path d="M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z" fill="currentColor" />
          <Path d="M22.8412 7H8.84119V5H22.8412V7Z" fill="currentColor" />
          <Path d="M22.8412 11H8.84119V9H22.8412V11Z" fill="currentColor" />
          <Path d="M8.84119 15H22.8412V13H8.84119V15Z" fill="currentColor" />
          <Path d="M22.8412 19H8.84119V17H22.8412V19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

