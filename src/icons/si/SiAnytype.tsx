

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAnytype = (props: IconProps) => {

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
          <Path  d="M5.333 0h13.334A5.322 5.322 0 0 1 24 5.333v13.334A5.322 5.322 0 0 1 18.667 24H5.333A5.322 5.322 0 0 1 0 18.667V5.333A5.322 5.322 0 0 1 5.333 0Zm10.334 7.667v-3H6.344v3zm0 0v11.666h3V7.667ZM9.5 19.333a4.833 4.833 0 1 0 0-9.666 4.833 4.833 0 0 0 0 9.666z" />
        </G>
      </Svg>
    );
  }

