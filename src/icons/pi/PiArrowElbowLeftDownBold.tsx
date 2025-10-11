

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftDownBold = (props: IconProps) => {

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
          <Path d="M244,72a12,12,0,0,1-12,12H100V187l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L76,187V72A12,12,0,0,1,88,60H232A12,12,0,0,1,244,72Z" />
        </G>
      </Svg>
    );
  }

