

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineDoorSliding = (props: IconProps) => {

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
          <Path  d="M0,0h24v24H0V0z" fill="none" />
          <Path  d="M10,13H8v-2h2V13z M16,11h-2v2h2V11z M21,19v2H3v-2h1V5c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v14H21z M11,5H6v14h5V5z M18,5 h-5v14h5V5z" />
        </G>
      </Svg>
    );
  }

