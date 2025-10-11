

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoInvertMode = (props: IconProps) => {

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
          <Path d="M256,176V336a80,80,0,0,0,0-160Z" />
          <Path d="M256,48V176a80,80,0,0,0,0,160V464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
        </G>
      </Svg>
    );
  }

