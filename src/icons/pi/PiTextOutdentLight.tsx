

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextOutdentLight = (props: IconProps) => {

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
          <Path  d="M222,128a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM112,70H216a6,6,0,0,0,0-12H112a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM72,142a6,6,0,0,0,4.24-10.24L40.49,96,76.24,60.24a6,6,0,0,0-8.48-8.48l-40,40a6,6,0,0,0,0,8.48l40,40A6,6,0,0,0,72,142Z" />
        </G>
      </Svg>
    );
  }

