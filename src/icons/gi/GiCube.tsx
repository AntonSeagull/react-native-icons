

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiCube = (props: IconProps) => {

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
          <Path d="M256 24.585L51.47 118.989 256 213.394l204.53-94.405zM38.998 133.054v258.353L247 487.415V229.063zm434.004 0L265 229.062v258.353l208.002-96.008z" fill="#000" />
        </G>
      </Svg>
    );
  }

