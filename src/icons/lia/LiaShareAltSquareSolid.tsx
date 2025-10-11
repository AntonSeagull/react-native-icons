

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaShareAltSquareSolid = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20 10 A 2 2 0 0 0 18.007812 12.15625 L 13.320312 14.5 A 2 2 0 0 0 12 14 A 2 2 0 0 0 12 18 A 2 2 0 0 0 13.320312 17.5 L 18.007812 19.84375 A 2 2 0 0 0 20 22 A 2 2 0 0 0 20 18 A 2 2 0 0 0 18.679688 18.5 L 13.992188 16.15625 A 2 2 0 0 0 13.992188 15.84375 L 18.679688 13.5 A 2 2 0 0 0 20 14 A 2 2 0 0 0 20 10 z" />
        </G>
      </Svg>
    );
  }

