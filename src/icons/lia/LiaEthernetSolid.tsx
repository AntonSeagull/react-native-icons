

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaEthernetSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 14 11 L 14 14 L 11 14 L 11 21 L 13 21 L 13 19 L 15 19 L 15 21 L 17 21 L 17 19 L 19 19 L 19 21 L 21 21 L 21 14 L 18 14 L 18 11 Z" />
        </G>
      </Svg>
    );
  }

