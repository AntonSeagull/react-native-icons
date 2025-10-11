

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineSpeakerNotesOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 0h24v24H0V0z" fill="none" />
          <Path  d="M20 4v12h-1.34l1.91 1.91C21.39 17.66 22 16.9 22 16V4c0-1.1-.9-2-2-2H4.66l2 2H20zM6 12h2v2H6zm12-3h-6.34l2 2H18zm0-3h-8v1.34l.66.66H18zM1.41 1.59L0 3l2.01 2.01L2 22l4-4h9l5.73 5.73 1.41-1.41L1.41 1.59zM5.17 16L4 17.17V7l2 2v2h2l5 5H5.17z" />
        </G>
      </Svg>
    );
  }

