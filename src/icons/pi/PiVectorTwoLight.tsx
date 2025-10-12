

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiVectorTwoLight = (props: IconProps) => {

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
          <Path  d="M228.24,196.24l-32,32a6,6,0,0,1-8.48-8.48L209.51,198H80a6,6,0,0,1-6-6V54.49L52.24,76.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L86,54.49V186H209.51l-21.75-21.76a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,228.24,196.24Z" />
        </G>
      </Svg>
    );
  }

