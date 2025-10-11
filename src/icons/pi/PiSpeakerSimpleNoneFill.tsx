

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSpeakerSimpleNoneFill = (props: IconProps) => {

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
          <Path d="M163.52,24.81a8,8,0,0,0-8.43.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A7.94,7.94,0,0,0,160,232a8,8,0,0,0,8-8V32A8,8,0,0,0,163.52,24.81Z" />
        </G>
      </Svg>
    );
  }

