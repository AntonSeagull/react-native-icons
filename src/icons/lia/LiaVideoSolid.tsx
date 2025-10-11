

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaVideoSolid = (props: IconProps) => {

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
          <Path  d="M 2 8 L 2 24 L 24 24 L 24 20.625 L 30 23.625 L 30 8.375 L 24 11.375 L 24 8 Z M 4 10 L 22 10 L 22 22 L 4 22 Z M 28 11.625 L 28 20.375 L 24 18.375 L 24 13.625 Z" />
        </G>
      </Svg>
    );
  }

