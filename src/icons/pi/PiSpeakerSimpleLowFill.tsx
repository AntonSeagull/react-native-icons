

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSpeakerSimpleLowFill = (props: IconProps) => {

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
          <Path  d="M168,32V224a8,8,0,0,1-12.91,6.31L85.25,176H40a16,16,0,0,1-16-16V96A16,16,0,0,1,40,80H85.25l69.84-54.31A8,8,0,0,1,168,32Zm32,64a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,200,96Z" />
        </G>
      </Svg>
    );
  }

