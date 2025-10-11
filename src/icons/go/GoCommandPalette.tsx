

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoCommandPalette = (props: IconProps) => {

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
          <Path  d="M3.045 18.894 9.94 12 3.045 5.106a.75.75 0 0 1 1.06-1.061l7.425 7.425a.75.75 0 0 1 0 1.06l-7.424 7.425a.75.75 0 0 1-1.061-1.06Zm8.205.606a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z" />
        </G>
      </Svg>
    );
  }

