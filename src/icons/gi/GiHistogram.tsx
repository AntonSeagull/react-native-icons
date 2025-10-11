

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHistogram = (props: IconProps) => {

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
          <Path d="M23 23v466h466v-18h-40.893V256h-48v215h-31.675V159.33h-48V471h-31.227V320.242h-48V471H207.2V80.418h-48V471H128V192H80v279H41V23H23z" fill="#000" />
        </G>
      </Svg>
    );
  }

