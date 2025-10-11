

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormUpload = (props: IconProps) => {

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
          <Path d="M6,14.1818182 L6,17.4545455 L18,17.4545455 L18,14.1818182 M12,6 L12,14 M8.18181818,9.81818182 L12,6 L15.8181818,9.81818182" fill="none" />
        </G>
      </Svg>
    );
  }

