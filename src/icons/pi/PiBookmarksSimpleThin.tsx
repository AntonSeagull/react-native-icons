

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBookmarksSimpleThin = (props: IconProps) => {

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
          <Path  d="M160,60H64A12,12,0,0,0,52,72V224a4,4,0,0,0,6.33,3.25L112,188.92l53.69,38.33A3.94,3.94,0,0,0,168,228a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,172,224V72A12,12,0,0,0,160,60Zm4,156.23-49.68-35.49a4,4,0,0,0-4.65,0L60,216.23V72a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM204,40V192a4,4,0,0,1-8,0V40a4,4,0,0,0-4-4H88a4,4,0,0,1,0-8H192A12,12,0,0,1,204,40Z" />
        </G>
      </Svg>
    );
  }

