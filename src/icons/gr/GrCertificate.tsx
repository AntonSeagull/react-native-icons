

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCertificate = (props: IconProps) => {

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
          <Path d="M15 19H2V1h16v4m0 0a5 5 0 110 10 5 5 0 010-10zm-3 9v8l3-2 3 2v-8M5 8h6m-6 3h5m-5 3h2M5 5h2" />
        </G>
      </Svg>
    );
  }

