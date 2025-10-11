

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberEightDuotone = (props: IconProps) => {

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
          <Path  d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2" />
          <Path  d="M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z" />
        </G>
      </Svg>
    );
  }

