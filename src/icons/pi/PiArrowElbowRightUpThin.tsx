

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowRightUpThin = (props: IconProps) => {

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
          <Path d="M218.83,98.83a4,4,0,0,1-5.66,0L172,57.66V192a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H164V57.66L122.83,98.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48A4,4,0,0,1,218.83,98.83Z" />
        </G>
      </Svg>
    );
  }

