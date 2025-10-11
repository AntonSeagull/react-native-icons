

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentVideo = (props: IconProps) => {

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
          <Path d="M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L22.9999998,23 L4,23 M18,1 L18,6 L23,6 M3,10 L12,10 L12,19 L3,19 L3,10 Z M12,13 L17,10.5 L17,18.5 L12,16 L12,13 Z" fill="none" />
        </G>
      </Svg>
    );
  }

