

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiThreeDLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M98,148a22,22,0,0,0-22-22,6,6,0,0,1-4.92-9.44L92.48,86H56a6,6,0,0,1,0-12h48a6,6,0,0,1,4.92,9.44L86.39,115.62a34,34,0,1,1-34.68,56.17,6,6,0,0,1,8.58-8.39A22,22,0,0,0,98,148Zm62-74a54,54,0,0,1,0,108H136a6,6,0,0,1-6-6V80a6,6,0,0,1,6-6Zm0,12H142v84h18a42,42,0,0,0,0-84ZM32,54H224a6,6,0,0,0,0-12H32a6,6,0,0,0,0,12ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

