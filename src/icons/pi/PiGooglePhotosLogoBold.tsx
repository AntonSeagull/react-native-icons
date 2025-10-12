

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGooglePhotosLogoBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M232,116H198.64A76,76,0,0,0,128,12a12,12,0,0,0-12,12V57.36A76,76,0,0,0,12,128a12,12,0,0,0,12,12H57.36A76,76,0,0,0,128,244a12,12,0,0,0,12-12V198.64A76,76,0,0,0,244,128,12,12,0,0,0,232,116ZM180,88a51.38,51.38,0,0,1-8.18,28H140V37.4A52.09,52.09,0,0,1,180,88ZM88,76a51.38,51.38,0,0,1,28,8.18V116H37.4A52.09,52.09,0,0,1,88,76ZM76,168a51.38,51.38,0,0,1,8.18-28H116v78.6A52.09,52.09,0,0,1,76,168Zm92,12a51.38,51.38,0,0,1-28-8.18V140h78.6A52.09,52.09,0,0,1,168,180Z" />
        </G>
      </Svg>
    );
  }

