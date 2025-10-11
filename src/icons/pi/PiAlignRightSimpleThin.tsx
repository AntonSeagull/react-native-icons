

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignRightSimpleThin = (props: IconProps) => {

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
          <Path  d="M228,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM196,96v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V96A12,12,0,0,1,32,84H184A12,12,0,0,1,196,96Zm-8,0a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

