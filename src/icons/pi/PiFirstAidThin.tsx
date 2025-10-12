

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFirstAidThin = (props: IconProps) => {

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
          <Path  d="M216,92H164V40a12,12,0,0,0-12-12H104A12,12,0,0,0,92,40V92H40a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12H92v52a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V164h52a12,12,0,0,0,12-12V104A12,12,0,0,0,216,92Zm4,60a4,4,0,0,1-4,4H160a4,4,0,0,0-4,4v56a4,4,0,0,1-4,4H104a4,4,0,0,1-4-4V160a4,4,0,0,0-4-4H40a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H96a4,4,0,0,0,4-4V40a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V96a4,4,0,0,0,4,4h56a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

