

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveTriangleBold = (props: IconProps) => {

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
          <Path d="M241.73,135l-52,72a12,12,0,0,1-19.46,0L76,76.5,33.73,135A12,12,0,1,1,14.27,121l52-72a12,12,0,0,1,19.46,0L180,179.5,222.27,121A12,12,0,1,1,241.73,135Z" />
        </G>
      </Svg>
    );
  }

