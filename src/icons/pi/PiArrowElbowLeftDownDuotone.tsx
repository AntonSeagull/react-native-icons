

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftDownDuotone = (props: IconProps) => {

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
          <Path  d="M136,168,88,216,40,168Z" opacity="0.2" />
          <Path  d="M232,64H88a8,8,0,0,0-8,8v88H40a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,136,160H96V80H232a8,8,0,0,0,0-16ZM88,204.69,59.31,176h57.38Z" />
        </G>
      </Svg>
    );
  }

