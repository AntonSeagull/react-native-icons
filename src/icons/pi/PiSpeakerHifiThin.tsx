

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSpeakerHifiThin = (props: IconProps) => {

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
          <Path  d="M192,28H64A12,12,0,0,0,52,40V216a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V40A12,12,0,0,0,192,28Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM120,76a8,8,0,1,1,8,8A8,8,0,0,1,120,76Zm8,40a36,36,0,1,0,36,36A36,36,0,0,0,128,116Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,180Z" />
        </G>
      </Svg>
    );
  }

