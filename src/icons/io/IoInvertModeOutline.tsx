

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoInvertModeOutline = (props: IconProps) => {

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
          <Path d="M256,176V336a80,80,0,0,1,0-160Z" />
          <Path d="M256,48V176a80,80,0,0,1,0,160V464c114.88,0,208-93.12,208-208S370.88,48,256,48Z" />
        </G>
      </Svg>
    );
  }

