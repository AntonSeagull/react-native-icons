

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPictureInPictureThin = (props: IconProps) => {

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
          <Path  d="M216,52H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52ZM36,192V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v60H136a4,4,0,0,0-4,4v68H40A4,4,0,0,1,36,192Zm180,4H140V132h80v60A4,4,0,0,1,216,196Z" />
        </G>
      </Svg>
    );
  }

