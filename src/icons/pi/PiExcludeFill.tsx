

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiExcludeFill = (props: IconProps) => {

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
          <Path  d="M240,160A80,80,0,0,1,81.36,174.64a80,80,0,0,0,93.28-93.28A80,80,0,0,1,240,160ZM160,80a80.29,80.29,0,0,1,14.64,1.36,80,80,0,1,0-93.28,93.28A80,80,0,0,1,160,80Z" />
        </G>
      </Svg>
    );
  }

