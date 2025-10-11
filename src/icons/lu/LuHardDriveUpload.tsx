

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHardDriveUpload = (props: IconProps) => {

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
          <Path  d="m16 6-4-4-4 4" />
          <Path  d="M12 2v8" />
          <Path  d="M6 18h.01" />
          <Path  d="M10 18h.01" />
        </G>
      </Svg>
    );
  }

