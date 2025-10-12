

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAcornBold = (props: IconProps) => {

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
          <Path  d="M236,104a60.07,60.07,0,0,0-60-60H140.4A20,20,0,0,1,160,28a12,12,0,0,0,0-24,44.06,44.06,0,0,0-43.81,40H80a60.07,60.07,0,0,0-60,60,20,20,0,0,0,8,16v8c0,37.45,34,64.71,61.23,86.61,10.22,8.2,25.63,20.58,26.77,25.56a12,12,0,0,0,24,0c1.14-5,16.55-17.36,26.77-25.56C194.05,192.71,228,165.45,228,128v-8A20,20,0,0,0,236,104ZM80,68h96a36.06,36.06,0,0,1,35.78,32H44.22A36.06,36.06,0,0,1,80,68Zm71.74,127.9c-9.17,7.36-17.46,14-23.74,20.55-6.28-6.53-14.57-13.19-23.74-20.55C81,177.2,52,153.94,52,128v-4H204v4C204,153.94,175,177.2,151.74,195.9Z" />
        </G>
      </Svg>
    );
  }

